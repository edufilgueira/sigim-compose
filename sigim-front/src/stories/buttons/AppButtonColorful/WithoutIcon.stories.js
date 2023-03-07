import AppButtonColorful from "../../../components/AppButtonColorful";

export default {
  title: "Components/Buttons/AppButtonColorful/without icon",
  component: AppButtonColorful,
  argTypes: {
    typeButton: {
      control: { type: "select", options: ["primary", "success", "danger"] },
    },
    iconName: {
      control: {
        type: "select",
        options: ["description"],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppButtonColorful },
  template: '<AppButtonColorful  @click="onClick" v-bind="$props" />',
});

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
};
