/// <reference types="cypress-downloadfile"/>

describe('Download File', function (){
    it('Download File test', function(){
    cy.downloadFile('https://codenboxautomationlab.com/wp-content/uploads/2023/02/DemoData.csv','MyDownloads','testData.csv')

    })
   
})