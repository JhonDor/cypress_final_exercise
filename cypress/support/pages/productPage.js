let pageLocators = {
  productName: ".product-content .name",
  productPrice: ".product-content .price-container",
  addToCartButton: ".btn-lg",
};
class ProductPage {
  productName() {
    return cy.get(pageLocators.productName);
  }
  productPrice() {
    return cy.get(pageLocators.productPrice);
  }
  addToCartButton() {
    return cy.get(pageLocators.addToCartButton);
  }

  clickAddToCartButton(){
    return this.addToCartButton().click();
  }
}
export default ProductPage;
