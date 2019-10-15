<template>
  <div id="app">
    <lv-lista titulo="Carros" :lista="carros"></lv-lista>
    <lv-lista titulo="Aviões" :lista="avioes"></lv-lista>
  </div>
</template>

<script>
import Carro from './servicos/carros'
import Aviao from './servicos/avioes'
import LvLista from './LvLista.vue'

export default {
  name: 'app',
  data() { return { carros: {}, avioes: {} } },
  components: {LvLista},
  mounted() {
    Carro.lista().then(dado => this.carros = dado.data)

    Aviao.lista().then(dado => this.avioes = dado.data)
  }
}
</script>