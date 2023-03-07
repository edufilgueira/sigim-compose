import Multiselect from "../components/forms/Multiselect.vue";

export default {
  title: "Components/Forms/Multiselect",
  component: Multiselect,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Multiselect },
  template: '<Multiselect v-bind="$props" />',
});

export const Multi = Template.bind({});
Multi.args = {
  multipleOption: true,
  closeOnSelect: false,
  selectPlaceholder: "Selecione as opções",
  options: [
    { id: 1, name: "VueJS" },
    { id: 2, name: "AngularJS" },
    { id: 3, name: "ReactJS" },
  ],
};

export const Simple = Template.bind({});
Simple.args = {
  multipleOption: false,
  closeOnSelect: true,
  selectPlaceholder: "Selecione a opção",
  options: [
    { id: 1, name: "VueJS" },
    { id: 2, name: "AngularJS" },
    { id: 3, name: "ReactJS" },
  ],
};
