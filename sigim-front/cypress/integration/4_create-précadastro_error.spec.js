/* eslint-disable no-undef */
describe("fazer pré-inscrição", () => {
  context("quando todos os campos são informados", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
      cy.wait(500);
    });

    it("toast 'Não foi possível realizar o pré-cadastro! Por favor verifique se todos os campos com (*) foram preenchidos.'", () => {
      cy.get('.w-56').click(); //Botão pré-cadastro
      cy.get('.justify-self-end > .btn-empty').click(); //Botão finalizar
      cy.contains("Nome completo deve ser informado(a)");
      cy.contains("Telefone deve ser informado(a)");
      cy.contains("Data de Nascimento deve ser informado(a)");
      cy.contains("Cidade deve ser informado(a)");
      cy.contains("Bairro deve ser informado(a)");
      cy.contains("Edição deve ser informado(a)");
      cy.contains("Local deve ser informado(a)");
      cy.contains("Frequenta a escola? deve ser informado(a)");
      cy.contains("Tem ocupação formal? deve ser informado(a)");
      cy.contains("Grau de Parentesco deve ser informado(a)");
      cy.contains("Nome completo deve ser informado(a)");
      cy.contains("Telefone deve ser informado(a)");
      cy.get('.Vue-Toastification__toast');
    });
  });
});