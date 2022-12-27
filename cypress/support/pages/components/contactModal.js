let pageLocators = {
    modalTitle:'.modal-title:contains("New message")',
    
  }
  class ContactModal {

    modalTitle(){
        return cy.get(pageLocators.modalTitle);
      }

    
    
  } 
  export default ContactModal;  