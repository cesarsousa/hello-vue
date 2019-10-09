import Vue from 'vue'
import Vuex from 'vuex'

import estado from './estado'

Vue.use(Vuex)

export default new Vuex.Store({
    state: estado
})