// cartPage.js
class CartPage {
    addBackpackToCart() {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
  
    openCart() {
      cy.get('[data-test="shopping-cart-link"]').click();
    }
  
    verifyBackpackVisibleInCart() {
      cy.contains('Sauce Labs Backpack').should('be.visible');
    }
  
    removeBackpackFromCart() {
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    }
  
    verifyBackpackNotInCart() {
      cy.contains('Sauce Labs Backpack').should('not.exist');
    }
  }
  
  export default new CartPage();
  