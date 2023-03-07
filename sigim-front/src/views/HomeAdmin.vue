<template>
  <div class="flex ml-20">
    <div class="w-168">
      <div class="flex flex-col justify-center h-screen bg-slate-50"></div>
    </div>
    <div class="background w-screen"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {},
  methods: {
    ...mapActions({
      getPermits: "AccessControl/getPermits",
      getProfPermits: "AccessControl/getProfilePermits",
    }),
    getTeste() {
      // console.log("TESTE", this.perm);
      // console.log("STORAGE", JSON.parse(localStorage.perms));
    },
  },

  computed: {
    ...mapState({
      perm: (state) => state.AccessControl.perm,
    }),
  },
  created() {
    this.$store.dispatch("AccessControl/getPermits");
  },
};
</script>

<style scoped>
.background {
  /* background-image: url("../assets/images/background-home-admin.png"); */
  background-color: #f8f8f8;
  background-repeat: no-repeat;
}

.height {
  min-height: 120vh;
}
</style>
