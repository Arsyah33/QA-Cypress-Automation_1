describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://codenboxautomationlab.com/registration-form/')


    cy.fixture('example.json').then((data) => {
       cy.get('#nf-field-17').type(data.name)
        cy.get('#nf-field-18').type('test')
        cy.get('#nf-field-19').type(data.email)
        cy.get('#nf-field-22').select('Cypress Automation').should('have.value', 'cypress-automation')
        cy.get('#nf-label-class-field-23-1').click()
        cy.get('#nf-field-15').click()
        cy.get('.nf-response-msg > p').should('contain', 'Thank you!')
    })

  })
})