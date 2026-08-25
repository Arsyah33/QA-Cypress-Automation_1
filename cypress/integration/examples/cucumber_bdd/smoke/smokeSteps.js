import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../../PageObjects/pages/HomePage"
import Single_ProductPage from "../../../../PageObjects/pages/Single_ProductPage"
import CheckoutPage from "../../../../PageObjects/pages/CheckoutPage"
import LoginPage from   "../../../../PageObjects/pages/LoginPage"

Given("I Succesfully browse to the app", ()=>{
    cy.visit('/')
    cy.url().should('include', 'demo')
    cy.fixture('example').as('data')
})

When('I Confirm to find all 4 products', function(){
    HomePage.displayProducts().should('have.length', 4)
})

When('I click on product name is {string}',(name) =>{
    HomePage.selectProducts(name)

})

When('I validate the product name is {string} on product details page', function(productName){
    Single_ProductPage.getProductName().should('be.visible')
          .and('have.text', productName)
})

When('I validate the prize is {string}', (price)=>{
    Single_ProductPage.getProductPrice().should('be.visible')
          .and('have.text', price)

})

When('I ensure {string} tab is available', (description)=>{
    Single_ProductPage.getProductDescription().should('have.text', description)

})

When('I see description has {string} title', function(processor){
     Single_ProductPage.validateProductDescription().invoke('text').then((des) => {
          expect(des.trim()).to.eq(processor)

})
})

    When('I write a review', function(){
     cy.get('@data').then((data) => {
    Single_ProductPage.writeReview(
    data.name,
    data.review
  )
})
})

    When('I give 5 star rating and submit review', function(){
    Single_ProductPage.clikOnRating()
    Single_ProductPage.submitReview()
})

    When('I validate success mesages for submiting review', function(){
    cy.get('@data').then((data) => {
    Single_ProductPage.validateSuccessMessage()
    .should('be.visible')
    .and('contain', data.successMessage)
})
    })



When('I add item to cart', function(){
    Single_ProductPage.clickOnChart()
    Single_ProductPage.validateCartSuccessMessage().should('be.visible')
      .and('contain', 'Success')
})

When('I click on chart menu & validate', function(){
    Single_ProductPage.openCartDropdown()
    Single_ProductPage.getCartItemMenu()
      //.should('be.visible')
      .and('contain.text', 'MacBook')
      .and('contain.text', '$602.00')

})

When('I click on checkout link', function(){
    Single_ProductPage.clickOnCheckout()
})

When('I click on Loginpage link', function(){
    CheckoutPage.clickOnLoginLink();
})

When('Login with invalid credential', function(){
    LoginPage.failedLogin();

    cy.get('@data').then((data) => {
    LoginPage.getWarningMessage().should('be.visible')
      .invoke('text').then((text) => {
        expect(text.trim()).to.equal(data.warning)
      })
})
})

When('Login with valid credential', function(){
    LoginPage.successLogin();
})

When('Ensure sum of amount is equalto total amount', function(){
     CheckoutPage.validateCheckoutAmount();
})