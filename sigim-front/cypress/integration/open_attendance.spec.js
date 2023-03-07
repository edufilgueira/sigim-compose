/* eslint-disable no-undef */
describe("cadastro de edição ativa", () => {
    context("quando uma pré-inscrição entra em análise", () => {
      beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
        cy.wait(1000);
        cy.get('[href="/admin/entrar"] > .font-system').click();
        cy.get("#username").type("marina.medeiros@vicegov.ce.gov.br");
        cy.get("#password").type("123456");
        cy.get(':nth-child(7) > .w-96').click();
      });
  
      it("edição cadastrada", () => {
        cy.get('#menu-1-button').click();
        cy.get('#menu-1-submenus > #menu-1-submenu-1 > .flex').click();
        cy.wait(1000);
        cy.get('[data-index="0"] > .h-28').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(5) > .flex > .mr-3 > .btn-color').click();
        cy.get('.btn-status-info-off').click();
        cy.get('.p-6 > .justify-end > .btn-empty-success').click();
        
      });
    });
});