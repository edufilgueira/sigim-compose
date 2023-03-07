<template>
  <div>
    <div class="pl-12">
      <BaseText
        text="Equipamentos"
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
            label="Equipamento"
            showIcon
            input-placeholder="Nome Equip."
            dispatch="Facilities/filterListByNameEquipment"
            ref="name_facility"
          />
        </div>
        <div class="w-80">
          <BaseLabel
            text="Filtrar por Tipo de Equipamento"
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
            label="Equipamento"
            showIcon
            input-placeholder="Nome Tipo Equip."
            dispatch="Facilities/filterListByTypeNameEquipment"
            ref="type_facility"
          />
        </div>
        <div>
          <AppButtonColorful
            id="btn-consult-facilities"
            showIcon
            iconName="search"
            text="Consultar dados"
            dispatch="Facilities/loadFacilities"
            typeButton="primary"
          />
        </div>
        <div v-if="Facilities.length > 0">
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
          id="btn-add-facilities"
          showIcon
          iconName="add"
          text="Criar Equipamento"
          dispatch="Facilities/toggleModalFacilities"
          typeButton="primary"
        />
      </div>
    </div>
    <div class="p-4">
      <div class="mx-10"><FacilitiesCards :data="Facilities" /></div>
    </div>
    <ModalFacilities :open="modalToggleFacilities" />
    <ModalConfirmDeleteFacilitie :open="modalConfirmDeleteFacilitie" />
    <ModalViewFacilitie :open="modalViewFacilitie" />
  </div>
</template>

<script>
import ModalFacilities from "./ModalFacilities.vue";
import ModalViewFacilitie from "./datas/ModalViewFacilitie.vue";
import FacilitiesCards from "./list/FacilitiesCards.vue";
import ModalConfirmDeleteFacilitie from "../views/alerts/ModalConfirmDeleteFacilitie.vue";
import BaseText from "../components/BaseText.vue";
import AppButtonColorful from "../components/AppButtonColorful.vue";
import BaseInput from "../components/forms/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    FacilitiesCards,
    BaseText,
    ModalFacilities,
    ModalConfirmDeleteFacilitie,
    ModalViewFacilitie,
    AppButtonColorful,
    BaseInput,
    BaseLabel,
  },
  // beforeCreate() {
  //   this.$store.dispatch("Facilities/loadFacilities");
  // },
  data() {
    return {
      permit: false,
    };
  },
  methods: {
    ...mapActions({ canAcces: "AccessControl/canAcces" }),
    facilityAcces() {
      this.canAcces("facility_create").then((resp) => {
        this.permit = resp;
      });
    },
    clearFields() {
      this.$refs["name_facility"].value = "";
      this.$refs["type_facility"].value = "";
      this.$store.dispatch("Facilities/clearQuery");
    },
  },
  created() {
    // this.facilityCreate();
  },
  computed: {
    ...mapState({
      modalToggleFacilities: (state) => state.Facilities.modalToggleFacilities,
      modalConfirmDeleteFacilitie: (state) => state.Facilities.modalConfirmDeleteFacilitie,
      Facilities: (state) => state.Facilities.filterFacilities,
      modalViewFacilitie: (state) => state.Facilities.modalViewFacilitie,
    }),
  },
};
</script>
