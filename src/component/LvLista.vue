<template>
  <ul>
    <li v-for="item in lista">{{ item }}</li >
  </ul>
</template>

<script>
  export default{
    name: 'lvLista',
    props: {
      ordena: null,
      lista: {
        required:true,
        type: Array,
        default:[]
      }
    },
    created() {
      if(typeof this.ordena != 'undefined')
        this.lista.sort()
    }
  }
</script>

<style>

</style>                                                             