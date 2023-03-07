import AppButtonStatus from "../../../components/AppButtonStatus.vue";

export default {
  title: "Components/Buttons/ButtonStatus/with number",
  component: AppButtonStatus,
  argTypes: {
    typeButton: {
      control: { type: "select", options: ["primary", "success", "danger", "info"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppButtonStatus },
  template: '<AppButtonStatus  @onClick="onClick" v-bind="$props" />',
});

export const Info = Template.bind({});
Info.args = {
  text: "Em aberto",
  number: "04",
  active: false,
  typeButton: "info",
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Em aberto",
  number: "04",
  active: false,
  typeButton: "primary",
};

export const Success = Template.bind({});
Success.args = {
  text: "Aceitos",
  number: "04",
  active: false,
  typeButton: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Não Aceitos",
  number: "04",
  active: false,
  typeButton: "danger",
};
