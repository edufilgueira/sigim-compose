import AppTextField from "../components/AppTextField.vue";

export default {
  title: "Components/Text/AppTextField",
  component: AppTextField,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppTextField },
  template: '<AppTextField v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  id: "campo1",
  text: "Botões gerais | 15pt - Bold",
  typeText: "button-generic",
  showLabel: true,
  labelText: "Rótulo aqui",
  required: false,
};
