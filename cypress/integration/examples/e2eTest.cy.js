/// <reference types="cypress" />

import CheckoutPage from "../../PageObjects/pages/CheckoutPage";
import HomePage from "../../PageObjects/pages/HomePage";
import LoginPage from "../../PageObjects/pages/LoginPage";
import Single_ProductPage from "../../PageObjects/pages/Single_ProductPage";
import Navbar from "../../PageObjects/components/Navbar";

describe('Ecommerce Smoke Suit', { retries: 1 }, () => {
  const description = 'Intel Core 2 Duo processor';
  const productName = 'MacBook';
  const price = '$602.00'
  const success = "Success"
  beforeEach(function () {
    cy.visit('/')
    cy.url().should('include', 'demo')
    Cypress.config('defaultCommandTimeout', 8000)
    // clear cookies and local storage before the 1st test
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.fixture('example').as('data')


    //cy.fixture('example').then((data) => {
    //cy.fixture('example').then(function (data) {
      //this.data = data
    //})
  })

  it('Component test', () => {
    /*Cypress.config('defaultCommandTimeout', 8000)
    cy.visit('https://demo.codenbox.com')
    cy.visit('/')
    cy.url().should('include', 'demo') */

    Navbar.searchProduct(productName)
    Navbar.validateAllSearchResults().each(($el, index, $list) => {
      cy.wrap($el).should('contain.text', productName)
    })
    Navbar.clickOnMyAccount()
    Navbar.clickOnLogin()
    Navbar.clickOnLogo()
  })

  it('e-2-e smoke test', () => {
    /*Cypress.config('defaultCommandTimeout', 8000)
    cy.visit('https://demo.codenbox.com')
    cy.visit('/')
    cy.url().should('include', 'demo') */

    // find all the 4 product
    HomePage.displayProducts().should('have.length', 4)
    //cy.get('.col.mb-3').should('have.length', 4)

    // filter the product list to find the macbook product
    HomePage.selectProducts(productName)

    /*cy.get('.col.mb-3').filter(':contains("' + productName + '")')
    .then(($product) => {
    // check if the product name is present
    expect($product.text()).to.include(productName)*/

    /*CLick on the product name
    cy.contains(productName).click()*/


    // validate the product name is Macbook
    Single_ProductPage.getProductName().should('be.visible')
      .and('have.text', productName)
    /*cy.get('div[class ="col-sm"] h1').should('be.visible')
    .and('have.text', productName) */


    // validate the prize is $602.00
    Single_ProductPage.getProductPrice().should('be.visible')
      .and('have.text', price)

    /*cy.get('.price-new').should('be.visible')
    .and('have.text', price) */


    // get product description
    Single_ProductPage.getProductDescription().should('have.text', 'Description')
    // cy.get('.nav-link.active').should('have.text', 'Description')

    //const description = 'Intel Core 2 Duo processor';
    Single_ProductPage.validateProductDescription().invoke('text').then(function (des) {
      //Single_ProductPage.validateProductDescription().should('be.visible')
            //.invoke('text').then(function (des) { 
      des = des.trim()
      expect(des).to.eq(description)
      //expect(des).to.eq(this.data.description)

      //const description = 'Intel Core 2 Duo processor';
    //cy.get('div[id="tab-description"] p:nth-child(1)').invoke('text').then((des) => {
    //des = des.trim()
    //expect(des).to.eq('Intel Core 2 Duo processor')


    })
    //cy.fixture('example').then((data) => {


    //cy.log('Author:', data.name)
    //cy.log('Review:', data.review)
    cy.get('@data').then((data) => {
    // write a review
    Single_ProductPage.writeReview(data.name, data.review)
    /*it.skip('write review', () => {
    cy.get('#content > .nav > :nth-child(3) > .nav-link').click()*/

    // get test data from fixture
    /*cy.fixture('example.json').then(function (data) {
    //this.data = data
    //cy.get('#input-author').type(this.data.name)
    //cy.get('#input-text').type(this.data.review)
    })*/

    /// give 5 star rating
    Single_ProductPage.clikOnRating()
    //cy.get('[value="5"]').click()
    Single_ProductPage.submitReview()//cy.get('#button-review').click() //submit review

    /// validate succes mesage
    Single_ProductPage.validateSuccessMessage()
    .should('be.visible')
    .and('contain', data.successMessage)
    //.invoke('text')
    //.then((text) => {
      //expect(text.trim()).to.equal(data.successMessage)
    //.then(function (text) {
        //expect(text.trim()).to.equal(this.data.successMessage)
        //( 'Thank you for your review. It has been submitted to the webmaster for approval.')
      //})
    /*cy.get('.alert', { timeout: 5000 }).should('be.visible')
    //.invoke('text').then((text) => {
    // expect(text.trim()).to.equal('Thank you for your review. It has been submitted to the webmaster for approval.')
    //})

    }) */
    })
  
    // click on add to cart
    Single_ProductPage.clickOnChart()
    /*cy.get('#button-cart').click()
    cy.get()('.alert', {timeout:5000}).should('be.visible')*/

    Single_ProductPage.validateCartSuccessMessage().should('be.visible')
      .and('contain', success)
    //cy.get('.alert.alert-success.alert-dismissible').should('be.visible')
    //.and('contain', 'Success')
    //<div class="alert alert-success alert-dismissible" xpath="1" style="opacity: 0.0187014;"><i class="fa-solid fa-circle-check"></i> Success: You have added <a href="https://demo.codenbox.com/index.php?route=product/product&amp;language=en-gb&amp;product_id=43">MacBook</a> to your <a href="https://demo.codenbox.com/index.php?route=checkout/cart&amp;language=en-gb">shopping cart</a>! <button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>

    // clin on chart button
    //cy.wait(2000)
    //Single_ProductPage.clickOnChartButton()
    /*cy.get('.dropdown.d-grid').click()
    cy.get('.dropdown-menu.dropdown-menu-end.p-2.show').as('displayItem').should('be.visible')
    .and('contain', 'x 1', '602.00')
    .and('contain', '$602.00')
    and('contain', ' View Cart')
    and('contain', 'Checkout')*/
    Single_ProductPage.openCartDropdown()

    Single_ProductPage.getCartItemMenu()
      //.should('be.visible')
      .and('contain.text', 'MacBook')
      .and('contain.text', '$602.00')
      //.and('text', 'x 1', '602.00')
      //.and('text', ' View Cart')
      //.and('text', 'Checkout')

    Single_ProductPage.clickOnCheckout()

    //click on checkout
    /*cy.contains('Checkout').click()
    cy.get('@displayItem').contains('a', 'Checkout').click()*/

    //login to account
    //cy.get('form[id="form-register"] p a strong').click()
    CheckoutPage.clickOnLoginLink();

    //test with invalid login
    LoginPage.failedLogin();

    /*const warning = 'Warning: No match for E-Mail Address and/or Password.'

    //cy.get('.alert.alert-danger.alert-dismissible').should('be.visible')
    //.invoke('text').then(function(text){
    //expect(text.trim()).to.equal(warning)
    })*/
    LoginPage.getWarningMessage().should('be.visible')
      .invoke('text').then(function (text) {
        expect(text.trim()).to.equal(this.data.warning)
      })

    //cy.login();
    LoginPage.successLogin();

    //validate checkout page
    /*let sum = 0
    cy.get('table[class="table table-bordered table-hover"] tfoot tr td:nth-child(2)')
    .each(($el, index, $list) => {

     if (index < $list.length - 1) {
    const price = $el.text() //  "$500.00" $1,20.00 //500 -> 500.00
    remove $ sign or ,string need to convert to number: regex /[^0-9.-] +/g
    const amount = parseFloat(price.replace(/[^0-9.-]+/g, '')) //100
    sum = sum + amount // $5002.00 + 100.00
    cy.log('sum of amount is' + sum);

    // }

    }).then(() => {
    cy.get('tfoot > :nth-child(4) > :nth-child(2)').invoke('text').then((total) => {
    const totalAmount = parseFloat(total.replace(/[^0-9.-]+/g, '')) //602.00
     expect(totalAmount).to.equal(sum) // 602.00
     })

     })
    })*/
    CheckoutPage.validateCheckoutAmount();

  })
})