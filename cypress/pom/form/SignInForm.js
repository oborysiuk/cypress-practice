class SignUpForm {
  get emailField() {
    return cy.get('[id="signinEmail"]');
  }

  get passwordField() {
    return cy.get('[id="signinPassword"]');
  }

  get loginButton() {
    return cy.get("app-signin-modal .btn-primary");
  }

  enterEmail(email) {
    this.emailField.type(email);
  }

  enterPassword(password) {
    this.passwordField.type(password);
  }

  clickLoginButton() {
    this.loginButton.click();
  }

  loginWithCredentials(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLoginButton();
  }
}

export default new SignUpForm();
