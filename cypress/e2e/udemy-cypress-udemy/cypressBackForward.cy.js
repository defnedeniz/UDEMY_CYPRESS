describe('Back Forward Kullanimi', () => {
    it('cypress.io sayfasina gidip tarayicida ileri geri komutlarini ogrenecegiz ', () => {
        cy.visit('https://www.cypress.io')

        cy.get('nav > div > ul > li:nth-child(5) > a').click()
        cy.title().should('eq', "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")

        cy.go('back') //anasayfaya donecek  cy.go('-1') yazdıgımızda da back mantıgında calisir 
        cy.title().should('eq', "JavaScript Component Testing and E2E Testing Framework | Cypress")

        cy.go('forward') //pricing sayfasina geri donecek cy.go('1') yazdıgımızdada forward mantıgında calisir
        cy.title().should('eq', "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")

        cy.go('-1') //anasayfaya donecek  cy.go('-1') yazdıgımızda da back mantıgında calisir 
        cy.title().should('eq', "JavaScript Component Testing and E2E Testing Framework | Cypress")

        cy.go('1') //pricing sayfasina geri donecek cy.go('1') yazdıgımızdada forward mantıgında calisir
        cy.title().should('eq', "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")
    });
    
});