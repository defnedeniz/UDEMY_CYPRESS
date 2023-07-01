describe('Cypress Assertions Kullanimi', () => {
    it('Assertion Kullanim Ornekleri', () => {
        cy.visit('https://shopist.io') //url gıttık
        cy.title().should('eq','Shop.ist') // baslıgı dogruladik
        cy.url().should('contains','shop') //url dogruladik


        cy.get('#main section > a > div > div:nth-child(1)').should('be.visible')//gorunurlugunu konrtol ettık 
        cy.get('#main section > a > div > div:nth-child(1)').should('be.visible').and('contain', 'Shop')//gorunurlugunu kontrol ettıkten sonra shop kelımesını ıcerıp ıcermedıgını kontrol ettık 
        //gorunurlugunu kontrol ettıkten sonra shop kelımesını ıcerıp ıcermedıgını kontrol ettık
        //cy.get('#main section > a > div > div:nth-child(1)').should('contains', 'Shop')
       
        cy.get('#main section > a > div > div:nth-child(1)').should('have.text','Shop the look')
       
        cy.get('#main section > a > div > div:nth-child(1)').should('have.length',1)
        cy.get('#main section > a > div > div:nth-child(1)').its('length').and('eq',1)

        cy.get('#main section > a').should('have.attr','href', '/department/chairs')

        
        
      

   
        
    });
    
});