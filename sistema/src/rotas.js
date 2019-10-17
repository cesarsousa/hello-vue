import Vue from 'vue'
import VueRouter from 'vue-router'
import LvRegistro from './components/LvRegistro.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/registrar', component: LvRegistro},
  ],
})