import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/StyleGlobal.css";
import Paginate from "vuejs-paginate-next";
import { VueMaskFilter } from "v-mask";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast, { timeout: 5000 });

Vue.filter("VMask", VueMaskFilter);
Vue.use(Paginate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
