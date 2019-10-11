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

import { mapGetters } from "vuex";

export default {
    name: 'lv-tarefas',
    components: {LvDeltarefa},
    computed: {
        ...mapGetters({
            tarefas: 'listaTarefas'
        })
    }
}
</script>

<style>

</style>