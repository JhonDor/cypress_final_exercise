Feature: Verify selection is working
    As a user
    I want verify the categories Selection, product Selection, Adding product to cart, Buying cart,
    Removing element from cart

    Background:
        Given I visit the Homepage

    Scenario: verify the correct adition of products to cart
        
        Given I add a product to my cart
        When I go to the cart page
        Then the product should be in my cart

