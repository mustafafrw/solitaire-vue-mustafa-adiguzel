import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GToasterPlugin from '@trendyol-js/grace/plugins/GToaster.plugin';
import GToaster   from '@trendyol-js/grace/core/GToaster';
import "@trendyol-js/grace/css/root.css";
import "@trendyol-js/grace/css/system.css";

Vue.config.productionTip = false

Vue.use(GToasterPlugin, { GToaster });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
