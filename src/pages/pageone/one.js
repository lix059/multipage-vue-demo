// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './one.vue'
import router from '../../router'
import store from '../../store'
import 'bootstrap/dist/css/bootstrap.css'
import '../../util/mock.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app1',
  router,
  store,
  template: '<App/>',
  components: { App }
})
