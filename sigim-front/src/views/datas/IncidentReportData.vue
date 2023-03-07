<template>
  <div class="m-5">
    <div id="person-data" class="grid grid-cols-5 gap-x-1 gap-y-6 mb-12">
      <div class="col-span-5">
        <BaseText text="Dados do boletim de ocorrência" type-text="title-forms" />
        <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
      </div>
      <div class="col-span-1">
        <AppTextField
          show-label
          label-text="Nº - Boletim de Ocorrência"
          :text="incidentReport.number"
          type-text="topic-details"
        />
      </div>
      <div class="col-span-2">
        <AppTextField show-label label-text="Vítima" :text="victim.name" type-text="topic-details" />
      </div>
      <div class="col-span-2">
        <AppTextField show-label label-text="Agressor" :text="aggressor.name" type-text="topic-details" />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Tipo de Criime"
          :text="crime_type.name"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Tipo da violência"
          :text="violence_type.name"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Motivação da violência"
          :text="violence_motivation.name"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Data de comunicação"
          :text="formattedDate(incidentReport.communication_date)"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Hora de comunicação"
          :text="incidentReport.communication_time"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Data de ocorrência"
          :text="formattedDate(incidentReport.occurrence_date)"
          type-text="topic-details"
        />
      </div>
      <div class="col-span-4">
        <AppTextField
          show-label
          label-text="Hora de ocorrência"
          :text="incidentReport.occurrence_time"
          type-text="topic-details"
        />
      </div>
      <div class="col-span-5">
        <AppTextField
          show-label
          label-text="Descrição"
          :text="incidentReport.description"
          type-text="topic-details"
          classe="break-words"
        />
      </div>
      <div class="col-span-5">
        <AppTextField
          show-label
          label-text="Observação"
          :text="incidentReport.observation"
          type-text="topic-details"
          classe="break-words"
        />
      </div>
      <div class="col-span-5" v-if="this.protective_measures.length > 0">
        <div class="col-span-5">
          <BaseText text="Informações de Medida Protetiva Associada" type-text="title-forms" />
          <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
        </div>
        <div
          class="grid grid-cols-5 gap-x-1 gap-y-6 mt-5"
          :key="item.id"
          :data-index="index"
          v-for="(item, index) in protective_measures"
        >
          <div class="col-span-1">
            <AppTextField
              show-label
              label-text="Nº - Medida Protetiva"
              :text="item.number"
              type-text="topic-details"
            />
          </div>
          <div class="col-span-2">
            <AppTextField
              show-label
              label-text="Requerente"
              :text="item.petitioner"
              type-text="topic-details"
            />
          </div>
          <div class="col-span-2">
            <AppTextField
              show-label
              label-text="Autoridade Policial"
              :text="item.police_authority"
              type-text="topic-details"
            />
          </div>
          <div class="col-span-1">
            <AppTextField
              show-label
              label-text="Quantidade de Medidas Protetivas Requeridas"
              :text="item.protective_measure_requested_count"
              type-text="topic-details"
            />
          </div>
          <div class="col-span-5">
            <AppTextField
              show-label
              label-text="Descrição"
              :text="item.description"
              type-text="topic-details"
            />
          </div>
          <div class="col-span-5">
            <AppTextField
              show-label
              label-text="Observação"
              :text="item.observation"
              type-text="topic-details"
            />
          </div>
          <hr v-if="index > 0" class="border-t-0 border-b-2 border-ashes opacity-50" />
        </div>
      </div>
      <div class="col-span-5">
        <BaseText text="Informações de Endereço" type-text="title-forms" />
        <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
      </div>
      <div>
        <AppTextField show-label label-text="Estado" :text="stateFiltered.name" type-text="topic-details" />
      </div>
      <div>
        <AppTextField show-label label-text="Cidade" :text="cityFiltered.name" type-text="topic-details" />
      </div>
      <div>
        <AppTextField show-label label-text="Bairro" :text="neighborhood.name" type-text="topic-details" />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Nome da rua"
          :text="incidentReport.occurrence_street_name"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Número da rua"
          :text="incidentReport.occurrence_street_number"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Complemento do Endereço"
          :text="incidentReport.occurrence_address_complement"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="CEP"
          :text="incidentReport.occurrence_cep | VMask('#####-###')"
          type-text="topic-details"
        />
      </div>
      <div class="col-span-5">
        <BaseText text="Informações Adicionais" type-text="title-forms" />
        <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Atendido pelo Gaav?"
          :text="servicedByGavv()"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Tem acesso à arma de fogo?"
          :text="haveAccessFirearm()"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Solicitou Medida Protetiva?"
          :text="requestsProtectiveMeasure()"
          type-text="topic-details"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseText from "../../components/BaseText.vue";
import AppTextField from "../../components/AppTextField.vue";
import { mapState } from "vuex";

export default {
  components: {
    BaseText,
    AppTextField,
  },
  computed: {
    ...mapState({
      incidentReport: (state) => state.IncidentReports.incidentReport,
      victim: (state) => state.IncidentReports.victim,
      aggressor: (state) => state.IncidentReports.aggressor,
      crime_type: (state) => state.IncidentReports.crime_type,
      violence_type: (state) => state.IncidentReports.violence_type,
      violence_motivation: (state) => state.IncidentReports.violence_motivation,
      neighborhood: (state) => state.IncidentReports.occurrence_neighborhood,
      cityFiltered: (state) => state.IncidentReports.cityFiltered,
      stateFiltered: (state) => state.IncidentReports.stateFiltered,
      protective_measures: (state) => state.IncidentReports.protective_measures,
    }),
  },
  methods: {
    formattedDate: (data) => {
      if (data) {
        return data.split("-").reverse().join("/");
      }
    },
    servicedByGavv() {
      return this.incidentReport.serviced_by_gavv ? "Sim" : "Não";
    },
    haveAccessFirearm() {
      return this.incidentReport.have_access_firearm ? "Sim" : "Não";
    },
    requestsProtectiveMeasure() {
      return this.incidentReport.requests_protective_measure ? "Sim" : "Não";
    },
  },
};
</script>
