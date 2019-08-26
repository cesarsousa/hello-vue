import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component:Inicial},
    {path: '/usuarios', component:Usuarios}
  ]
})

import Inicial from './component/Inicial.vue'
import Usuarios from './component/Usuarios.vue'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
