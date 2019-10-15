<template>
    <div>
        <br>
        <label>Busca por</label>
        <input type="text" v-model="termo">
        <ul>
            <li v-for="tarefa in resultado(termo)">{{ tarefa }}</li>
        </ul>
    </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
    name: 'lv-buscatarefa',
    data() { return { termo: '' } },
    computed: {
        ...mapGetters({
            resultado: 'buscaTarefas'
        })
    }
}
</script>