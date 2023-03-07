import SideBar from "../components/SideBar.vue";

export default {
  title: "Components/SideBar",
  component: SideBar,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SideBar },
  template: '<SideBar v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
