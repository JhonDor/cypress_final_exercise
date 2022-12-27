Feature: Verify the carousel is working

    As a user
    I want verify the carousel is working

    Scenario: verify the carousel is displayed
        Given I visit the homepage
        Then the carousel should be displayed

    Scenario: Verify the right arrow is working
        Given I visit the homepage
        When I click the right arrow
        Then The next image should be displayed

    Scenario: Verify the left arrow is working
        Given I visit the homepage
        When I click the left arrow
        Then The previous image should be displayed

    Scenario: verify the indicators are working
        Given I visit the homepage
        When I click the third indicator on the bottom of the image
        Then the third image should be displayed

