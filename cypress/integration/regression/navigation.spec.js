/// <reference types="cypress" />

import LoginPage from "../../page_objects/LoginPage"


const loginPage = new LoginPage




describe("Check the login feature of the internet app",()=>{

    it("Should verify valid user",()=>{

            loginPage.visit(); 
            loginPage.signInWith('tomsmith', 'SuperSecretPassword!')
            loginPage.getMessage().contains('You logged into a secure area')
        })

        it("Should verify invalid user",()=>{

            loginPage.visit(); 
            loginPage.signInWith('admin', 'admin!')
            loginPage.getMessage().contains('Your username is invalid!')
        })
    })

