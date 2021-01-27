describe("1. Text Duplicator", () => {
  for (let i = 1; i <= 5; i += 1) {
    it(`duplicates text when the input is ${i}`, () => {
      cy.visit("./textDuplicator.html");

      cy.get("#text-duplicator-string-input")
        .clear()
        .type("Hello world!")
        .get("#text-duplicator-number-input")
        .clear()
        .type(`${i}`)
        .get("#text-duplicator-form button")
        .click()
        .get("#text-duplicator-list li")
        .should("have.length", i)
        .each((item) => expect(item).to.contain("Hello world!"))
        .get("#text-duplicator-number-input")
        .clear()
        .type('3')
        .get("#text-duplicator-form button")
        .click()
        .get("#text-duplicator-list li")
        .should("have.length", i + 3)
        .each((item) => expect(item).to.contain("Hello world!"));
    });
  }
});
