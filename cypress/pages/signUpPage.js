// cypress/pages/signUpPage.js
class SignUpPage {
  // Fungsi untuk membuka halaman Sign Up
  visit() {
    cy.visit("https://www.demoblaze.com/index.html#");
    cy.contains("Sign Up", { timeout: 10000 }).should("be.visible");
  }

  // Fungsi untuk mengklik tombol Sign Up
  clickSignUp() {
    cy.contains("Sign Up").click();
  }

  // Fungsi untuk mengisi username
  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  // Fungsi untuk mengisi password
  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  // Fungsi untuk submit form
  submit() {
    cy.get("button").contains("Sign up").click();
  }
}

export default SignUpPage;
