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
      cy.get('#name').type("Julia Nina Lívia Oliveira", { delay: 100 });
      cy.get("#cpf").type("28631515337", { delay: 100 });
      cy.get('#cellphone_number').type("8527057445", { delay: 100 });
      cy.get("#email").type("jjulianinaliviaoliveira@tedde.com.br", { delay: 100 });
      cy.get('#password').type("123456", { delay: 100 });
      cy.get('.justify-self-end > .btn-empty').click();
      cy.contains("Mentor(a) cadastrado(a) com sucesso!");
    });
  });

  context("quando é necessário editar um instrutor", () => {
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
      cy.get('[data-index="0"] > :nth-child(1) > .w-full > .grid > .flex > :nth-child(1) > .material-icons').click();
      cy.get('#cellphone_number').clear();
      cy.get('#cellphone_number').type("8538644180");
      cy.get('#password').type("123456", { delay: 100 });
      cy.get('.justify-self-end > .btn-empty').click();
      cy.contains("Mentor(a) atualizado(a) com sucesso!");
    });
  });

  context("quando é necessário excluir um instrutor", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
      cy.wait(1000);
      cy.get('[href="/admin/entrar"] > .font-system').click();
      cy.get("#username").type("marina.medeiros@vicegov.ce.gov.br");
      cy.get("#password").type("123456");
      cy.get(':nth-child(7) > .w-96').click();
    });

    it("toast 'Mentor(a) excluído(a) com sucesso!'", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click();
      cy.wait(1000);
      cy.get('#menu-2-button').click();
      cy.get('#menu-2-submenu-1 > .flex').click();
      cy.wait(1000);
      cy.get('[data-index="4"] > :nth-child(1) > .w-full > .grid > .flex > :nth-child(2) > .material-icons').click();
      cy.get('.btn-empty-success').click();
      cy.contains("Mentor(a) excluído(a) com sucesso!");
    });
  });
});