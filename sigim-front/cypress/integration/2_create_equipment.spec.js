/* eslint-disable no-undef */
describe("cadastro de equipamento", () => {
  context("quando os campos obrigatórios são informados", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
      cy.wait(1000);
      cy.get('[href="/admin/entrar"] > .font-system').click();
      cy.get("#username").type("marina.medeiros@vicegov.ce.gov.br");
      cy.get("#password").type("123456");
      cy.get(':nth-child(7) > .w-96').click();
    });

    it("equipamento cadastrado com sucesso!", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click();
      cy.wait(1000);
      cy.get('#menu-6-button').click();
      cy.get('#menu-6-submenus > #menu-1-submenu-1 > .flex').click();
      cy.wait(1000);
      cy.get(".btn-color").click();
      cy.wait(1000);
      cy.get("#name").type("01 Equipamento teste");
      cy.get(':nth-child(2) > :nth-child(2) > .flex > .multiselect > .multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div[2]/div[2]/div/div/div[3]/ul/li[1]').click();
      cy.get('#cep').type("60336295");
      cy.wait(1000);
      cy.get('#streat-number').type("123");
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Equipamento cadastrado com sucesso!");
      cy.wait(1000);
      cy.get(".btn-color").click();
      cy.wait(1000);
      cy.get("#name").type("02 Equipamento teste");
      cy.get(':nth-child(2) > :nth-child(2) > .flex > .multiselect > .multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div[2]/div[2]/div/div/div[3]/ul/li[1]').click();
      cy.get('#cep').type("60745110");
      cy.wait(1000);
      cy.get('#streat-number').type("129");
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Equipamento cadastrado com sucesso!");
      cy.wait(1000);
    });
  });

  context("quando é necessário editar um equipamento", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
      cy.get('[href="/admin/entrar"] > .font-system').click();
      cy.get("#username").type("marina.medeiros@vicegov.ce.gov.br");
      cy.get("#password").type("123456");
      cy.get(':nth-child(7) > .w-96').click();
    });

    it("toast 'Equipamento atualizado com sucesso!'", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click();
      cy.wait(1000);
      cy.get('#menu-6-button').click();
      cy.get('#menu-6-submenus > #menu-1-submenu-1 > .flex').click();
      cy.get('[data-index="0"] > :nth-child(1) > .cursor-pointer > .grid > .flex > :nth-child(1) > .material-icons').click();
      cy.wait(1000);
      cy.get('#name').clear();
      cy.get('#name').type("01 Equipamento");
      cy.get(':nth-child(2) > :nth-child(2) > .flex > .multiselect > .multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div[2]/div[2]/div/div/div[3]/ul/li[2]').click();
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Equipamento atualizado com sucesso!");
      cy.get('[data-index="1"] > :nth-child(1) > .cursor-pointer').click();
      cy.wait(1000);
      cy.get(':nth-child(2) > .material-icons').click();
      cy.wait(1000);
      cy.get('#name').clear();
      cy.get('#name').type("02 Equipamento");
      cy.get(':nth-child(2) > :nth-child(2) > .flex > .multiselect > .multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div[2]/div[2]/div/div/div[3]/ul/li[2]').click();
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Equipamento atualizado com sucesso!");
      cy.get('.auto-grid-auto > :nth-child(2) > a > .font-system').click();
      cy.wait(1000);
    });
  });

  context("quando é necessário excluir um equipamento", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
      cy.get('[href="/admin/entrar"] > .font-system').click();
      cy.get("#username").type("marina.medeiros@vicegov.ce.gov.br");
      cy.get("#password").type("123456");
      cy.get(':nth-child(7) > .w-96').click();
    });

    it("toast 'Equipamento excluído com sucesso!'", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click();
      cy.wait(1000);
      cy.get('#menu-6-button').click();
      cy.get('#menu-6-submenus > #menu-1-submenu-1 > .flex').click();
      cy.wait(1000);
      cy.get('[data-index="0"] > :nth-child(1) > .cursor-pointer > .grid > .flex > :nth-child(2) > .material-icons').click();
      cy.wait(1000);
      cy.get('.btn-empty-success').click();
      cy.wait(1000);
      cy.get('.Vue-Toastification__toast')
      cy.wait(1000);
      cy.get('[data-index="0"] > :nth-child(1) > .cursor-pointer').click();
      cy.wait(1000);
      cy.get(':nth-child(3) > :nth-child(3) > .material-icons').click();
      cy.wait(1000);
      cy.get('.btn-empty-success').click();
      cy.wait(1000);
      cy.get('.Vue-Toastification__toast')
    });
  });
});