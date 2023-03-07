/* eslint-disable no-undef */
describe("Erros no cadastro de equipamentos", () => {
  context("Campos obrigatórios", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
      cy.wait(1000);
      cy.get('[href="/admin/entrar"] > .font-system').click();
      cy.get("#username").type("marina.medeiros@vicegov.ce.gov.br");
      cy.get("#password").type("123456");
      cy.get(':nth-child(7) > .w-96').click();
    });

    it("toast 'Não foi possível cadastrar o equipamento! Por favor verifique ...'", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click();
      cy.wait(1000);
      cy.get('#menu-6-button').click();
      cy.get('#menu-6-submenus > #menu-1-submenu-1 > .flex').click();
      cy.wait(1000);
      cy.get(".btn-color").click();
      cy.wait(1000);
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("Nome deve ser informado(a)");
      cy.contains("Áreas não pode ficar em branco");
      cy.contains("CEP deve ser informado(a)");
      cy.contains("Rua deve ser informado(a)");
      cy.contains("Número deve ser informado(a)");
      cy.contains("Município deve ser informado(a)");
      cy.contains("Bairro deve ser informado(a)");
      cy.get('.Vue-Toastification__toast');
    });

    it("alerta toast + alerta de campo 'CEP não possui o tamanho esperado (9 caracteres)'", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click();
      cy.wait(1000);
      cy.get('#menu-6-button').click();
      cy.get('#menu-6-submenus > #menu-1-submenu-1 > .flex').click();
      cy.wait(1000);
      cy.get(".btn-color").click();
      cy.wait(1000);
      cy.get("#name").type("Equipamento teste");
      cy.get(':nth-child(2) > :nth-child(2) > .flex > .multiselect > .multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div[2]/div[2]/div/div/div[3]/ul/li[1]').click();
      cy.get('#cep').type("60336");
      cy.get('#street').type("Rua teste");
      cy.get('#streat-number').type("505");
      cy.get(':nth-child(6) > .flex > .multiselect > .multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div[4]/div[6]/div/div/div[3]/ul/li[1]').click();
      cy.get(':nth-child(7) > .flex > .multiselect > .multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div[4]/div[7]/div/div/div[3]/ul/li[1]').click();
      cy.wait(1000);
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.contains("CEP não possui o tamanho esperado (9 caracteres)");
      cy.get('.Vue-Toastification__toast');
    });

    it("alerta toast + alerta de campo 'CEP inválido'", () => {
      cy.get('#content > :nth-child(1) > .rounded-full').click();
      cy.wait(1000);
      cy.get('#menu-6-button').click();
      cy.get('#menu-6-submenus > #menu-1-submenu-1 > .flex').click();
      cy.wait(1000);
      cy.get(".btn-color").click();
      cy.wait(1000);
      cy.get("#name").type("Equipamento teste");
      cy.get(':nth-child(2) > :nth-child(2) > .flex > .multiselect > .multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div[2]/div[2]/div/div/div[3]/ul/li[1]').click();
      cy.get('#cep').type("00000000");
      cy.contains("CEP inválido");
      cy.get('#street').type("Rua teste");
      cy.get('#streat-number').type("505");
      cy.get(':nth-child(6) > .flex > .multiselect > .multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div[4]/div[6]/div/div/div[3]/ul/li[1]').click();
      cy.get(':nth-child(7) > .flex > .multiselect > .multiselect__tags').click();
      cy.xpath('//*[@id="content"]/div/div[2]/div[4]/div[7]/div/div/div[3]/ul/li[1]').click();
      cy.wait(1000);
      cy.get('.justify-self-end > .btn-empty').click();
      cy.wait(1000);
      cy.get('.Vue-Toastification__toast');
    });
  });
});