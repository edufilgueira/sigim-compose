import BaseTextArea from "../components/forms/BaseTextArea.vue";

export default {
  title: "Components/Forms/TextArea",
  component: BaseTextArea,
  argTypes: {
    inputType: {
      control: {
        type: "select",
        options: ["text", "number", "password", "hidden", "date"],
      },
    },
    iconName: {
      control: {
        type: "select",
        options: [
          "star_outline",
          "school",
          "map",
          "maps_home_work",
          "book",
          "print",
          "today",
          "done",
          "close",
          "description",
          "check_circle",
          "cancel",
          "add_circle",
          "search",
        ],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseTextArea },
  template: '<BaseTextArea v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  active: true,
  inputName: "nome",
};
