// cypress/pages/loginPage.js
class LoginPage {
  visit() {
    cy.visit("https://www.demoblaze.com/index.html");
  }

  clickLogin() {
    cy.get("#login2").click();
  }

  fillUsername(username) {
    cy.get("#loginusername").type(username);
  }

  fillPassword(password) {
    cy.get("#loginpassword").type(password);
  }

  submit() {
    cy.get(".btn.btn-primary").contains("Log in").click();
  }
}

export default LoginPage;
