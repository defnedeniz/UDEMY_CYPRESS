describe('Cypress Locator', () => {

    it('Html element locate etme', () => {

        cy.get('#user-name') //id locate etme 
        cy.get('.login-box') // class locate etme 
        cy.get('input') // tag locate etme 
        cy.get('input[name="user-name"]') // attribute locate
        cy.get('a:contains("Login")') // Text iceren element locate cy.get('input[placeholder]:contains("Username")') seklinde de olabilir
        cy.get('a').contains("Login")
        cy.contains('Login')
        
    });
    
});