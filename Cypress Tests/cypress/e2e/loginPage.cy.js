import LoginPage from '../support/pages/LoginPage';

const homepage_url = 'https://www.saucedemo.com/inventory.html';
const validUserName = 'standard_user';
const invalidUserName = 'Dummy';
const validPassword = 'secret_sauce';
const invalidPassword = 'fooled-ya-001';

describe('Login Functionality', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Login with valid credentials", () => {
    // Login using the Custom Command
    cy.loginWithValidCredentials();
    cy.url().should('equal', homepage_url);
  });

  it("Login with invalid password", () => {
    // Login using the POM 
    LoginPage.login(validUserName, invalidPassword);
    LoginPage.verifyErrorMessage("Epic sadface: Username and password do not match any user in this service");
  });

  it("Login with invalid Username", () => {
    // Login using the POM 
    LoginPage.login(invalidUserName, validPassword);
    LoginPage.verifyErrorMessage("Epic sadface: Username and password do not match any user in this service");
  });
});
