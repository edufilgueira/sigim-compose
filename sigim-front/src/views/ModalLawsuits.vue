<template>
  <BaseModal width="w-264" v-if="open">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          <Label
            v-if="lawsuit.id != null"
            text="Editar Processo Judicial"
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
            text="Criar Processo Judicial"
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
          <AppButtonIcon dispatch="Lawsuits/closeModal" forClose />
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
          <BaseInput
            id="número"
            input-name="número"
            input-type="text"
            show-label
            label-text="número"
            :value="lawsuit.number"
            dispatch="Lawsuits/setNumber"
          />
        </div>
        <div>
          <Multiselect
            id="select-victim"
            select-placeholder="Vítima"
            label-text="Vítima"
            close-on-select
            show-label
            :value="victim"
            :options="people"
            :dispatch="setVictim"
            :multiple-option="false"
            class="mr-4"
          />
        </div>
        <div>
          <Multiselect
            id="select-aggressor"
            select-placeholder="Agressor"
            label-text="Agressor"
            close-on-select
            show-label
            :value="aggressor"
            :options="people"
            :dispatch="setAggressor"
            :multiple-option="false"
            class="mr-4"
          />
        </div>
        <div>
          <Multiselect
            id="select-type-crime"
            select-placeholder="Tipo de Crime"
            label-text="Tipo de Crime"
            close-on-select
            show-label
            :value="crime_type"
            :options="crimeTypes"
            :dispatch="setCrimeType"
            :multiple-option="false"
            class="mr-4"
          />
        </div>
        <div>
          <Multiselect
            id="select-violence-type"
            select-placeholder="Tipo de Violência"
            label-text="Tipo de Violência"
            close-on-select
            show-label
            :value="violence_type"
            :options="violenceTypes"
            :dispatch="setViolenceType"
            :multiple-option="false"
            class="mr-4"
          />
        </div>
        <div>
          <Multiselect
            id="select-violence-motivation"
            select-placeholder="Motivação"
            label-text="Motivação"
            close-on-select
            show-label
            :value="violence_motivation"
            :options="violenceMotivations"
            :dispatch="setViolenceMotivation"
            :multiple-option="false"
            class="mr-4"
          />
        </div>
        <div>
          <BaseTextArea
            active
            inputName="observação"
            labelText="Observação"
            showLabel
            rows="4"
            :value="lawsuit.observation"
            dispatch="Lawsuits/setObservation"
          />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="grid grid-cols-2 col-auto">
        <div class="justify-self-start">
          <AppButtonEmpty text="descartar" typeButton="danger" dispatch="Lawsuits/closeModal" />
        </div>
        <div class="justify-self-end">
          <AppButtonEmpty
            v-if="lawsuit.id != null"
            text="Atualizar"
            typeButton="success"
            dispatch="Lawsuits/update"
          />
          <AppButtonEmpty v-else text="Criar" typeButton="success" dispatch="Lawsuits/save" />
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "../components/BaseModal.vue";
import BaseTextArea from "../components/forms/BaseTextArea.vue";
import BaseInput from "../components/forms/BaseInput.vue";
import Label from "../components/Label.vue";
import AppButtonIcon from "../components/AppButtonIcon.vue";
import Multiselect from "../components/forms/Multiselect.vue";
import AppButtonEmpty from "../components/AppButtonEmpty.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    BaseModal,
    BaseInput,
    BaseTextArea,
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
    this.$store.dispatch("People/loadPeople");
    // this.$store.dispatch("Lawsuits/loadLawsuits");
    this.$store.dispatch("CrimeTypes/loadCrimeType");
    this.$store.dispatch("ViolenceTypes/loadViolenceTypes");
    this.$store.dispatch("ViolenceMotivations/loadViolenceMotivations");
  },
  computed: {
    ...mapGetters({
      getErrorMessage: "People/getErrorMessage",
    }),
    ...mapState({
      lawsuit: (state) => state.Lawsuits.lawsuit,
      people: (state) => state.People.people,
      crimeTypes: (state) => state.CrimeTypes.filterCrimesTypes,
      violenceTypes: (state) => state.ViolenceTypes.list,
      violenceMotivations: (state) => state.ViolenceMotivations.list,
      aggressor: (state) => state.Lawsuits.aggressor,
      victim: (state) => state.Lawsuits.victim,
      crime_type: (state) => state.Lawsuits.crime_type,
      violence_type: (state) => state.Lawsuits.violence_type,
      violence_motivation: (state) => state.Lawsuits.violence_motivation,
    }),
  },

  methods: {
    ...mapActions({
      setVictim: "Lawsuits/setVictim",
      setAggressor: "Lawsuits/setAggressor",
      setCrimeType: "Lawsuits/setCrimeType",
      setViolenceType: "Lawsuits/setViolenceType",
      setViolenceMotivation: "Lawsuits/setViolenceMotivation",
    }),
  },
};
</script>
