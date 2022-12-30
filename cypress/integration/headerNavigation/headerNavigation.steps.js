import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Header from "../../support/pages/components/header";
import HomePage from "../../support/pages/homePage";
import CartPage from "../../support/pages/cartPage";
import ContactModal from "../../support/pages/components/contactModal";
import AboutUsModal from "../../support/pages/components/aboutUsModal";
import LogInModal from "../../support/pages/components/logInModal";
import SignUpModal from "../../support/pages/components/signUpModal";


Given("I visit the Cart page", () => {
    cy.visit("/cart.html");
  });
  
  
When("I click in the Home link", () => {
    Header.clickHomeLink();
    
  });
  
  Then("I should be in the Homepage", () => {
    HomePage.carousel().should("be.visible");
  });

  

  Then("I should be in the Cart page", () => {
    CartPage.productsTable().should("be.visible");
  });

  When("I click in the Contact link", () => {
    Header.clickContactLink();
    
  });

  Then("the Contact modal should be displayed", () => {
    ContactModal.modalTitle().should("be.visible");
  });

  When("I click in the About us link", () => {
    Header.clickAboutUsLink();
    
  });

  Then("the About us modal should be displayed", () => {
    AboutUsModal.modalTitle().should("be.visible");
  });

  When("I click in the log in link", () => {
    Header.clickLogInLink();
    
  });

  Then("the Log in modal should be displayed", () => {
    LogInModal.modalTitle().should("be.visible");
  });

  When("I click in the Sign up link", () => {
    Header.clickSignUpLink();
    
  });

  Then("the Sign up modal should be displayed", () => {
    SignUpModal.modalTitle().should("be.visible");
  });

 