describe('Before After Kullanimi', () => {
    beforeEach(() => {
        cy.log('BeforeEach kullanimi - Cypress Test');
        cy.visit('https://www.automationexercise.com/')
    });

    afterEach(() => {
        cy.log('AfteEach Kullanimi icin bir ornek')
    });

    it('Basligi dogrula', () => {

        cy.title().should('eq' ,"Automation Exercise")
        
    });

    it('url dogrula', () => {

        cy.url().should('include' ,"automation")
        
    });

    it('hostname dogrula', () => {

        cy.location('hostname').should('include' ,"automation")
        
    });
    
});