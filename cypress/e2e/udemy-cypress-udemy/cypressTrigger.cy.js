describe("Trigger Kullanimi", () => {
  it("Mouseover Kullanimi-1", () => {
    cy.visit("https://www.amazon.com.tr/");
    cy.get("span#nav-link-accountList-nav-line-1").trigger("mouseover");
    //.trigger('mousedown')
    //.trigger('mouseleave')
    cy.get("div#nav-al-your-account a:nth-child(2) > span").click();
  });

  it("Mouseover Kullanimi-2", () => {
    cy.visit("https://www.amazon.com.tr/");
    cy.get("span#nav-link-accountList-nav-line-1").trigger("mousdown", {
      button: 0,
    }); //mouse in sol kısmına tıklamasi icin
    //cy.get("span#nav-link-accountList-nav-line-1").trigger('mousdown',{button : 1});//mouse in orta kısmına tıklamasi icin
    //cy.get("span#nav-link-accountList-nav-line-1").trigger('mousdown',{button : 2});//mouse in sag kısmına tıklamasi icin
    cy.get("div#nav-al-your-account a:nth-child(4) > span").click();
  });
});
