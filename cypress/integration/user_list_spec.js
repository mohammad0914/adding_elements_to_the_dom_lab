const expected = [
  "ruth nicolas (CH)",
  "رها سلطانی نژاد (IR)",
  "patricia hale (GB)",
  "fernando cooper (US)",
  "یسنا صدر (IR)",
  "eino tuomala (FI)",
  "gonca özkara (TR)",
  "kyle castillo (US)",
  "olivia kumar (NZ)",
  "raymond durand (CH)",
];

describe("3. User List", () => {
  it("contains the expected users", () => {
    cy.visit("./userList.html");

    cy.get("#user-list li")
      .should("have.length", expected.length)
      .each((item, index) => expect(item).to.contain(expected[index]));
  });
});
