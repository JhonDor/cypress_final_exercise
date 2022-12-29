/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Header from "../../support/pages/components/header";
import HomePage from "../../support/pages/homePage";
import ProductPage from "../../support/pages/productPage";
import CartPage from "../../support/pages/cartPage";



Given("I visit the Homepage", () => {
  cy.visit("/");
});

When("I click the Phones category", () => {
  cy.intercept("POST", "/bycat")
    .as("categoriesResponse")
    .then(() => {
      HomePage.categoryByIndex(0).click();
    });
});

When("I click the Laptops category", () => {
  cy.intercept("POST", "/bycat")
    .as("categoriesResponse")
    .then(() => {
      HomePage.categoryByIndex(1).click();
    });
});

When("I click the Monitors category", () => {
  cy.intercept("POST", "/bycat")
    .as("categoriesResponse")
    .then(() => {
      HomePage.categoryByIndex(2).click();
    });
});

Then("All the phones should be displayed", () => {
  cy.wait("@categoriesResponse", { timeout: 10000 })
    .its("response")
    .should((res) => {
      expect(res.statusCode).to.equal(200);
    })
    .its("body.Items")
    .each((value) => {
      expect(value).to.include({ cat: "phone" });
    });
});

Then("All the laptops should be displayed", () => {
  cy.wait("@categoriesResponse", { timeout: 10000 })
    .its("response")
    .should((res) => {
      expect(res.statusCode).to.equal(200);
    })
    .its("body.Items")
    .each((value) => {
      expect(value).to.include({ cat: "notebook" });
    });
});

Then("All the monitors should be displayed", () => {
  cy.wait("@categoriesResponse", { timeout: 10000 })
    .its("response")
    .should((res) => {
      expect(res.statusCode).to.equal(200);
    })
    .its("body.Items")
    .each((value) => {
      expect(value).to.include({ cat: "monitor" });
    });
});
When("I click on the first product", () => {
  HomePage.firstProduct().scrollIntoView();
  HomePage.clickcOnFirstProduct();
});

Then("the product page should be visible", () => {
  ProductPage.productName().should("be.visible", { timeout: 10000 });
  ProductPage.productPrice().should("be.visible");
});

Given("I scroll to the bottom of the Homepage", () => {
  HomePage.scrollToProducts();
});

Given("I click on the first product", () => {
  HomePage.clickcOnFirstProduct();
});

When("I click on the Add to cart button", () => {
  ProductPage.clickAddToCartButton();
});

Then(
  "the alert confirming the product was added to the cart should be visible",
  () => {
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Product added");
    });
  }
);


Given("I add a product to my cart", () => {
  HomePage.clickcOnFirstProduct();
  ProductPage.addToCartButton().click();
 
});

When("I go to the cart page", () => {
  Header.clickCartLink();
});

Then("the product should be in my cart", () => {
  CartPage.getProductsOnCart().its("length").should("eq", 1);
});

And('I am in the cart page', () => {
  Header.clickCartLink();
});

And('I have a product in my shopping cart', () => {
  CartPage.addProductToCart();
});

When('I click on Delete button', () => {
  
CartPage.clickOnDeleteButton();
cy.intercept("POST", "https://api.demoblaze.com/deleteitem")
.as("delete")
})
  


Then('The product should be removed from my shopping cart', () => {
  cy.wait("@delete")
    .then(() => {
      CartPage.getProductsOnCart().should("not.exist");
    });
})

When('I click the Place Order button', () => {
  cy.intercept("POST", "https://api.demoblaze.com/viewcart")
  .as("response")
  .then(() => {
    cy.wait("@response", { timeout: 10000 })
    .its("response")
    .should((res) => {
      expect(res.statusCode).to.equal(200);
    })
    .its("body.Items")
    .each((value) => {
      expect(value).to.include({ prod_id: 1});
    });
    CartPage.clickOnPlaceOrderButton();
  });


})

And('I fill the information to place my order', () => {
 
 CartPage.fillNameField("aaaaaa");
 CartPage.fillCountryField("aaaaa");
 CartPage.fillCityField("aaaaaa");
 CartPage.fillCreditCardField(12131);
 CartPage.fillMonthField(12);
 CartPage.fillYearField(2025);
 CartPage.clickOnPurchaseButton();
 cy.get(".btn.btn-primary:contains('Purchase')", {timeout: 10000}).should('not.be.visible');
});

Then("I should be able to purchase the products in my cart", () => {
  CartPage.fillNameField("aaaaaa");
  CartPage.fillCountryField("aaaaa");
  CartPage.fillCityField("aaaaaa");
  CartPage.fillCreditCardField(12131);
  CartPage.fillMonthField(12);
  CartPage.fillYearField(2025);
  CartPage.clickOnPurchaseButton();
  CartPage.purchaseSucessAlert().should("be.visible");
});

