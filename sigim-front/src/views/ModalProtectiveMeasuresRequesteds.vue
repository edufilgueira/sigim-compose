<template>
  <BaseModal width="w-264" v-if="open">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          <Label
            v-if="id != null"
            text="Editar Medida Protetiva Requerida"
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
            text="Criar Medida Protetiva Requerida"
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
          <AppButtonIcon dispatch="ProtectiveMeasuresRequesteds/closeModal" forClose />
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="grid grid-cols-2">
        <div v-if="!protective_measure" class="col-span-2 text-purple pb-2">
          <Label
            text="Selecione a medida protetiva:"
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
        <div v-if="!protective_measure">
          <div>
            <Multiselect
              id="select-protective-measure"
              select-placeholder="Selecione o número da Medida Protetiva"
              label-text="Medida Protetiva - Nº:"
              close-on-select
              show-label
              label="number"
              :value="protective_measure"
              :options="protectiveMeasures"
              :dispatch="setProtectiveMeasure"
              :multiple-option="false"
              class="mr-4"
            />
          </div>
          <div class="border-ashes-hover border-b-2 w-full"></div>
        </div>
        <div v-else>
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
                  :text="protectiveMeasureFiltered.number"
                  type-text="topic-details"
                />
              </div>
              <!-- <div class="col-span-1">
                <AppTextField
                  show-label
                  label-text="Nº - BO"
                  :text="incident_report.number"
                  type-text="topic-details"
                />
              </div> -->
              <div class="col-span-1">
                <AppTextField
                  show-label
                  label-text="Requerente"
                  :text="protectiveMeasureFiltered.petitioner"
                  type-text="topic-details"
                />
              </div>
              <div class="col-span-1">
                <AppTextField
                  show-label
                  label-text="Autoridade Policial"
                  :text="protectiveMeasureFiltered.police_authority"
                  type-text="topic-details"
                />
              </div>
              <div class="col-span-5">
                <AppTextField
                  show-label
                  label-text="Descrição"
                  :text="protectiveMeasureFiltered.description"
                  type-text="topic-details"
                  classe="break-words"
                />
              </div>
              <div class="col-span-5">
                <AppTextField
                  show-label
                  label-text="Observação"
                  :text="protectiveMeasureFiltered.observation"
                  type-text="topic-details"
                  classe="break-words"
                />
              </div>
            </div>
          </div>
          <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
          <hr class="border-t-0 border-b-2 border-ashes opacity-50" />
          <BaseLabel
            text="Selecionar medidas requeridas:"
            typeText="custom"
            weight="normal"
            :italic="false"
            size="xs"
          />
          <div
            class="mt-1 mr-5 app-checkbox"
            :key="item.id"
            :data-index="index"
            v-for="(item, index) in protective_measures_types"
          >
            <input
              :id="item.id"
              type="checkbox"
              name="protective_measures_types"
              @click="onCheck($event, item, index)"
              :checked="item.requested"
            />
            <BaseLabel
              :text="item.name"
              :target="checkboxId(item, index)"
              typeText="custom"
              weight="normal"
              :italic="false"
              mode="capitalize"
              size="xs"
            />
          </div>
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
            dispatch="ProtectiveMeasuresRequesteds/closeModal"
          />
        </div>
        <div class="justify-self-end">
          <AppButtonEmpty
            v-if="id != null"
            text="Atualizar"
            typeButton="success"
            dispatch="ProtectiveMeasuresRequesteds/update"
          />
          <AppButtonEmpty
            v-else
            text="Criar"
            typeButton="success"
            dispatch="ProtectiveMeasuresRequesteds/save"
          />
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "../components/BaseModal.vue";
import BaseLabel from "../components/BaseLabel.vue";
import AppTextField from "../components/AppTextField.vue";
import BaseText from "../components/BaseText.vue";
import Label from "../components/Label.vue";
import AppButtonIcon from "../components/AppButtonIcon.vue";
import Multiselect from "../components/forms/Multiselect.vue";
import AppButtonEmpty from "../components/AppButtonEmpty.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    AppTextField,
    BaseText,
    BaseLabel,
    BaseModal,
    Label,
    AppButtonIcon,
    AppButtonEmpty,
    Multiselect,
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
  },
  computed: {
    ...mapGetters({
      getErrorMessage: "People/getErrorMessage",
    }),
    ...mapState({
      protectiveMeasureRequested: (state) => state.ProtectiveMeasuresRequesteds.protectiveMeasureRequested,
      protective_measures_types: (state) => state.ProtectiveMeasuresRequesteds.protective_measures_types,
      protective_measure_type: (state) => state.ProtectiveMeasuresRequesteds.protective_measure_type,
      incident_report: (state) => state.ProtectiveMeasures.incident_report,
      protectiveMeasures: (state) => state.ProtectiveMeasures.protective_measures,
      protective_measure: (state) => state.ProtectiveMeasuresRequesteds.protective_measure,
      id: (state) => state.ProtectiveMeasuresRequesteds.id,
      protective_measure_id: (state) => state.ProtectiveMeasures.protective_measure_id,
      allProtectiveMeasures: (state) => state.ProtectiveMeasures.protective_measures,
    }),
  },

  methods: {
    ...mapActions({
      setProtectiveMeasure: "ProtectiveMeasuresRequesteds/setProtectiveMeasure",
      setProtectiveMeasureType: "ProtectiveMeasuresRequesteds/setProtectiveMeasureType",

      checkboxId(name, index) {
        return `${name}-${index}`;
      },
      onCheck(event, item, data, index) {
        if (item.target.checked) {
          let requested = true;
          let payload = { data: data, requested: requested, index: index };
          this.$store.dispatch("ProtectiveMeasuresRequesteds/setProtectiveMeasureRequestedArray", payload);
        } else {
          let requested = false;
          let payload = { data: data, requested: requested, index: index };
          this.$store.dispatch("ProtectiveMeasuresRequesteds/setProtectiveMeasureRequestedArray", payload);
        }
      },
    }),
  },
  watch: {
    protective_measure: function () {
      this.$store.dispatch("ProtectiveMeasuresRequesteds/loadProtectiveMeasuresTypes");
      this.$store.dispatch("ProtectiveMeasures/loadProtectiveMeasures");
      // console.log("jfhjdfh", this.allProtectiveMeasures);
      // console.log("gffg", this.protective_measure);
      this.allProtectiveMeasures.forEach((item) => {
        if (item.id == this.protective_measure.id) {
          this.protectiveMeasureFiltered = item;
        }
      });
    },
  },
};
</script>
