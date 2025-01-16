// cypress/e2e/testSignUp.cy.js
import SignUpPage from "../pages/signUpPage";

describe("Sign Up Test", () => {
  const signUpPage = new SignUpPage();

  it("Should sign up successfully", () => {
    signUpPage.visit();
    signUpPage.clickSignUp();
    signUpPage.fillUsername("Agnes Marpaung");
    signUpPage.fillPassword("123_Agnes");
    signUpPage.submit();

    // Assert sign up success
    cy.get(".sweet-alert").should("contain", "Sign up successful");
  });
});
