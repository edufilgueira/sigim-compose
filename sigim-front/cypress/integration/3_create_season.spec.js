/* eslint-disable no-undef */
describe("cadastro de edição ativa", () => {
  context("quando TODOS OS CAMPOS são informados", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
      cy.wait(1000);
      cy.get('[href="/admin/entrar"] > .font-system').click();
      cy.get("#username").type("marina.medeiros@vicegov.ce.gov.br");
      cy.get("#password").type("123456");
      cy.get(':nth-child(7) > .w-96').click();
    });

    it("toast 'Edição cadastrada com sucesso!'", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click();
      cy.wait(1000);
      cy.get('#menu-1-button').click();
      cy.get('#menu-1-submenus > #menu-1-submenu-1 > .flex').click();
      cy.wait(1000);
      cy.get('.btn-color').click();
      cy.wait(1000);
      cy.get("#name").type("Edição X | 2021");
      cy.get('.multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div[1]/div[3]/div/div/div/div[3]/ul/li[1]').click();
      cy.wait(1000);
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .flex > .relative > .pl-14').type("2021-09-01");
      cy.get(':nth-child(2) > .ml-4 > :nth-child(1) > .flex > .relative > .pl-14').type("2021-09-30");
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .flex > .relative > .pl-14').type("2021-10-01");
      cy.get(':nth-child(3) > .ml-4 > :nth-child(1) > .flex > .relative > .pl-14').type("2021-10-31");
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Edição cadastrada com sucesso!");
    });
  });
});