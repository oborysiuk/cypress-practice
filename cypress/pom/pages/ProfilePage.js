class ProfilePage {
  get userProfileFirstLastName() {
    return cy.get(".panel-page .profile_name");
  }
}

export default new ProfilePage();
