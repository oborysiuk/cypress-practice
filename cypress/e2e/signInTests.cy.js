/// <reference types="cypress" />

import { Home } from "wd/lib/special-keys";
import HomePage from "../pom/pages/HomePage";
import SignInForm from "../pom/form/SignInForm";

describe("Sign Up tests", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.openSignIpForm();
  });

  it("Log in", () => {
    SignInForm.loginWithCredentials(
      Cypress.env(`TEST_USER_EMAIL`),
      Cypress.env(`TEST_USER_PASSWORD`)
    );
  });
});
