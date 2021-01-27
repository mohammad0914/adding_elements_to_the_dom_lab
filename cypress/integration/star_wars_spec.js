const expected = [
    'Alderaan (pop. 2000000000)',
    'Yavin IV (pop. 1000)',
    'Hoth (pop. unknown)',
    'Dagobah (pop. unknown)',
    'Bespin (pop. 6000000)',
    'Endor (pop. 30000000)',
    'Naboo (pop. 4500000000)',
    'Coruscant (pop. 1000000000000)',
    'Kamino (pop. 1000000000)',
    'Geonosis (pop. 100000000000)',
  ];
  
  describe("4. Star Wars", () => {
    it("contains the expected users", () => {
      cy.visit("./starWars.html");
  
      cy.get("#planets-list li")
        .should("have.length", expected.length)
        .each((item, index) => expect(item).to.contain(expected[index]));
    });
  });
  