let pageLocators = {
    productsTable:'.table-responsive .table',
    
  }
  class Cart {

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
    
  } 
  export default Cart;  