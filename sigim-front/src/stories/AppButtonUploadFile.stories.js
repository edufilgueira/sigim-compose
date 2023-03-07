import AppButtonUploadFile from "../components/AppButtonUploadFile.vue";

export default {
  title: "Components/Buttons/ButtonUploadFile",
  component: AppButtonUploadFile,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppButtonUploadFile },
  template: '<AppButtonUploadFile  v-bind="$props" />',
});

export const SingleFile = Template.bind({});
SingleFile.args = {
  id: "cpf",
  name: "cpf",
  text: "+ Anexar CPF",
  typeDocument: "cpf",
};

export const MultipleFile = Template.bind({});
MultipleFile.args = {
  id: "cpf",
  name: "cpf",
  text: "+ Anexar CPF",
  typeDocument: "cpf",
  isMultiple: true,
};
