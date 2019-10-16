<template>
  <div>
    <h1>hy there</h1>

    <div v-formato.minusculo>
    Meu textinho
    </div><br>
    <div v-formato.maiusculo>
    Meu textinho
    </div><br>
    <div v-formato.capitalizado>
    Meu textinho
    </div>

    <div v-formato="'maiusculo'" v-ola>
      Meu textinho {{ $ola() }}
    </div><br>

  </div>
</template>

<script>
export default {
  name: 'app'
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
</style>
