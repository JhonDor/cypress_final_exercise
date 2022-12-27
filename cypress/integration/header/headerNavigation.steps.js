import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Header from "../../support/pages/components/header";
import HomePage from "../../support/pages/homepage";
import CartPage from "../../support/pages/cart";
import ContactModal from "../../support/pages/components/contactModal";
import AboutUsModal from "../../support/pages/components/aboutUsModal";
import LogInModal from "../../support/pages/components/logInModal";
import SignUpModal from "../../support/pages/components/signUpModal";
const homepage = new HomePage();
const header = new Header();
const cartPage = new CartPage();
const contactModal = new ContactModal();
const aboutUsModal = new AboutUsModal();
const logInModal = new LogInModal();
const signUpModal = new SignUpModal();

Given("I visit the Homepage", () => {
  cy.visit("/");
});

Given("I visit the Cart page", () => {
    cy.visit("/cart.html");
  });
  
  
  When("I click in the Home link", () => {
    header.clickHomeLink();
    
  });
  
  Then("I should be in the Homepage", () => {
    homepage.carousel().should("be.visible");
  });

  When("I click in the Cart link", () => {
    header.clickCartLink();
    
  });

  Then("I should be in the Cart page", () => {
    cartPage.productsTable().should("be.visible");
  });

  When("I click in the Contact link", () => {
    header.clickContactLink();
    
  });

  Then("the Contact modal should be displayed", () => {
    contactModal.modalTitle().should("be.visible");
  });

  When("I click in the About us link", () => {
    header.clickAboutUsLink();
    
  });

  Then("the About us modal should be displayed", () => {
    aboutUsModal.modalTitle().should("be.visible");
  });

  When("I click in the log in link", () => {
    header.clickLogInLink();
    
  });

  Then("the Log in modal should be displayed", () => {
    logInModal.modalTitle().should("be.visible");
  });

  When("I click in the Sign up link", () => {
    header.clickSignUpLink();
    
  });

  Then("the Sign up modal should be displayed", () => {
    signUpModal.modalTitle().should("be.visible");
  });