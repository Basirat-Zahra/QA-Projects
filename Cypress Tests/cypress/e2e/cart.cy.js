/// <reference types="cypress" />

import CartPage from '../support/pages/CartPage';

describe('Add to Cart', () => {
  beforeEach(() => {
    cy.loginWithValidCredentials(); 
  });

  it('Verify that clicking on add to cart adds an item to cart', () => {
    CartPage.addBackpackToCart();
    CartPage.openCart();
    cy.url().should('include', '/cart.html');
    CartPage.verifyBackpackVisibleInCart();
  });

  it('Verify successful removal of a product from cart', () => {
    // add to cart again and remove it
    CartPage.addBackpackToCart();
    CartPage.openCart();
    CartPage.removeBackpackFromCart();
    CartPage.verifyBackpackNotInCart(); // validate tha product is removed
  });
});
