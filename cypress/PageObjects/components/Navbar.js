export default class Navbar {
    static clickOnLogo() {
        return cy.get('img[title="Your Store"]').click();
    }

    static searchProduct(text) {
        return cy.get('input[placeholder="Search"]').clear().type(`${text}{enter}`);
    }

    static validateAllSearchResults() {
        return cy.get('#product-list')//.each(($el, index, $list)=>{
        //cy.wrap($el).should('contain.text', productName)
        //})
    }

    static clickOnMyAccount() {
        return cy.get('a[class="dropdown-toggle"] span[class="d-none d-lg-inline"]').click();
    }

    static clickOnLogin() {
        return cy.get('.dropdown-menu.show').contains('a', 'Login').click();
    }
}