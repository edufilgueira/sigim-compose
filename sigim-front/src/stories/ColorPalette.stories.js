import ColorPallete from "./ui/ColorPallete.vue";

export default {
  title: "UI/Color Pallete",
  component: ColorPallete,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ColorPallete },
  template: '<ColorPallete v-bind="$props" />',
});

export const Colors = Template.bind({});
Colors.args = {};
