let pageLocators = {
    modalTitle:'#videoModalLabel',
    
  }
  class aboutUsModal {

    modalTitle(){
        return cy.get(pageLocators.modalTitle);
      }

    
    
  } 
  export default new aboutUsModal();  