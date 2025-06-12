/// <reference types="cypress" />
import HomePage from "../pom/pages/HomePage";
import SignInForm from "../pom/form/SignInForm";
import 'cypress-plugin-api'

describe("Plugin tests", () => {
  let sid;
  beforeEach("Login as a user", () => {
    const userCredentials = {
      email: Cypress.env(`TEST_USER_EMAIL`),
      password: Cypress.env(`TEST_USER_PASSWORD`),
    };

    cy.api("POST", "api/auth/signin", userCredentials).then((response) => {
      const token = response.headers["set-cookie"][0].split(";")[0];
      expect(typeof token).to.be.eq("string");
      sid = token;
    })
  });

  it("Get all user's cars", () => {
    cy.api("GET", "/api/cars").then((response) => {
      expect(response.status).to.be.eq(200);
    });
  });

  it("Delete the 1st car from user's cars", () => {
    cy.api("GET", "/api/cars").then((response) => {
      const theFirstCarId = response.body.data[0].id;
      const theNumberOfCars = response.body.data.length;
      expect(response.status).to.be.eq(200);

      cy.api("DELETE", "/api/cars/" + theFirstCarId).then((response) => {
        expect(response.status).to.be.eq(200);

        cy.api("GET", "/api/cars").then((response) => {
          expect(response.status).to.be.eq(200);
          expect(response.body.data.length).to.be.eq(theNumberOfCars - 1);
        });
      });
    });
  });

  it("Add 20 km the 2nd car mileage", () => {
    cy.api("GET", "/api/cars").then((response) => {
      const theSecondCarId = response.body.data[1].id;
      const theMileageValue = response.body.data[1].mileage;
      expect(response.status).to.be.eq(200);

      cy.api({
        method: "PUT",
        url: "/api/cars/" + theSecondCarId,
        body: {
          mileage: theMileageValue + 20,
        },
      }).then((response) => {
        expect(response.status).to.be.eq(200);
        expect(response.body.data.mileage).to.be.eq(theMileageValue + 20);
      });
    });
  });

  it("Add new car to user's profile", () => {
    const newCar = {
      carBrandId: 1,
      carModelId: 2,
      mileage: 115,
    };
    cy.api({
      method: "POST",
      url: "/api/cars",
      headers: {
        Cookie: sid,
      },
      body: newCar,
    }).then((response) => {
      const body = response.body.data;
      expect(response.status).to.be.eq(201);
      expect(body.carBrandId).to.be.eq(newCar.carBrandId);
      expect(body.carModelId).to.be.eq(newCar.carModelId);
      expect(body.mileage).to.be.eq(newCar.mileage);
    });
  });
});
