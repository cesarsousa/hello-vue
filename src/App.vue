<template>
  <div id="app">
    <lv-cartao titulo="Preço">
      Aqui você encontra preços <strong>baixos</strong>
      <div slot="rodape">Meu conteúdo do rodapé</div>
    </lv-cartao>
    <lv-cartao titulo="Qualidade">
      Temos os produtos com a melhor <strong>qualidade</strong> do mercado
    </lv-cartao>
    <hr>
    <h4>Lista um</h4>
    <lv-lista :lista="['feijão', 'arroz', 'carne']"></lv-lista>
    <br>
    <lv-lista :lista="['feijão', 'arroz', 'carne']" ordena></lv-lista>
    <br>
    <h4>Lista dois</h4>
    <lv-lista :lista="['leite', 'biscoito', 'bombom', 'aveia']" ordena></lv-lista>
    <br>
    <lv-lista :lista="['leite', 'biscoito', 'bombom', 'aveia']" ></lv-lista>
    <hr>
    <lvBusca></lvBusca>
    <hr>
    <lv-perfil></lv-perfil>
  </div>
</template>

<script>
  import lvBusca from './LVBusca.vue'
  import lvPerfil from './LVPerfil.vue'
  import LvLista from './LvLista.vue'
  import lvCartao from './LvCartao.vue'


  export default {
    name: 'app',
    components: {lvBusca, lvPerfil, LvLista, lvCartao}  
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
