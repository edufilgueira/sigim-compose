<template>
  <div>
    <div class="pl-12">
      <BaseText
        text="Medidas Protetivas Requeridas"
        typeText="custom"
        weight="semibold"
        :italic="false"
        size="3xl"
        color="ashes-hover"
      />
    </div>
    <div id="tabs-button" class="flex justify-between mx-12 my-6">
      <div class="grid grid-cols-2 gap-x-4 gap-y-4">
        <div class="w-80">
          <BaseLabel
            text="Filtrar por número da Medida Protetiva"
            typeText="custom"
            weight="normal"
            :italic="false"
            size="xs"
          />
          <BaseInput
            active
            inputName=""
            inputType="text"
            iconName="search"
            showIcon
            input-placeholder="Númerdo da M.P"
            dispatch="ProtectiveMeasuresRequesteds/filterListByNumberProtectiveMeasure"
            ref="number_protective_measure"
          />
        </div>
        <div class="w-80">
          <BaseLabel
            text="Filtrar por número do Boletim de Ocorrência"
            typeText="custom"
            weight="normal"
            :italic="false"
            size="xs"
          />
          <BaseInput
            active
            inputName=""
            inputType="text"
            iconName="search"
            showIcon
            input-placeholder="Númerdo do B.O"
            dispatch="ProtectiveMeasuresRequesteds/filterListByNumberIncidentReport"
            ref="number_incident_report"
          />
        </div>
        <div>
          <AppButtonColorful
            id="btn-consult-incident_reports"
            showIcon
            iconName="search"
            text="Consultar dados"
            dispatch="ProtectiveMeasuresRequesteds/loadProtectiveMeasuresRequesteds"
            typeButton="primary"
          />
        </div>
        <div v-if="ProtectiveMeasuresRequesteds.length > 0">
          <a href="javascript:void(0)" @click="clearFields()">
            <AppButtonColorful
              id="btn-consult-protective_measure_requesteds"
              showIcon
              iconName="remove"
              text="Limpar consulta"
              typeButton="primary"
            />
          </a>
        </div>
      </div>
      <div class="float-right">
        <AppButtonColorful
          id="btn-add-incident_reports"
          showIcon
          iconName="add"
          text="Adicionar"
          dispatch="ProtectiveMeasuresRequesteds/toggleModalProtectiveMeasuresRequesteds"
          typeButton="primary"
          v-if="permit"
        />
      </div>
    </div>
    <div class="p-4">
      <div class="mx-10"><ProtectiveMeasuresRequestedsCards :data="ProtectiveMeasuresRequesteds" /></div>
    </div>
    <ModalProtectiveMeasuresRequesteds :open="modalToggleProtectiveMeasuresRequesteds" />
    <ModalConfirmDeleteProtectiveMeasureRequested :open="modalConfirmDeleteProtectiveMeasureRequested" />
    <ModalEditProtectiveMeasureRequired :open="modalToggleEditProtectiveMeasuresRequesteds" />
  </div>
</template>

<script>
import ModalProtectiveMeasuresRequesteds from "./ModalProtectiveMeasuresRequesteds.vue";
import ModalEditProtectiveMeasureRequired from "./ModalEditProtectiveMeasureRequired.vue";
import ProtectiveMeasuresRequestedsCards from "./list/ProtectiveMeasuresRequestedsCards.vue";
import ModalConfirmDeleteProtectiveMeasureRequested from "./alerts/ModalConfirmDeleteProtectiveMeasureRequested.vue";
import BaseText from "../components/BaseText.vue";
import AppButtonColorful from "../components/AppButtonColorful.vue";
import BaseInput from "../components/forms/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ProtectiveMeasuresRequestedsCards,
    BaseText,
    ModalProtectiveMeasuresRequesteds,
    ModalEditProtectiveMeasureRequired,
    ModalConfirmDeleteProtectiveMeasureRequested,
    AppButtonColorful,
    BaseInput,
    BaseLabel,
  },
  data() {
    return {
      permit: false,
    };
  },
  methods: {
    ...mapActions({ canAcces: "AccessControl/canAcces" }),
    protectiveMeasureRequestedsCreate() {
      this.canAcces("protective_measure_requested_create").then((resp) => {
        this.permit = resp;
      });
    },
    clearFields() {
      this.$refs["number_protective_measure"].value = null;
      this.$refs["number_incident_report"].value = null;
      this.$store.dispatch("ProtectiveMeasuresRequesteds/clearQuery");
    },
  },
  created() {
    this.protectiveMeasureRequestedsCreate();
  },
  // beforeCreate() {
  //   this.$store.dispatch("ProtectiveMeasuresRequesteds/loadProtectiveMeasuresRequesteds");
  // },
  computed: {
    ...mapState({
      modalToggleProtectiveMeasuresRequesteds: (state) =>
        state.ProtectiveMeasuresRequesteds.modalToggleProtectiveMeasuresRequesteds,
      modalConfirmDeleteProtectiveMeasureRequested: (state) =>
        state.ProtectiveMeasuresRequesteds.modalConfirmDeleteProtectiveMeasureRequested,
      modalToggleEditProtectiveMeasuresRequesteds: (state) =>
        state.ProtectiveMeasuresRequesteds.modalToggleEditProtectiveMeasuresRequesteds,
      ProtectiveMeasuresRequesteds: (state) =>
        state.ProtectiveMeasuresRequesteds.filterProtectiveMeasuresRequesteds,
    }),
  },
};
</script>
