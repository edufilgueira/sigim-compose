<template lang="">
  <div class="font-system">
    <div id="title-page" class="mx-12 my-6">
      <div class="text-ashes-hover font-medium text-3xl">Perfis</div>
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
          />
        </div>
      </div>
      <div class="float-right">
        <AppButtonColorful
          v-if="permit"
          id="btn-add-profile"
          showIcon
          iconName="add"
          text="Adicionar"
          dispatch="AccessControl/modalProfileOpen"
          typeButton="primary"
        />
      </div>
    </div>
    <div id="list-profiles">
      <div class="mx-12">
        <ProfilesCards :data="profiles" />
      </div>
    </div>
    <ModalFormProfileVue :open="modalProfileOpen" />
    <PermissionsViewVue :open="showModalPermissions" />
    <ModalConfirmDeleteProfileViewVue :open="modalConfirmDeleteProfile" />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import ModalConfirmDeleteProfileViewVue from "../views/ModalConfirmDeleteProfileView.vue";
import BaseInput from "../components/forms/BaseInput.vue";
import ProfilesCards from "./list/ProfilesCards.vue";
import AppButtonColorful from "../components/AppButtonColorful.vue";
import PermissionsViewVue from "../views/PermissionsView.vue";
import ModalFormProfileVue from "./ModalFormProfile.vue";

export default {
  name: "perfis",
  components: {
    AppButtonColorful,
    ProfilesCards,
    BaseInput,
    PermissionsViewVue,
    ModalFormProfileVue,
    ModalConfirmDeleteProfileViewVue,
  },
  data() {
    return {
      permit: false,
    };
  },
  methods: {
    ...mapActions({ canAcces: "AccessControl/canAcces" }),
    profileCreate() {
      this.canAcces("ability_profile_create").then((resp) => {
        this.permit = resp;
      });
    },
    getTeste() {
      // console.log("TESTE", this.profiles);
      // console.log("permissions", this.permissions);
    },
    printPerm() {
      // console.log("permissions", this.perm);
    },
    ...mapActions({
      getProfiles: "AccessControl/getProfiles",
      // getPermits: "AccessControl/getPermits",
      getProfPermits: "AccessControl/getProfilePermits",
    }),
    // ...mapGetters({
    //   getPermits: "AccessControl/getPermits",
    //   getProfPermits: "AccessControl/getProfilePermits",
    // }),
  },
  computed: {
    ...mapState({
      profiles: (state) => state.AccessControl.profiles,
      permissions: (state) => state.AccessControl.arrPermProf,
      permits: (state) => state.AccessControl.arrPermits,
      permiss: (state) => state.AccessControl.arrPermTmp,
      perm: (state) => state.AccessControl.perm,
      showModalPermissions: (state) => state.AccessControl.modalPerrmissionsOpen,
      modalProfileOpen: (state) => state.AccessControl.modalProfileOpen,
      modalConfirmDeleteProfile: (state) => state.AccessControl.modalConfirmDeleteProfile,
    }),
  },
  created() {
    // this.$store.dispatch("AccessControl/getPermits");
    // this.$store.dispatch("AccessControl/getProfilePermits");
    //console.log("Permissions", this.permissions);
    this.profileCreate();
    this.$store.dispatch("AccessControl/getProfiles");
  },
  mounted() {
    //this.printPerm();
  },
};
</script>
<style lang=""></style>
