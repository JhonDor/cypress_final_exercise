import {When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pages/homePage";


Then("the carousel should be displayed", () => {
  HomePage.carousel().should("be.visible");
});

When("I click the right arrow in the carrousel", () => {
  HomePage.clickCarouselRightArrow();
});

Then("The next image should be displayed", () => {
  HomePage.carouselImage().eq(1).should("have.class", "active");
});

When("I click the left arrow in the carrousel", () => {
  HomePage.clickCarouselLeftArrow();
});

Then("The previous image should be displayed", () => {
  HomePage.carouselImage().eq(2).should("have.class", "active");
});

When("I click on the first indicator on the bottom of the image when the first image is not visible", () => {
  HomePage.clickCarouselLeftArrow();
  HomePage.clickOnIndicator(0);
});

Then("the first image should be displayed", () => {
  HomePage.carouselImage().eq(0).should("have.class", "active");
});

When("I click on the second indicator on the bottom of the image", () => {
  HomePage.clickOnIndicator(1);
});
Then("the second image should be displayed", () => {
  HomePage.carouselImage().eq(1).should("have.class", "active");
});
When("I click on the third indicator on the bottom of the image", () => {
  HomePage.clickOnIndicator(2);
});
Then("the third image should be displayed", () => {
  HomePage.carouselImage().eq(2).should("have.class", "active");
});