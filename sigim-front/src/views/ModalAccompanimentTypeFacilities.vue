<template>
  <BaseModal width="w-300" v-if="open">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          <Label
            v-if="accompanimentTypeFacility.id != null"
            text="Editar Acompanhamento por Tipo de Equipamento"
            :icon="null"
            :icon-type="null"
            type="text-2xl"
            weight="bold"
            normal
            mode="normal-case"
            class="text-ashes-dark"
          />
          <Label
            v-else
            text="Criar Acompanhamento por Tipo de Equipamento"
            :icon="null"
            :icon-type="null"
            type="text-2xl"
            weight="bold"
            normal
            mode="normal-case"
            class="text-ashes-dark"
          />
        </div>
        <div class="justify-self-end">
          <AppButtonIcon dispatch="AccompanimentTypeFacilities/closeModal" forClose />
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="grid grid-cols-2">
        <div class="col-span-2 text-purple pb-2">
          <Label
            text="Informações Gerais"
            :icon="null"
            :icon-type="null"
            type="text-sm"
            weight="semibold"
            normal
            mode="uppercase"
          />
          <div class="border-ashes-hover border-b-2 w-full"></div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-2">
        <div>
          <Multiselect
            id="select-facility"
            select-placeholder="Selecione o equipamento"
            label-text="Equipamento"
            close-on-select
            show-label
            label="name"
            :value="facility"
            :options="facilities"
            :dispatch="setFacility"
            :multiple-option="false"
            class="mr-4"
          />
        </div>
        <div>
          <Multiselect
            id="select-accompanyment_type"
            select-placeholder="Selecione o tipo de acompanhamento"
            label-text="Tipo de encaminhamento"
            close-on-select
            show-label
            label="name"
            :value="accompaniment_type"
            :options="accompaniment_types"
            :dispatch="setAccompanimentType"
            :multiple-option="false"
            class="mr-4"
          />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="grid grid-cols-2 col-auto">
        <div class="justify-self-start">
          <AppButtonEmpty
            text="descartar"
            typeButton="danger"
            dispatch="AccompanimentTypeFacilities/closeModal"
          />
        </div>
        <div class="justify-self-end">
          <AppButtonEmpty
            v-if="accompanimentTypeFacility.id != null"
            text="Atualizar"
            typeButton="success"
            dispatch="AccompanimentTypeFacilities/update"
          />
          <AppButtonEmpty
            v-else
            text="Criar"
            typeButton="success"
            dispatch="AccompanimentTypeFacilities/save"
          />
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "../components/BaseModal.vue";
import Label from "../components/Label.vue";
import AppButtonIcon from "../components/AppButtonIcon.vue";
import Multiselect from "../components/forms/Multiselect.vue";
import AppButtonEmpty from "../components/AppButtonEmpty.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    BaseModal,
    Label,
    AppButtonIcon,
    AppButtonEmpty,
    Multiselect,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.$store.dispatch("Facilities/loadFacilities");
    // this.$store.dispatch("AccompanimentTypeFacilities/loadAccompanimentTypes");
    // this.$store.dispatch("IncidentReports/loadIncidentReports");
    // console.log("facilities", this.facilities);
    // console.log("accompaniment_types", this.accompaniment_types);
  },
  computed: {
    ...mapGetters({
      getErrorMessage: "People/getErrorMessage",
    }),
    ...mapState({
      accompanimentTypeFacility: (state) => state.AccompanimentTypeFacilities.accompanimentTypeFacility,

      facilities: (state) => state.Facilities.facilities,
      accompaniment_types: (state) => state.AccompanimentTypeFacilities.accompaniment_types,

      facility: (state) => state.AccompanimentTypeFacilities.facility,
      accompaniment_type: (state) => state.AccompanimentTypeFacilities.accompaniment_type,
    }),
  },

  methods: {
    ...mapActions({
      setFacility: "AccompanimentTypeFacilities/setFacility",
      setAccompanimentType: "AccompanimentTypeFacilities/setAccompanimentType",
    }),
  },
};
</script>
