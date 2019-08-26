<template>
  <div id="app">
    <router-link to="/">Inicial</router-link>
    <router-link to="/usuarios">Usuarios</router-link>
    <router-view></router-view>
    
  </div>
</template>

<script>
  import lvBusca from './LVBusca.vue'
  import lvPerfil from './LVPerfil.vue'
  import LvLista from './LvLista.vue'
  import lvCartao from './LvCartao.vue'
  import LvLeitor from './LvLeitor.vue'
  import LvComentarios from './LvComentarios.vue'
  import LvUsuario from './LvUsuario.vue'

  export default {
    name: 'app',
    components: {lvBusca, lvPerfil, LvLista, lvCartao, LvLeitor, LvComentarios, LvUsuario},
    data () { 
      return { 
        chat: ''
      }
    },
    methods: {
      escrever(mensagem) {
        this.chat = mensagem + '<hr>' + this.chat
      }
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
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
