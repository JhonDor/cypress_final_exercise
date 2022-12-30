import { Given, When } from "cypress-cucumber-preprocessor/steps";
import Header from "../../support/pages/components/header";

Given("I visit the Homepage of demoblaze.com", () => {
    cy.visit("/");
  });

When("I click in the Cart link", () => {
    Header.clickCartLink();
    
  });