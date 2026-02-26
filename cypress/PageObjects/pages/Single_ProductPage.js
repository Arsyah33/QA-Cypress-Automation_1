import BasePage from "../BasePage";
export default class Single_ProductPage extends BasePage {
    static getProductName() {
        return cy.get('div[class ="col-sm"] h1') 
        //.should('be.visible')
        //.and('have.text', productName)

    }
    static getProductPrice() {
        return cy.get('.price-new') 
        //.should('be.visible')
            //.and('have.text', price)
    }

    static getProductDescription() {
        return cy.get('.nav-link.active') 
    }
        //.should('have.text', 'Description')

    

    static validateProductDescription(description) {
        return cy.get('div[id="tab-description"] p:nth-child(1)')
    }
        //.invoke('text').then((des) => {
            //des = des.trim()
           // expect(des).to.eq(description)

        //})
    

    static writeReview(review) {
        cy.get('#content > .nav > :nth-child(3) > .nav-link').click()

        // get test data from fixture
        cy.fixture('example.json').then(function (data) {
            this.data = data
            cy.get('#input-author').type(this.data.name)
            cy.get('#input-text').type(this.data.review)
        })
    }

    static clikOnRating(){
        return cy.get('[value="5"]').click()
    }

    static submitReview(){
        return cy.get('#button-review').click()
    }
    
    static validateSuccessMessage(){
         return cy.get('.alert', { timeout: 5000 })//.should('be.visible')
      //.invoke('text').then((text) => {
        //expect(text.trim()).to.equal('Thank you for your review. It has been submitted to the webmaster for approval.')
     // })
    }

    static clickOnChart(){
        return cy.get('#button-cart').click()
    }

    static validateCartSuccessMessage(){
         return cy.get('.alert.alert-success.alert-dismissible')
         //.should('be.visible')
      //.and('contain', 'Success')
    }

    static clickOnChartButton(){
        Single_ProductPage.pause(2000)
        return cy.get('.dropdown.d-grid').click()
    }

    static getCartItemMenu(){
         return cy.get('.dropdown-menu.dropdown-menu-end.p-2.show')
         //.should('be.visible')
      //.and('contain', 'x 1', '602.00')
      // .and('contain', '$602.00')
      //.and('contain', ' View Cart')
      //.and('contain', 'Checkout')
    }

    static clickOnCheckout(){
         return cy.get('.dropdown-menu.dropdown-menu-end.p-2.show').contains('a', 'Checkout').click()
    }
}
