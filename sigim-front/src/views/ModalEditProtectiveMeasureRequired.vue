<template>
  <BaseModal width="w-264" v-if="open">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          <Label
            text="Editar Medida Protetiva Requerida"
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
          <AppButtonIcon dispatch="ProtectiveMeasuresRequesteds/closeEditModal" forClose />
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="grid grid-cols-2">
        <div class="col-span-2 text-purple pb-2">
          <Label
            text="Informações da Medida Protetiva"
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
      <div class="grid grid-cols-1 gap-4 mt-2">
        <div>
          <div class="m-5">
            <div id="person-data" class="grid grid-cols-5 gap-x-1 gap-y-6 mb-2">
              <div class="col-span-5">
                <BaseText text="Dados da Medida Protetiva Selecionada" type-text="title-forms" />
                <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
              </div>
              <div class="col-span-1">
                <AppTextField
                  show-label
                  label-text="Nº - Medida Protetiva"
                  :text="protectiveMeasureRequestedToUpdate.protective_measure.number"
                  type-text="topic-details"
                />
              </div>
              <div class="col-span-1">
                <AppTextField
                  show-label
                  label-text="Nº - BO"
                  :text="protectiveMeasureRequestedToUpdate.incident_report.number"
                  type-text="topic-details"
                />
              </div>
              <div class="col-span-5">
                <AppTextField
                  show-label
                  label-text="Tipo de Medida"
                  :text="protectiveMeasureRequestedToUpdate.protective_measure_type.name"
                  type-text="topic-details"
                />
              </div>
              <div>
                <AppRadioButton
                  :values="[
                    {
                      name: 'ProtectiveMeasureRequested',
                      value: true,
                      description: 'Sim',
                      checked: protectiveMeasureRequestedToUpdate.requested === true,
                    },
                    {
                      name: 'ProtectiveMeasureRequested',
                      value: false,
                      description: 'Não',
                      checked: protectiveMeasureRequestedToUpdate.requested === false,
                    },
                  ]"
                  labelText="Requisitado"
                  showLabel
                  dispatch="ProtectiveMeasuresRequesteds/setRequestedToUpdate"
                />
              </div>
            </div>
          </div>
          <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
          <div class="border-ashes-hover border-b-2 w-full"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="grid grid-cols-2 col-auto">
        <div class="justify-self-start">
          <AppButtonEmpty
            text="descartar"
            typeButton="danger"
            dispatch="ProtectiveMeasuresRequesteds/closeEditModal"
          />
        </div>
        <div class="justify-self-end">
          <AppButtonEmpty
            text="Atualizar"
            typeButton="success"
            dispatch="ProtectiveMeasuresRequesteds/update"
          />
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "../components/BaseModal.vue";
import AppTextField from "../components/AppTextField.vue";
import BaseText from "../components/BaseText.vue";
import Label from "../components/Label.vue";
import AppButtonIcon from "../components/AppButtonIcon.vue";
import AppRadioButton from "../components/AppRadioButton.vue";
import AppButtonEmpty from "../components/AppButtonEmpty.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    AppTextField,
    BaseText,
    BaseModal,
    Label,
    AppButtonIcon,
    AppRadioButton,
    AppButtonEmpty,
  },
  data() {
    return {
      protectiveMeasureFiltered: null,
    };
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.$store.dispatch("ProtectiveMeasures/loadProtectiveMeasures");
    //this.$store.dispatch("ProtectiveMeasuresRequesteds/loadProtectiveMeasuresTypes");
    // console.log("protectiveMeasureRequestedToUpdate", this.protectiveMeasureRequestedToUpdate);
  },
  computed: {
    ...mapGetters({
      getErrorMessage: "People/getErrorMessage",
    }),
    ...mapState({
      protectiveMeasureRequestedToUpdate: (state) =>
        state.ProtectiveMeasuresRequesteds.protectiveMeasureRequestedToUpdate,
    }),
  },
};
</script>
