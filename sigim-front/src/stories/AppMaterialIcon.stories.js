import AppMaterialIcon from "../components/AppMaterialIcon";

export default {
  title: "Components/Icons/AppMaterialIcon",
  component: AppMaterialIcon,
  argTypes: {
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
          "assignment",
          "expand_more",
          "perm_identity",
          "power_settings_new",
          "directions_bus",
        ],
      },
    },
    iconType: {
      control: {
        type: "select",
        options: ["material", "outlined", "round", "sharp", "two-tone"],
      },
    },
    iconSize: {
      control: { type: "select", options: ["18", "24", "36", "48"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppMaterialIcon },
  template: '<AppMaterialIcon v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  iconName: "star_outline",
};
