<template>
  <div id="app">
    <router-link to="/">Inicial</router-link>
    <router-link to="/usuarios">Usuarios</router-link>
    <router-view></router-view>
    <lv-addtarefa></lv-addtarefa>
    <lv-tarefas></lv-tarefas>
    <l-v-busca-tarefa></l-v-busca-tarefa>
    
    
  </div>
</template>

<script>
  
  import LvUsuario from './component/LvUsuario.vue'
  import LvAddtarefa from './component/AddTarefa.vue'
  import LvTarefas from './component/Tarefas.vue'
  import LVBuscaTarefa from './component/BuscaTarefa.vue'

  import {mapState} from 'vuex'

  export default {
    name: 'app',
    components: {LvUsuario, LvAddtarefa, LvTarefas, LVBuscaTarefa},
    computed:{
      ...mapState(['nome'])
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: circle;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
