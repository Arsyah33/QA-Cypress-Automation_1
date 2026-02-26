/// <reference types="cypress" />

describe('my checkbox test suit', function(){
it('checkbox test', function(){
     cy.visit('https://codenboxautomationlab.com/practice/')
     cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')


     /// uncheck the option1 box
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')


      /// check mutltiple checkbox option using common attribut
      cy.get('input[type="checkbox"]').check(['option1', 'option2'])
    })
}) 