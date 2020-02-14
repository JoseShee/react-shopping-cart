import { Selector } from 'testcafe';

fixture `ShoppingCart`
    .page `localhost:3000`;

//Add Product to Cart
test('AddRemoveProduct', async t => {
    await t
        .expect(Selector('.bag__quantity').innerText).eql("0")
        //Adding Products to Cart
        .click(Selector('.shelf-item__thumb').find('[alt="Cat Tee Black T-Shirt"]'))
        .click(Selector('[alt="Sphynx Tie Dye Wine T-Shirt"]'))
        .click(Selector('[alt="Dark Thug Blue-Navy T-Shirt"]'))

        //Items added successfully
        .expect(Selector('.bag__quantity').count).gt(0)
        .click(Selector('.float-cart__close-btn'))

        //Remove Items from Cart
        .click(Selector('.bag.bag--float-cart-closed'))
        .click(Selector('div').withText('Dark Thug Blue-Navy T-Shirt').nth(6).find('.shelf-item__del'))
        .click(Selector('div').withText('Sphynx Tie Dye Wine T-Shirt').nth(6).find('.shelf-item__del'))
        .click(Selector('.shelf-item__del'))

        //Items Removed successfully
        .expect(Selector('.bag__quantity').innerText).eql("0")
        .click(Selector('.bag'))
        .click(Selector('.float-cart__close-btn'))
});

//Sort Highest to Lowest Price
test('SortHighToLow', async t => {
    await t
        .click(Selector('.sort').find('select'))
        .click(Selector('option').withText('Highest to lowest'));
});

//Sort Lowest to Highest Price
test('SortLowToHigh', async t => {
    await t
        .click(Selector('.sort').find('select'))
        .click(Selector('option').withText('Lowest to highest'));
});

//Filter By Size -S
test('FilterBySize', async t => {
    await t
        .click(Selector('span').withText('16 Product(s) found.'))
        .click(Selector('.filters-available-size').nth(1).find('span').withText('S'))
        .click(Selector('span').withText('2 Product(s) found.'))
        .expect(Selector('span').innerText).notEql("2");
});
