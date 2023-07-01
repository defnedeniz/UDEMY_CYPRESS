describe('Before After Kullanimi', () => {
    before(() => {
        cy.log('Before kullanimi - Cypress Test');
        cy.visit('https://www.automationexercise.com/')
    });

    after(() => {
        cy.log('After Kullanimi icin bir ornek')
    });

    it('Basligi dogrula', () => {

        cy.title().should('eq' ,"Automation Exercise")
        
    });
    
});