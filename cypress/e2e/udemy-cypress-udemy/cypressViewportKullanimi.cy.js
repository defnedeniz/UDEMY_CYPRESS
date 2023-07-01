describe('viewport Kullanimi', () => {
    it('viewport whit number  ', () => {
        cy.viewport(1200,1000)
        cy.visit('https://shopist.io/')
        
    });

    it('viewport whit string ', () => {
        cy.viewport('macbook-16')
        cy.visit('https://shopist.io/')
        
    });
    it('viewport whit string ', () => {
        cy.viewport('iphone-se2')
        cy.visit('https://shopist.io/')
        
    });
    
    
});