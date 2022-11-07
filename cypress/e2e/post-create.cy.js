describe("Create Post", () => {
  it("should be available via navigation", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="/posts/create"]').click();

    cy.url().should("include", "/posts/create");

    cy.get("h4").contains("Create Post");

    cy.get("input[name='title']").should(
      "have.attr",
      "placeholder",
      "Post title"
    );
    cy.get("textarea[name='content']").should(
      "have.attr",
      "placeholder",
      "Post content"
    );
    cy.get("button[type=submit]").should("be.enabled");
  });

  it("should not be available to save post without authorization", (done) => {
    cy.get("input[name='title']").type("my new post");
    cy.get("textarea[name='content']").type("my post content");
    cy.get("button[type=submit]").click();
    cy.get("input[name='title']").should("have.attr", "value", "my new post");
  });
});
