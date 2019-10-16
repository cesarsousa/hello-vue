
import Vue from 'vue'
import App from './App'
import VFormato from './formato'
import Plugin from './plugin'

Vue.directive('formato', VFormato)
Vue.use(Plugin)

Vue.ola()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
