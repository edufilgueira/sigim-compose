<template>
  <div>
    <div class="pl-12">
      <BaseText
        text="Processos Judiciais"
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
          text="Filtrar por número do Processo Judicial"
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
          input-placeholder="Inserir número do Proc. Jud."
          dispatch="Lawsuits/filterListByNumber"
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
          dispatch="Lawsuits/filterListByNameVictim"
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
          dispatch="Lawsuits/filterListByNameAggressor"
          :value="aggressor_name"
        />
      </div>
    </div>
    <div id="tabs-button" class="grid grid-cols-2 justify-between p-4">
      <div class="mx-10">
        <AppButtonColorful
          id="btn-consult-lawsuits"
          showIcon
          iconName="search"
          text="Consultar dados"
          dispatch="Lawsuits/loadLawsuits"
          typeButton="primary"
        />
      </div>
      <!-- <div v-if="Lawsuits.length > 0">
          <a href="javascript:void(0)" @click="clearFields()">
            <AppButtonColorful
              id="btn-consult-lawsuits"
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
          dispatch="Lawsuits/toggleModalLawsuits"
          typeButton="primary"
          v-if="permit"
        />
      </div>
    </div>
    <div class="p-4">
      <div class="mx-10"><LawsuitsCards :data="lawsuits" /></div>
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
              dispatch="Lawsuits/getPageFilter"
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
              dispatch="Lawsuits/getPageFilter"
            />
          </div>
        </div>
      </div>
    </div>
    <ModalLawsuits :open="modalToggleLawsuits" />
    <ModalConfirmDeleteLawsuit :open="modalConfirmDeleteLawsuit" />
    <ModalViewLawsuit :open="modalViewLawsuit" />
  </div>
</template>

<script>
import ModalLawsuits from "./ModalLawsuits.vue";
import ModalViewLawsuit from "./datas/ModalViewLawsuit.vue";
import LawsuitsCards from "./list/LawsuitsCards.vue";
import ModalConfirmDeleteLawsuit from "../views/alerts/ModalConfirmDeleteLawsuit.vue";
import BaseText from "../components/BaseText.vue";
import AppButtonColorful from "../components/AppButtonColorful.vue";
import BaseInput from "../components/forms/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import Multiselect from "../components/forms/Multiselect.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    LawsuitsCards,
    BaseText,
    ModalLawsuits,
    ModalConfirmDeleteLawsuit,
    ModalViewLawsuit,
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
      getPageFilter: "Lawsuits/getPageFilter",
    }),
    lawsuitCreate() {
      this.canAcces("lawsuit_create").then((resp) => {
        this.permit = resp;
      });
    },
    clearFields() {
      this.$refs["number"].value = "";
      this.$refs["victim_name"].value = "";
      this.$refs["aggressor_name"].value = "";
      this.$store.dispatch("Lawsuits/clearQuery");
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
      this.$store.dispatch("Lawsuits/setOffsetFilter", next);
    },
  },
  created() {
    this.lawsuitCreate();
  },
  // beforeCreate() {
  //   this.$store.dispatch("Lawsuits/loadLawsuits");
  // },
  computed: {
    ...mapState({
      modalToggleLawsuits: (state) => state.Lawsuits.modalToggleLawsuits,
      modalConfirmDeleteLawsuit: (state) => state.Lawsuits.modalConfirmDeleteLawsuit,
      number: (state) => state.Lawsuits.params.number,
      victim_name: (state) => state.Lawsuits.params.victim_name,
      aggressor_name: (state) => state.Lawsuits.params.aggressor_name,
      lawsuits: (state) => state.Lawsuits.filterLawsuits,
      modalViewLawsuit: (state) => state.Lawsuits.modalViewLawsuit,
      totalFilter: (state) => state.Lawsuits.totalFilter,
      totalPerPage: (state) => state.Lawsuits.totalPerPage,
      offsetFilter: (state) => state.Lawsuits.offsetFilter,
      pagesFilter: (state) => state.Lawsuits.pagesFilter,
      actualPageFilter: (state) => state.Lawsuits.actualPageFilter,
      totalFilterPages: (state) => state.Lawsuits.totalFilterPages,
    }),
  },
};
</script>
