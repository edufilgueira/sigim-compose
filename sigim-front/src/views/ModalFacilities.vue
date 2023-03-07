<template>
  <BaseModal width="w-264" v-if="open">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          <Label
            v-if="facilitie.id != null"
            text="Editar Equipamento"
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
            text="Criar Equipamento"
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
          <AppButtonIcon dispatch="Facilities/closeModal" forClose />
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
            id="nome"
            input-name="nome"
            input-type="text"
            show-label
            label-text="nome"
            :value="facilitie.name"
            dispatch="Facilities/setName"
          />
        </div>
        <div>
          <Multiselect
            id="select-community"
            select-placeholder="Comunidade"
            label-text="Comunidade"
            close-on-select
            show-label
            :value="community"
            :options="communities"
            :dispatch="setCommunity"
            :multiple-option="false"
            class="mr-4"
          />
        </div>
        <div>
          <Multiselect
            id="select-sectorial"
            select-placeholder="Setorial"
            label-text="Setorial"
            close-on-select
            show-label
            :value="sectorial"
            :options="sectorials"
            :dispatch="setSectorial"
            :multiple-option="false"
            class="mr-4"
          />
        </div>
        <div>
          <Multiselect
            id="select-facility_type"
            select-placeholder="Tipo de Equipamento"
            label-text="Tipo de Equipamento"
            close-on-select
            show-label
            :value="facility_type"
            :options="facilities_types"
            :dispatch="setFacilityType"
            :multiple-option="false"
            class="mr-4"
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
            active
            inputName="cep"
            labelText="cep"
            mask="#####-###"
            showLabel
            rows="4"
            :value="facilitie.cep"
            dispatch="Facilities/setCep"
          />
        </div>
        <div>
          <BaseInput
            active
            inputName="nome da rua"
            labelText="nome da rua"
            showLabel
            rows="4"
            :value="facilitie.street_name"
            dispatch="Facilities/setStreetName"
          />
        </div>
        <div>
          <BaseInput
            active
            inputName="número da rua"
            labelText="número da rua"
            showLabel
            rows="4"
            :value="facilitie.street_number"
            dispatch="Facilities/setStreetNumber"
          />
        </div>
        <div>
          <BaseInput
            active
            inputName="complemento do endereço"
            labelText="complemento do endereço"
            showLabel
            rows="4"
            :value="facilitie.address_complement"
            dispatch="Facilities/setAddressComplement"
          />
        </div>
        <div>
          <BaseInput
            active
            inputName="telefone 01"
            labelText="telefone 01"
            mask="(##) #####.####"
            showLabel
            rows="4"
            :value="facilitie.telephone_01"
            dispatch="Facilities/setTelephone01"
          />
        </div>
        <div>
          <BaseInput
            active
            inputName="telefone 02"
            labelText="telefone 02"
            mask="(##) #####.####"
            showLabel
            rows="4"
            :value="facilitie.telephone_02"
            dispatch="Facilities/setTelephone02"
          />
        </div>
        <div>
          <BaseInput
            active
            inputName="whatsapp"
            labelText="whatsapp"
            :mask="['(##) ####.####', '(##) #####.####']"
            showLabel
            rows="4"
            :value="facilitie.whatsapp"
            dispatch="Facilities/setWhatsapp"
          />
        </div>
        <div>
          <BaseInput
            active
            inputName="E-mail"
            labelText="E-mail"
            input-type="text"
            showLabel
            rows="4"
            :value="facilitie.email"
            dispatch="Facilities/setEmail"
          />
        </div>
        <div>
          <BaseInput
            active
            inputName="Horas de Trabalho"
            labelText="Horas de Trabalho"
            showLabel
            rows="4"
            :value="facilitie.business_hours"
            dispatch="Facilities/setBusinessHours"
          />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="grid grid-cols-2 col-auto">
        <div class="justify-self-start">
          <AppButtonEmpty text="descartar" typeButton="danger" dispatch="Facilities/closeModal" />
        </div>
        <div class="justify-self-end">
          <AppButtonEmpty
            v-if="facilitie.id != null"
            text="Atualizar"
            typeButton="success"
            dispatch="Facilities/update"
          />
          <AppButtonEmpty v-else text="Criar" typeButton="success" dispatch="Facilities/save" />
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "../components/BaseModal.vue";
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
    this.$store.dispatch("Facilities/loadCommunities");
    this.$store.dispatch("Facilities/loadSectorials");
    this.$store.dispatch("Facilities/loadFacilitiesTypes");
    this.$store.dispatch("Facilities/loadStates");
    if (this.stateFiltered) {
      this.$store.dispatch("Facilities/loadCitiesByStateId", this.stateFiltered.id);
    }
    if (this.cityFiltered) {
      this.$store.dispatch("Facilities/loadNeighborhoods", this.cityFiltered.id);
    }
  },
  computed: {
    ...mapGetters({
      getErrorMessage: "People/getErrorMessage",
    }),
    ...mapState({
      facilitie: (state) => state.Facilities.facilitie,
      states: (state) => state.Facilities.states,
      stateFiltered: (state) => state.Facilities.stateFiltered,
      cities: (state) => state.Facilities.cities,
      cityFiltered: (state) => state.Facilities.cityFiltered,
      neighborhoods: (state) => state.Facilities.neighborhoods,
      neighborhood: (state) => state.Facilities.neighborhood,
      communities: (state) => state.Facilities.communities,
      community: (state) => state.Facilities.community,
      sectorials: (state) => state.Facilities.sectorials,
      sectorial: (state) => state.Facilities.sectorial,
      facilities_types: (state) => state.Facilities.facilities_types,
      facility_type: (state) => state.Facilities.facility_type,
    }),
  },

  methods: {
    ...mapActions({
      setState: "Facilities/setState",
      setCity: "Facilities/setCity",
      setNeighborhood: "Facilities/setNeighborhood",
      setCommunity: "Facilities/setCommunity",
      setSectorial: "Facilities/setSectorial",
      setFacilityType: "Facilities/setFacilityType",
    }),
  },
};
</script>
