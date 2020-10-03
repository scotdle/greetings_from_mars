import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from './js/store'

Vue.config.productionTip = false;
Vue.use(vuetify);

new Vue({
  vuetify,
  render: h => h(App),
  store: store
}).$mount("#app");
