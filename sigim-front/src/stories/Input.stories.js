import BaseInput from "../components/forms/BaseInput.vue";

export default {
  title: "Components/Forms/Input",
  component: BaseInput,
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
  components: { BaseInput },
  template: '<BaseInput v-bind="$props" />',
});

export const Text = Template.bind({});
Text.args = {
  active: true,
  inputName: "nome",
  inputType: "text",
};

export const Date = Template.bind({});
Date.args = {
  active: true,
  inputName: "nome",
  inputType: "date",
};

export const Number = Template.bind({});
Number.args = {
  active: true,
  inputName: "nome",
  inputType: "number",
};
