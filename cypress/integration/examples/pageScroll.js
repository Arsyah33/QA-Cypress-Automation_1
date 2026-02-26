/// <reference types="cypress" />

describe('Page Scroll into View', function(){
beforeEach(function (){
     cy.visit('https://codenboxautomationlab.com/')
})
    it('Scrol to an element up & down', function(){
        cy.get('tbody tr td span strong span button a').as('connect').scrollIntoView({duration:3000})
        cy.get('@connect').should('be.visible')
        cy.contains('Why Choose Codenbx').scrollIntoView
        cy.wait(3000)
    })
})