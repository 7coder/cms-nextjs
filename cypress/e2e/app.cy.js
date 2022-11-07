describe("Post list", () => {
  it("should render the list of posts on the index page", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".card").should("have.length.least", 2);
  });
});
