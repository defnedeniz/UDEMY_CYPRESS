import { slowCypressDown } from 'cypress-slow-down'

const { faker }=require('@faker-js/faker')

let fakeEmail=faker.internet.email()
let fakePassword=faker.internet.password()
let fakeName=faker.name.firstName()

slowCypressDown(false)

describe('Slow Down Kullanimi', () => {
    it('slowdorn ile örnek test', () => {
      cy.slowDown(2000);
      cy.visit("https://automationexercise.com/login");
      cy.get("input[data-qa='login-email']").type(fakeEmail);
      cy.slowDownEnd(); //bu yazdıgımızda slowCypressDown(false) false yazmalıyız
      cy.get("input[data-qa='login-password']").type(fakePassword);
      cy.get("[data-qa='login-button']").click();
      cy.slowDownEnd(); //bu yazdıgımızda slowCypressDown(false) false yazmalıyız
    });

    it('slowdown ile örnek test-2', () => {
        cy.visit('https://automationexercise.com/login')
        cy.get("input[data-qa='login-email']").type(fakeName)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("[data-qa='login-button']").click()
        cy.get("input[data-qa='login-email']")
          .invoke("prop", "validationMessage")
          .should(
            "eq",`Lütfen e-posta adresine bir "@" işareti ekleyin. "${fakeName}" adresinde "@" eksik.`
          );

        
    });

});

//### slowDown

//Terminale =⇒  npm i -D cypress-slow-down    yazıp =⇒Enter yapıyoreuz 

//import { slowCypressDown } from "cypress-slow-down";

//lowCypressDown(false)//içine bişey yazmazsak her satırdati tetleri 1 saniyede yapacak end içinde içine false yazmalı, end koymazsak baştan sona tüm testlerde yavaşlatır

//sadece bir it içinde kullanmak istiyorsak itin sonunada end demeliyiz yoksa diğerine geçer

//cy.slowDown(2000);//diyeceğiz

//cy.slowDownEnd(); eklediğimiz yerde durdurur

//TypeHizlandirma
//Terminale =⇒  npm i -D cypress-slow-down    yazıp =⇒Enter yapıyoreuz 
//import { slowCypressDown } from "cypress-slow-down";
//slowCypressDown(false)//içine bişey yazmazsak her satırdati tetleri 1 saniyede yapacak end içinde içine false yazmalı, end koymazsak baştan sona tüm testlerde yavaşlatır
//sadece bir it içinde kullanmak istiyorsak itin sonunada end demeliyiz yoksa diğerine geçer
//cy.slowDown(2000);//diyeceğiz
//cy.slowDownEnd(); eklediğimiz yerde durdurur



