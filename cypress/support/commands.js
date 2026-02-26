// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.

// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add('login', (email=Cypress.env('defaultEmail'), password=Cypress.env('defaultPassword')) => {  
    ///visit login page
    cy.get('#input-email').clear().type(email);
    cy.get('#input-password').clear().type(password);
    /// click login button
    cy.get('#form-login > .text-end >.btn').click();
})

Cypress.Commands.add('loginShouldFail', (email=Cypress.env('invalidEmail'), password=Cypress.env('invalidPassword')) => {  
    // visit the login page
    //cy.visit('https://demo.codenbox.com')
    //cy.url().should('include','demo')
    //cy.contains('Login').click({force:true})


    //type the email and password
    cy.get('#input-email').clear().type(email);
    cy.get('#input-password').clear().type(password);
    /// click login button
    cy.get('#form-login > .text-end >.btn').click();
    //cy.get('div [class="text-end"] button[type="submit"]').click();
})

Cypress.Commands.add('isVisible', (selector) => {
    cy.get(selector).should('be.visible');
})

Cypress.Commands.add('isHidden', (selector) => {
    cy.get(selector).should('not.exist');
})