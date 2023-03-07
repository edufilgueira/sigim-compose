import AppEdition from "../components/content/AppEdition.vue";

export default {
  title: "Components/Content/Edicao",
  component: AppEdition,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppEdition },
  template: '<app-edition v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  editionName: "EDIÇÃO I - 2020",
  localEdition: "Fortaleza - Áreas 1 a 6",
  inscriptionStart: "06/06/2020",
  inscriptionEnd: "06/08/2020",
  executionStart: "12/07/2020",
  executionEnd: "24/09/2021",
  statusInscription: "Encerrado",
  statusExecution: "Em Execução",
};
