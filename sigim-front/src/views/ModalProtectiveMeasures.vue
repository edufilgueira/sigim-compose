<template>
  <BaseModal width="w-264" v-if="open">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          <Label
            v-if="protectiveMeasure.id != null"
            text="Editar Medida Protetiva"
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
            text="Criar Medida Protetiva"
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
          <AppButtonIcon dispatch="ProtectiveMeasures/closeModal" forClose />
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
            id="number"
            input-name="number"
            input-type="text"
            show-label
            label-text="número"
            :value="protectiveMeasure.number"
            dispatch="ProtectiveMeasures/setNumber"
          />
        </div>
        <div>
          <Multiselect
            id="select-incident-report"
            select-placeholder="Selecione o número do BO"
            label-text="Boletim de Ocorrência - Nº:"
            close-on-select
            show-label
            label="number"
            :value="incident_report"
            :options="incident_reports"
            :dispatch="setIncidentReport"
            :multiple-option="false"
            class="mr-4"
          />
        </div>
        <div>
          <BaseInput
            id="petitioner"
            input-name="petitioner"
            input-type="text"
            show-label
            label-text="Requerente"
            :value="protectiveMeasure.petitioner"
            dispatch="ProtectiveMeasures/setPetitioner"
          />
        </div>
        <div>
          <BaseInput
            id="police_atuthority"
            input-name="police_atuthority"
            input-type="text"
            show-label
            label-text="Autoridade Policial"
            :value="protectiveMeasure.police_authority"
            dispatch="ProtectiveMeasures/setPoliceAuthority"
          />
        </div>
        <div>
          <BaseTextArea
            active
            inputName="descrição"
            labelText="Descrição"
            showLabel
            rows="4"
            :value="protectiveMeasure.description"
            dispatch="ProtectiveMeasures/setDescription"
          />
        </div>
        <div>
          <BaseTextArea
            active
            inputName="observação"
            labelText="Observação"
            showLabel
            rows="4"
            :value="protectiveMeasure.observation"
            dispatch="ProtectiveMeasures/setObservation"
          />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="grid grid-cols-2 col-auto">
        <div class="justify-self-start">
          <AppButtonEmpty text="descartar" typeButton="danger" dispatch="ProtectiveMeasures/closeModal" />
        </div>
        <div class="justify-self-end">
          <AppButtonEmpty
            v-if="protectiveMeasure.id != null"
            text="Atualizar"
            typeButton="success"
            dispatch="ProtectiveMeasures/update"
          />
          <AppButtonEmpty v-else text="Criar" typeButton="success" dispatch="ProtectiveMeasures/save" />
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
    // this.$store.dispatch("ProtectiveMeasures/loadProtectiveMeasures");
    this.$store.dispatch("IncidentReports/loadIncidentReports");
  },
  computed: {
    ...mapGetters({
      getErrorMessage: "People/getErrorMessage",
    }),
    ...mapState({
      protectiveMeasure: (state) => state.ProtectiveMeasures.protectiveMeasure,
      incident_reports: (state) => state.IncidentReports.incident_reports,
      incident_report: (state) => state.ProtectiveMeasures.incident_report,
    }),
  },

  methods: {
    ...mapActions({
      setIncidentReport: "ProtectiveMeasures/setIncidentReport",
    }),
  },
};
</script>
