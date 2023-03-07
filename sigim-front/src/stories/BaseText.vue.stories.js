import BaseText from "../components/BaseText.vue";

export default {
  title: "Components/Text/BaseText",
  component: BaseText,
  argTypes: {
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
        options: ["uppercase", "lowercase", "capitalize", "normal-case", "underline"],
      },
    },
    typeText: {
      control: {
        type: "select",
        options: [
          "button-generic",
          "button-uppercase",
          "sidebar-submenu",
          "sidebar-menu",
          "title-forms",
          "topic-details",
          "custom",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
      },
    },
    color: {
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
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseText },
  template: '<BaseText v-bind="$props" />',
});

export const ButtonGeneric = Template.bind({});
ButtonGeneric.args = {
  text: "Botões gerais | 15pt - Bold",
  italic: false,
  typeText: "button-generic",
};

export const ButtonUppercase = Template.bind({});
ButtonUppercase.args = {
  text: "BOTÕES SALVAR/CRIAR/DESCARTAR/VOLTAR | 20PT - BOLD - CAIXA ALTA",
  italic: false,
  typeText: "button-uppercase",
};

export const SidebarMenu = Template.bind({});
SidebarMenu.args = {
  text: "Botões menu lateral | 13pt - ExtraRegular",
  italic: false,
  typeText: "sidebar-menu",
};

export const SidebarSubmenu = Template.bind({});
SidebarSubmenu.args = {
  text: "Botões menu lateral | ??pt - Medium",
  italic: false,
  typeText: "sidebar-submenu",
};

export const TitleForms = Template.bind({});
TitleForms.args = {
  text: "títulos para formulários | ??pt - médium - caixa alta",
  italic: false,
  typeText: "title-forms",
};

export const Custom = Template.bind({});
Custom.args = {
  text: "texto customizável",
  italic: false,
  typeText: "custom",
};
