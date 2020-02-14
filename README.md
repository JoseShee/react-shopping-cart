## 🛍️ Simple ecommerce cart application [![CircleCI](https://circleci.com/gh/jeffersonRibeiro/react-shopping-cart.svg?style=svg)](https://circleci.com/gh/jeffersonRibeiro/react-shopping-cart)
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)

<p align="center">

  <img src="./doc/react-shopping-cart-min.gif">
</p>

## Basic Overview - [Live Demo](https://react-shopping-cart-67954.firebaseapp.com/)

This simple shopping cart prototype shows how React components and Redux can be used to build a
friendly user experience with instant visual updates and scaleable code in ecommerce applications.

#### Features

- Add and remove products from the floating cart
- Sort products by highest to lowest and lowest to highest price
- Filter products by available sizes
- Products persist in floating cart after page reloads
- Unit tests, integration tests and e2e testing
- Responsive design

## Getting started

Try playing with the code on CodeSandbox :)

[![Edit app](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/74rykw70qq)

## Build/Run

#### Requirements

- Node.js
- NPM

```javascript

/* First, Install the needed packages */
npm install

/* Then start both Node and React */
npm start

/* To run the tests */
npm run test

/* Running e2e tests */
npm run wdio


```

## About tests

- Unit tests
  - All components have at least a basic smoke test
- Integration tests
  - Fetch product and add to cart properly
- e2e
  - Webdriverio - Add and remove product from cart

### Copyright and license

The MIT License (MIT). Please see License File for more information.

<br/>
<br/>

<p align="center"><img src="http://www.jeffersonribeiro.com/assets/img/apple-icon-180x180.png" width="35" height="35"/></p>
<p align="center">
<sub>A little project by <a href="http://www.jeffersonribeiro.com/">Jefferson Ribeiro</a></sub>
</p>

## Contributors
This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

################# Start the application ###########################
1. Start application locally
   npm install
   npm start

   localhost:3000 (for UI)
   localhost:8001/api/products (for API)

2. In case to execute with AWS EC2 (LINUX):
    Register and Login to aws console: https://console.aws.amazon.com/
    Create IAM USer (Services -> IAM)
    Create Role and attach the permission for AmazonEC2FullAccess
    Create Ec2 Instance (Services -> EC2 -> Launch Instance -> Create key pair )

    Connect EC2 (Linux) instance through putty:
    Use putty gen to generate the public key .ppk using the .pem file which was created during EC2 instance creation
    Open putty and in SSH section add the .ppk file and
    Host name as: ec2-user@<DNS name of the EC2 instance>

    You will get a prompt for ssh key authorisation for the first time, click on Yes and confirm, your instance will be launched

    Install node in EC2 instance:
    https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html

    Install git for EC2 instance for Linux:
    sudo yum install git -y
    git version

    Clone the project in specific location:
    git clone https://github.com/jeffersonRibeiro/react-shopping-cart.git

    Inside the project folder, run the command to start the application:
    npm install
    npm start

3. In case to execute with AWS Windows machine (EC2):
   Follow same steps and for connection we use RDC instead of putty
   Services -> EC2 -> click on the machine -> click on Connect -> You will find the Username and Generate Password button
   Click on Generate password button -> Add the pem file which we got while creating EC2 instance -> Click on Decrypt
   Log into RDC with username and password

   Download node: https://nodejs.org/en/download/
   Download project from GIT or from S3 bucket

   Go to powershell, in project folder run the command, to start the application
   npm install
   npm start

   The application will be running within the EC2 instance, through DNS name:
   Example:
   ec2-3-92-160-182.compute-1.amazonaws.com:8001/api/products

################# UI Automated Testcase - Test Cafe ###########################

   mkdir testCafeTesting

   Using Test Cafe editor, we can record the steps, add the assertions and execute and verify the testcase
      Then you can export the testcase to javascript and add under the testCafeTesting folder

   > npm install -g testcafe
   > testcafe firefox ShoppingCartTC.js

################# API Automated test - Mocha ###################################

    mkdir mochaApiTesting
    > npm init (to create package.json)
    > npm install -D mocha
    > npm install -D chai
    > npm install -D should
    > npm install -D request

    These dependecies will now be imported in package.json file

    Create test.js and write the testcase and assertion
    now execute the testcase: npm run test

################# Instanbul Test coverage - Mocha ##################################

    > npm install --save-dev nyc
    > npm test

################# Stryker Mutation testing ########################################

    > npm i -g stryker-cli
    > stryker init
    > stryker run

################# LightHouse CI - Performance Test ##################################

    > npm install -g lighthouse

################# Artillery - Load Testing ##################################

    > npm install -g artillery
    mkdir ArtilleryTesting
    create test.yaml

    > artillery run test.yaml


