let pageLocators = {
    carousel: 'div#carouselExampleIndicators',
    carouselRightArrow:'.carousel-control-next',
    carouselLeftArrow:'.carousel-control-prev',
    carouselImages:'.carousel-item',
    carouselIndicators:'.carousel-indicators li',
    categories:'#itemc.list-group-item',
    firstProduct:'#tbodyid >:nth-child(1) .card-img-top',
  }


  class HomePage {
    carousel(){
      return cy.get(pageLocators.carousel);
    }
    carouselImage(){
       return cy.get(pageLocators.carouselImages);
    }
    carouselRightArrow() {
      return cy.get(pageLocators.carouselRightArrow);
    }
    carouselLeftArrow() {
      return cy.get(pageLocators.carouselLeftArrow);
    }

    carouselIndicators() {
      return cy.get(pageLocators.carouselIndicators);;
    }

    categoryByIndex(index) {
      return cy.get(pageLocators.categories).eq(index);;
    }

    firstProduct() {
      return cy.get(pageLocators.firstProduct);;
    }

    clickCarouselRightArrow() {
      return this.carouselRightArrow().click();
    }

    clickCarouselLeftArrow() {
      return this.carouselLeftArrow().click();
    }

    clickOnIndicator(index) {
      return this.carouselIndicators().eq(index).click();
    }

    clickOnFirstProduct() {
      return this.firstProduct().click();
    }
  } 
  export default new HomePage();  