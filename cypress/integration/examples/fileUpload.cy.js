/// <reference types="cypress" />

describe('File upload', () => {
  it('File upload test', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
    cy.get('#file-submit').click()
    cy.get('h3').should('be.visible').and('have.text', 'File Uploaded!')
  })
})