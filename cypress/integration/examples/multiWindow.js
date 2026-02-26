/// <reference types="cypress" />

describe('Test alert function', function (){
     beforeEach(function (){
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

})

})
