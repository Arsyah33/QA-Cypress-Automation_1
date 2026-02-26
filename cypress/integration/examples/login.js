/// <reference types="cypress" />

// const validEmail='demo@codenbox.com'
const validEmail=Cypress.env('defaultEmail')
// const validPassword='Hello123'
const validPassword=Cypress.env('defaultPassword')
const invalidEmail='test@test.com'
const invalidPassword='test123'

describe.skip('Login Functionality', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

    })

    it('should login with valid credentials & display My Account', function() {
        // cy.visit('https://demo.codenbox.com')
        // cy.visit('/')
        cy.visit(Cypress.env('production').baseUrl)
        cy.url().should('include','demo')
        // click on the login button
        cy.contains('Login').click({force:true})

        // call login function form command.js
        // cy.login(validEmail, validPassword)
        cy.login()

        // verify sucessfull login by checking text of my account
        cy.get('div[id="content"] h1').should('have.text', 'My Account')

        // click on the logout
        cy.get('aside[id="column-right"] a:nth-child(14)').click()

        // verify succesfull logout by checking text of account logout
        cy.get('div[id="content"] h1').should('have.text', 'Account Logout')

        // click on the continue button
        cy.contains('Continue').click()
    })

    it('should fail login with invalid credentials', function() {
        cy.loginShouldFail(invalidEmail, invalidPassword)

        cy.on('window:alert', (str) =>{
            expect(str).to.should.include('Warning: No match for E-Mail Address and/or Password.')
        })
    })
})