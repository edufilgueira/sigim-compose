/* eslint-disable no-undef */
describe("Erro no cadastro de edição ativa", () => {
  context("Campos obrigatórios", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
      cy.get('[href="/admin/entrar"] > .font-system').click();
      cy.get("#username").type("marina.medeiros@vicegov.ce.gov.br");
      cy.get("#password").type("123456");
      cy.get(':nth-child(7) > .w-96').click();
    });

    it("toast 'Erro no cadastro de edição.'", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click();
      cy.wait(1000);
      cy.get('#menu-1-button').click();
      cy.get('#menu-1-submenus > #menu-1-submenu-1 > .flex').click();
      cy.wait(1000);
      cy.get('.btn-color').click();
      cy.wait(1000);
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Nome não pode ficar em branco");
      cy.contains("Áreas não pode ficar em branco");
      cy.contains("Data de Início da Inscrição não pode ficar em branco");
      cy.contains("Data de Término da Inscrição não pode ficar em branco");
      cy.contains("Data de Início da Execução não pode ficar em branco");
      cy.contains("Data de Término da Execução não pode ficar em branco");
      cy.contains("Erro no cadastro de edição.");
      cy.get('.justify-self-start > .btn-empty');
    });

    it("alerta toast + alerta de campo 'Nome já cadastrado. Digite um novo.'", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click();
      cy.wait(1000);
      cy.get('#menu-1-button').click();
      cy.get('#menu-1-submenus > #menu-1-submenu-1 > .flex').click();
      cy.wait(1000);
      cy.get('.btn-color').click();
      cy.wait(1000);
      cy.get("#name").type("Edição I | 2021");
      cy.get('.multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div[1]/div[3]/div/div/div/div[3]/ul/li[1]').click();
      cy.wait(1000);
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .flex > .relative > .pl-14').type("2021-09-01");
      cy.get(':nth-child(2) > .ml-4 > :nth-child(1) > .flex > .relative > .pl-14').type("2021-09-30");
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .flex > .relative > .pl-14').type("2021-10-01");
      cy.get(':nth-child(3) > .ml-4 > :nth-child(1) > .flex > .relative > .pl-14').type("2021-10-31");
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Erro no cadastro de edição.");
    });
  });
  
  context("quando é inserido datas erradas no cadastro", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
      cy.wait(1000);
      cy.get('[href="/admin/entrar"] > .font-system').click();
      cy.get("#username").type("marina.medeiros@vicegov.ce.gov.br");
      cy.get("#password").type("123456");
      cy.get(':nth-child(7) > .w-96').click();
    });

    it("edição atualizada com sucesso!", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click();
      cy.wait(1000);
      cy.get('#menu-1-button').click();
      cy.get('#menu-1-submenus > #menu-1-submenu-1 > .flex').click();
      cy.wait(1000);
      cy.get('.btn-color').click();
      cy.wait(1000);
      cy.get("#name").type("Edição IX | 2021");
      cy.get('.multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div[1]/div[3]/div/div/div/div[3]/ul/li[1]').click();
      cy.wait(1000);
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .flex > .relative > .pl-14').type("2021-10-15");
      cy.get(':nth-child(2) > .ml-4 > :nth-child(1) > .flex > .relative > .pl-14').type("2021-10-01");
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .flex > .relative > .pl-14').type("2021-09-15");
      cy.get(':nth-child(3) > .ml-4 > :nth-child(1) > .flex > .relative > .pl-14').type("2021-09-01");
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Data de Início da Inscrição não pode ser posterior ao fim do período de inscrição");
      cy.contains("Data de Início da Execução não pode ser anterior ao fim do período de inscrição");
      cy.get('.Vue-Toastification__toast');
      cy.wait(1000);
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .flex > .relative > .pl-14').type("2021-10-01");
      cy.get(':nth-child(2) > .ml-4 > :nth-child(1) > .flex > .relative > .pl-14').type("2021-10-31");
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .flex > .relative > .pl-14').type("2021-09-15");
      cy.get(':nth-child(3) > .ml-4 > :nth-child(1) > .flex > .relative > .pl-14').type("2021-09-01");
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Data de Início da Execução não pode ser anterior ao fim do período de inscrição");
      cy.get('.Vue-Toastification__toast')
      cy.wait(1000);
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .flex > .relative > .pl-14').type("2021-10-01");
      cy.get(':nth-child(2) > .ml-4 > :nth-child(1) > .flex > .relative > .pl-14').type("2021-10-31");
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .flex > .relative > .pl-14').type("2021-11-15");
      cy.get(':nth-child(3) > .ml-4 > :nth-child(1) > .flex > .relative > .pl-14').type("2021-11-01");
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Data de Início da Execução não pode ser posterior ao fim do período de execução");
      cy.get('.Vue-Toastification__toast')
      cy.wait(1000);
      cy.get('.justify-self-start > .btn-empty').click();
    });
  });
});