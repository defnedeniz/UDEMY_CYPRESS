describe('Custom Commands', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/login')
    });
    it('custom Commands Kullanim Ornek Invalid Username Valid Password', () => {

        cy.login('deneme@abc.com','denemePassword')

       //cy.visit('https://www.automationexercise.com/login')
       //cy.get('input[data-qa="login-email"]').type('deneme@abc.com')
      //cy.get('input[data-qa="login-password"]').type('denemeParola')
      //cy.get('button[data-qa="login-button"]').click('') bunu commonds js ye tanımlarsak sadece cy.login() yazmamısz yeterli
        
        
    });

    it('custom Commands Kullanim Ornek Valid Username Invalid Password', () => {

        cy.login('deneme@gmail.com','denemePassword2')
        
        
    });
    
});