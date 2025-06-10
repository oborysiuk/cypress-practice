/// <reference types="cypress" />

import HomePage from "../pom/pages/HomePage";
import SignInForm from "../pom/form/SignInForm";
import GaragePage from "../pom/pages/GaragePage";
import AddACarForm from "../pom/form/AddACarForm";
import AddExpenseForm from "../pom/form/AddExpenseForm";

describe("Adding new car", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.openSignIpForm();
    SignInForm.loginWithCredentials(
      Cypress.env(`TEST_USER_EMAIL`),
      Cypress.env(`TEST_USER_PASSWORD`)
    );
    GaragePage.openAddACarForm();
  });

  it("Add [Audi] [A6] car", () => {
    AddACarForm.addNewCar("Audi", "A6", "300");
    GaragePage.verifyLastAddedCar("Audi A6");
  });

  it("Add [BMW] [X5] car", () => {
    AddACarForm.addNewCar("BMW", "X5", "150");
    GaragePage.verifyLastAddedCar("BMW X5");
  });

  it("Add [Ford] [Fiesta] car", () => {
    AddACarForm.addNewCar("Ford", "Fiesta", "300");
    GaragePage.verifyLastAddedCar("Ford Fiesta");
  });

  it("Add [Fiat] [Panda] car", () => {
    AddACarForm.addNewCar("Fiat", "Panda", "200");
    GaragePage.verifyLastAddedCar("Fiat Panda");
  });
});

describe("Adding fuel expenses", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.openSignIpForm();
    SignInForm.loginWithCredentials(
      Cypress.env(`TEST_USER_EMAIL`),
      Cypress.env(`TEST_USER_PASSWORD`)
    );
  });

  it("Adding fuel expenses for [Ford] [Fiesta]", () => {
    GaragePage.openAddACarForm();
    AddACarForm.addNewCar("Ford", "Fiesta", "300");
    GaragePage.verifyLastAddedCar("Ford Fiesta");
    GaragePage.openAddAnExpenseForm();
    AddExpenseForm.addAnExpense("Ford Fiesta", "310", "24", "50.00");
    GaragePage.verifyFuelExpenses("Ford Fiesta", "310", "24", "50.00");
  });
});
