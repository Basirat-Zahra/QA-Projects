/// <reference types="cypress" />

describe('Product and Sidebar Menu Validation', () => {
    beforeEach(() => {
      // Useing custom command to log in before each test
      cy.loginWithValidCredentials();
    });
  
    it('should open the correct product detail page when product title is clicked', () => {
      cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
      cy.url().should('contain', 'https://www.saucedemo.com/inventory-item.html?id=');
      cy.contains('Sauce Labs Backpack').should('be.visible');
    });
  
    it('should display the sidebar menu with all expected navigation options when navbar icon is clicked', () => {
      cy.get('.bm-burger-button').click();
      cy.get('.bm-menu').should('be.visible');
      cy.contains('All Items').should('be.visible');
      cy.contains('About').should('be.visible');
      cy.contains('Logout').should('be.visible');
      cy.contains('Reset App State').should('be.visible');
    });
  });
  