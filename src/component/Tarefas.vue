<template>
    <div>
        
            <p v-for="tarefa in tarefas">
                <lv-deltarefa :tarefa="tarefa"></lv-deltarefa>
                {{ tarefa }}
            </p>
        
    </div>    
</template>

<script>

import LvDeltarefa from './DelTarefa.vue'

export default {
    name: 'lv-tarefas',
    components: {LvDeltarefa},
    computed: {
        tarefas(){
            return this.$store.getters.listaTarefas
        }
    }
}
</script>

<style>

</style>