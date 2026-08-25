export default class NavbarPage {
    static browseToApplication() {
        cy.visit('/')
    }

    static searchProduct(productName) {
        cy.get('#container input.form-control-lg')
            .clear()
            .type(`${productName}{enter}`)
    }

    static validateSearchResults(productName) {
        return cy.get('#product-list h4 a')
            .should('have.length', 3)
            .each(($product) => {
                cy.wrap($product).should('contain.text', productName)
            })
    }

    static clickOnMyAccount() {
        cy.get('#top li:nth-child(2) span.d-none').click()
    }

    static clickOnLogin() {
        cy.get('#top a[href*="route=account/login"]').click()
    }

    static clickOnLogo() {
        cy.get('#logo img.img-fluid').click()
    }

    static validateLogoTitle(title) {
        return cy.get('#logo img.img-fluid').should('have.attr', 'title', title)
    }
}