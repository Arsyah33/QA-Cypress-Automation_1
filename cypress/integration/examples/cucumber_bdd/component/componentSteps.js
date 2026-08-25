import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NavbarPage from "../../../../PageObjects/components/NavbarPage";    

Given('I browse to the application', () => {
    //NavbarPage.visitHome();
    //NavbarPage.clickListInline();
    //NavbarPage.validateLogoTitle('Your Store');
    NavbarPage.browseToApplication()
});

When('I click on search box, type {string} and hit enter', (product) => {
    NavbarPage.searchProduct(product);
});

When('I validate the search result contain text {string}', (product) => {
    NavbarPage.validateSearchResults(product);
});

When('I click on my account tab', () => {
    NavbarPage.clickOnMyAccount();
});

When('I click on Login menu option', () => {
    NavbarPage.clickOnLogin();
});

When('I click on Logo image', () => {
    NavbarPage.clickOnLogo();
});

Then("Ensure back to home page with title {string}", (title) => {
    NavbarPage.validateLogoTitle(title);
});