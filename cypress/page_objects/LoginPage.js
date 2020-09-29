/// <reference types="cypress" />


class LoginPage {

    signInWith(user, pass){

        cy.get('input#username').type(user)
        cy.get('input#password').type(pass)
        cy.get('.fa.fa-2x.fa-sign-in').click()
    }

    waitForLoad(){
        cy.wait('input#username')
    }

    visit(){
        cy.visit('/login')
    }

    getMessage(){

        return cy.get('div#flash')
    }

}

export default LoginPage 