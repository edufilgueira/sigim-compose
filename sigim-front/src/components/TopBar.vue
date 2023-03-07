<template>
  <div class="mx-12 my-6 main">
    <div class="flex justify-end">
      <ul>
        <li>
          <a href="javascript:void(0)" @click="toggleMenu()">
            <div class="px-5 py-3 bg-white relative z-50">
              <div class="flex">
                <div class="rounded-full w-12 h-12">
                  <img src="../assets/images/profile-vj.png" class="rounded-full" />
                </div>
                <div class="flex flex-col mx-2">
                  <div>
                    <BaseText :text="user.name" typeText="custom" weight="bold" size="sm" color="purple" />
                  </div>
                  <div>
                    <BaseText
                      :text="profileInfo.description"
                      typeText="custom"
                      weight="normal"
                      size="xs"
                      color="purple-classic"
                    />
                  </div>
                </div>
                <div class="flex flex-col justify-center ml-5">
                  <AppMaterialIcon iconName="expand_more" :class="toggleAnimate()" />
                </div>
              </div>
            </div>
          </a>
          <ul :class="ulCss">
            <li v-if="permitRoleAccess()">
              <router-link
                class="flex items-center no-underline h-12 mx-3 text-purple rounded-full"
                to="/edicoes/ativa"
              >
                <span
                  class="font-system mx-5 normal font-semibold normal-case flex items-center hover:underline"
                >
                  <AppMaterialIcon iconName="perm_identity" icon-size="18" class="mr-5" />
                  <BaseText
                    text="Perfis de acesso"
                    typeText="custom"
                    weight="normal"
                    size="xs"
                    color="purple"
                  />
                </span>
              </router-link>
            </li>
            <li>
              <div
                class="flex items-center no-underline h-12 mx-3 text-purple rounded-full cursor-pointer"
                @click="loggout()"
              >
                <span
                  class="font-system mx-5 normal font-semibold normal-case flex items-center hover:underline"
                >
                  <AppMaterialIcon iconName="power_settings_new" icon-size="18" class="mr-5" />
                  <BaseText text="Sair" typeText="custom" weight="normal" size="xs" color="purple" />
                </span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseText from "./BaseText";
import AppMaterialIcon from "./AppMaterialIcon";
// import router from "../router/index";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    BaseText,
    AppMaterialIcon,
  },

  data() {
    return {
      menuOpen: false,
    };
  },
  created() {
    this.$store.dispatch("AccessControl/getProfileInfo");
  },
  computed: {
    ulCss() {
      return {
        absolute: true,
        "z-40": true,
        "w-auto": true,
        border: true,
        "rounded-b-3xl": true,
        "b-mt-6": true,
        "pt-10": true,
        "pl-0": true,
        "pb-0": true,
        "pr-0": true,
        "animate-growDown": true,
        "origin-top-center": true,
        "bg-white": true,
        hidden: !this.menuOpen,
      };
    },
    ...mapState({
      user: (state) => state.Session.loggedUser,
      role: (state) => state.Session.role,
      profileInfo: (state) => state.AccessControl.profileInfo,
    }),
  },

  methods: {
    getRole() {
      const role = this.$store.state.Session.role;
      return role;
    },
    permitRoleAccess() {
      const role = this.$store.state.Session.role;
      if (role == "Administrador") {
        return true;
      } else {
        return false;
      }
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    ...mapActions({
      logOutAction: "AccessControl/logOutAction",
      getProfileInfo: "AccessControl/getProfileInfo",
    }),
    loggout() {
      this.logOutAction();
      // localStorage.vuex = null;
      // localStorage.token = null;
      // localStorage.user = null;
      // this.$store.dispatch("City/setCity", null);

      // let role = this.getRole();
      // console.log("getRole", role);
      // if (role == "Administrador" || role == "Gerente de Área") {
      //   router.push({ name: "sign_in_admin" });
      // }

      // if (role == "Instrutor") {
      //   router.push({ name: "sign_in_teacher" });
      // }
    },
    toggleAnimate() {
      return {
        "animate-spinningUp": this.menuOpen,
        "animate-spinningDown": !this.menuOpen,
      };
    },
  },
};
</script>

<style scoped>
.b-mt-6 {
  margin-top: -1.85rem;
}
.main {
  background-color: #fff;
}
</style>
