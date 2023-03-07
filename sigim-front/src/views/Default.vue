<template>
  <div class="main w-full img-back">
    <div id="top" class="bg-transparent">
      <div class="flex flex-wrap ml-32 pt-24 mb-6">
        <div id="logo" class="w-3/6">
          <img class="img-logo" src="../assets/images/sigimlogo.png" alt="" />
        </div>
        <div id="menus" class="flex justify-center items-center w-auto mt-5">
          <AppButtonEmpty
            :active="true"
            text="Início"
            class="w-36 h-10 mr-12"
            type-button="primary"
            type-text="button-generic"
          />
          <router-link class="text-white underline hover:text-purple mr-12" to="/admin/entrar">
            <BaseText text="Entrar" type-text="custom" weight="medium" />
          </router-link>
        </div>
      </div>
    </div>
    <div id="mid">
      <div class="flex ml-32">
        <div id="text" class="w-3/6 text-white z-10">
          <div class="mt-20">
            <!-- <BaseText text="SIGIM" type-text="custom" weight="extrabold" size="3xl" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButtonEmpty from "../components/AppButtonEmpty.vue";
import BaseText from "../components/BaseText.vue";
// import { mapState } from "vuex";

export default {
  components: {
    AppButtonEmpty,
    BaseText,
  },
};
</script>

<style scoped>
#description {
  width: 600px;
}

.img-logo {
  max-width: 70%;
  min-width: 449px;
}

.main {
  background-color: #4f0056;
  background-image: linear-gradient(45deg, #4f0056 49%, #723277 70%);
  width: 100%;
  min-height: 100vh;
  position: absolute;
}

.img-back {
  /* background-image: url("../assets/images/background-young.png"); */
  background-repeat: no-repeat;
  background-position: bottom right;
}

.bot {
  background-image: url("../assets/images/img-rodape.png");
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 55px;
  padding: 10px 0;
  transition: all 0.3s ease-out;
  z-index: 9;
}
</style>
