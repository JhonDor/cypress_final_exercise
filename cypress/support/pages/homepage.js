let pageLocators = {
    carousel: 'div#carouselExampleIndicators',
    carouselRightArrow:'.carousel-control-next',
    carouselLeftArrow:'.carousel-control-prev',
    carouselImages:'.carousel-item',
    carouselImage2:'.carousel-inner :nth-child(2)',
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

    clickcarouselRightArrow() {
      return this.carouselRightArrow().click();
    }

    clickcarouselLeftArrow() {
      return this.carouselLeftArrow().click();
    }

    clickcOnIndicator(index) {
      return this.carouselIndicators().eq(index).click();
    }
    
    clickcOnLaptopsLink() {
      return this.laptopsLink().click();
    }

    clickcOnFirstProduct() {
      return this.firstProduct().click();
    }

    scrollToProducts(){
      return this.firstProduct().scrollIntoView();
    }
  } 
  export default new HomePage();  