<template>
  <div>
    <div class="view-sidebar"><SideBar /></div>
    <div class="view-topbar"><TopBar /></div>
    <div class="view-container">
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import TopBar from "./TopBar.vue";

export default {
  components: {
    SideBar,
    TopBar,
  },
};
</script>

<style>
.view-container {
  margin-left: 255px;
  background-color: #fff;
}

.view-topbar {
  margin-left: 255px;
}
</style>
