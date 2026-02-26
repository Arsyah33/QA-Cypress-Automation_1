/// <reference types="cypress" />

describe('Test navigation function', function (){
beforeEach(function (){
     cy.visit('https://codenboxautomationlab.com/practice/')
     cy.url().should('include', 'practice');

})
    it('Test to navigate back and forward', function(){
        cy.contains('Udemy Courses').click({force: true});
        cy.get('h2 a[href="https://www.udemy.com/course/master-selenium-java-sariful/"]').as('seleniumcourse')
        cy.get('@seleniumcourse').should('have.text', 'Master Selenium WebDriver-Java: Scratch to Advance + CI/CD') 
        cy.go('back') // go back to previous page
        cy.title().should('include', 'Automation Practice')
        cy.go('forward')
    }) 
})