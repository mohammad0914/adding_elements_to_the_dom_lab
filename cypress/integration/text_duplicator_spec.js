describe("text duplicator", () => {
    it("Valid path exists to text duplicator", () => {
      cy.visit("./textDuplicator.html");
    });
    it("Duplicates text the correct number of times", () => {
        cy.get("#text-duplicator-string-input")
        .type("Hello world!")
        .get("#text-duplicator-number-input")
        .type("5")
        .get("#text-duplicator-list li")
        .should('have.length', 5)
        .each((item) => expect(item).to.contain("Hello world!"))
    })
})
  