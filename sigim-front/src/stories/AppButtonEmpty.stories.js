import AppButtonEmpty from "../components/AppButtonEmpty";

export default {
  title: "Components/Buttons/ButtonEmpty",
  component: AppButtonEmpty,
  argTypes: {
    typeButton: {
      control: { type: "select", options: ["primary", "success", "danger", "default"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppButtonEmpty },
  template: '<AppButtonEmpty  @click="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  text: "Sou Aluno",
  typeButton: "default",
};

export const Info = Template.bind({});
Info.args = {
  text: "Em análise",
  typeButton: "info",
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Em aberto",
  typeButton: "primary",
};

export const Success = Template.bind({});
Success.args = {
  text: "Aceitos",
  typeButton: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Não Aceitos",
  typeButton: "danger",
  callToAction: true,
};
