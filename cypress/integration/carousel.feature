Feature: Verify the carousel is working

    As a user
    I want verify the carousel is working correctly

    Background:
        Given I visit the Homepage

    Scenario: Verify the right arrow in the carrousel is working
        When I click the right arrow in the carrousel
        Then The next image should be displayed

    Scenario: Verify the left arrow is working
        When I click the left arrow in the carrousel
        Then The previous image should be displayed

    Scenario: verify the indicators are working
        When I click the third indicator on the bottom of the image
        Then the third image should be displayed

