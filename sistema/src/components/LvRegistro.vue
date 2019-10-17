<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Registre-se no sistema</h2>
    <lv-input titulo="Nome">
      <input type="text" v-model="usuario.nome">
    </lv-input>
    <lv-input titulo="Email">
      <input type="email" v-model="usuario.email">
    </lv-input>
    <lv-input titulo="Senha">
      <input type="password" v-model="usuario.senha">
    </lv-input>
    <br>
    
    <input @click='registrar' type="submit" size="50" :value="estado" :disabled="estado != 'Registrar'">
    
  </div>
</template>

<script>
import LvInput from './LvInput.vue'
import Usuario from './../servicos/usuarios'

export default {
  name: 'lv-registro',
  components: {
    LvInput
  },
  data() { 
    return {
      msg: 'Bem Vindo Ao Sistema', 
      estado: 'Registrar', 
      usuario : {nome: '', email: '', senha: ''}
     }
   },
   methods: {
     registrar() {
       this.estado = 'Carregando...'
       Usuario.registrar( this.usuario ).then(resposta => {
         if (resposta.data.sucesso) {
           alert('Registrado com sucesso')
           this.estado = 'Registrar'
           this.$router.replace('/')
         } else 
             this.estado = 'Registrar'
         
       }).catch( e => console.log(e) )
     }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.centralizar{
  align-content: center;
}
</style>
