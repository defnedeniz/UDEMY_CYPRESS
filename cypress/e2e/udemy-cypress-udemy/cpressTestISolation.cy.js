describe("cpress test Isolation", {testIsolation:false} ,() => {
  it("Dosya yukleme -1", () => {
    cy.visit("https://www.qrcode-monkey.com/");
    cy.get("div:nth-child(3) > div.pane-header > h3").click();
    cy.get("div[class='logo-preview']").attachFile(
      { filePath: "photo.jpg" },
      { subjectType: "drag-n-drop" }
    );
  });

  it("Dosya yukleme -2", () => {
    const fileName = "image (8).png";
    cy.fixture("image (8).png")
      .then(Cypress.Blob.base64StringToBlob) //convert işlemi için
      .then((fileContent) => {
        cy.get("div[class='logo-preview']").attachFile(
          { fileContent, fileName, mimeType: "image/**" },
          { subjectType: "drag-n-drop" }
        );
      });
  });
});
