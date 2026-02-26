/// <reference types="cypress" />

class BaseClass{
    static loadHomePage(){
        cy.visit('https://codenboxautomationlab.com')

    }

    static wait(){
        cy.wait(3000)
    }
}

class HomePage extends BaseClass{
    static scrollToConnect(){
        cy.get('tbody tr td span strong span button a').as('connect').scrollIntoView()
        cy.get('@connect').should('be.visible')
    }

    static scrollToWhyChoose(){
        cy.contains('Why Choose Codenbx').scrollIntoView
        cy.wait(2000)
    }
}

describe('Page Scroll into view', function(){

    before(function(){
        // runs once before all the test case executed
        // setup test data
        // seed or reset the database
        HomePage.loadHomePage();// load the homepage

    })

    beforeEach(function(){
        // runs before each it block 

    })

    after(function(){
        // runs once after all the test case executed
        // test clean up
        // clean cookies
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    afterEach(function(){
        // runs after each it block
    })

    it('Scroll to an element up & down', function(){
        
        HomePage.scrollToConnect(); // scroll to lets connect button
        HomePage.wait(); //wait for 3 second
        HomePage.scrollToWhyChoose(); // scroll to why choose codenbox? section
    })
})