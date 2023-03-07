<template>
  <div class="m-5">
    <div id="person-data" class="grid grid-cols-5 gap-x-1 gap-y-6 mb-12">
      <div class="col-span-5">
        <BaseText text="Dados do equipamento" type-text="title-forms" />
        <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
      </div>
      <div class="col-span-1">
        <AppTextField show-label label-text="Nome" :text="facilitie.name" type-text="topic-details" />
      </div>
      <div class="col-span-1">
        <AppTextField
          show-label
          label-text="Tipo de Equipamento"
          :text="facility_type.name"
          type-text="topic-details"
        />
      </div>
      <div class="col-span-1">
        <AppTextField show-label label-text="Setorial" :text="sectorial.name" type-text="topic-details" />
      </div>
      <div>
        <AppTextField show-label label-text="Comunidade" :text="community.name" type-text="topic-details" />
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
          :text="facilitie.street_name"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Número da Rua"
          :text="facilitie.street_number"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Complemento do Endereço"
          :text="facilitie.address_complement"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="CEP"
          :text="facilitie.cep | VMask('#####-###')"
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
          label-text="Telefone 01"
          :text="facilitie.telephone_01"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Telefone 02"
          :text="facilitie.telephone_02"
          type-text="topic-details"
        />
      </div>
      <div class="col-span-3">
        <AppTextField show-label label-text="E-mail" :text="facilitie.email" type-text="topic-details" />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Horas de Trabalho"
          :text="facilitie.business_hours"
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
  created() {
    // console.log("facilitie", this.facilitie);
    // console.log("cityFilteredToShow", this.cityFilteredToShow);
  },
  computed: {
    ...mapState({
      facilitie: (state) => state.Facilities.facilitie,
      community: (state) => state.Facilities.community,
      facility_type: (state) => state.Facilities.facility_type,
      sectorial: (state) => state.Facilities.sectorial,
      neighborhood: (state) => state.Facilities.neighborhood,
      cityFiltered: (state) => state.Facilities.cityFiltered,
      stateFiltered: (state) => state.Facilities.stateFiltered,
    }),
  },
  methods: {
    formattedDate: (data) => {
      return data.split("-").reverse().join("/");
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
