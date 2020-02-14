var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "http://localhost:8001";
//var baseUrl = "http://ec2-18-233-160-226.compute-1.amazonaws.com:8001";
var util = require("util");

describe('Count of Size XL',function(){
  it('Count of Size XL', function(done){
    this.timeout(500);
    setTimeout(done,300);
    request.get({url: baseUrl + '/api/products/'},
      function(error, response, body){
        expect(response.statusCode).to.equal(200);
        var json_body=JSON.parse(body);
//        console.log(json_body.products);
        var size_count=0;
        for (var each_ele in json_body.products){
          //console.log(json_body.products[each_ele].availableSizes)
          for(var each_av in json_body.products[each_ele].availableSizes){
              //console.log(json_body.products[each_ele].availableSizes[each_av]);
              if(json_body.products[each_ele].availableSizes[each_av]=='XL'){
                 size_count=size_count+1;
              }
          }
        }
        expect(size_count).to.equal(11);
       // console.log(body);
       done();
       });
  });
});

describe('Prize should be greater than 0',function(){
  it('Prize should be greater than 0', function(done){
    this.timeout(500);
    setTimeout(done,300);
    request.get({url: baseUrl + '/api/products/'},
      function(error, response, body){
        expect(response.statusCode).to.equal(200);
        var json_body=JSON.parse(body);
//        console.log(json_body.products);
        var count_price=0;
        for (var each_ele in json_body.products){


              //console.log(json_body.products[each_ele].availableSizes[each_av]);
              if(json_body.products[each_ele].price > 0){
                 count_price=count_price+1;
              }

        }
//        console.log(count_price);
        expect(count_price).to.equal(17);
       // console.log(body);
       done();
       });
  });
});

describe('Currency ID should be USD',function(){
  it('Currency ID should be USD', function(done){
    this.timeout(500);
    setTimeout(done,300);
    request.get({url: baseUrl + '/api/products/'},
      function(error, response, body){
        expect(response.statusCode).to.equal(200);
        var json_body=JSON.parse(body);
//        console.log(json_body.products);
        var count_curr=0;
        for (var each_ele in json_body.products){
              //console.log(json_body.products[each_ele].availableSizes[each_av]);
              if(json_body.products[each_ele].currencyId == "USD"){
                 count_curr=count_curr+1;
              }

        }
//        console.log(count_curr);
        expect(count_curr).to.equal(17);
       // console.log(body);
       done();
       });
  });
});



