<template>
  <div id="app">
    <router-view></router-view>
    <img src="./assets/logo.png">
    <lv-registro/>
  </div>
</template>

<script>
import LvRegistro from './components/LvRegistro.vue'

export default {
  name: 'App',
  components: {
    LvRegistro
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body, html, * { text-align: center }

</style>
