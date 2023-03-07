import AppInputRound from "../components/AppInputRound";

export default {
  title: "Components/Inputs/AppInputRound",
  component: AppInputRound,
  argTypes: {
    textColor: {
      control: {
        type: "select",
        options: [
          "carmesim",
          "carmesim-hover",
          "burnedYellow",
          "burnedYellow-classic",
          "burnedYellow-hover",
          "herbal",
          "herbal-classic",
          "herbal-hover",
          "ashes",
          "ashes-classic",
          "ashes-hover",
          "ashes-dark",
          "quantum",
        ],
      },
    },
    borderColor: {
      control: {
        type: "select",
        options: [
          "carmesim",
          "carmesim-hover",
          "burnedYellow",
          "burnedYellow-classic",
          "burnedYellow-hover",
          "herbal",
          "herbal-classic",
          "herbal-hover",
          "ashes",
          "ashes-classic",
          "ashes-hover",
          "ashes-dark",
          "quantum",
        ],
      },
    },
    iconName: {
      control: {
        type: "select",
        options: ["person", "visibility", "visibility_off"],
      },
    },
    iconType: {
      control: {
        type: "select",
        options: ["material", "outlined", "round", "sharp", "two-tone"],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppInputRound },
  template: '<AppInputRound v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  iconName: "person",
  labelText: "E-mail",
  textColor: "herbal",
  borderColor: "herbal",
  hiddenValue: true,
};
