/* eslint-disable no-undef */
describe("cadastro de instrutor", () => {
    context("quando todos os campos obrigatórios são informados", () => {
      beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
        cy.wait(1000);
        cy.get('[href="/admin/entrar"] > .font-system').click();
        cy.get("#username").type("marina.medeiros@vicegov.ce.gov.br");
        cy.get("#password").type("123456");
        cy.get(':nth-child(7) > .w-96').click();
      });
  
      it("toast 'Mentor(a) cadastrado(a) com sucesso!'", () => {
        cy.get('#content > :nth-child(1) > .rounded-full').click();
        cy.wait(1000);
        cy.get('#menu-2-button').click();
        cy.get('#menu-2-submenu-1 > .flex').click();
        cy.wait(1000);
        cy.get('#btn-add-teacher').click();
        cy.get('.justify-self-end > .btn-empty').click();
        cy.contains("Nome deve ser informado");
        cy.contains("CPF deve ser informado");
        cy.contains("Telefone deve ser informado");
        cy.contains("E-mail deve ser informado");
        cy.contains("Senha deve ser informada");
        cy.contains("Não foi possível realizar cadastro do instrutor! Por favor verifique se todos os campos com (*) foram preenchidos.");
      });
    });
  });