Feature: Verify the header navigation is working
    As a user
    I want verify the header navigation is working

    Scenario: verify the cart link is working
        Given I visit the Homepage
        When I click in the Cart link
        Then I should be in the Cart page

    Scenario: verify the Home link is working
        Given I visit the Cart page
        When I click in the Home link
        Then I should be in the Homepage

    Scenario: verify the Contact link is working
        Given I visit the Cart page
        When I click in the Contact link
        Then the Contact modal should be displayed

    Scenario: verify the About us link is working
        Given I visit the Homepage
        When I click in the About us link
        Then the About us modal should be displayed

    Scenario: verify the Log in link is working
        Given I visit the Homepage
        When I click in the log in link
        Then the Log in modal should be displayed

        Scenario: verify the Sign up link is working
        Given I visit the Homepage
        When I click in the Sign up link
        Then the Sign up modal should be displayed

