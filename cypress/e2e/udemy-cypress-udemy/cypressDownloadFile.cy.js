describe('Cypress Download File', () => {

    before(() => {//sonradan sılsın ıstersek before yerıne after yazacagız 
        cy.deleteDownloadsFolder()
    });
    it('Dowload File ', () => {
          cy.on("uncaught:exception", (err, runnable) => {
            return false;
          });
      cy.visit("https://demoqa.com/upload-download");

      cy.get("#downloadButton").click(); //1.yontem
      cy.get("a.btn-primary").click(); //1.yontem
    });
});