/* eslint-disable no-undef */
describe("Erros no cadastro de área", () => {
  context("Campos obrigatórios", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
      cy.get('[href="/admin/entrar"] > .font-system').click();
      cy.get("#username").type("marina.medeiros@vicegov.ce.gov.br");
      cy.get("#password").type("123456");
      cy.get(':nth-child(7) > .w-96').click(); //Botão acessar
    });

    it("alerta toast 'Campos obrigatórios não foram preenchidos!'", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click(); //Botão cidade Fortaleza
      cy.wait(1000);
      cy.get('#menu-5-button').click(); //Botão Menu Áreas
      cy.get('#menu-5-submenus > #menu-1-submenu-1 > .flex').click(); //Botão Submenu Áreas
      cy.wait(1000);
      cy.get('.btn-color').click(); //Botão Add Área
      cy.wait(1000);
      cy.get('.justify-self-end > .btn-empty').click(); //Botão Criar
      cy.wait(1000);
      cy.contains("Nome deve ser informado"); //Alerta no campo
      cy.contains("Bairros de Abrangência deve ser escolhido no mínimo um"); //Alerta no campo
      cy.contains("Campos obrigatórios não foram preenchidos!"); //Toast
      cy.wait(1000);
      cy.get('.justify-self-start > .btn-empty').click();
    });

    it("alerta toast + alerta de campo 'Nome já cadastrado. Digite um novo.'", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click(); //Botão cidade Fortaleza
      cy.wait(1000);
      cy.get('#menu-5-button').click(); //Botão Menu Áreas
      cy.get('#menu-5-submenus > #menu-1-submenu-1 > .flex').click(); //Botão Submenu Áreas
      cy.wait(1000);
      cy.get('.btn-color').click(); //Botão Add Área
      cy.wait(1000);
      cy.get("#name").type("Área 01");
      cy.get('.multiselect__tags').click(); //Selecionar bairros
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[1]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[2]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[3]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[4]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[5]/span').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div/div[3]/div/div/div/div[3]/ul/li[6]/span').click();
      cy.get('.multiselect__select').click();
      cy.wait(1000);
      cy.get('.justify-self-end > .btn-empty').click(); //Botão Criar
      cy.contains("Nome já cadastrado. Digite um novo."); //Alerta no campo
    });
  });
});