<template>
  <div>
    <div class="pl-12">
      <BaseText
        text="Cadastro de usuários"
        typeText="custom"
        weight="semibold"
        :italic="false"
        size="3xl"
        color="ashes-hover"
      />
    </div>
    <div id="tabs-button" class="flex justify-between mx-12 my-6">
      <div class="grid grid-cols-2 gap-x-2 gap-y-4">
        <div class="w-104">
          <BaseInput
            active
            inputName=""
            inputType="text"
            iconName="search"
            showIcon
            input-placeholder="Filtrar por nome"
            dispatch="Users/filterListByName"
            ref="name_user"
          />
        </div>
        <div>
          <Multiselect
            id="select-role"
            select-placeholder="Perfil"
            close-on-select
            show-label
            :value="ability_profiles"
            :options="Profiles"
            :dispatch="setRole"
            :multiple-option="false"
            class="mr-4"
            ref="profile_id"
          />
        </div>
        <div>
          <AppButtonColorful
            id="btn-consult-user"
            showIcon
            iconName="search"
            text="Consultar dados"
            dispatch="Users/loadUsers"
            typeButton="primary"
          />
        </div>
      </div>
      <div class="float-right">
        <AppButtonColorful
          id="btn-add-teacher"
          showIcon
          iconName="add"
          text="Adicionar Usuário"
          dispatch="User/openModal"
          typeButton="primary"
        />
      </div>
      <div v-if="users.length > 0">
        <a href="javascript:void(0)" @click="clearFields()">
          <AppButtonColorful
            id="btn-consult-facilities"
            showIcon
            iconName="remove"
            text="Limpar consulta"
            typeButton="primary"
          />
        </a>
      </div>
    </div>
    <div class="p-4">
      <div><UsersCards :data="users" /></div>
    </div>
    <ModalUser :open="toggleModal" />
    <ModalConfirmDeleteUser :open="modalConfirmDeleteUser" />
    <ModalResetUserPassword :open="modalResetPassword" />
  </div>
</template>

<script>
import ModalUser from "./ModalUser.vue";
import UsersCards from "./list/UsersCards.vue";
import BaseText from "../components/BaseText.vue";
import AppButtonColorful from "../components/AppButtonColorful.vue";
import BaseInput from "../components/forms/BaseInput.vue";
import ModalConfirmDeleteUser from "../views/ModalConfirmDeleteUser.vue";
import Multiselect from "../components/forms/Multiselect.vue";
import ModalResetUserPassword from "./ModalResetUserPassword.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    UsersCards,
    ModalConfirmDeleteUser,
    BaseText,
    ModalUser,
    AppButtonColorful,
    ModalResetUserPassword,
    BaseInput,
    Multiselect,
  },
  beforeCreate() {
    this.$store.dispatch("AccessControl/getProfiles");
  },
  methods: {
    ...mapActions({
      setRole: "Users/setRole",
    }),
    clearFields() {
      this.$refs["name_user"].value = "";
      this.$refs["profile_id"].value = "";
      this.$store.dispatch("Users/clearQuery");
    },
  },
  computed: {
    ...mapGetters({
      getErrorMessage: "User/getErrorMessage",
    }),
    ...mapState({
      users: (state) => state.Users.filteredUsers,
      ability_profiles: (state) => state.Users.ability_profiles,
      toggleModal: (state) => state.User.modalToggle,
      modalConfirmDeleteUser: (state) => state.User.modalConfirmDeleteUser,
      Profiles: (state) => state.AccessControl.profiles,
      modalResetPassword: (state) => state.User.modalResetPassword,
    }),
  },
};
</script>
