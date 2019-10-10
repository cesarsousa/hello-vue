<template>
    <div>
        <label>Busca por</label>
        <input type="text" v-model="termo">
        <ul>
            <li v-for="tarefa in resultado">{{ tarefa }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'lv-buscatarefa',
    data() { return { termo: '' } },
    computed: {
        resultado(){
            return this.$store.getters.buscaTarefas(this.termo)
        }
    }
}
</script>