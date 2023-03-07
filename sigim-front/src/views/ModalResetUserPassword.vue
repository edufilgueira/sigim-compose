<template>
  <BaseModal width="w-264" v-if="open">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          <Label
            text="Resetar Senha"
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
          <AppButtonIcon dispatch="User/closeModalResetPassword" forClose />
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="grid grid-cols-2">
        <div class="col-span-2 text-purple pb-2">
          <Label
            text="Informações Gerais do Usuário(a)"
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
          <AppTextField show-label label-text="Nome" :text="user.name" type-text="topic-details" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-2">
        <div class="col-span-1">
          <AppTextField
            show-label
            label-text="Perfil de Acesso"
            :text="user.roles_attributes.name"
            type-text="topic-details"
          />
        </div>
        <div class="col-span-1">
          <AppTextField show-label label-text="CPF" :text="user.cpf" type-text="topic-details" />
        </div>
        <div class="col-span-1">
          <AppTextField
            show-label
            label-text="TELEFONE"
            :text="user.phone_number"
            type-text="topic-details"
          />
        </div>
        <div class="col-span-1">
          <AppTextField show-label label-text="E-MAIL" :text="user.email" type-text="topic-details" />
        </div>
        <div class="col-span-1">
          <AppTextField
            show-label
            label-text="USUÁRIO(A) ATIVO(A) ?"
            :text="isUserActive"
            type-text="topic-details"
          />
        </div>
        <div class="col-span-2 text-purple pb-2">
          <Label
            text="Informações de Senha"
            :icon="null"
            :icon-type="null"
            type="text-sm"
            weight="semibold"
            normal
            mode="uppercase"
          />
          <div class="border-ashes-hover border-b-2 w-full"></div>
        </div>
        <div>
          <BaseInput
            id="password_user"
            input-name="password_user"
            input-type="password"
            show-label
            label-text="Senha"
            required
            :value="user.password"
            :error-message="getErrorMessage('password', user.password)"
            dispatch="User/setPassword"
          />
        </div>
        <div>
          <BaseInput
            id="password_confirmation_user"
            input-name="password_confirmation_user"
            input-type="password"
            show-label
            label-text="Confirme a Senha"
            required
            :value="user.password_confirmation"
            :error-message="getErrorMessage('password_confirmation', user.password_confirmation)"
            dispatch="User/setPasswordConfirmation"
          />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="grid grid-cols-2 col-auto">
        <div class="justify-self-start">
          <AppButtonEmpty text="descartar" typeButton="danger" dispatch="User/closeModalResetPassword" />
        </div>
        <div class="justify-self-end">
          <AppButtonEmpty text="Salvar" typeButton="success" dispatch="User/resetPassword" />
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
import AppTextField from "../components/AppTextField.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    BaseModal,
    BaseInput,
    Label,
    AppButtonIcon,
    AppButtonEmpty,
    AppTextField,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  created() {
    // this.$store.dispatch("Roles/loadRoles");
    this.$store.dispatch("AccessControl/getProfiles");
    console.log("user", this.user);
  },

  computed: {
    ...mapGetters({
      getErrorMessage: "User/getErrorMessage",
    }),
    ...mapState({
      user: (state) => state.User.user,
      arrayProf: (state) => state.AccessControl.profArray,
      profiles: (state) => state.AccessControl.profiles,
      isUserActive() {
        if (this.user.active) {
          return "Sim";
        } else {
          return "Não";
        }
      },
    }),
  },

  methods: {
    ...mapActions({
      setRole: "User/setRole",
    }),
  },
};
</script>
