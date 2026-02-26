/// <reference types="cypress" />

describe('Should Assertion', function(){
    it('visit automation site', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.url().should('include','practice')
    })
 

    it('should check the title on the page', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('.page-title').should('be.visible')

    })

    it('should check length of an element', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('.search-input').should('have.length', 2) 
    })

    it('should assert with text of an element', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#openwindow').should('have.text','Open Window')
    })
    it('test on open tab element', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        // cy.get('#opentab').should('have.attr','target', '_blank')
        cy.get('#opentab').should('have.attr','href').and('equal', 'https://www.youtube.com/@CodenboxAutomationLab')
    })

    it('should check radio button1', function(){ 
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('input[value = "radio1"]').check().should('be.checked')
        cy.get('input[value = "radio2"]').should('not.be.checked')

    })

    it('should select Selenium option', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get(' #dropdown-class-example').select('Selenium').should('have.value', 'option1')
        
    })
})