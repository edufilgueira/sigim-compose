import BaseTable from "../components/BaseTable.vue";

export default {
  title: "Components/Table",
  component: BaseTable,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseTable },
  template: '<BaseTable v-bind="$props" />',
});

const columnNames = [
  { key: "young_name", label: "nome do jovem" },
  { key: "phone_number", label: "telefone" },
  { key: "age", label: "idade" },
  { key: "neighborhood", label: "bairro" },
  { key: "actionButton" },
  { key: "actionEdition" },
];

const items = [
  {
    id: 1,
    young_name: {
      items: [
        {
          isImage: true,
          name: "jogador-1.png",
        },
        {
          isLabel: true,
          text: "Maria Antônia Soares Silva",
          weight: "semibold",
        },
      ],
    },
    phone_number: {
      items: [
        {
          isLabel: true,
          text: "(85) 984628395",
        },
      ],
    },
    age: {
      items: [
        {
          isLabel: true,
          text: "19",
        },
      ],
    },
    neighborhood: {
      items: [
        {
          isLabel: true,
          text: "Barra do Ceará",
        },
      ],
    },
    actionButton: {
      items: [
        {
          isButton: true,
          styleButton: "success",
          label: "abrir atendimento",
        },
      ],
    },
    actionEdition: {
      items: [
        {
          isButton: true,
          styleButton: "primary",
          iconName: "edit",
          void: true,
        },
      ],
    },
  },
  {
    id: 2,
    young_name: {
      items: [
        {
          isImage: true,
          name: "jogador-2.png",
        },
        {
          isLabel: true,
          text: "Alana da Silva Moraes",
          weight: "semibold",
        },
      ],
    },
    phone_number: {
      items: [
        {
          isLabel: true,
          text: "(85) 9173615327",
        },
      ],
    },
    age: {
      items: [
        {
          isLabel: true,
          text: "16",
        },
      ],
    },
    neighborhood: {
      items: [
        {
          isLabel: true,
          text: "Barra do Ceará",
        },
      ],
    },
    actionButton: {
      items: [
        {
          isButton: true,
          styleButton: "success",
          label: "abrir atendimento",
        },
      ],
    },
    actionEdition: {
      items: [
        {
          isButton: true,
          styleButton: "primary",
          iconName: "edit",
          void: true,
        },
      ],
    },
  },
  {
    id: 3,
    young_name: {
      items: [
        {
          isImage: true,
          name: "jogador-3.png",
        },
        {
          isLabel: true,
          text: "Carlos Emanuel Raimundo",
          weight: "semibold",
        },
      ],
      label: "Carlos Emanuel Raimundo",
      img: "jogador-3.png",
      weight: "semibold",
    },
    phone_number: {
      items: [
        {
          isLabel: true,
          text: "(85) 949603879",
        },
      ],
      label: "(85) 949603879",
    },
    age: {
      items: [
        {
          isLabel: true,
          text: "18",
        },
      ],
      label: "18",
    },
    neighborhood: {
      items: [
        {
          isLabel: true,
          text: "Titanzinho",
        },
      ],
    },
    actionButton: {
      items: [
        {
          isButton: true,
          styleButton: "success",
          label: "abrir atendimento",
        },
      ],
    },
    actionEdition: {
      items: [
        {
          isButton: true,
          styleButton: "primary",
          iconName: "edit",
          void: true,
        },
      ],
    },
  },
  {
    id: 4,
    young_name: {
      items: [
        {
          isImage: true,
          name: "jogador-4.png",
        },
        {
          isLabel: true,
          text: "José Luiz Notato da Silva",
          weight: "semibold",
        },
      ],
      label: "José Luiz Notato da Silva",
      img: "jogador-4.png",
      weight: "semibold",
    },
    phone_number: {
      items: [
        {
          isLabel: true,
          text: "(85) 927475816",
        },
      ],
      label: "(85) 927475816",
    },
    age: {
      items: [
        {
          isLabel: true,
          text: "15",
        },
      ],
      label: "15",
    },
    neighborhood: {
      items: [
        {
          isLabel: true,
          text: "Barra do Ceará",
        },
      ],
    },
    actionButton: {
      items: [
        {
          isButton: true,
          styleButton: "success",
          label: "abrir atendimento",
        },
      ],
    },
    actionEdition: {
      items: [
        {
          isButton: true,
          styleButton: "primary",
          iconName: "edit",
          void: true,
        },
      ],
    },
  },
];

export const Default = Template.bind({});
Default.args = {
  header: columnNames,
  body: items,
  total: items.length,
  totalPerPage: 4,
};
