<template>
  <BaseModal width="w-264" v-if="open">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          <Label
            v-if="forwardingProtocol.id != null"
            text="Editar Protocolo de Encaminhamento"
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
            text="Criar Protocolo de Encaminhamento"
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
          <AppButtonIcon dispatch="ForwardingProtocols/closeModal" forClose />
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
        <div class="col-span-2">
          <Multiselect
            id="select-person"
            select-placeholder="Selecione a Pessoa"
            label-text="Pessoa"
            close-on-select
            show-label
            label="name"
            :value="person"
            :options="people"
            :dispatch="setPerson"
            :multiple-option="false"
            class="mr-4"
          />
        </div>
        <div>
          <Multiselect
            id="select-incident-report"
            select-placeholder="Selecione o tipo de acompanhamento"
            label-text="Tipo de Acompanhamento"
            close-on-select
            show-label
            label="name"
            :value="accompanimentType"
            :options="accompanimentTypes"
            :dispatch="setAccompanimentType"
            :multiple-option="false"
            class="mr-4"
          />
        </div>
        <div>
          <Multiselect
            id="select-facilitie"
            select-placeholder="Selecione o Equipamento"
            label-text="Equipamento"
            close-on-select
            show-label
            label="name"
            :value="accompaniment_type_facility"
            :options="accompaniment_types_facilities"
            :dispatch="setAccompanimentTypeFacility"
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
            :value="forwardingProtocol.observation"
            dispatch="ForwardingProtocols/setObservation"
          />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="grid grid-cols-2 col-auto">
        <div class="justify-self-start">
          <AppButtonEmpty text="descartar" typeButton="danger" dispatch="ForwardingProtocols/closeModal" />
        </div>
        <div class="justify-self-end">
          <AppButtonEmpty
            v-if="forwardingProtocol.id != null"
            text="Atualizar"
            typeButton="success"
            dispatch="ForwardingProtocols/update"
          />
          <AppButtonEmpty v-else text="Criar" typeButton="success" dispatch="ForwardingProtocols/save" />
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
import BaseTextArea from "../components/forms/BaseTextArea.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    BaseModal,
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
    // this.$store.dispatch("ForwardingProtocols/loadAccompanimentTypes");
    if (this.accompanimentType) {
      this.$store.dispatch(
        "ForwardingProtocols/loadAccompanimentTypeFacilityByType",
        this.accompanimentType.id
      );
    }
  },
  computed: {
    ...mapGetters({
      getErrorMessage: "People/getErrorMessage",
    }),
    ...mapState({
      forwardingProtocol: (state) => state.ForwardingProtocols.forwardingProtocol,
      accompanimentTypes: (state) => state.ForwardingProtocols.accompaniment_types,
      accompanimentType: (state) => state.ForwardingProtocols.accompaniment_type,
      accompaniment_types_facilities: (state) => state.ForwardingProtocols.accompaniment_types_facilities,
      accompaniment_type_facility: (state) => state.ForwardingProtocols.accompaniment_type_facility,
      people: (state) => state.People.people,
      person: (state) => state.ForwardingProtocols.person,
    }),
  },

  methods: {
    ...mapActions({
      setAccompanimentType: "ForwardingProtocols/setAccompanimentType",
      setAccompanimentTypeFacility: "ForwardingProtocols/setAccompanimentTypeFacility",
      setPerson: "ForwardingProtocols/setPerson",
    }),
    onChangeSelect(payload) {
      console.log("MUDANDO ", payload);
    },
  },
  watch: {
    accompanimentType: function () {
      if (this.accompanimentType != null) {
        this.$store.dispatch(
          "ForwardingProtocols/loadAccompanimentTypeFacilityByType",
          this.accompanimentType.id
        );
      }
    },
  },
};
</script>
