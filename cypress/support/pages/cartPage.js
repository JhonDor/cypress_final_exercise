let pageLocators = {
  productsTable: ".table-responsive .table",
  productsOnCart: "tr.success",
  productTitle: ".success > :nth-child(2)",
  deleteButton: ".success > :nth-child(4) > a",
  placeOrderButton: ".btn.btn-success",
  placeOrderName: "#name",
  placeOrderCountry: "#country",
  placeOrderCity: "#city",
  placeOrderCreditCard: "#card",
  placeOrderMonth: "#month",
  placeOrderYear: "#year",
  purchaseButton: ".btn.btn-primary:contains('Purchase')",
  purchaseSucessAlert: ".sweet-alert",
  purchaseAlertOkButton:".confirm "
};
class CartPage {
  productsTable() {
    return cy.get(pageLocators.productsTable);
  }

  cartLink() {
    return cy.get(pageLocators.cartLink);
  }

  deleteButton() {
    return cy.get(pageLocators.deleteButton);
  }
  placeOrderButton() {
    return cy.get(pageLocators.placeOrderButton);
  }
  placeOrderName() {
    return cy.get(pageLocators.placeOrderName);
  }
  placeOrderCountry() {
    return cy.get(pageLocators.placeOrderCountry);
  }
  placeOrderCity() {
    return cy.get(pageLocators.placeOrderCity);
  }
  placeOrderCreditCard() {
    return cy.get(pageLocators.placeOrderCreditCard);
  }
  placeOrderMonth() {
    return cy.get(pageLocators.placeOrderMonth);
  }
  placeOrderYear() {
    return cy.get(pageLocators.placeOrderYear);
  }
  purchaseButton() {
    return cy.get(pageLocators.purchaseButton);
  }

  purchaseSucessAlert() {
    return cy.get(pageLocators.purchaseSucessAlert);
  }
  purchaseAlertOkButton(){
    return cy.get(pageLocators.purchaseAlertOkButton);
  }


  clickOnDeleteButton() {
    return this.deleteButton().click();
  }

  clickOnPlaceOrderButton() {
    return this.placeOrderButton().click();
  }

  getProductsOnCart() {
    return cy.get(pageLocators.productsOnCart);
  }

  addProductToCart() {
    cy.fixture("services").as("services");

    cy.get("@services").then((services) => {
      cy.intercept("POST", services.addProductToShoppingCart, (req) => {
        req.reply((res) => {
          res.body.Items = [{ prod_id: 1 }];
        });
      }).as("boughtProduct");
    });
  }

  fillNameField(name) {
    return this.placeOrderName().type(name);
  }

  fillCountryField(country) {
    return this.placeOrderCountry().type(country);
  }

  fillCityField(city) {
    return this.placeOrderCity().type(city);
  }

  fillCreditCardField(card) {
    return this.placeOrderCreditCard().type(card);
  }

  fillMonthField(month) {
    return this.placeOrderMonth().type(month);
  }

  fillYearField(year) {
    return this.placeOrderYear().type(year);
  }

  clickOnPurchaseButton() {
    return this.purchaseButton().scrollIntoView().click();
  }
}

export default new CartPage();
