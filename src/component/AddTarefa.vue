<template>
    <div>
        <input type="text" v-model="tarefa">
        <button @click="adicionar">Adicionar</button>    
    </div>    
</template>

<script>
export default {
    name: 'lv-addtarefa',
    data() { return { tarefa: ''} },
    methods: {
        adicionar(){
            if(this.tarefa != '')
                this.$store.dispatch('adicionarTarefa', this.tarefa)
            this.tarefa = ''
        }
    }
}
</script>

<style scoped>

</style>