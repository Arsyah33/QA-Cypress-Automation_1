
//const { describe, it } = require("mocha");
/// <reference types="cypress" />

describe('load app and assert tittle', function(){
    it('should load the app and verify the tittle', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        //cy.title().should('eq', 'Codenbox Automation Lab | Practice Page')
        cy.title().should('include', 'CodenBox AutomationLab')
        cy.wait(2000)
        cy.url().should('include', 'practice')
    } )

    it('should pause the execution', function(){
        cy.pause

    })

    it('test to ensure page title is visible', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('.page-title').should('be.visible')
        
    })

})
