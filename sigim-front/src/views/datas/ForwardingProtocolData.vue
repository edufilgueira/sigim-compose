<template>
  <div class="m-5">
    <div id="person-data" class="grid grid-cols-5 gap-x-1 gap-y-6 mb-12">
      <div class="col-span-5">
        <BaseText text="Dados do Protocolo de Encaminhamento" type-text="title-forms" />
        <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
      </div>
      <div class="col-span-2">
        <AppTextField show-label label-text="Pessoa" :text="getPerson" type-text="topic-details" />
      </div>
      <div class="col-span-2">
        <AppTextField
          show-label
          label-text="Tipo de Acompanhamento"
          :text="getAccompanimentType"
          type-text="topic-details"
        />
      </div>
      <div class="col-span-2">
        <AppTextField show-label label-text="Equipamento" :text="getFacility" type-text="topic-details" />
      </div>
      <div class="col-span-2">
        <AppTextField show-label label-text="Setorial" :text="getSectorial" type-text="topic-details" />
      </div>
      <div class="col-span-5">
        <AppTextField show-label label-text="Observação" :text="getObservation" type-text="topic-details" />
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
      forwardingProtocol: (state) => state.ForwardingProtocols.forwardingProtocol,
      forwarding_protocols: (state) => state.ForwardingProtocols.forwarding_protocols,
    }),
    getPerson() {
      let person = "";
      this.forwarding_protocols.forEach((item) => {
        if (item.id == this.forwardingProtocol.id) {
          person = item.person.name;
        }
      });
      return person;
    },
    getAccompanimentType() {
      let accompaniment_type = "";
      this.forwarding_protocols.forEach((item) => {
        if (item.id == this.forwardingProtocol.id) {
          accompaniment_type = item.accompaniment_type.name;
        }
      });
      return accompaniment_type;
    },
    getFacility() {
      let facility = "";
      this.forwarding_protocols.forEach((item) => {
        if (item.id == this.forwardingProtocol.id) {
          facility = item.facility.name;
        }
      });
      return facility;
    },
    getSectorial() {
      let sectorial = "";
      this.forwarding_protocols.forEach((item) => {
        if (item.id == this.forwardingProtocol.id) {
          sectorial = item.sectorial.name;
        }
      });
      return sectorial;
    },
    getObservation() {
      let observation = "";
      this.forwarding_protocols.forEach((item) => {
        if (item.id == this.forwardingProtocol.id) {
          observation = item.observation;
        }
      });
      return observation;
    },
  },
};
</script>
