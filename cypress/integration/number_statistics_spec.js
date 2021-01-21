describe("2. Number Statistics", () => {
  const inputValues = (...values) => {
    for (const value of values) {
      cy.get("#number-statistics-number-input")
        .type(`${value}`)
        .get("#number-statistics-form button")
        .click();
    }
  };

  const expectStatistics = (average, maximum, minimum) => {
    cy.get("#number-statistics-average")
      .contains(`${average}`)
      .get("#number-statistics-maximum")
      .contains(`${maximum}`)
      .get("#number-statistics-minimum")
      .contains(`${minimum}`);
  };

  it("displays the same number in all three paragraphs when only one is entered", () => {
    inputValues(7);
    expectStatistics(7, 7, 7);
  });

  it("displays maximum and minimum in the paragraphs when multiple numbers are entered", () => {
    inputValues(7, 14, 42);
    expectStatistics(21, 42, 14);
  });
});
