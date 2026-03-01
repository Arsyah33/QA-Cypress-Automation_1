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
        return cy.get('#tab-description p').first()
        //return cy.get('div[id="tab-description"] p:nth-child(1)')
    }
    //.invoke('text').then((des) => {
    //des = des.trim()
    // expect(des).to.eq(description)

    //})


    static writeReview(name, review) {
        cy.get('#content > .nav > :nth-child(3) > .nav-link').click()

        cy.get('#input-author')
            .should('be.visible')
            .clear()
            .type(String(name))

        cy.get('#input-text')
            .should('be.visible')
            .clear()
            .type(String(review))

        // get test data from fixture
        //cy.fixture('example.json').then(function (data) {
        //this.data = data
        //cy.get('#input-author').type(this.data.name)
        //cy.get('#input-text').type(this.data.review)
        // })
    }

    static clikOnRating() {
        return cy.get('[value="5"]').click()
    }

    static submitReview() {
        return cy.get('#button-review').click()
    }

    static validateSuccessMessage() {
        return cy.get('.alert', { timeout: 5000 })//.should('be.visible')
        //.invoke('text').then((text) => {
        //expect(text.trim()).to.equal('Thank you for your review. It has been submitted to the webmaster for approval.')
        // })
    }

    static clickOnChart() {

        // spy request cart update
        cy.intercept('GET', '**/index.php?route=common/cart.info**').as('cartUpdate')

        cy.get('#button-cart')
            .should('be.visible')
            .click()

        // tunggu ajax selesai
        cy.wait('@cartUpdate')

        // baru cek cart berubah
        cy.get('#cart')
            .should('be.visible')
            .and('contain.text', '1 item')
    }

    static validateCartSuccessMessage() {
        return cy.get('.alert.alert-success.alert-dismissible')
        //.should('be.visible')
        //.and('contain', 'Success')
    }

    // static clickOnChartButton(){
    //return cy.get('.dropdown.d-grid').should('be.visible').click()

    //cy.get('.dropdown.d-grid button')
    // .should('be.visible')
    //.trigger('mousedown', { button: 0 })
    //.trigger('mouseup', { force: true })
    //.click({ force: true })
    //.click()
    //.should('have.attr', 'aria-expanded', 'true')

    // wait dropdown muncul
    //cy.get('.dropdown-menu')
    //.should('have.class', 'show')
    //.should('be.visible')


    //Single_ProductPage.pause(2000)
    //return cy.get('.dropdown.d-grid').click()
    // }
    static openCartDropdown() {
        cy.get('#cart')
            .should('be.visible')
            .click()

        cy.get('.dropdown-menu')
            .should('be.visible')
    }


    static getCartItemMenu() {
        return cy.get('.dropdown-menu')
        //return cy.get('#cart')
        //.find('.dropdown-menu.show')
        //return cy.get('.dropdown-menu.show')
        //return cy.get('.dropdown-menu')

        //return cy.get('.dropdown-menu.dropdown-menu-end.p-2.show')
        //.should('be.visible')
        //return cy.get('#cart').within(() => {
        //cy.get('.dropdown-menu.show')
        //.should('contain.text', 'MacBook')
        //.and('contain.text', '$602.00')
        //.and('contain', 'x 1', '602.00')
        // .and('contain', '$602.00')
        //.and('contain', ' View Cart')
        //.and('contain', 'Checkout')

        //})
    }


    static clickOnCheckout() {
        cy.get('.dropdown-menu')
            .should('be.visible')
            .contains('Checkout')
            .click()
        //return cy.get('#cart')
        //.find('.dropdown-menu.show')
        //.contains('Checkout')
        //cy.get('#cart').within(() => {
        //cy.contains('.dropdown-menu.show a', 'Checkout')
        // .should('be.visible')
        //.click()
        //})

        //return cy.get('.dropdown-menu.dropdown-menu-end.p-2.show').contains('a', 'Checkout').click()

        //cy.get('.dropdown-menu')
        //.should('be.visible')
        //.contains('Checkout')

        //cy.contains('.dropdown-menu a', 'Checkout')
        //.should('be.visible')
        //return cy.get('.dropdown-menu.dropdown-menu-end.p-2.show')
        // .contains('a', 'Checkout')
        //.click()
    }


}
