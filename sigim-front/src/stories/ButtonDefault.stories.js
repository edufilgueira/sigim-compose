import BaseButton from "../components/BaseButton.vue";

export default {
  title: "Components/Buttons/default",
  component: BaseButton,
  argTypes: {
    styleButton: {
      control: { type: "select", options: ["primary", "success", "danger"] },
    },
    iconName: {
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
          "plus",
        ],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: '<BaseButton @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  styleButton: "primary",
  active: true,
  label: "Adicionar edição",
};

export const PrimaryInactive = Template.bind({});
PrimaryInactive.args = {
  styleButton: "primary",
  active: false,
  label: "Adicionar edição",
};

export const PrimaryIconText = Template.bind({});
PrimaryIconText.args = {
  styleButton: "primary",
  active: true,
  iconName: "star",
  label: "Adicionar edição",
};

export const PrimaryIconTextInactive = Template.bind({});
PrimaryIconTextInactive.args = {
  styleButton: "primary",
  active: false,
  iconName: "star",
  label: "Adicionar edição",
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  styleButton: "primary",
  active: true,
  iconName: "star",
};

export const PrimaryIconInactive = Template.bind({});
PrimaryIconInactive.args = {
  styleButton: "primary",
  active: false,
  iconName: "star",
};

export const Success = Template.bind({});
Success.args = {
  styleButton: "success",
  active: true,
  label: "Salvar",
};

export const SuccessInactive = Template.bind({});
SuccessInactive.args = {
  styleButton: "success",
  active: false,
  label: "Salvar",
};

export const SuccessIconText = Template.bind({});
SuccessIconText.args = {
  styleButton: "success",
  active: true,
  iconName: "edit",
  label: "Salvar",
};

export const SuccessIconTextInactive = Template.bind({});
SuccessIconTextInactive.args = {
  styleButton: "success",
  active: false,
  iconName: "edit",
  label: "Salvar",
};

export const SuccessIcon = Template.bind({});
SuccessIcon.args = {
  styleButton: "success",
  active: true,
  iconName: "edit",
};

export const SuccessIconInactive = Template.bind({});
SuccessIconInactive.args = {
  styleButton: "success",
  active: false,
  iconName: "edit",
};

export const Danger = Template.bind({});
Danger.args = {
  styleButton: "danger",
  active: true,
  label: "Cancelar",
};

export const DangerInactive = Template.bind({});
DangerInactive.args = {
  styleButton: "danger",
  active: false,
  label: "Cancelar",
};

export const DangerIconText = Template.bind({});
DangerIconText.args = {
  styleButton: "danger",
  active: true,
  iconName: "trash-alt",
  label: "Cancelar",
};

export const DangerIconTextInactive = Template.bind({});
DangerIconTextInactive.args = {
  styleButton: "danger",
  active: false,
  iconName: "trash-alt",
  label: "Cancelar",
};

export const DangerIcon = Template.bind({});
DangerIcon.args = {
  styleButton: "danger",
  active: true,
  iconName: "trash-alt",
};

export const DangerIconInactive = Template.bind({});
DangerIconInactive.args = {
  styleButton: "danger",
  active: false,
  iconName: "trash-alt",
};
