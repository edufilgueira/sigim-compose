<template>
  <BaseModal width="w-264" v-if="open">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          <Label
            v-if="!crimeTypeName"
            text="Adicionar Tipo de Crime"
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
            text="Editar Tipo de Crime"
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
          <AppButtonIcon dispatch="CrimeTypes/closeModal" forClose />
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="grid grid-cols-2">
        <div class="col-span-2 text-purple pb-2">
          <Label
            text="Informe o nome do tipo de crime"
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
          <BaseInput
            id="name"
            input-name="name"
            input-placeholder="nome"
            input-type="text"
            show-label
            label-text="nome"
            required
            :value="crimeTypeName.name"
            dispatch="CrimeTypes/setTypeCrime"
          />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="grid grid-cols-2 col-auto">
        <div class="justify-self-start">
          <AppButtonEmpty text="descartar" typeButton="danger" dispatch="CrimeTypes/closeModal" />
        </div>
        <div class="justify-self-end" v-if="!crimeTypeName">
          <AppButtonEmpty text="criar" typeButton="success" dispatch="CrimeTypes/saveCrimeType" />
        </div>
        <div class="justify-self-end" v-else>
          <AppButtonEmpty text="editar" typeButton="success" dispatch="CrimeTypes/update" />
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
import AppButtonEmpty from "../components/AppButtonEmpty.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    BaseModal,
    BaseInput,
    Label,
    AppButtonIcon,
    AppButtonEmpty,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapGetters({
      getErrorMessage: "CrimeTypes/getErrorMessage",
    }),

    ...mapState({
      crimeType: (state) => state.CrimeTypes.CimeType,
      crimeTypeName: (state) => state.CrimeTypes.crimeTypeName,
    }),
  },
};
</script>
