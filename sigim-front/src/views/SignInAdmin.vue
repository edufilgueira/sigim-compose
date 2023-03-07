<template>
  <div class="signin-login relative">
    <div class="top-36 left-28 absolute">
      <router-link class="text-white underline hover:text-herbal-hover" to="/">
        <BaseText text="< Voltar" type-text="custom" weight="medium" />
      </router-link>
    </div>
    <div class="flex flex-col justify-center items-center">
      <div class="my-28"></div>
      <div>
        <img src="../assets/images/sigimlogo.png" alt="" />
      </div>
      <div class="signin-control">
        <div class="w-96 my-2">
          <AppInput
            id="username"
            iconName="person"
            labelText="E-mail"
            textColor="purple"
            borderColor="purple"
            dispatch="Session/setUsername"
          />
        </div>
        <div class="w-96 my-2" @keypress.enter="logIn">
          <AppInput
            id="password"
            iconName="visibility_off"
            labelText="Senha"
            textColor="purple"
            borderColor="purple"
            hiddenValue
            dispatch="Session/setPassword"
          />
        </div>
        <div class="flex justify-start">
          <div class="pl-5 w-96 mt-0 mb-3">
            <div class="text-white underline hover:text-purple-hover cursor-pointer" @click="forgotPassword">
              <BaseText
                text="Esqueceu a senha?"
                type-text="custom"
                weight="normal"
                class="text-color-white"
                size="xs"
              />
            </div>
          </div>
        </div>
        <div class="my-2">
          <AppButtonColorful
            id="btn-access"
            text="Acessar"
            typeButton="primary"
            :payload="{ access: ['Administrador', 'Gerente de Área'] }"
            dispatch="Session/validateUser"
            class="w-96"
          />
        </div>
      </div>
    </div>
    <ModalForgotPassword :open="openModalForgotPassword" />
  </div>
</template>

<script>
import BaseText from "../components/BaseText.vue";
import AppInput from "../components/AppInput.vue";
import AppButtonColorful from "../components/AppButtonColorful.vue";
import ModalForgotPassword from "./alerts/ForgotPassword.vue";
import router from "../router";
import { mapState } from "vuex";

export default {
  components: {
    BaseText,
    AppInput,
    AppButtonColorful,
    ModalForgotPassword,
  },
  created() {
    const url = this.$route.query.redirect || "/admin";
    this.$store.dispatch("Session/setRedirectUrl", url);
    //Reset login data
    this.$store.dispatch("Session/setLoggedUser", null);
    localStorage.vuex = null;
    localStorage.token = null;
  },

  computed: {
    ...mapState({
      openModalForgotPassword: (state) => state.Default.modalForgotPassword,
    }),
  },
  methods: {
    forgotPassword() {
      this.$store.dispatch("Default/toggleModalForgotPassword");
    },
    logIn() {
      this.$store.dispatch("Session/validateUser", { access: ["Administrador", "Gerente de Área"] });
    },
    isLogged() {
      const authHeaders = JSON.parse(localStorage.getItem("authHeaders"));
      if (authHeaders) {
        router.push({ path: "/admin" });
      }
    },
  },
};
</script>

<style scoped>
.signin-login {
  /* background-image: url("../assets/images/background-sigin-admin.png"); */
  background-color: #62006a;
  width: 100%;
  min-height: 100vh;
}

.signin-control {
  background-color: #4f0056;
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 50px;
  width: 420px;
  height: 280px;
}

.bot {
  background-image: url("../assets/images/img-rodape.png");
  height: 55px;
}

.text-color-admin {
  color: #328239;
}
</style>
