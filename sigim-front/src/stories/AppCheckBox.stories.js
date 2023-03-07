import AppCheckBox from "../components/AppCheckBox.vue";

export default {
  title: "Components/Checkbox",
  component: AppCheckBox,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppCheckBox },
  template: '<AppCheckBox  @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  showLabel: true,
  labelText: "Frameworks Front-end",
  values: [
    { name: "frameworks", value: "vuejs", description: "VueJS" },
    { name: "frameworks", value: "reactjs", description: "ReactJS" },
    { name: "frameworks", value: "angularjs", description: "AngularJS" },
  ],
};
