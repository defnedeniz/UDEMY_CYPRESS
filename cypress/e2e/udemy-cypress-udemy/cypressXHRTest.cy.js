describe('XHR test', () => {

    it('cy.request Kullanimi-1', () => {
        cy.request("https://jsonplaceholder.cypress.io/comments").should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(500);
            expect(response).to.have.property('headers')
        });
        
    });

    it("cy.request Kullanimi-2", () => {
      cy.request({
        url: "https://jsonplaceholder.cypress.io/comments",
        method:'GET'
      }).then((response) => {
             expect(response.status).to.eq(200);
             expect(response.body).to.have.length(500);
             expect(response).to.have.property("headers");

      })

    });

       it("cy.request Kullanimi-3", () => {
         cy.request("https://jsonplaceholder.cypress.io/comments")
           .its("status")
           //.its("content-type")
           //.should('include', 'application/json')
           .should("eq",200);
       });


    it('cy.intercept Kullanimi', () => {//ornek kalıp yapıldı sıte ısmı locatler konulabılır 
        cy.intercept('GET','url gireceksiniz').as('abc')
        cy.visit('#loginButton').click()
        cy.get('#username').type('deneme')
        cy.get('#password').type('test')
        cy.get('#btn').click()

        cy.wait('@abc')
    });
    
});