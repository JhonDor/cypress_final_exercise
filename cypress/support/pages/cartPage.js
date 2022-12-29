let pageLocators = {
    productsTable:".table-responsive .table",
    productsOnCart:"tr.success"
    
  }
  class CartPage {

    productsTable(){
        return cy.get(pageLocators.productsTable);
      }

    cartLink(){
      return cy.get(pageLocators.cartLink);
    }
    

    clickHomeLink() {
      return this.homeLink().click();
    }

    clickCartLink() {
      return this.cartLink().click();
    }

    clickcOnIndicator(index) {
      return this.carouselIndicators().eq(index).click();
    }

    getProductsOnCart(){
      return cy.get(pageLocators.productsOnCart);
    }
    
  } 
  export default CartPage;  