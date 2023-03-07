import BaseBadge from "../components/BaseBadge.vue";

export default {
  title: "Components/Badge",
  component: BaseBadge,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseBadge },
  template: '<base-badge v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  badgeCount: 5,
};
