@products
Feature: Verify selection is working
    As a user
    I want verify the categories Selection, product Selection, Adding product to cart, Buying cart and
    removing a prodcut from the cart

    Background:
        Given I visit the Homepage
        
@regression @smoke @products
    Scenario: verify the phones category selection is working
        When I click the Phones category
        Then All the phones should be displayed

@regression @smoke @products
    Scenario: verify the laptops category selection is working
        When I click the Laptops category
        Then All the laptops should be displayed

@regression @smoke @products
    Scenario: verify the monitors category selection is working
        When I click the Monitors category
        Then All the monitors should be displayed

@regression @smoke @products @addProduct
    Scenario: verify the correct addition of products to cart
        Given I add a product to my cart
        When I go to the cart page
        Then the product should be in my cart

@regression @smoke @products @addProduct
    Scenario: I want to buy the products in my cart
        Given I add a product to my cart
        And I am in the cart page
        When I click the Place Order button
        Then I should be able to purchase the products in my cart

    @regression @smoke @products @deleteproducts
    Scenario: Deleting product from the my cart
        Given I add a product to my cart
        And I am in the cart page
        When I click on Delete button
        Then The product should be removed from my shopping cart


