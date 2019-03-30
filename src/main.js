import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from "vue-awesome-swiper"
 Vue.use(VueAwesomeSwiper)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import "./assets/style/reset.css"
import "./assets/font-awesome-4.7.0/css/font-awesome.min.css"
import "./assets/js/rem.js"
import router from "./router/index.js"
import "./drectives/lazyload"

import eventbus from "./eventbus/index"
Vue.prototype.$eventbus = eventbus

import asidebar from "./plugins/asidebar/index.js";
Vue.use( asidebar )

import tip from "./plugins/jumpTip/index.js";
Vue.use(tip )

import toast from "./plugins/toast/index.js"
Vue.use(toast);

import store from "./store/index.js"

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
