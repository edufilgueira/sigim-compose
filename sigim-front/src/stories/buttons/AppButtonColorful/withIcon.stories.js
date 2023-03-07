import AppButtonColorful from "../../../components/AppButtonColorful";

export default {
  title: "Components/Buttons/AppButtonColorful/with icon",
  component: AppButtonColorful,
  argTypes: {
    typeButton: {
      control: { type: "select", options: ["primary", "success", "danger"] },
    },
    iconName: {
      control: {
        type: "select",
        options: ["description", "add"],
      },
    },
    iconType: {
      control: {
        type: "select",
        options: ["material", "outlined", "round", "sharp", "two-tone"],
      },
    },
    typeText: {
      control: {
        type: "select",
        options: [
          "button-generic",
          "button-uppercase",
          "sidebar-submenu",
          "sidebar-menu",
          "title-forms",
          "topic-details",
          "custom",
        ],
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
  showIcon: true,
  iconName: "description",
  iconType: "outlined",
};

export const Success = Template.bind({});
Success.args = {
  text: "Aceitos",
  typeButton: "success",
  showIcon: true,
  iconName: "description",
  iconType: "outlined",
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Não Aceitos",
  typeButton: "danger",
  showIcon: true,
  iconName: "description",
  iconType: "outlined",
};
