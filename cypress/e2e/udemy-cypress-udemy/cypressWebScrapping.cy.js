describe('Wep scrapping', () => {
    it('write file to txt for products', () => {

        cy.step('shopist.io sandalyelr sayfasina gidiyor')
        cy.visit("https://shopist.io/department/chairs");

        cy.step('Description classının içindeki sandalye adı ve fıyatlarının uzunlugu')
        cy.get('.description').as("chairsPrice").its("length").should("eq", 9);

        const result=[];
        cy.step("sonucları logluyoruz ");

        cy.get('@chairsPrice').each(($el,index) => {
            
            cy.log("Results: " + index + "- " + $el.text())
            result.push($el.text());
        }).then(() =>{
            cy.step('sonuclari cahairsPrice.txt.file yazdiriyoruz')
            cy.writeFile('cypressWriteFileDoc/chairsPrice.txt', result)
        })
        
    });
    
});