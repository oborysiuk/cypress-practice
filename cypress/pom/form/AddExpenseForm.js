class AddExpenseForm {
  get vehicleDropdown() {
    return cy.get("#addExpenseCar");
  }

  get expenseDateField() {
    return cy.get("#addExpenseDate");
  }

  get addExpenseMileage() {
    return cy.get("#addExpenseMileage");
  }

  get addExpenseLiters() {
    return cy.get("#addExpenseLiters");
  }

  get addExpenseCost() {
    return cy.get("#addExpenseTotalCost");
  }

  get addButton() {
    return cy.get(".modal-content .btn-primary");
  }

  addAnExpense(car, milage, liters, cost) {
    this.vehicleDropdown.should("contain.text", car);
    this.addExpenseMileage.clear().type(milage);
    this.addExpenseLiters.type(liters);
    this.addExpenseCost.type(cost);
    this.addButton.click();
  }
}

export default new AddExpenseForm();
