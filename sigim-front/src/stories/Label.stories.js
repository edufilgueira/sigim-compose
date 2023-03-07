import Label from "../components/Label.vue";

export default {
  title: "Components/Label (depreciated)",
  component: Label,
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: [
          "none",
          "star",
          "graduation-cap",
          "map",
          "building",
          "book-reader",
          "trash",
          "trash-alt",
          "edit",
          "print",
          "chalkboard-teacher",
          "angle-up",
          "angle-right",
          "angle-left",
          "angle-down",
          "angle-double-up",
          "angle-double-left",
          "angle-double-right",
          "angle-double-down",
        ],
      },
    },
    iconType: {
      control: { type: "select", options: ["solid", "regular"] },
    },
    weight: {
      control: {
        type: "select",
        options: [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
      },
    },
    mode: {
      control: {
        type: "select",
        options: ["uppercase", "lowercase", "capitalize", "normal-case"],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["text-3xl", "text-2xl", "text-xl", "text-lg", "text-base", "text-sm", "text-xs"],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Label },
  template: '<Label v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  text: "Adicionar edição",
  normal: true,
};
