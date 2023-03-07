<template>
  <div class="m-5">
    <div id="person-data" class="grid grid-cols-5 gap-x-1 gap-y-6 mb-12">
      <div class="col-span-5">
        <BaseText text="Dados do Processo Judicial" type-text="title-forms" />
        <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
      </div>
      <div class="col-span-1">
        <AppTextField
          show-label
          label-text="Nº - Processo Judicial"
          :text="lawsuit.number"
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
          label-text="Tipo de Crime"
          :text="crime_type.name"
          type-text="topic-details"
        />
      </div>
      <div>
        <AppTextField
          show-label
          label-text="Tipo de violência"
          :text="violence_type.name"
          type-text="topic-details"
        />
      </div>
      <div class="col-span-3">
        <AppTextField
          show-label
          label-text="Motivação da violência"
          :text="violence_motivation.name"
          type-text="topic-details"
        />
      </div>
      <div class="col-span-5">
        <AppTextField
          show-label
          label-text="Observação"
          :text="lawsuit.observation"
          type-text="topic-details"
          classe="break-words"
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
    // console.log("lawssuiuiiit", this.lawsuit);
    // console.log("aggressor", this.aggressor);
  },
  computed: {
    ...mapState({
      lawsuit: (state) => state.Lawsuits.lawsuit,
      victim: (state) => state.Lawsuits.victim,
      aggressor: (state) => state.Lawsuits.aggressor,
      crime_type: (state) => state.Lawsuits.crime_type,
      violence_type: (state) => state.Lawsuits.violence_type,
      violence_motivation: (state) => state.Lawsuits.violence_motivation,
    }),
  },
};
</script>
