describe("1. Text Duplicator", () => {
  for (let i = 1; i <= 5; i += 1) {
    it(`duplicates text when the input is ${i}`, () => {
      cy.get("#text-duplicator-string-input")
        .type("Hello world!")
        .get("#text-duplicator-number-input")
        .type(`${i}`)
        .get("#text-duplicator-list li")
        .should("have.length", i)
        .each((item) => expect(item).to.contain("Hello world!"));
    });
  }
});
