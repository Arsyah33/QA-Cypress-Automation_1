it('component test script', function() {
    // browse to the aplication 
    cy.visit('https://demo.codenbox.com')

    // click on search box, type 'Macbook' and hit enter
    cy.get('#container input.form-control-lg').click();
    cy.get('#container input.form-control-lg').type('MacBook');
    cy.get('#container i.fa-magnifying-glass').click();

    // validate the search result contain text 'Macbook' 
    cy.get('#product-list div:nth-child(1) > div.product-thumb > div.content > div.description > h4 > a').should('contain', 'MacBook');
    cy.get('#product-list div:nth-child(2) > div.product-thumb > div.content > div.description > h4 > a').should('contain', 'MacBook');
    cy.get('#product-list div:nth-child(3) h4 a').should('have.contain', 'MacBook');

    // click on my account tab 
    cy.get('#top li:nth-child(2) span.d-none').click();

    // click on Login menu option
    cy.get('#top a[href="https://demo.codenbox.com/index.php?route=account/login&language=en-gb"]').click();

    // click on Logo image
    cy.get('#logo img.img-fluid').click();

    // Ensure back to home page with title 'Your Store'
    cy.get('#logo img.img-fluid').should('have.attr', 'title', 'Your Store');
});