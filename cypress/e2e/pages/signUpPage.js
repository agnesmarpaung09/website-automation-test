// cypress/pages/signUpPage.js
class SignUpPage {
  clickSignUp() {
    cy.get("#signin2").click();
  }

  fillUsername(username) {
    cy.get("#sign-username").type(username);
  }

  fillPassword(password) {
    cy.get("#sign-password").type(password);
  }

  submit() {
    cy.get(".btn.btn-primary").contains("Sign up").click();
  }
}

export default SignUpPage;
