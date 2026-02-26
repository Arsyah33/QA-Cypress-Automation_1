describe('My First Test suite', function () {
  it('visit Codenbox site', () => {
    cy.visit("https://codenboxautomationlab.com/practice/")
    cy.get('input[value="radio2"]').check().should('be.checked')
    //driver findElement
    cy.get('#search-2 > #searchform > .search-input').type('automation').should('have.value','automation')
  })
})