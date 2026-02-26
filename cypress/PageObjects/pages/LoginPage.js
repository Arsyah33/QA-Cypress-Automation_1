import BasePage from "../BasePage";

export default class LoginPage extends BasePage {
    static failedLogin(){
        cy.loginShouldFail();

    }

    static getWarningMessage(){
    return cy.get('.alert.alert-danger.alert-dismissible')//.should('be.visible')
    //.invoke('text').then(function(text){
      //expect(text.trim()).to.equal(warning)
    //})
    }

    static successLogin(){
        cy.login();
    }

    
}