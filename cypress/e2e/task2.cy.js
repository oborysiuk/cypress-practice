/// <reference types="cypress" />
import HomePage from "../pom/pages/HomePage";
import SignInForm from "../pom/form/SignInForm";
import ProfilePage from "../pom/pages/ProfilePage";
import GaragePage from "../pom/pages/GaragePage";

describe("Intercepting", () => {
  it("Fake username", () => {
    const fakeResponseBody = {
      status: "ok",
      data: {
        userId: 226601,
        photoFilename: "default-user.png",
        name: "Polar",
        lastName: "Bear",
      },
    };
    cy.intercept("GET", "/api/users/profile", fakeResponseBody);
    HomePage.visit();
    HomePage.openSignIpForm();
    SignInForm.loginWithCredentials(
      Cypress.env(`TEST_USER_EMAIL`),
      Cypress.env(`TEST_USER_PASSWORD`)
    );
    GaragePage.openProfilePage();
    ProfilePage.userProfileFirstLastName.should("have.text", "Polar Bear");
  });
});
