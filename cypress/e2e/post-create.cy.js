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

  it("should not be available to save post without authorization", () => {
    cy.get("input[name='title']").type("my new post");
    cy.get("textarea[name='content']").type("my post content");
    cy.get("button[type=submit]").click();
    cy.get("input[name='title']").should("have.attr", "value", "my new post");
  });

  it("should save post with authorization", () => {
    const postTitle = "my new post";
    const random = (Math.random() * 1000).toString(16).substring(0, 6);

    cy.get('a[href*="/login"]').click();

    cy.get("input[name='pin']").type("1234");

    cy.get("button[type=submit]").click();

    cy.wait(2000);

    cy.get("input[name='title']").type(`${postTitle} ${random}`);
    cy.get("textarea[name='content']").type("my post content");
    cy.get("button[type=submit]").click();

    cy.wait(2000);

    cy.get(".card")
      .last()
      .get(".card-title")
      .contains(`${postTitle} ${random}`);
  });
});
