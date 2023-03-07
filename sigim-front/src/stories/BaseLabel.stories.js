import BaseLabel from "../components/BaseLabel.vue";

export default {
  title: "Components/Label",
  component: BaseLabel,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseLabel },
  template: '<base-label v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  text: "Campo de texto",
};
