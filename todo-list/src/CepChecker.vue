<template>
<section class="cepChecker">
<label>Digite seu CEP</label>
<input v-mask="'99999-999'" @blur="checkCep" type="text"></input>
<router-link class="home" to="/">Ver tarefas</router-link>
<div v-if="hasAddress()">
      <p>Rua: {{address.logradouro}}</p>
      <p>Bairro: {{address.bairro}}</p>
      <p>Cidade: {{address.cidade}}</p>
      <p>Estado: {{address.estado}}</p>
</div>
<footer-todo>
	<p>Footer personalizado</p>
</footer-todo>
</section>
</template>

<script>

	import AwesomeMask from 'awesome-mask'
	import FooterTodo from './components/FooterTodo'
	
	export default {
		components: {
			FooterTodo
		},
		data () {
			return {
			address: {}
			}
		},
		directives: {
			'mask': AwesomeMask
		},
		methods: {
			checkCep ($event) {
				let cep = $event.target.value
				this.$http.get('http://api.postmon.com.br/v1/cep/' + cep)
				.then((res) => {
					this.address = res.body
				}, (res) => {
					console.log(res)
				})
			},
			hasAddress () {
				return Object.keys(this.address).length > 0
			}
		}
	}
</script>

<style lang="less">
body {
	font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	line-height: 1.4em;
	background: #f5f5f5;
	color: #4d4d4d;
	min-width: 230px;
	max-width: 550px;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 300;
}
.home{
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 5px;
  text-align: center;
}
.cepChecker{
  margin: 20px 0;
  text-align: center;
  label{
    display: block;
  }
  input{
    margin: 20px;
    height: 2em;
    padding: 2px;
  }
}
</style>
