class AddACarForm {
  get carBrandDropdown() {
    return cy.get("#addCarBrand");
  }

  get carModelDropdown() {
    return cy.get("#addCarModel");
  }

  get carMileageField() {
    return cy.get("#addCarMileage");
  }

  get addNewCarButton() {
    return cy.get('[class="modal-content"] .btn-primary');
  }

  addNewCar(brand, model, mileage) {
    this.carBrandDropdown.select(brand);
    this.carModelDropdown.select(model);
    this.carMileageField.type(mileage);
    this.addNewCarButton.click();
  }
}

export default new AddACarForm();
