import BaseModal from "../components/BaseModal.vue";

export default {
  title: "Components/BaseModal",
  component: BaseModal,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseModal },
  template: '<base-modal v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
