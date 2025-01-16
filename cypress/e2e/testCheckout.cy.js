// cypress/e2e/testCheckout.cy.js
import CheckoutPage from "../pages/checkoutPage";
import LoginPage from "../pages/loginPage";

describe("Checkout Test", () => {
  const checkoutPage = new CheckoutPage();
  const loginPage = new LoginPage();

  it("Should checkout a product successfully", () => {
    loginPage.visit();
    loginPage.clickLogin();
    loginPage.fillUsername("Agnes Marpaung");
    loginPage.fillPassword("123_Agnes");
    loginPage.submit();

    // Add product to cart
    checkoutPage.addProductToCart();

    // Go to Cart and Place Order
    checkoutPage.goToCart();
    checkoutPage.placeOrder();

    // Fill in order details
    checkoutPage.fillOrderDetails(
      "Agnes Marpaung",
      "Indonesia",
      "Jakarta",
      "1234567890123456",
      "12",
      "2025"
    );

    // Submit the order
    checkoutPage.submitOrder();

    // Assert order success
    cy.get(".sweet-alert").should("contain", "Thank you for your purchase!");
  });
});
