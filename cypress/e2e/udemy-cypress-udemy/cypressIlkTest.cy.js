describe('cypress Ilk Test', () => {

    it('ilk Test', () => {
        cy.visit('https://www.automationexercise.com/')//baseUrl tanimlanmamiştir
        cy.title().should('eq' ,"Automation Exercise")
        cy.url().should('eq', 'https://www.automationexercise.com/')
        
    });

    it('ikinci Test', () => {
        cy.visit('https://www.automationexercise.com/')//baseUrl tanimlanmamiştir
        cy.title().should('include' ,"Automation")
        cy.url().should('include', 'automationexercise.com/')
        
    });
    
});