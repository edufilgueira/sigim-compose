import AppRadioButton from "../components/AppRadioButton.vue";

export default {
  title: "Components/RadioButton",
  component: AppRadioButton,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppRadioButton },
  template: '<AppRadioButton  @onClick="onClick" v-bind="$props" />',
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
