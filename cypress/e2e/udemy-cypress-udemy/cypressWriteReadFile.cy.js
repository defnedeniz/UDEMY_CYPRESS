describe('Cypress Write File', () => {
    it('write file', () => {
        cy.writeFile('cypressWriteFileDoc/exampleFile.txt', 'sıfırdan cypress derslerine hosgeldiniz.\n');
        cy.writeFile('cypressWriteFileDoc/exampleFile.txt','Bu egitim serisinde sifirdan ileri seviye cypress ogrenecksiniz.',{flag:'a+'})

        
    });
    
});

describe('Cypress Read File', () => {
    it('write read-1', () => {
        
        cy.readFile('cypressWriteFileDoc/exampleFile.txt').should('contains', 'cypress');
          
    });
    it('read file-2', () => {
        cy.readFile('cypressWriteFileDoc/exampleFile.txt').then((text) => {
            expect(text).to.contain('egitim')
        })
        
    });
    
});