/// <reference types="cypress" />
describe('my read-write teset suite', function(){
  it('write on file test', function(){
    cy.writeFile('sampleFile.txt', 'Helloworld\n')
     cy.writeFile('sampleFile.txt', 'This is my sampleFile', {flag: 'a+'})


     // create json file in fixture and write
     cy.writeFile('cypress\\fixtures\\example.json', {
        name:'jane',
        email:'jane@example.com',
        password:123456,
     })

  })
  
  it('read file test', function(){

    //read the text file
    cy.readFile('sampleFile.txt').should('exist').and('contains', 'Hello')
    //read json file from fixture
      //load fixture file
      cy.fixture('example').then((profile) =>{
        expect(profile.name).to.eq('jane')
      })

    })

  it('login test', function(){
    cy.visit('https://login.salesforce.com/?locale=ca')
    cy.fixture('example').then((profile) =>{
      cy.get('#username').type(profile.email)
      cy.get('#password').type(profile.password)
  })

  })
})