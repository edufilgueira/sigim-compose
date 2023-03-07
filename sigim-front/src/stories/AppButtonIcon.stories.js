import AppButtonIcon from "../components/AppButtonIcon.vue";

export default {
  title: "Components/Buttons/ButtonIcon",
  component: AppButtonIcon,
  argTypes: {
    iconName: {
      control: {
        type: "select",
        options: ["print", "edit"],
      },
    },
    iconType: {
      control: {
        type: "select",
        options: ["material", "outlined", "round", "sharp", "two-tone"],
      },
    },
    iconSize: {
      control: { type: "select", options: ["18", "24", "36"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppButtonIcon },
  template: '<AppButtonIcon  @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  iconName: "print",
};

export const Close = Template.bind({});
Close.args = {
  iconName: "print",
  forClose: true,
};
