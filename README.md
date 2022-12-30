# demoblaze.com Automation

## Description

This is a framework created from scratch using cypress (9.7.0), cucumber, and allure reporter, to test the web page: https://www.demoblaze.com/. The framework  includes test cases for the following functionalities:

1. Test the featured items Carousel.
2. Test the navigation to all header links. 
3. Test the categories Selection, product selection, adding product to cart, buying cart and removing product from cart. 

## Prerequisites
[Node.js](https://nodejs.org/en/) is needed for running the project. the latest LTS version is recommended.


## Setup
1. Download or clone the  project.
2. Run the command ```npm install```.
3. Run the project. The ```package.json``` has the following script to run the project:

    3.1. ```npm run open```: Runs the project by using [Cypress](https://www.cypress.io/) interface.

    3.2. ```npm run headless```: Runs the project in a headless mode (no browser will be opened and the results will be shown in the console).

    3.3 ```npm run allure```: Runs the project in a headless mode by using [Allure Framework](https://docs.qameta.io/allure/) as the reporter.

    3.4. ```npm run allure:results```: Open the Allure reports generated in the command 3.3.

    3.5. ```npm run regression```: Runs the project in a headless mode and executes all the test related to regression testing.

    3.6. ```npm run smoke```: Runs the project in a headless mode and executes all the test related to smoke testing.

    3.7. ```npm run sanity```: Runs the project in a headless mode and executes all the test related to sanity testing.
