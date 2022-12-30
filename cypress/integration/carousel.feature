@carousel
Feature: Verify the carousel is working

    As a user
    I want verify the carousel is working correctly

    Background:
        Given I visit the Homepage of demoblaze.com

@regression @sanity @carousel 
    Scenario: Verify the right arrow in the carrousel is working
        When I click the right arrow in the carrousel
        Then The next image should be displayed

@regression @sanity @carousel
    Scenario: Verify the left arrow is working
        When I click the left arrow in the carrousel
        Then The previous image should be displayed

@regression @sanity @carousel
    Scenario: verify the first indicator is working
        When I click on the first indicator on the bottom of the image when the first image is not visible
        Then the first image should be displayed

@regression @sanity @carousel
    Scenario: verify the second indicator is working
        When I click on the second indicator on the bottom of the image
        Then the second image should be displayed
        
@regression @sanity @carousel
    Scenario: verify the third indicator is working
        When I click on the third indicator on the bottom of the image
        Then the third image should be displayed



