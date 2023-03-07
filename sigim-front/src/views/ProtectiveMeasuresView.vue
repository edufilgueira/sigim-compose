<template>
  <div>
    <div class="pl-12">
      <BaseText
        text="Medidas Protetivas"
        typeText="custom"
        weight="semibold"
        :italic="false"
        size="3xl"
        color="ashes-hover"
      />
    </div>
    <div id="tabs-button" class="grid grid-cols-2 justify-between p-4 items-end">
      <div class="mx-10">
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
          dispatch="ProtectiveMeasures/filterListByNumberProtectiveMeasure"
          :value="number"
        />
      </div>
      <div class="mx-10">
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
          dispatch="ProtectiveMeasures/filterListByNumberIncidentReport"
          :value="incident_report_number"
        />
      </div>
    </div>
    <div id="tabs-button" class="grid grid-cols-2 justify-between p-4">
      <div class="mx-10">
        <AppButtonColorful
          id="btn-consult-incident_reports"
          showIcon
          iconName="search"
          text="Consultar dados"
          dispatch="ProtectiveMeasures/loadProtectiveMeasures"
          typeButton="primary"
        />
      </div>
      <!-- <div v-if="protectiveMeasures.length > 0">
          <a href="javascript:void(0)" @click="clearFields()">
            <AppButtonColorful
              id="btn-consult-incident_reports"
              showIcon
              iconName="remove"
              text="Limpar consulta"
              typeButton="primary"
            />
          </a>
        </div> -->
      <div class="mx-10 justify-self-end">
        <AppButtonColorful
          id="btn-add-incident_reports"
          showIcon
          iconName="add"
          text="Adicionar"
          dispatch="ProtectiveMeasures/toggleModalProtectiveMeasures"
          typeButton="primary"
          v-if="permit"
        />
      </div>
    </div>
    <div class="p-4">
      <div class="mx-10"><ProtectiveMeasuresCards :data="protectiveMeasures" /></div>
      <div class="mx-10" v-if="totalFilter > 0">
        <div class="m-6">Total de registros encontrados: {{ totalFilter }}</div>
        <div class="grid grid-cols-3 items-center">
          <div class="justify-self-end items-center">
            <AppButtonColorful
              v-if="actualPageFilter > 1"
              id="btn-next"
              typeButton="primary"
              showIcon
              right
              iconName="arrow_back_ios"
              :text="actualPageFilter - 1"
              :payload="pagesFilter[actualPageFilter - 2]"
              dispatch="ProtectiveMeasures/getPageFilter"
            />
          </div>
          <div class="justify-self-center items-center">
            <Multiselect
              id="select-page"
              select-placeholder="Páginas"
              close-on-select
              :value="pagesFilter[actualPageFilter - 1]"
              :options="pagesFilter"
              :dispatch="getPageFilter"
              :multiple-option="false"
              class="mr-4"
            />
          </div>
          <div class="justify-self-start items-center">
            <AppButtonColorful
              v-if="actualPageFilter < totalFilterPages"
              id="btn-next"
              typeButton="primary"
              showIcon
              iconName="arrow_forward_ios"
              :text="actualPageFilter + 1"
              :payload="pagesFilter[actualPageFilter]"
              dispatch="ProtectiveMeasures/getPageFilter"
            />
          </div>
        </div>
      </div>
    </div>
    <ModalProtectiveMeasures :open="modalToggleProtectiveMeasures" />
    <ModalConfirmDeleteProtectiveMeasure :open="modalConfirmDeleteProtectiveMeasure" />
    <ModalViewProtectiveMeasure :open="modalViewProtectiveMeasure" />
  </div>
</template>

<script>
import ModalProtectiveMeasures from "./ModalProtectiveMeasures.vue";
import ModalViewProtectiveMeasure from "./datas/ModalViewProtectiveMeasure.vue";
import ProtectiveMeasuresCards from "./list/ProtectiveMeasuresCards.vue";
import ModalConfirmDeleteProtectiveMeasure from "../views/alerts/ModalConfirmDeleteProtectiveMeasure.vue";
import BaseText from "../components/BaseText.vue";
import AppButtonColorful from "../components/AppButtonColorful.vue";
import BaseInput from "../components/forms/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import Multiselect from "../components/forms/Multiselect.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ProtectiveMeasuresCards,
    BaseText,
    ModalProtectiveMeasures,
    ModalViewProtectiveMeasure,
    ModalConfirmDeleteProtectiveMeasure,
    AppButtonColorful,
    BaseInput,
    BaseLabel,
    Multiselect,
  },
  data() {
    return {
      permit: false,
    };
  },
  methods: {
    ...mapActions({
      canAcces: "AccessControl/canAcces",
      getPageFilter: "ProtectiveMeasures/getPageFilter",
    }),
    protectiveMeasureCreate() {
      this.canAcces("protective_measure_create").then((resp) => {
        this.permit = resp;
      });
    },
    clearFields() {
      this.$refs["number"].value = null;
      this.$refs["incident_report_number"].value = null;
      this.$store.dispatch("ProtectiveMeasures/clearQuery");
    },
    getNextPage() {
      // console.log(this.totalPerPage);
      // console.log(this.offsetFilter);
      let next = this.offsetFilter + this.totalPerPage;
      if (next < 0) {
        next = 0;
      }
      if (next > this.totalFilter) {
        next = this.totalFilter - this.totalPerPage;
      }
      //console.log(next);
      this.$store.dispatch("ProtectiveMeasures/setOffsetFilter", next);
    },
  },
  created() {
    this.protectiveMeasureCreate();
  },
  // beforeCreate() {
  //   this.$store.dispatch("ProtectiveMeasures/loadProtectiveMeasures");
  // },
  computed: {
    ...mapState({
      // People: (state) => state.People.filterPeople,
      modalToggleProtectiveMeasures: (state) => state.ProtectiveMeasures.modalToggleProtectiveMeasures,
      modalConfirmDeleteProtectiveMeasure: (state) =>
        state.ProtectiveMeasures.modalConfirmDeleteProtectiveMeasure,
      number: (state) => state.ProtectiveMeasures.params.number,
      incident_report_number: (state) => state.ProtectiveMeasures.params.incident_report_number,
      protectiveMeasures: (state) => state.ProtectiveMeasures.filterProtectiveMeasures,
      modalViewProtectiveMeasure: (state) => state.ProtectiveMeasures.modalViewProtectiveMeasure,
      totalFilter: (state) => state.ProtectiveMeasures.totalFilter,
      totalPerPage: (state) => state.ProtectiveMeasures.totalPerPage,
      offsetFilter: (state) => state.ProtectiveMeasures.offsetFilter,
      pagesFilter: (state) => state.ProtectiveMeasures.pagesFilter,
      actualPageFilter: (state) => state.ProtectiveMeasures.actualPageFilter,
      totalFilterPages: (state) => state.ProtectiveMeasures.totalFilterPages,
    }),
  },
};
</script>
