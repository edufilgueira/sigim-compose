<template>
  <BaseModal class="size" v-if="open">
    <template v-slot:header>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          <BaseText
            :text="profile.name + ' | Perfis de acesso'"
            typeText="custom"
            weight="semibold"
            :italic="false"
            size="3xl"
            color="ashes-hover"
          />
        </div>
        <div class="justify-self-end">
          <AppButtonIcon dispatch="AccessControl/openModal" forClose />
        </div>
      </div>
    </template>
    <template v-slot:body class="size">
      <div class="ml-8 mt-6" v-for="itens in profiles" :key="itens.name">
        <Label
          :text="'Recurso: ' + itens.name"
          :icon="null"
          :iconType="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <AppCheckBox
          class="break-all"
          :values="itens.permissions"
          label-text="Permissões"
          show-label
          dispatch="AccessControl/setPermits"
        />
      </div>
    </template>
    <template v-slot:footer>
      <div class="grid grid-cols-2">
        <div class="justify-self-start">
          <AppButtonEmpty
            text="Salvar"
            typeButton="success"
            dispatch="AccessControl/sendPerf"
            :payload="profile"
            v-if="permitUp"
          />
        </div>
        <div class="justify-self-end">
          <AppButtonEmpty text="fechar" typeButton="danger" dispatch="AccessControl/openModal" />
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "../components/BaseModal.vue";
import { mapActions, mapState } from "vuex";
import BaseText from "../components/BaseText.vue";
import AppCheckBox from "../components/appCheckBoxProfiles.vue";
import Label from "../components/Label.vue";
import AppButtonEmpty from "../components/AppButtonEmpty.vue";
import AppButtonIcon from "../components/AppButtonIcon.vue";

export default {
  name: "permissoes",
  components: {
    BaseText,
    Label,
    AppCheckBox,
    AppButtonEmpty,
    BaseModal,
    AppButtonIcon,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    printPerm() {
      // console.log(this.perms);
      // const permissionsprof = JSON.parse(localStorage.getItem("profilePermits"));
      // console.log("permissionsprof", this.profiles);
    },
    ...mapActions({
      getProfPermit: "AccessControl/getProfilePermits",
      getPermit: "AccessControl/getPermits",
      // getProfile: "AccessControl/getProfile",
      updateProfiles: "AccessControl/updateProfiles",
      setPermits: "AccessControl/setPermits",
      canAcces: "AccessControl/canAcces",
    }),
    peopleAcces() {
      this.canAcces("ability_permission_show").then((resp) => {
        this.permit = resp;
      });
    },
    // peopleDelete() {
    //   this.canAcces("person_destroy").then((resp) => {
    //     this.permitDes = resp;
    //   });
    // },
    peopleChange() {
      this.canAcces("ability_permission_update").then((resp) => {
        this.permitUp = resp;
      });
    },
  },
  data: () => ({
    searchEdition: "",
    edit: false,
    edition: null,
    permitUp: false,
    permit: false,
    permits: [],
  }),
  computed: {
    ...mapState({
      profiles: (state) => state.AccessControl.arrPermits,
      profile: (state) => state.AccessControl.profile,
      perms: (state) => state.AccessControl.arrPermProf,
      permTmp: (state) => state.AccessControl.arrPermTmp,
    }),
  },
  created() {
    this.$store.dispatch("AccessControl/getProfilePermits");
    this.$store.dispatch("AccessControl/getPermits");
    this.peopleAcces();
    this.peopleChange();
    // this.peopleDelete();
  },
};
</script>

<style>
.size {
  width: 100%;
  overflow: auto;
}
</style>
