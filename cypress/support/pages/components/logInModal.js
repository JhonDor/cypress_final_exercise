let pageLocators = {
  modalTitle: "#logInModalLabel",
};
class LogInModal {
  modalTitle() {
    return cy.get(pageLocators.modalTitle);
  }
}
export default LogInModal;
