describe("Login page", () => {
  it("should be available via navigation", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="/login"]').click();

    // cy.url().should("include", "/login");

    cy.get(".col-4 h3").contains("Login");
    cy.get("input[name='pin']").should("have.attr", "placeholder", "PIN");
    cy.get("button[type=submit]").should("be.enabled");
  });
});
