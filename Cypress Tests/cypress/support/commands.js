// Login custom commans

import LoginPage from "./pages/LoginPage";

Cypress.Commands.add('loginWithValidCredentials', (username = 'standard_user', password = 'secret_sauce') => {
    LoginPage.visit();
    LoginPage.login(username, password);
  });
  