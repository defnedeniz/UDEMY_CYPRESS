describe('Alias,Then,Each,Wrap', () => {
    it('Kullanim Ornegi', () => {

        let itemlenght

        cy.visit('https://shopist.io/')

        cy.get('.navbar-section a').as('NavbarMenus')//Alias örnek eger tek bır vısıble ıstıyorsak buraya asden once yazıyoruz .should('be.visible') ıbaresını
        cy.get('@NavbarMenus')
        .then(($el)=>{
         itemlenght=$el.lenght   
    })
    .each(($el, index)=>{
        //cy.log($el.text());
        cy.get('@NavbarMenus').should('be.visible')//eger  her bır elemanı vısıble etmek ıstıyorsak eachın ıcne yazıyoruz .should('be.visible') ıbaresını
        cy.log('Navbar Menu ' + index + ": " + $el.text())

        if ($el.text().includes('Bedding')){
            cy.wrap($el).click()
        }
     })
        
    });
    
});