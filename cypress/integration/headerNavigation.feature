@headerNavigation
Feature: Verify the header navigation is working
    As a user
    I want verify all the links in the header are workin

    Background:
        Given I visit the Homepage

@regression @smoke @headerNavigation
    Scenario: verify the cart link is working
        When I click in the Cart link
        Then I should be in the Cart page

@regression @smoke @headerNavigation
    Scenario: verify the Home link is working
        Given I visit the Cart page
        When I click in the Home link
        Then I should be in the Homepage

@regression @smoke @headerNavigation
    Scenario: verify the Contact link is working
        When I click in the Contact link
        Then the Contact modal should be displayed

@regression @sanity @headerNavigation
    Scenario: verify the About us link is working
        When I click in the About us link
        Then the About us modal should be displayed

@regression @smoke @headerNavigation
    Scenario: verify the Log in link is working
        When I click in the log in link
        Then the Log in modal should be displayed

@regression @smoke @headerNavigation
    Scenario: verify the Sign up link is working
        When I click in the Sign up link
        Then the Sign up modal should be displayed

