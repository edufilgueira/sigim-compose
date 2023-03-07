<template>
  <div>
    <div class="pl-12">
      <BaseText
        text="Protocolos de Encaminhamento"
        typeText="custom"
        weight="semibold"
        :italic="false"
        size="3xl"
        color="ashes-hover"
      />
    </div>
    <div id="tabs-button" class="grid grid-cols-3 justify-between p-4">
      <div class="mx-10">
        <BaseLabel
          text="Filtrar por Nome da Pessoa"
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
          input-placeholder="Inserir Nome da Pessoa"
          dispatch="ForwardingProtocols/filterListByNamePerson"
          :value="person_name"
        />
      </div>
      <div class="mx-10">
        <BaseLabel
          text="Filtrar por Nome do Equipamento"
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
          input-placeholder="Inserir Nome do Equipam."
          dispatch="ForwardingProtocols/filterListByFacilityName"
          :value="facility_name"
        />
      </div>
      <div class="mx-10">
        <BaseLabel
          text="Filtrar por Tipo de Acompanhamento"
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
          input-placeholder="Inserir Tipo do Acompanha."
          dispatch="ForwardingProtocols/filterListByAccompanimentType"
          :value="accompaniment_type_name"
        />
      </div>
    </div>
    <div id="tabs-button" class="grid grid-cols-2 justify-between p-4 items-end">
      <div class="mx-10">
        <AppButtonColorful
          id="btn-consult-incident_reports"
          showIcon
          iconName="search"
          text="Consultar dados"
          dispatch="ForwardingProtocols/loadForwardingProtocols"
          typeButton="primary"
        />
      </div>
      <!-- <div v-if="forwardingProtocols.length > 0">
            <a href="javascript:void(0)" @click="clearFields()">
              <AppButtonColorful
                id="btn-consult-forwarding_protocols"
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
          dispatch="ForwardingProtocols/toggleModalToggleForwardingProtocols"
          typeButton="primary"
          v-if="permit"
        />
      </div>
    </div>
    <div class="p-4">
      <div class="mx-10"><ForwardingProtocolsCards :data="forwardingProtocols" /></div>
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
              dispatch="ForwardingProtocols/getPageFilter"
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
              dispatch="ForwardingProtocols/getPageFilter"
            />
          </div>
        </div>
      </div>
    </div>
    <ModalForwardingProtocols :open="modalToggleForwardingProtocols" />
    <ModalConfirmDeleteForwardingProtocol :open="modalConfirmDeleteForwardingProtocol" />
    <ModaViewForwardingProtocol :open="modalViewForwardingProtocol" />
  </div>
</template>

<script>
import ModalForwardingProtocols from "./ModalForwardingProtocols.vue";
// import ModalViewForwardigProtocol from "./datas/ModalViewForwardigProtocol.vue";
import ModaViewForwardingProtocol from "./datas/ModaViewForwardingProtocol.vue";
import ForwardingProtocolsCards from "./list/ForwardingProtocolsCards.vue";
import ModalConfirmDeleteForwardingProtocol from "../views/alerts/ModalConfirmDeleteForwardingProtocol.vue";
import BaseText from "../components/BaseText.vue";
import AppButtonColorful from "../components/AppButtonColorful.vue";
import BaseInput from "../components/forms/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import Multiselect from "../components/forms/Multiselect.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ForwardingProtocolsCards,
    BaseText,
    ModalForwardingProtocols,
    ModaViewForwardingProtocol,
    ModalConfirmDeleteForwardingProtocol,
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
      getPageFilter: "ForwardingProtocols/getPageFilter",
    }),
    forwardingProtocolCreate() {
      this.canAcces("forwarding_protocol_create").then((resp) => {
        this.permit = resp;
      });
    },
    clearFields() {
      this.$refs["person_name"].value = "";
      this.$refs["facility_name"].value = "";
      this.$refs["accompaniment_type_name"].value = "";
      this.$store.dispatch("ForwardingProtocols/clearQuery");
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
      this.$store.dispatch("ForwardingProtocols/setOffsetFilter", next);
    },
  },
  created() {
    // console.log("User info", this.user);
    // console.log("forwardingProtocol", this.forwardingProtocol);
    this.forwardingProtocolCreate();
  },

  beforeCreate() {
    this.$store.dispatch("ForwardingProtocols/loadAccompanimentTypes");
  },
  computed: {
    ...mapState({
      // People: (state) => state.People.filterPeople,
      modalToggleForwardingProtocols: (state) => state.ForwardingProtocols.modalToggleForwardingProtocols,
      modalConfirmDeleteForwardingProtocol: (state) =>
        state.ForwardingProtocols.modalConfirmDeleteForwardingProtocol,
      modalViewForwardingProtocol: (state) => state.ForwardingProtocols.modalViewForwardingProtocol,
      person_name: (state) => state.ForwardingProtocols.params.person_name,
      facility_name: (state) => state.ForwardingProtocols.params.facility_name,
      accompaniment_type_name: (state) => state.ForwardingProtocols.params.accompaniment_type_name,
      forwardingProtocols: (state) => state.ForwardingProtocols.filterForwardingProtocols,
      totalFilter: (state) => state.ForwardingProtocols.totalFilter,
      totalPerPage: (state) => state.ForwardingProtocols.totalPerPage,
      offsetFilter: (state) => state.ForwardingProtocols.offsetFilter,
      pagesFilter: (state) => state.ForwardingProtocols.pagesFilter,
      actualPageFilter: (state) => state.ForwardingProtocols.actualPageFilter,
      totalFilterPages: (state) => state.ForwardingProtocols.totalFilterPages,
    }),
  },
};
</script>
