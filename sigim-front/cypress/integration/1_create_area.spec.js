/* eslint-disable no-undef */
describe("cadastro de área", () => {
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

    it("toast 'Área cadastrada com sucesso!'", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click();
      cy.wait(1000);
      cy.get('#menu-5-button').click();
      cy.get('#menu-5-submenus > #menu-1-submenu-1 > .flex').click();
      cy.wait(1000);
      cy.get('.btn-color').click(); //ADD NOVA ÁREA
      cy.wait(1000);
      cy.get("#name").type("Área 07 - Teste");
      cy.get('.multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[1]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[2]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[3]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[4]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[5]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[6]/span').click();
      cy.get('.multiselect__select').click();
      cy.wait(1000);
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Área cadastrada com sucesso!");
      cy.wait(1000);
      cy.get('.btn-color').click(); //ADD NOVA ÁREA
      cy.wait(1000);
      cy.get("#name").type("Área 08 - Teste");
      cy.get('.multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[1]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[2]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[3]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[4]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[5]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[6]/span').click();
      cy.get('.multiselect__select').click();
      cy.wait(1000);
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Área cadastrada com sucesso!");
    });
  });

  context("quando necessário editar uma área cadastrada", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
      cy.get('[href="/admin/entrar"] > .font-system').click();
      cy.get("#username").type("marina.medeiros@vicegov.ce.gov.br");
      cy.get("#password").type("123456");
      cy.get(':nth-child(7) > .w-96').click();
      cy.wait(1000);
    });

    it("toast 'Área atualizada com sucesso!'", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click();
      cy.wait(1000);
      cy.get('#menu-5-button').click();
      cy.get('#menu-5-submenus > #menu-1-submenu-1 > .flex').click();
      cy.wait(1000);
      cy.get(':nth-child(7) > .h-28 > .text-right > :nth-child(1) > .material-icons').click(); //EDIT ÁREA POR LISTA
      cy.wait(1000);
      cy.get("#name").clear();
      cy.get("#name").type("Área 07");
      cy.get(':nth-child(1) > .multiselect__tag-icon').click();
      cy.get(':nth-child(2) > .multiselect__tag-icon').click();
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Área atualizada com sucesso!");
      cy.wait(1000);
      cy.get(':nth-child(7) > .h-28').click(); //EDIT ÁREA POR VISUALIZAÇÃO DE ÁREA
      cy.wait(1000);
      cy.get(':nth-child(2) > .material-icons').click();
      cy.wait(1000);
      cy.get("#name").clear();
      cy.get("#name").type("Área 08");
      cy.get(':nth-child(1) > .multiselect__tag-icon').click();
      cy.get(':nth-child(2) > .multiselect__tag-icon').click();
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Área atualizada com sucesso!");
      cy.wait(1000);
      cy.get('.grid > :nth-child(2) > a > .font-system').click();
      cy.wait(1000);
    });
  });

  context("quando é necessário excluir uma área", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
      cy.get('[href="/admin/entrar"] > .font-system').click();
      cy.get("#username").type("marina.medeiros@vicegov.ce.gov.br");
      cy.get("#password").type("123456");
      cy.get(':nth-child(7) > .w-96').click();
      cy.wait(1000);
    });

    it("toast 'Área excluída com sucesso!'", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click();
      cy.wait(1000);
      cy.get('#menu-5-button').click();
      cy.get('#menu-5-submenus > #menu-1-submenu-1 > .flex').click();
      cy.wait(1000);
      cy.get(':nth-child(7) > .h-28 > .text-right > :nth-child(2) > .material-icons').click(); //EXCLUIR ÁREA POR LISTA
      cy.get('.btn-empty-success').click();
      cy.wait(1000);
      cy.contains("Área excluída com sucesso!");
      cy.wait(1000);
      cy.get(':nth-child(7) > .h-28').click(); //EXCLUIR ÁREA POR VISUALIZAÇÃO DE ÁREA
      cy.wait(1000);
      cy.get(':nth-child(3) > :nth-child(3) > .material-icons').click();
      cy.get('.btn-empty-success').click();
      cy.wait(1000);
      cy.contains("Área excluída com sucesso!");
    });
  });
});