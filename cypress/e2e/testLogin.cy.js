// cypress/e2e/testLogin.cy.js
import LoginPage from "../pages/loginPage";

describe("Login Test", () => {
  const loginPage = new LoginPage();

  it("Should login successfully", () => {
    loginPage.visit();
    loginPage.clickLogin();
    loginPage.fillUsername("Agnes Marpaung");
    loginPage.fillPassword("123_Agnes");
    loginPage.submit();

    // Assert login success
    cy.get("#nameofuser").should("contain", "Welcome Agnes Marpaung");
  });
});
