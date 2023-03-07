/* eslint-disable no-undef */
describe("fazer pré-inscrição", () => {
  context("quando todos os campos são informados", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("https://hgvirandojogo.vicegov.ce.gov.br/");
      cy.wait(500);
    });

    it("toast 'Inscrição cadastrada com sucesso!'", () => {
      cy.get('.w-56').click();
      cy.get('.grid-cols-5 > :nth-child(2) > .flex > .relative > .rounded-xl').type("Raimundo Juan Kauê Figueiredo", { delay: 30 }); //Nome
      cy.get('.grid-cols-5 > :nth-child(3) > .flex > .relative > .rounded-xl').type("Mundo", { delay: 30 }); //Nome social
      cy.get('.grid-cols-5 > :nth-child(4) > .flex > .relative > .rounded-xl').type("509066343", { delay: 30 }); //RG
      cy.get('.grid-cols-5 > :nth-child(5) > .flex > .relative > .rounded-xl').type("SPS", { delay: 30 }); //Órgão expeditor
      cy.get('.grid-cols-5 > :nth-child(6) > .flex > .relative > .rounded-xl').type("2004-10-31"); //Data da expedição
      cy.get('.grid-cols-5 > :nth-child(7) > .flex > .relative > .rounded-xl').type("34276777372", { delay: 30 }); //CPF
      cy.get('.grid-cols-5 > :nth-child(8) > .flex > .relative > .rounded-xl').type("Teresina", { delay: 30 }); //Cidade onde nasceu
      cy.get('.grid-cols-5 > :nth-child(9) > .flex > .relative > .rounded-xl').type("16173601552010115158583", { delay: 30 }); //CN
      cy.get('.grid-cols-5 > :nth-child(10) > .flex > .relative > .rounded-xl').type("9671108", { delay: 30 }); //Livro
      cy.get('.grid-cols-5 > :nth-child(11) > .flex > .relative > .rounded-xl').type("86", { delay: 30 }); //Folha
      cy.get(':nth-child(12) > .flex > .relative > .rounded-xl').type("raimundojuankauefigueiredo-91@rjnet.com.br", { delay: 30 }); //E-mail
      cy.get(':nth-child(13) > .flex > .relative > .rounded-xl').type("8536978357", { delay: 30 }); //Telefone
      cy.get(':nth-child(14) > .flex > .relative > .rounded-xl').type("85995403761", { delay: 30 }); //Whatsapp
      cy.get('.mr-4 > .multiselect > .multiselect__tags').click(); //Data de nascimento - DIA
      cy.xpath('//*[@id="content"]/div/div[2]/div/div/div[4]/div[1]/div[15]/div/div[1]/div/div[3]/ul/li[1]').click();
      cy.get('.items-end > .mr-5 > .multiselect > .multiselect__tags').click(); //Data de nascimento - MÊS
      cy.xpath('//*[@id="content"]/div/div[2]/div/div/div[4]/div[1]/div[15]/div/div[2]/div/div[3]/ul/li[1]').click();
      cy.get(':nth-child(3) > .multiselect > .multiselect__tags').click(); //Data de nascimento - ANO
      cy.xpath('//*[@id="content"]/div/div[2]/div/div/div[4]/div[1]/div[15]/div/div[3]/div/div[3]/ul/li[1]').click();
      cy.get('.justify-center > :nth-child(1) > .flex > :nth-child(1) > .mb-1').click(); //Gênero
      cy.get(':nth-child(17) > .flex > .multiselect > .multiselect__tags').click(); //Estado civil
      cy.xpath('//*[@id="content"]/div/div[2]/div/div/div[4]/div[1]/div[17]/div/div/div[3]/ul/li[1]').click();
      cy.get(':nth-child(2) > :nth-child(2) > .flex > .relative > .rounded-xl').type("60767340", { delay: 30 }); //CEP
      cy.get(':nth-child(2) > :nth-child(4) > .flex > .relative > .rounded-xl').type("799", { delay: 30 }); //Nº
      cy.get(':nth-child(2) > :nth-child(8) > .flex > .relative > .rounded-xl').type("Mata Galinha", { delay: 30 }); //Comunidade
      cy.get(':nth-child(2) > .col-span-2 > .flex > .relative > .rounded-xl').type("Atrás do mercadinho O Galvão", { delay: 30 }); //Complemento
      cy.wait(1000);
      cy.get(':nth-child(2) > .flex > .multiselect > .multiselect__tags').click(); //Edição
      cy.xpath('//*[@id="content"]/div/div[2]/div/div/div[4]/div[3]/div[2]/div/div/div[3]/ul/li[1]').click();
      cy.get(':nth-child(3) > .flex > .multiselect > .multiselect__tags').click(); //Equipamento
      cy.xpath('//*[@id="content"]/div/div[2]/div/div/div[4]/div[3]/div[3]/div/div/div[3]/ul/li[1]').click();
      cy.get(':nth-child(2) > :nth-child(1) > .flex > :nth-child(2) > .mb-1').click(); //Frequenta escola?
      cy.get(':nth-child(4) > :nth-child(1) > .flex > :nth-child(2) > .mb-1').click(); //Ocupação formal?
      cy.get('.grid-cols-6 > :nth-child(6) > .flex > .multiselect > .multiselect__tags').click(); //Série concluída
      cy.xpath('//*[@id="content"]/div/div[2]/div/div/div[4]/div[4]/div[6]/div/div/div[3]/ul/li[1]').click();
      cy.get('.grid-cols-6 > :nth-child(7) > .flex > .multiselect > .multiselect__tags').click(); //Qualificações profissionais
      cy.xpath('//*[@id="content"]/div/div[2]/div/div/div[4]/div[4]/div[7]/div/div/div[3]/ul/li[1]').click();
      cy.get(':nth-child(8) > :nth-child(1) > .flex > :nth-child(1) > .mb-1').click(); //Turno
      cy.get(':nth-child(9) > .flex > .multiselect > .multiselect__tags').click(); //Modalidades esportivas
      cy.xpath('//*[@id="content"]/div/div[2]/div/div/div[4]/div[4]/div[9]/div/div/div[3]/ul/li[1]').click();
      cy.get('.grid-cols-6 > :nth-child(10) > .flex > .relative > .rounded-xl').type("1,61", { delay: 30 }); //Altura
      cy.get('.grid-cols-6 > :nth-child(11) > .flex > .relative > .rounded-xl').type("45", { delay: 30 }); //Peso
      cy.get(':nth-child(12) > .flex > .multiselect > .multiselect__tags').click(); //Blusa
      cy.xpath('//*[@id="content"]/div/div[2]/div/div/div[4]/div[4]/div[12]/div/div/div[3]/ul/li[1]').click();
      cy.get(':nth-child(13) > .flex > .multiselect > .multiselect__tags').click(); //Calça
      cy.xpath('//*[@id="content"]/div/div[2]/div/div/div[4]/div[4]/div[13]/div/div/div[3]/ul/li[1]').click();
      cy.get(':nth-child(14) > .flex > .multiselect > .multiselect__tags').click(); //Tênis 01
      cy.xpath('//*[@id="content"]/div/div[2]/div/div/div[4]/div[4]/div[14]/div/div/div[3]/ul/li[1]').click();
      cy.get(':nth-child(15) > .flex > .multiselect > .multiselect__tags').click(); //Tênis 02
      cy.xpath('//*[@id="content"]/div/div[2]/div/div/div[4]/div[4]/div[15]/div/div/div[3]/ul/li[1]').click();
      cy.get(':nth-child(6) > :nth-child(1) > .flex > .multiselect > .multiselect__tags').click(); //Grau parentesco
      cy.xpath('//*[@id="content"]/div/div[2]/div/div/div[4]/div[6]/div[1]/div/div/div[3]/ul/li[1]').click();
      cy.get(':nth-child(6) > .items-center > :nth-child(1) > .flex > .mr-5 > .mb-1').click(); //Marcar como responsável
      cy.get(':nth-child(6) > .col-span-2 > .flex > .relative > .rounded-xl').type("Rosa Catarina Letícia Nascimento", { delay: 30 })  //Nome do responsável
      cy.get(':nth-child(6) > :nth-child(4) > .flex > .relative > .rounded-xl').type("484558614", { delay: 30 }) //RG do responsável
      cy.get(':nth-child(6) > :nth-child(5) > .flex > .relative > .rounded-xl').type("30013278398", { delay: 30 }) //CPF do responsável
      cy.get(':nth-child(6) > :nth-child(6) > .flex > .relative > .rounded-xl').type("8526665792", { delay: 30 }) //Telefone do responsável
      cy.get(':nth-child(6) > :nth-child(7) > .flex > .relative > .rounded-xl').type("carolinehelenadrumond_@ematelecom.com.br", { delay: 30 }) //E-mail do responsável
      cy.get('.justify-self-end > .btn-empty').click(); //Botão finalizar
      cy.contains("Inscrição cadastrada com sucesso!");
    });
  });
});