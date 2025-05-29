/// <reference types="cypress" />

describe("Registration form validation", () => {
  beforeEach(() => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    cy.get(".hero-descriptor_btn.btn.btn-primary").click();
  });

  it("Verify Registration form title", () => {
    cy.get(".modal-title").should("have.text", "Registration");
  });

  context("Name field validation", () => {
    it("Name is required error for empty Name field", () => {
      cy.get('[id="signupName"]').focus();
      cy.get('[id="signupName"]').blur();
      cy.get('[id="signupName"]')
        .next(".invalid-feedback")
        .should("have.text", "Name required");
      cy.get('[id="signupName"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Name is invalid error for Name field wrong data -- numbers", () => {
      cy.get('[id="signupName"]').type("1qwerty").blur();
      cy.get('[id="signupName"]')
        .next(".invalid-feedback")
        .should("have.text", "Name is invalid");
      cy.get('[id="signupName"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Name is invalid error for Name field wrong data -- symbols", () => {
      cy.get('[id="signupName"]').type("!qwerty").blur();
      cy.get('[id="signupName"]')
        .next(".invalid-feedback")
        .should("have.text", "Name is invalid");
      cy.get('[id="signupName"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Name is invalid error for Name field wrong data -- not an english symbols", () => {
      cy.get('[id="signupName"]').type("ñqwerty").blur();
      cy.get('[id="signupName"]')
        .next(".invalid-feedback")
        .should("have.text", "Name is invalid");
      cy.get('[id="signupName"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Wrong length error for too short Name field value", () => {
      cy.get('[id="signupName"]').type("A").blur();
      cy.get('[id="signupName"]')
        .next(".invalid-feedback")
        .should("have.text", "Name has to be from 2 to 20 characters long");
      cy.get('[id="signupName"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Wrong length error for too long Name field value", () => {
      cy.get('[id="signupName"]').type("qwertyuiopqwertyuiopq").blur();
      cy.get('[id="signupName"]')
        .next(".invalid-feedback")
        .should("have.text", "Name has to be from 2 to 20 characters long");
      cy.get('[id="signupName"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Positive test for Name field with value", () => {
      cy.get('[id="signupName"]').type("TestUserName").blur();
      cy.get('[id="signupName"]').next(".invalid-feedback").should("not.exist");
      cy.get('[id="signupName"]').should(
        "not.have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });

  context("Last Name field validation", () => {
    it("Last name is required error for empty Last Name field", () => {
      cy.get('[id="signupLastName"]').focus();
      cy.get('[id="signupLastName"]').blur();
      cy.get('[id="signupLastName"]')
        .next(".invalid-feedback")
        .should("have.text", "Last name required");
      cy.get('[id="signupLastName"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Last name is invalid error for Last Name field wrong data -- numbers", () => {
      cy.get('[id="signupLastName"]').type("1qwerty").blur();
      cy.get('[id="signupLastName"]')
        .next(".invalid-feedback")
        .should("have.text", "Last name is invalid");
      cy.get('[id="signupLastName"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Last Name is invalid error for Last Name field wrong data -- symbols", () => {
      cy.get('[id="signupLastName"]').type("!qwerty").blur();
      cy.get('[id="signupLastName"]')
        .next(".invalid-feedback")
        .should("have.text", "Last name is invalid");
      cy.get('[id="signupLastName"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Last Name is invalid error for Last Name field wrong data -- not an english symbols", () => {
      cy.get('[id="signupLastName"]').type("ñqwerty").blur();
      cy.get('[id="signupLastName"]')
        .next(".invalid-feedback")
        .should("have.text", "Last name is invalid");
      cy.get('[id="signupLastName"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Wrong length error for too short Last Name field value", () => {
      cy.get('[id="signupLastName"]').type("A").blur();
      cy.get('[id="signupLastName"]')
        .next(".invalid-feedback")
        .should(
          "have.text",
          "Last name has to be from 2 to 20 characters long"
        );
      cy.get('[id="signupLastName"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Wrong length error for too long Last Name field value", () => {
      cy.get('[id="signupLastName"]').type("qwertyuiopqwertyuiopq").blur();
      cy.get('[id="signupLastName"]')
        .next(".invalid-feedback")
        .should(
          "have.text",
          "Last name has to be from 2 to 20 characters long"
        );
      cy.get('[id="signupLastName"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Positive test for Last Name field with value", () => {
      cy.get('[id="signupLastName"]').type("TestUserLastName").blur();
      cy.get('[id="signupLastName"]')
        .next(".invalid-feedback")
        .should("not.exist");
      cy.get('[id="signupLastName"]').should(
        "not.have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });

  context("Email field validation", () => {
    it("Email required error for empty Email field", () => {
      cy.get('[id="signupEmail"]').focus();
      cy.get('[id="signupEmail"]').blur();
      cy.get('[id="signupEmail"]')
        .next(".invalid-feedback")
        .should("have.text", "Email required");
      cy.get('[id="signupEmail"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Email is invalid error for Email field wrong data -- without @", () => {
      cy.get('[id="signupEmail"]').type("testemailgmail.com").blur();
      cy.get('[id="signupEmail"]')
        .next(".invalid-feedback")
        .should("have.text", "Email is incorrect");
      cy.get('[id="signupEmail"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Email is invalid error for Email field wrong data -- without dot", () => {
      cy.get('[id="signupEmail"]').type("testemail@gmailcom").blur();
      cy.get('[id="signupEmail"]')
        .next(".invalid-feedback")
        .should("have.text", "Email is incorrect");
      cy.get('[id="signupEmail"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Email is invalid error for Email field wrong data -- without domain", () => {
      cy.get('[id="signupEmail"]').type("testemail@.").blur();
      cy.get('[id="signupEmail"]')
        .next(".invalid-feedback")
        .should("have.text", "Email is incorrect");
      cy.get('[id="signupEmail"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Positive test for Email field with value", () => {
      cy.get('[id="signupEmail"]').type("testemail123@gmail.com").blur();
      cy.get('[id="signupEmail"]')
        .next(".invalid-feedback")
        .should("not.exist");
      cy.get('[id="signupEmail"]').should(
        "not.have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });

  context("Password field validation", () => {
    it("Password required error for empty Email field", () => {
      cy.get('[id="signupPassword"]').focus();
      cy.get('[id="signupPassword"]').blur();
      cy.get('[id="signupPassword"]')
        .next(".invalid-feedback")
        .should("have.text", "Password required");
      cy.get('[id="signupPassword"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Password is invalid error for Password field wrong data -- without integer", () => {
      cy.get('[id="signupPassword"]').type("Aqwertyu").blur();
      cy.get('[id="signupPassword"]')
        .next(".invalid-feedback")
        .should(
          "have.text",
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        );
      cy.get('[id="signupPassword"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Password is invalid error for Password field wrong data -- without capital letter", () => {
      cy.get('[id="signupPassword"]').type("1qwertyu").blur();
      cy.get('[id="signupPassword"]')
        .next(".invalid-feedback")
        .should(
          "have.text",
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        );
      cy.get('[id="signupPassword"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Password is invalid error for Password field wrong data -- without small letter", () => {
      cy.get('[id="signupPassword"]').type("12345678A").blur();
      cy.get('[id="signupPassword"]')
        .next(".invalid-feedback")
        .should(
          "have.text",
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        );
      cy.get('[id="signupPassword"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Password is invalid error for too short Password field value", () => {
      cy.get('[id="signupPassword"]').type("Qwerty1").blur();
      cy.get('[id="signupPassword"]')
        .next(".invalid-feedback")
        .should(
          "have.text",
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        );
      cy.get('[id="signupPassword"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Password is invalid error for too long Password field value", () => {
      cy.get('[id="signupPassword"]').type("Qwerty12Qwerty1234").blur();
      cy.get('[id="signupPassword"]')
        .next(".invalid-feedback")
        .should(
          "have.text",
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        );
      cy.get('[id="signupPassword"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Positive test for Password field with value", () => {
      cy.get('[id="signupPassword"]').type("Password123").blur();
      cy.get('[id="signupPassword"]')
        .next(".invalid-feedback")
        .should("not.exist");
      cy.get('[id="signupPassword"]').should(
        "not.have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });

 context("Re-enter password field validation", () => {
    it("Password required error for empty Email field", () => {
      cy.get('[id="signupRepeatPassword"]').focus();
      cy.get('[id="signupRepeatPassword"]').blur();
      cy.get('[id="signupRepeatPassword"]')
        .next(".invalid-feedback")
        .should("have.text", "Re-enter password required");
      cy.get('[id="signupRepeatPassword"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Password is invalid error for Re-enter Password field wrong data -- without integer", () => {
      cy.get('[id="signupRepeatPassword"]').type("Aqwertyu").blur();
      cy.get('[id="signupRepeatPassword"]')
        .next(".invalid-feedback")
        .should(
          "have.text",
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        );
      cy.get('[id="signupRepeatPassword"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Password is invalid error for Re-enter Password field wrong data -- without capital letter", () => {
      cy.get('[id="signupRepeatPassword"]').type("1qwertyu").blur();
      cy.get('[id="signupRepeatPassword"]')
        .next(".invalid-feedback")
        .should(
          "have.text",
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        );
      cy.get('[id="signupRepeatPassword"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Password is invalid error for Re-enter Password field wrong data -- without small letter", () => {
      cy.get('[id="signupRepeatPassword"]').type("12345678A").blur();
      cy.get('[id="signupRepeatPassword"]')
        .next(".invalid-feedback")
        .should(
          "have.text",
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        );
      cy.get('[id="signupRepeatPassword"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Password is invalid error for too short Re-enter Password field value", () => {
      cy.get('[id="signupRepeatPassword"]').type("Qwerty1").blur();
      cy.get('[id="signupRepeatPassword"]')
        .next(".invalid-feedback")
        .should(
          "have.text",
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        );
      cy.get('[id="signupRepeatPassword"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Password is invalid error for too long Re-enter Password field value", () => {
      cy.get('[id="signupRepeatPassword"]').type("Qwerty12Qwerty1234").blur();
      cy.get('[id="signupRepeatPassword"]')
        .next(".invalid-feedback")
        .should(
          "have.text",
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        );
      cy.get('[id="signupRepeatPassword"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Passwords do not match error if passwords do not match", () => {
      cy.get('[id="signupPassword"]').type("Password123").blur();
      cy.get('[id="signupRepeatPassword"]').type("Password1234").blur();
      cy.get('[id="signupRepeatPassword"]')
        .next(".invalid-feedback")
        .should(
          "have.text",
          "Passwords do not match"
        );
      cy.get('[id="signupRepeatPassword"]').should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Positive test for Password & Re-enter Password fields matching values", () => {
      cy.get('[id="signupPassword"]').type("Password123").blur();
      cy.get('[id="signupRepeatPassword"]').type("Password123").blur();
      cy.get('[id="signupRepeatPassword"]')
        .next(".invalid-feedback")
        .should("not.exist");
      cy.get('[id="signupRepeatPassword"]').should(
        "not.have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });

context("Register button behavior validation", () => {

    it('Register button is disabled if form is empty', ()=>{
        cy.get('[type="button"].btn.btn-primary').should('be.disabled');
    });

    it('Register button is disabled if Name field is invalid', ()=>{
        cy.get('[id="signupName"]').type("1qwerty").blur();
        cy.get('[id="signupLastName"]').type("TestUserLastName").blur();
        cy.get('[id="signupEmail"]').type("testemail123@gmail.com").blur();
        cy.get('[id="signupPassword"]').type("Password123").blur();
        cy.get('[id="signupRepeatPassword"]').type("Password123").blur();
        cy.get('[type="button"].btn.btn-primary').should('be.disabled');
    });

    it('Register button is disabled if Last Name field is invalid', ()=>{
        cy.get('[id="signupName"]').type("TestUserName").blur();
        cy.get('[id="signupLastName"]').type("12qwerty").blur();
        cy.get('[id="signupEmail"]').type("testemail123@gmail.com").blur();
        cy.get('[id="signupPassword"]').type("Password123").blur();
        cy.get('[id="signupRepeatPassword"]').type("Password123").blur();
        cy.get('[type="button"].btn.btn-primary').should('be.disabled');
    });

    it('Register button is disabled if Email field is invalid', ()=>{
        cy.get('[id="signupName"]').type("TestUserName").blur();
        cy.get('[id="signupLastName"]').type("TestUserLastName").blur();
        cy.get('[id="signupEmail"]').type("testemail123@gmailcom").blur();
        cy.get('[id="signupPassword"]').type("Password123").blur();
        cy.get('[id="signupRepeatPassword"]').type("Password123").blur();
        cy.get('[type="button"].btn.btn-primary').should('be.disabled');
    });

    it('Register button is disabled if Password field is invalid', ()=>{
        cy.get('[id="signupName"]').type("TestUserName").blur();
        cy.get('[id="signupLastName"]').type("TestUserLastName").blur();
        cy.get('[id="signupEmail"]').type("testemail123@gmail.com").blur();
        cy.get('[id="signupPassword"]').type("password123").blur();
        cy.get('[id="signupRepeatPassword"]').type("Password123").blur();
        cy.get('[type="button"].btn.btn-primary').should('be.disabled');
    });

    it('Register button is disabled if Passwords do not match', ()=>{
        cy.get('[id="signupName"]').type("TestUserName").blur();
        cy.get('[id="signupLastName"]').type("TestUserLastName").blur();
        cy.get('[id="signupEmail"]').type("testemail123@gmail.com").blur();
        cy.get('[id="signupPassword"]').type("Password123").blur();
        cy.get('[id="signupRepeatPassword"]').type("Password1234").blur();
        cy.get('[type="button"].btn.btn-primary').should('be.disabled');
    });

    it('New User Registration', ()=>{
        cy.get('[id="signupName"]').type(`TestUserName`).blur();
        cy.get('[id="signupLastName"]').type("TestUserLastName").blur();
        cy.get('[id="signupEmail"]').type(`olga.borysiuk2012+${Date.now()}@gmail.com`).blur();
        cy.get('[id="signupPassword"]').type("Password1234").blur();
        cy.get('[id="signupRepeatPassword"]').type("Password1234").blur();
        cy.get('[type="button"].btn.btn-primary').click();
        cy.get('[routerlink="profile"]').click();
        cy.get('.profile_name').should('have.text', 'TestUserName TestUserLastName');
    });

})

  
});
