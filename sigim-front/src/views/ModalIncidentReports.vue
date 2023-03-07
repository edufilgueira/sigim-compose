<template>
  <BaseModal width="w-264" v-if="open">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          <Label
            v-if="incidentReport.id != null"
            text="Editar Boletim de Ocorrência"
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
            text="Criar Boletim de Ocorrência"
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
          <AppButtonIcon dispatch="IncidentReports/closeModal" forClose />
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
            :value="incidentReport.number"
            dispatch="IncidentReports/setNumber"
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
          <BaseInput
            id="communication_date"
            input-name="communication_date"
            input-type="date"
            show-label
            label-text="Data de Comunicação"
            :value="incidentReport.communication_date"
            dispatch="IncidentReports/setCommunicationDate"
          />
        </div>
        <div>
          <BaseInput
            id="communication_time"
            input-name="Hora de Comunicação"
            input-type="time"
            show-label
            label-text="Hora de Comunicação"
            :value="incidentReport.communication_time"
            dispatch="IncidentReports/setCommunicationTime"
          />
        </div>
        <div>
          <BaseInput
            id="occurrence_date"
            input-name="Data de Ocorrência"
            input-type="date"
            show-label
            label-text="Data de Ocorrência"
            :value="incidentReport.occurrence_date"
            dispatch="IncidentReports/setOccurrenceDate"
          />
        </div>
        <div>
          <BaseInput
            id="occurrence_time"
            input-name="Hora de Ocorrência"
            input-type="time"
            show-label
            label-text="Hora de Ocorrência"
            :value="incidentReport.occurrence_time"
            dispatch="IncidentReports/setOccurrenceTime"
          />
        </div>
        <div>
          <BaseInput
            id="occurrence_cep"
            input-name="CEP da Ocorrência"
            input-type="text"
            show-label
            mask="#####-###"
            label-text="CEP da Ocorrência"
            :value="incidentReport.occurrence_cep"
            dispatch="IncidentReports/setOccurrenceCep"
          />
        </div>
        <div>
          <Multiselect
            id="select-state"
            select-placeholder="Selecionar"
            label-text="Estado"
            :value="stateFiltered"
            close-on-select
            show-label
            :multiple-option="false"
            :options="states"
            :dispatch="setState"
            class="mr-5"
          />
        </div>
        <div>
          <Multiselect
            id="select-city"
            select-placeholder="Selecionar"
            label-text="Cidade"
            :value="cityFiltered"
            close-on-select
            show-label
            :multiple-option="false"
            :options="cities"
            :dispatch="setCity"
            class="mr-5"
          />
        </div>
        <div>
          <Multiselect
            id="select-neighborhood"
            select-placeholder="Selecionar"
            label-text="Bairro"
            :value="neighborhood"
            close-on-select
            show-label
            :multiple-option="false"
            :options="neighborhoods"
            :dispatch="setNeighborhood"
            class="mr-5"
          />
        </div>
        <div>
          <BaseInput
            id="occurrence_street_name"
            input-name="Nome da Rua de Ocorrência"
            input-type="text"
            show-label
            label-text="Nome da Rua de Ocorrência"
            :value="incidentReport.occurrence_street_name"
            dispatch="IncidentReports/setOccurrenceStreetName"
          />
        </div>
        <div>
          <BaseInput
            id="occurrence_street_number"
            input-name="Número da Rua de Ocorrência"
            input-type="text"
            show-label
            label-text="Número da Rua de Ocorrência"
            :value="incidentReport.occurrence_street_number"
            dispatch="IncidentReports/setOccurrenceStreetNumber"
          />
        </div>
        <div>
          <BaseInput
            id="occurrence_address_complement"
            input-name="Complemento do endereço da ocorrência"
            input-type="text"
            show-label
            label-text="Complemento do endereço da ocorrência"
            :value="incidentReport.occurrence_address_complement"
            dispatch="IncidentReports/setOccurrenceAddressComplement"
          />
        </div>
        <div>
          <AppRadioButton
            :values="[
              {
                name: 'serviced_by_gavv',
                value: true,
                description: 'Sim',
                checked: incidentReport.serviced_by_gavv === true,
              },
              {
                name: 'serviced_by_gavv',
                value: false,
                description: 'Não',
                checked: incidentReport.serviced_by_gavv === false,
              },
            ]"
            labelText="Atendido pelo Gaav?"
            showLabel
            dispatch="IncidentReports/setServicedByGavv"
          />
        </div>
        <div>
          <AppRadioButton
            :values="[
              {
                name: 'have_access_firearm',
                value: true,
                description: 'Sim',
                checked: incidentReport.have_access_firearm === true,
              },
              {
                name: 'have_access_firearm',
                value: false,
                description: 'Não',
                checked: incidentReport.have_access_firearm === false,
              },
            ]"
            labelText="Possui acesso à arma de fogo?"
            showLabel
            dispatch="IncidentReports/setHaveAccessFirearm"
          />
        </div>
        <div>
          <AppRadioButton
            :values="[
              {
                name: 'requests_protective_measure',
                value: true,
                description: 'Sim',
                checked: incidentReport.requests_protective_measure === true,
              },
              {
                name: 'srequests_protective_measure',
                value: false,
                description: 'Não',
                checked: incidentReport.requests_protective_measure === false,
              },
            ]"
            labelText="Solicitou Medida Protetiva?"
            showLabel
            dispatch="IncidentReports/setRequestsProtectiveMeasure"
          />
        </div>
        <div>
          <BaseTextArea
            active
            inputName="descrição"
            labelText="Descrição"
            showLabel
            rows="4"
            :value="incidentReport.description"
            dispatch="IncidentReports/setDescription"
          />
        </div>
        <div>
          <BaseTextArea
            active
            inputName="observação"
            labelText="Observação"
            showLabel
            rows="4"
            :value="incidentReport.observation"
            dispatch="IncidentReports/setObservation"
          />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="grid grid-cols-2 col-auto">
        <div class="justify-self-start">
          <AppButtonEmpty text="descartar" typeButton="danger" dispatch="IncidentReports/closeModal" />
        </div>
        <div class="justify-self-end">
          <AppButtonEmpty
            v-if="incidentReport.id"
            text="Atualizar"
            typeButton="success"
            dispatch="IncidentReports/update"
          />
          <AppButtonEmpty v-else text="Criar" typeButton="success" dispatch="IncidentReports/save" />
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
import AppRadioButton from "../components/AppRadioButton.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    BaseModal,
    BaseInput,
    BaseTextArea,
    Label,
    AppButtonIcon,
    AppButtonEmpty,
    AppRadioButton,
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
    // this.$store.dispatch("IncidentReports/loadIncidentReports");
    this.$store.dispatch("CrimeTypes/loadCrimeType");
    this.$store.dispatch("ViolenceTypes/loadViolenceTypes");
    this.$store.dispatch("ViolenceMotivations/loadViolenceMotivations");
    this.$store.dispatch("IncidentReports/loadStates");
    // console.log("incidentReport", this.incidentReport);
    if (this.stateFiltered) {
      this.$store.dispatch("IncidentReports/loadCitiesByStateId", this.stateFiltered.id);
    }
    if (this.cityFiltered) {
      this.$store.dispatch("IncidentReports/loadNeighborhoods", this.cityFiltered.id);
    }
  },
  computed: {
    ...mapGetters({
      getErrorMessage: "People/getErrorMessage",
    }),
    ...mapState({
      incidentReport: (state) => state.IncidentReports.incidentReport,
      states: (state) => state.IncidentReports.states,
      stateFiltered: (state) => state.IncidentReports.stateFiltered,
      cities: (state) => state.IncidentReports.cities,
      cityFiltered: (state) => state.IncidentReports.cityFiltered,
      neighborhoods: (state) => state.IncidentReports.neighborhoods,
      neighborhood: (state) => state.IncidentReports.occurrence_neighborhood,
      people: (state) => state.People.people,
      crimeTypes: (state) => state.CrimeTypes.filterCrimesTypes,
      violenceTypes: (state) => state.ViolenceTypes.list,
      violenceMotivations: (state) => state.ViolenceMotivations.list,
      victim: (state) => state.IncidentReports.victim,
      aggressor: (state) => state.IncidentReports.aggressor,
      crime_type: (state) => state.IncidentReports.crime_type,
      violence_type: (state) => state.IncidentReports.violence_type,
      violence_motivation: (state) => state.IncidentReports.violence_motivation,
    }),
  },
  methods: {
    ...mapActions({
      setState: "IncidentReports/setState",
      setCity: "IncidentReports/setCity",
      setNeighborhood: "IncidentReports/setNeighborhood",
      setVictim: "IncidentReports/setVictim",
      setAggressor: "IncidentReports/setAggressor",
      setCrimeType: "IncidentReports/setCrimeType",
      setViolenceType: "IncidentReports/setViolenceType",
      setViolenceMotivation: "IncidentReports/setViolenceMotivation",
    }),
  },
};
</script>
