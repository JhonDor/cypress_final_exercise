import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Header from "../../support/pages/components/header";
import HomePage from "../../support/pages/homepage";
import ProductPage from "../../support/pages/productPage";
import CartPage from "../../support/pages/cartPage";

const homepage = new HomePage();
const header = new Header();
const productPage = new ProductPage();
const cartPage = new CartPage();

Given("I visit the Homepage", () => {
  cy.visit("/");
});

When("I click the Laptops category", () => {
  cy.intercept("POST", "/bycat")
    .as("categoriesResponse")
    .then(() => {
      homepage.clickcOnLaptopsLink();
    });
});

Then("All the laptops should be displayed", () => {
  cy.wait("@categoriesResponse", { timeout: 5000 })
    .its("response")
    .should((res) => {
      expect(res.statusCode).to.equal(200);
    })
    .its("body.Items")
    .each((value) => {
      //expect(value).to.have.any.keys("cat")
      //value.should("include",{cat:"notebook"})
      expect(value).to.include({ cat: "notebook" });
    });
});

When("I click on the first product", () => {
  homepage.firstProduct().scrollIntoView();
  homepage.clickcOnFirstProduct();
});

Then("the product page should be visible", () => {
  productPage.productName().should("be.visible", { timeout: 10000 });
  productPage.productPrice().should("be.visible");
});

Given("I scroll to the bottom of the Homepage", () => {
  homepage.scrollToProducts();
});

Given("I click on the first product", () => {
  homepage.clickcOnFirstProduct();
});

When("I click on the Add to cart button", () => {
  productPage.clickAddToCartButton();
});

Then(
  "the alert confirming the product was added to the cart should be visible",
  () => {
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Product added");
    });
  }
);

Given("I add1 a product to my cart", () => {
  cy.request("POST", "https://api.demoblaze.com/addtocart", {
    id: "5ccd6ee2-504b-16c1-d07b-d2307f584d3e",
    cookie: "user=9797e17e-3829-01e6-d4c1-826e3bbe4184",
    prod_id: 1,
    flag: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
    //expect(response.body).to.have.property('prod_id', '1')
  });
});

Given("I add a product to my cart", () => {
  homepage.clickcOnFirstProduct();
  productPage.addToCartButton().click();
  cy.request("POST", "https://api.demoblaze.com/addtocart", { timeout: 20000 });
});

When("I go to the cart page", () => {
  header.clickCartLink();
});

Then("the product should be in my cart", () => {
  cartPage.getProductsOnCart().its("length").should("eq", 1);
});


