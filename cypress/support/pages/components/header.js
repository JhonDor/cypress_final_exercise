let pageLocators = {
  homeLink: '.nav-link:contains("Home")',
  contactLink: '.nav-link:contains("Contact")',
  cartLink: "#cartur",
  aboutUsLink: '.nav-link:contains("About us")',
  logInLink: "#login2",
  signUpLink: "#signin2",
};
class Header {
  homeLink() {
    return cy.get(pageLocators.homeLink);
  }

  cartLink() {
    return cy.get(pageLocators.cartLink);
  }

  contactLink() {
    return cy.get(pageLocators.contactLink);
  }

  aboutUsLink() {
    return cy.get(pageLocators.aboutUsLink);
  }
  logInLink() {
    return cy.get(pageLocators.logInLink);
  }

  signUpLink() {
    return cy.get(pageLocators.signUpLink);
  }

  clickHomeLink() {
    return this.homeLink().click();
  }

  clickCartLink() {
    return this.cartLink().click();
  }
  clickContactLink() {
    return this.contactLink().click();
  }
  clickLogInLink() {
    return this.logInLink().click();
  }
  clickAboutUsLink() {
    return this.aboutUsLink().click();
  }
  clickSignUpLink() {
    return this.signUpLink().click();
  }
  clickcOnIndicator(index) {
    return this.carouselIndicators().eq(index).click();
  }
}
export default new Header();
