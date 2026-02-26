/// <reference types="cypress" />

describe('Visit codenbox automaton site', function(){
  it('My First test case', function(){
    cy.visit('https://codenboxautomationlab.com/wp-login.php')
  })

  it('it should field invalid username password', function(){
    cy.visit('https://codenboxautomationlab.com/wp-login.php')
    cy.get ('#user_login').as ('username')
    cy.get ('@username').clear().type('invalidusername', { delay: 20 })
    cy.get ('#user_pass').as ('password')
    cy.get ('@password').clear().type('123456', { delay: 20 })
  }) 
})