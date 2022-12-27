var pageLocators = {
    carousel: 'div#carouselExampleIndicators',
    carouselRightArrow:'.carousel-control-next',
    carouselLeftArrow:'.carousel-control-prev',
    carouselImages:'.carousel-item',
    carouselImage2:'.carousel-inner :nth-child(2)',
    carouselIndicators:'.carousel-indicators li'


    
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
    clickcarouselRightArrow() {
      return this.carouselRightArrow().click();
    }

    clickcarouselLeftArrow() {
      return this.carouselLeftArrow().click();
    }

    clickcOnIndicator(index) {
      return this.carouselIndicators().eq(index).click();
    }
    
  } 
  export default HomePage;  