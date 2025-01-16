// cypress/pages/checkoutPage.js
class CheckoutPage {
  addProductToCart() {
    cy.get(".card-title").contains("Samsung galaxy s6").click();
    cy.get(".btn.btn-success.btn-lg").click();
  }

  goToCart() {
    cy.get("#cartur").click();
  }

  placeOrder() {
    cy.get(".btn.btn-success").contains("Place Order").click();
  }

  fillOrderDetails(name, country, city, card, month, year) {
    cy.get("#name").type(name);
    cy.get("#country").type(country);
    cy.get("#city").type(city);
    cy.get("#card").type(card);
    cy.get("#month").type(month);
    cy.get("#year").type(year);
  }

  submitOrder() {
    cy.get(".btn.btn-primary").contains("Purchase").click();
  }
}

export default CheckoutPage;
