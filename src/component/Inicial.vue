<template>
    <div>
        <h1>Inicial</h1>
        <h2>Olá, {{ $store.state.nome }}</h2>
    </div>
</template>

<script>
export default {
    name: 'lv-inicial',
    mounted() {
        setTimeout(() => {this.$store.state.nome = 'Novo nome'}, 1500)
    }    
}
</script>

<style>

</style>