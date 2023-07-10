

describe('Hizli Text yazimi', () => {
    it('Hizli text yazimi testi', () => {
        cy.visit("https://www.automationexercise.com/contact_us");
        cy.get("#message")
        .type("If you have any suggestion areas or improvements, do let us know. We will definitely work on it.deneme test hizli test yazdir vs."
        );
        
    });

    
      it("Hizli text yazimi testi-2", () => {
        cy.visit("https://www.automationexercise.com/contact_us");
        cy.get("#message").type(
          "If you have any suggestion areas or improvements, do let us know. We will definitely work on it.deneme test hizli test yazdir vs.",
          { delay: 0 }
        );
      });

    
});