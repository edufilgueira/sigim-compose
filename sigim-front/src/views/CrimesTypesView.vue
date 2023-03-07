<template lang="">
  <div class="font-system">
    <div id="title-page" class="mx-12 my-6">
      <div class="text-ashes-hover font-medium text-3xl">Tipos de Crimes</div>
    </div>
    <div id="tabs-button" class="flex justify-between mx-12 my-6">
      <div class="flex">
        <div class="w-104">
          <BaseInput
            active
            inputName=""
            inputType="text"
            iconName="search"
            showIcon
            input-placeholder="Pesquisar por nome"
            dispatch="CrimeTypes/filterList"
          />
        </div>
      </div>
      <div class="float-right">
        <AppButtonColorful
          id="btn-add-crime"
          showIcon
          iconName="add"
          text="Adicionar Crime"
          dispatch="CrimeTypes/openModal"
          typeButton="primary"
        />
      </div>
    </div>
    <div id="list-crimes">
      <div class="mx-12">
        <CrimesTypesCards :data="Crime" />
      </div>
    </div>
    <ModalCrimeType :open="modalToggle" />
    <ModalConfirmDeleteCrimeTypeViewVue :open="modalConfirmDeleteCrimeType" />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import ModalConfirmDeleteCrimeTypeViewVue from "./ModalConfirmDeleteCrimeTypeView.vue";
import BaseInput from "../components/forms/BaseInput.vue";
import CrimesTypesCards from "./list/CrimesTypesCard.vue";
import AppButtonColorful from "../components/AppButtonColorful.vue";
import ModalCrimeType from "./ModalCrimeType.vue";

export default {
  // name: "Crime",
  components: {
    AppButtonColorful,
    CrimesTypesCards,
    BaseInput,
    ModalCrimeType,
    ModalConfirmDeleteCrimeTypeViewVue,
  },
  methods: {
    ...mapActions({
      getCrimes: "CrimeTypes/loadCrimeType",
    }),
  },
  computed: {
    ...mapState({
      Crime: (state) => state.CrimeTypes.filterCrimesTypes,
      modalToggle: (state) => state.CrimeTypes.modalToggle,
      modalConfirmDeleteCrimeType: (state) => state.CrimeTypes.modalConfirmDeleteCrimeType,
    }),
  },
  created() {
    this.$store.dispatch("CrimeTypes/loadCrimeType");
  },
};
</script>
<style lang=""></style>
