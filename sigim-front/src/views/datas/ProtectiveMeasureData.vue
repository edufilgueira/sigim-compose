<template>
  <div class="m-5">
    <div id="person-data" class="grid grid-cols-5 gap-x-1 gap-y-6 mb-12">
      <div class="col-span-5">
        <BaseText text="Dados da Medida Protetiva" type-text="title-forms" />
        <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
      </div>
      <div class="col-span-1">
        <AppTextField
          show-label
          label-text="Nº - Medida Protetiva"
          :text="protectiveMeasure.number"
          type-text="topic-details"
        />
      </div>
      <div class="col-span-1">
        <AppTextField
          show-label
          label-text="Nº - BO"
          :text="incident_report.number"
          type-text="topic-details"
        />
      </div>
      <div class="col-span-1">
        <AppTextField
          show-label
          label-text="Requerente"
          :text="protectiveMeasure.petitioner"
          type-text="topic-details"
        />
      </div>
      <div class="col-span-1">
        <AppTextField
          show-label
          label-text="Autoridade Policial"
          :text="protectiveMeasure.police_authority"
          type-text="topic-details"
        />
      </div>
      <div class="col-span-5">
        <AppTextField
          show-label
          label-text="Descrição"
          :text="protectiveMeasure.description"
          type-text="topic-details"
          classe="break-words"
        />
      </div>
      <div class="col-span-5">
        <AppTextField
          show-label
          label-text="Observação"
          :text="protectiveMeasure.observation"
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
  computed: {
    ...mapState({
      protectiveMeasure: (state) => state.ProtectiveMeasures.protectiveMeasure,
      incident_report: (state) => state.ProtectiveMeasures.incident_report,
    }),
  },
};
</script>
