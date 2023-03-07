<template>
  <div>
    <div class="pl-12">
      <BaseText
        text="Acompanhamento por tipo de Equipamento"
        typeText="custom"
        weight="semibold"
        :italic="false"
        size="3xl"
        color="ashes-hover"
      />
    </div>
    <div id="tabs-button" class="flex justify-between mx-12 my-6">
      <div class="grid grid-cols-2 gap-x-2 gap-y-4">
        <div class="w-80">
          <BaseLabel
            text="Filtrar por equipamento"
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
            input-placeholder="Nome Equipamento"
            dispatch="AccompanimentTypeFacilities/filterListByNameFacility"
            ref="name_facility"
          />
        </div>
        <div class="w-80 ml-5">
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
            input-placeholder="Nome Acompanhamento"
            dispatch="AccompanimentTypeFacilities/filterListByAccompanimentType"
            ref="accompaniment_type"
          />
        </div>
        <div>
          <AppButtonColorful
            id="btn-consult-facilities"
            showIcon
            iconName="search"
            text="Consultar dados"
            dispatch="AccompanimentTypeFacilities/loadAccompanimentTypeFacilities"
            typeButton="primary"
          />
        </div>
        <div v-if="accompanimentTypeFacilities.length > 0">
          <a href="javascript:void(0)" @click="clearFields()">
            <AppButtonColorful
              id="btn-consult-facilities"
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
          text="Criar Acompanhamento por tipo de Equipamento"
          dispatch="AccompanimentTypeFacilities/toggleModalToggleAccompanimentTypeFacilities"
          typeButton="primary"
        />
      </div>
    </div>
    <div class="p-4">
      <div class="mx-10"><AccompanimentTypeFacilitiesCards :data="accompanimentTypeFacilities" /></div>
    </div>
    <ModalAccompanimentTypeFacilities :open="modalToggleAccompanimentTypeFacilities" />
    <ModalConfirmDeleteAccompanimentTypeFacility :open="modalConfirmDeleteAccompanimentTypeFacility" />
    <!-- <ModalViewModalAccompanimentTypeFacility :open="modalViewAccompanimentTypeFacility" /> -->
  </div>
</template>

<script>
import ModalAccompanimentTypeFacilities from "./ModalAccompanimentTypeFacilities.vue";
// import ModalViewModalAccompanimentTypeFacility from "./datas/ModalViewAccompanimentTypeFacility.vue";
import AccompanimentTypeFacilitiesCards from "./list/AccompanimentTypeFacilitiesCards.vue";
import ModalConfirmDeleteAccompanimentTypeFacility from "../views/alerts/ModalConfirmDeleteAccompanimentTypeFacility.vue";
import BaseText from "../components/BaseText.vue";
import AppButtonColorful from "../components/AppButtonColorful.vue";
import BaseInput from "../components/forms/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    AccompanimentTypeFacilitiesCards,
    BaseText,
    ModalAccompanimentTypeFacilities,
    // ModalViewModalAccompanimentTypeFacility,
    ModalConfirmDeleteAccompanimentTypeFacility,
    AppButtonColorful,
    BaseInput,
    BaseLabel,
  },
  // beforeCreate() {
  //   this.$store.dispatch("AccompanimentTypeFacilities/loadAccompanimentTypeFacilities");
  // },
  computed: {
    ...mapState({
      // People: (state) => state.People.filterPeople,
      modalToggleAccompanimentTypeFacilities: (state) =>
        state.AccompanimentTypeFacilities.modalToggleAccompanimentTypeFacilities,
      modalConfirmDeleteAccompanimentTypeFacility: (state) =>
        state.AccompanimentTypeFacilities.modalConfirmDeleteAccompanimentTypeFacility,
      accompanimentTypeFacilities: (state) =>
        state.AccompanimentTypeFacilities.filterAccompanimentTypeFacilities,
      modalViewAccompanimentTypeFacility: (state) =>
        state.AccompanimentTypeFacilities.modalViewAccompanimentTypeFacility,
    }),
  },
  methods: {
    ...mapActions({
      clearFields() {
        this.$refs["name_facility"].value = "";
        this.$refs["accompaniment_type"].value = "";
        this.$store.dispatch("AccompanimentTypeFacilities/clearQuery");
      },
    }),
  },
};
</script>
