/// <reference types="cypress" />

describe('Mouse Hover', function(){
beforeEach(function (){
     cy.visit('https://codenboxautomationlab.com/practice/')
     cy.url().should('include', 'practice');

    })

    it('test mouse hover', function(){
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', 'top')

    })
})
