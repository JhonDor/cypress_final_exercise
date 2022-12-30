import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pages/homePage";


Given("I visit the Homepage", () => {
  cy.visit("/");
});

Then("the carousel should be displayed", () => {
  HomePage.carousel().should("be.visible");
});

When("I click the right arrow in the carrousel", () => {
  HomePage.clickcarouselRightArrow();
});

Then("The next image should be displayed", () => {
  HomePage.carouselImage().eq(1).should("have.class", "active");
});

When("I click the left arrow in the carrousel", () => {
  HomePage.clickcarouselLeftArrow();
});

Then("The previous image should be displayed", () => {
  HomePage.carouselImage().eq(2).should("have.class", "active");
});

When("I click on the first indicator on the bottom of the image when the first image is not visible", () => {
  HomePage.clickcarouselLeftArrow();
  HomePage.clickcOnIndicator(0);
});

Then("the first image should be displayed", () => {
  HomePage.carouselImage().eq(0).should("have.class", "active");
});

When("I click on the second indicator on the bottom of the image", () => {
  HomePage.clickcOnIndicator(1);
});
Then("the second image should be displayed", () => {
  HomePage.carouselImage().eq(1).should("have.class", "active");
});
When("I click on the third indicator on the bottom of the image", () => {
  HomePage.clickcOnIndicator(2);
});
Then("the third image should be displayed", () => {
  HomePage.carouselImage().eq(2).should("have.class", "active");
});