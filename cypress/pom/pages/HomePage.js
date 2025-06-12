class HomePage {
  get signInButton() {
    return cy.get(".header_signin");
  }

  visit() {
    cy.visit("/");
  }

  openSignIpForm() {
    this.signInButton.click();
  }
}

export default new HomePage();
