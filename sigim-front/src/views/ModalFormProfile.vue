<template>
  <BaseModal width="w-264" v-if="open">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          <Label
            text="Adicionar Perfil"
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
          <AppButtonIcon dispatch="AccessControl/modalProfileOpen" forClose />
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="grid grid-cols-2">
        <div class="col-span-2 text-purple pb-2">
          <Label
            text="Informe o nome do perfil"
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
            dispatch="AccessControl/setProfileName"
          />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="grid grid-cols-2 col-auto">
        <div class="justify-self-start">
          <AppButtonEmpty text="descartar" typeButton="danger" dispatch="AccessControl/modalProfileOpen" />
        </div>
        <div class="justify-self-end">
          <AppButtonEmpty text="criar" typeButton="success" dispatch="AccessControl/saveProfile" />
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
      getErrorMessage: "AccessControl/getErrorMessage",
    }),

    ...mapState({
      profile: (state) => state.AccessControl.profile,
      name: (state) => state.AccessControl.profileName,
    }),
  },
};
</script>
