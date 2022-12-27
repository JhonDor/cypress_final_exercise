import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pages/homepage";
const homepage = new HomePage();

Given("I visit the homepage", () => {
  cy.visit("/");
});

Then("the carousel should be displayed", () => {
    homepage.carousel().should("be.visible");
  });

When("I click the right arrow", () => {
  homepage.clickcarouselRightArrow();
  //cy.wait(3000)
});

Then("The next image should be displayed", () => {
  //homepage.carousel().invoke('index').should('eq', 1);
  //homepage.carouselImage(1).should('have.class', 'active');
  homepage.carouselImage().eq(1).should("have.class", "active");
});

When("I click the left arrow", () => {
  homepage.clickcarouselLeftArrow();
  
});

Then("The previous image should be displayed", () => {
  homepage.carouselImage().eq(2).should("have.class", "active");
});

When("I click the third indicator on the bottom of the image", () => {
    homepage.clickcOnIndicator(2);
    
  });
  Then("the third image should be displayed", () => {
    homepage.carouselImage().eq(2).should("have.class", "active");
  });