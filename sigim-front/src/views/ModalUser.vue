<template>
  <BaseModal width="w-264" v-if="open">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          <Label
            v-if="user.id"
            text="Editar Usuário"
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
            text="Adicionar Usuário"
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
          <AppButtonIcon dispatch="User/closeModal" forClose />
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
          <BaseInput
            id="name"
            input-name="name"
            input-placeholder="nome"
            input-type="text"
            show-label
            label-text="nome"
            required
            :value="user.name"
            :error-message="getErrorMessage('name', user.name)"
            dispatch="User/setName"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-2">
        <div>
          <Multiselect
            id="select-role"
            select-placeholder="Perfil"
            label-text="Perfil de Acesso"
            close-on-select
            required
            show-label
            :value="user.roles_attributes"
            :options="arrayProf"
            :dispatch="setRole"
            :multiple-option="false"
            :error-message="getErrorMessage('roles', user)"
            class="mr-4"
          />
        </div>
        <div>
          <BaseInput
            id="cpf"
            input-name="cpf"
            input-placeholder="000.000.000-00"
            input-type="text"
            show-label
            label-text="cpf"
            required
            mask="###.###.###-##"
            :value="user.cpf"
            :error-message="getErrorMessage('cpf', user.cpf)"
            dispatch="User/setCpf"
          />
        </div>
        <div>
          <BaseInput
            id="cellphone_number"
            input-name="cellphone_number"
            input-placeholder="(00) 00000-0000"
            input-type="text"
            show-label
            label-text="telefone"
            required
            mask="(##) #####.####"
            :value="user.phone_number"
            :error-message="getErrorMessage('phone_number', user.phone_number)"
            dispatch="User/setPhoneNumber"
          />
        </div>
        <div>
          <BaseInput
            id="email_user"
            input-name="email_user"
            input-placeholder="exemplo@email.com"
            input-type="text"
            show-label
            label-text="E-mail"
            required
            :value="user.email"
            :error-message="getErrorMessage('email', user.email)"
            dispatch="User/setEmail"
          />
        </div>
        <div v-if="!user.id">
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
        <div v-if="!user.id">
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
        <div v-if="user.id">
          <AppRadioButton
            :values="[
              { name: 'active', value: true, description: 'Sim', checked: user.active === true },
              { name: 'active', value: false, description: 'Não', checked: user.active === false },
            ]"
            labelText="Ativo"
            showLabel
            dispatch="User/setActive"
          />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="grid grid-cols-2 col-auto">
        <div class="justify-self-start">
          <AppButtonEmpty text="descartar" typeButton="danger" dispatch="User/closeModal" />
        </div>
        <div class="justify-self-end">
          <AppButtonEmpty v-if="user.id" text="Atualizar" typeButton="success" dispatch="User/update" />
          <AppButtonEmpty v-else text="Criar" typeButton="success" dispatch="User/save" />
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
import Multiselect from "../components/forms/Multiselect.vue";
import AppRadioButton from "../components/AppRadioButton.vue";
import AppButtonEmpty from "../components/AppButtonEmpty.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    BaseModal,
    BaseInput,
    Label,
    AppButtonIcon,
    AppButtonEmpty,
    AppRadioButton,
    Multiselect,
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
  },

  computed: {
    ...mapGetters({
      getErrorMessage: "User/getErrorMessage",
    }),
    ...mapState({
      user: (state) => state.User.user,
      arrayProf: (state) => state.AccessControl.profArray,
      profiles: (state) => state.AccessControl.profiles,
    }),
  },

  methods: {
    ...mapActions({
      setRole: "User/setRole",
    }),
  },
};
</script>
