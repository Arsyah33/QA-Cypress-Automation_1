/// <reference types="cypress" />

describe('Test child tab', function () {

  it('test child tab', function () {

    cy.visit('https://codenboxautomationlab.com/practice/')

    // ambil URL dari tombol open tab
    cy.get('#opentab')
      .should('have.attr', 'href')
      .then((url) => {

        // buka URL itu langsung (tanpa click)
        cy.visit(url)

        // sekarang kita sudah di domain YouTube
        cy.url().should('include', 'youtube')

        // pastikan channel name muncul
        cy.get('ytd-channel-name', { timeout: 15000 })
          .should('contain.text', 'Codenbox AutomationLab')

      })

  })


     /*beforeEach(function (){
         cy.visit('https://codenboxautomationlab.com/practice/')

})

    // it('test child tab', function(){
    it('test child tab',  
        { pageLoadTimeout: 120000 }, 
        function (){
       cy.get('#opentab').invoke('removeAttr', 'target').click();
       cy.origin("https://www.youtube.com/@CodenboxAutomationLab", () => {
    
               cy.get('h1[class="dynamicTextViewModelH1"] span[role="text"]').should('contain', 'Codenbox AutomationLab')
               //cy.get('h1[class="dynamic-text-view-model-wiz__h1"] span[role="text"]').should('contain','Codenbox AutomationLab')
   })

})*/

})
