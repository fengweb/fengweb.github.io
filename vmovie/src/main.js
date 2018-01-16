// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')


Vue.prototype.$http = axios
Vue.use(Vuex)
Vue.use(YDUI)
Vue.use(VideoPlayer);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
