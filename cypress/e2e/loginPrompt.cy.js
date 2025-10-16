describe("Login QA Practice - cy.prompt", () => {
  it("deve realizar login com credenciais válidas e validar sucesso", () => {
    cy.prompt(
      [
        "visit https://qa-practice.netlify.app/auth_ecommerce",
        'verify that the page contains the text "Login"',
        'type "{{email}}" in the email field',
        'type "{{senha}}" in the password field',
        'click the "Submit" button',
        "verify that the dashboard or a success message is visible after login",
      ],
      {
        placeholders: {
          email: "admin@admin.com",
          senha: "admin123",
        },
      }
    );
  });

  it("deve exibir erro ao tentar login com senha inválida", () => {
    cy.prompt(
      [
        "visit https://qa-practice.netlify.app/auth_ecommerce",
        'verify that the page contains the text "Login"',
        'type "{{email}}" in the email field',
        'type "{{senha}}" in the password field',
        'click the "Submit" button',
        "verify that an error message appears indicating invalid credentials",
      ],
      {
        placeholders: {
          email: "admin@admin.com",
          senha: "senha_invalida",
        },
      }
    );
  });
});
