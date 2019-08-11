<template>
<section class="cepChecker">
<label>Digite seu CEP</label>
<input type="text"></input>
<router-link class="home" to="/">Ver tarefas</router-link>
</section>
</template>

<script>
export default {
data () {
return {
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
