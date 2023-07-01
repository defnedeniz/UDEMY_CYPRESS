const { method } = require("cypress/types/bluebird");

describe('Temel Komutlar', () => {
    it('Temel Komıtlar cy.visit kullanimi', () => {
        cy.visit("/")//baseurl cypress.config.js de tanimlandiysa url gitmesi icin sadece parantez icine / yazmamız yeterli.
        cy.visit("/commands")  //base url tanımlandıysa gerı kalan kisim / sonra yazılır commands gibi
        cy.visit("https://example.cypress.io/commands")  // baseUrl tanimlanmadiysa urli direk yaziyoruz 
        cy.visit({
            url:"https://example.cypress.io/",//baseUrl tanimlanmadiysa tanimlandiysa gene sadeev tirnak icine / yazmak yeterli olcak
            method: 'GET'
        })
        
    });
    it('Temel Komıtlar cy.title kullanimi', () => {
        cy.title().should('eq',"cypress.io") //title tam esitlik olursa dogrular 
        cy.title().should('include','cypress') //title  icerisinde cypress geciyorsa dogrular
        cy.title().should('contains','cypress') //title  icerisinde cypress geciyorsa dogrular

        
    });

    it('Temel Komıtlar cy.url ve cy.location kullanimi', () => {
        cy.url().should('eq', 'https://example.cypress.io/commands')//url tam esitlik olursa dogrular 
        cy.url().should('include', 'commands')//url icerisinde commands geciyorsa dogrular 
       
       cy.location('pathname').should('eq', 'commands') // gidilen pathi dogrulamis oluyoruz
       cy.location('protocol').should('eq', "https") // gidilen protocolu dogrulamis oluyoruz
       cy.location('hostname').should('eq', "https://example.cypress.io/") // tam esitlikte dogrular
       cy.location('hostname').should('include', "cypress.io/") //cypress.io icerirse dogrular


    });

    it('Temel Komutlar cy.get kullanimi', () => {
        cy.get("#button") // dogru kullanim
        cy.get("#button").as('deneme') //cy.get ('@deneme')
        cy.get('a[href="example.cypress.io"]')
        cy.get('.dropdown-menu-list')
        cy.get('.div.button')
        cy.get('.dropdown-menu-list')
        cy.get('ul li.first')

        
    });

    it('Temel Konutlar cy.log kullanimi', () => {
        cy.log('Temel Komut cy.log kullanimi') //dogrulama amaclı kullanılmaz hatanın nerde oldugunu anmamaız ıcın msj verır 
        cy.log('be.visible')// yanliş kullanim
        cy.log('Bır msj',['bir msj ' ,'iki msj', 'uc msj'])//cikti: Bir msj,[bir msj,iki msj,uc msj]

         // skip yazdigimizda o suıtı yada test caseı calısmtımadan atlar dıgerıne gecer
        //only dedıgımızde sadece bunu testi calıstır demek oluyor 


        
    });

   
});

