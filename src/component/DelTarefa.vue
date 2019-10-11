<template>
    <div>
        <button @click="apagar(tarefa)">D</button>    
    </div>    
</template>

<script>

import { mapActions } from "vuex";

export default {
    name: 'lv-deltarefa',
    props: {
        tarefa: {
            required: true,
            type:String
        }
    },
    methods: {
        ...mapActions({
            apagar: 'removerTarefa'
        })
    }
    
}
</script>

<style scoped>

</style>