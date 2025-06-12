class GaragePage {
  get addNewCarButton() {
    return cy.get('[class="panel-page"] .btn-primary');
  }

  get addedCarNames() {
    return cy.get("p.car_name");
  }

  get addFuelExpenseButton() {
    return cy.get("div.car:has(p.car_name) .car_add-expense");
  }

  get fuelExpensesCarName() {
    return cy.get("#carSelectDropdown");
  }

  get mileageValue() {
    return cy.get("tr td:nth-child(2)");
  }

  get litersUsed() {
    return cy.get("tr td:nth-child(3)");
  }

  get totalCost() {
    return cy.get("tr td:nth-child(4)");
  }

  get profilePage() {
    return cy.get('[routerlink="profile"]');
  }

  openAddACarForm() {
    this.addNewCarButton.click();
  }

  verifyLastAddedCar(carName) {
    this.addedCarNames.first().should("have.text", carName);
  }

  openAddAnExpenseForm() {
    this.addFuelExpenseButton.first().click();
  }

  openProfilePage() {
    this.profilePage.click();
  }

  verifyFuelExpenses(carName, mileage, liters, cost) {
    this.fuelExpensesCarName.should("have.text", carName);
    this.mileageValue.should("have.text", mileage);
    this.litersUsed.should("have.text", liters + "L");
    this.totalCost.should("have.text", cost + " USD");
  }
}

export default new GaragePage();
