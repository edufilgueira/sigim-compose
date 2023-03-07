<template>
  <div>
    <div class="pl-12 flex">
      <BaseText
        text="Boletins de Ocorrências"
        typeText="custom"
        weight="semibold"
        :italic="false"
        size="3xl"
        color="ashes-hover"
      />
    </div>
    <div id="tabs-button" class="grid grid-cols-3 justify-between p-4 items-end">
      <div class="mx-10">
        <BaseLabel
          text="Filtrar por número do B.O"
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
          input-placeholder="Inserir número do B.O"
          dispatch="IncidentReports/filterListByNumber"
          :value="number"
        />
      </div>
      <div class="mx-10">
        <BaseLabel
          text="Filtrar por nome da vítima"
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
          input-placeholder="Inserir nome da vítima"
          dispatch="IncidentReports/filterListByNameVictim"
          :value="victim_name"
        />
      </div>
      <div class="mx-10">
        <BaseLabel
          text="Filtrar por nome do agressor"
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
          input-placeholder="Inserir nome do agressor"
          dispatch="IncidentReports/filterListByNameAggressor"
          :value="aggressor_name"
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
          dispatch="IncidentReports/loadIncidentReports"
          typeButton="primary"
        />
      </div>
      <!-- <div v-if="IncidentReports.length > 0">
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
          dispatch="IncidentReports/toggleModalIncidentReports"
          typeButton="primary"
        />
      </div>
    </div>
    <div class="p-4" v-if="IncidentReports.length > 0">
      <div class="mx-10"><IncidentReportsCards :data="IncidentReports" /></div>
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
              dispatch="IncidentReports/getPageFilter"
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
              dispatch="IncidentReports/getPageFilter"
            />
          </div>
        </div>
      </div>
    </div>
    <ModalIncidentReports :open="modalToggleIncidentReports" />
    <ModalConfirmDeleteIncidentReport :open="modalConfirmDeleteIncidentReport" />
    <ModalViewIncidentReport :open="modalViewIncidentReport" />
  </div>
</template>

<script>
import ModalIncidentReports from "./ModalIncidentReports.vue";
import ModalViewIncidentReport from "./datas/ModalViewIncidentReport.vue";
import ModalConfirmDeleteIncidentReport from "../views/alerts/ModalConfirmDeleteIncidentReport.vue";
import IncidentReportsCards from "./list/IncidentReportsCards.vue";
import BaseText from "../components/BaseText.vue";
import AppButtonColorful from "../components/AppButtonColorful.vue";
import BaseInput from "../components/forms/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import Multiselect from "../components/forms/Multiselect.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    IncidentReportsCards,
    ModalViewIncidentReport,
    BaseText,
    ModalIncidentReports,
    ModalConfirmDeleteIncidentReport,
    AppButtonColorful,
    BaseInput,
    BaseLabel,
    Multiselect,
  },
  computed: {
    ...mapState({
      modalToggleIncidentReports: (state) => state.IncidentReports.modalToggleIncidentReports,
      modalViewIncidentReport: (state) => state.IncidentReports.modalViewIncidentReport,
      modalConfirmDeleteIncidentReport: (state) => state.IncidentReports.modalConfirmDeleteIncidentReport,
      number: (state) => state.IncidentReports.params.number,
      victim_name: (state) => state.IncidentReports.params.victim_name,
      aggressor_name: (state) => state.IncidentReports.params.aggressor_name,
      IncidentReports: (state) => state.IncidentReports.filterIncidentReports,
      totalFilter: (state) => state.IncidentReports.totalFilter,
      totalPerPage: (state) => state.IncidentReports.totalPerPage,
      offsetFilter: (state) => state.IncidentReports.offsetFilter,
      pagesFilter: (state) => state.IncidentReports.pagesFilter,
      actualPageFilter: (state) => state.IncidentReports.actualPageFilter,
      totalFilterPages: (state) => state.IncidentReports.totalFilterPages,
    }),
  },
  methods: {
    ...mapActions({
      clearFields() {
        this.$refs["number"].value = "";
        this.$refs["victim_name"].value = "";
        this.$refs["aggressor_name"].value = "";
        this.$store.dispatch("IncidentReports/clearQuery");
      },
      getPageFilter: "IncidentReports/getPageFilter",
    }),
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
      this.$store.dispatch("IncidentReports/setOffsetFilter", next);
    },
  },
  // watch: {
  //   IncidentReports: {
  //     handler(newValue, oldValue) {
  //       // Note: `newValue` will be equal to `oldValue` here
  //       // on nested mutations as long as the object itself
  //       // hasn't been replaced.
  //       console.log("bbbANTES ", oldValue);
  //       console.log("bbbDEPOIS ", newValue);
  //     },
  //     immediate: true,
  //   },
  // },
};
</script>
