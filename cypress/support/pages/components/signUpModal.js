let pageLocators = {
    modalTitle: "#signInModalLabel",
  };
  class SignUpModal {
    modalTitle() {
      return cy.get(pageLocators.modalTitle);
    }
  }
  export default new SignUpModal();