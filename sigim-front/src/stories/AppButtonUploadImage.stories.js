import AppButtonUploadImage from "../components/AppButtonUploadImage.vue";

export default {
  title: "Components/Buttons/ButtonUploadImage",
  component: AppButtonUploadImage,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppButtonUploadImage },
  template: '<AppButtonUploadImage  v-bind="$props" />',
});

export const SingleFile = Template.bind({});
SingleFile.args = {
  id: "foto",
  name: "foto",
  text: "Fotos",
  typeDocument: "cpf",
};

export const MultipleFile = Template.bind({});
MultipleFile.args = {
  id: "foto",
  name: "cpf",
  text: "Fotos",
  typeDocument: "cpf",
  isMultiple: true,
};
