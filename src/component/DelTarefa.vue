<template>
    <div>
        <button @click="apagar()">D</button>    
    </div>    
</template>

<script>
export default {
    name: 'lv-deltarefa',
    props: {
        tarefa: {
            required: true,
            type:String
        }
    },
    methods: {
        apagar(){
            this.$store.dispatch('removerTarefa', this.tarefa)
        }
    }
    
}
</script>

<style scoped>

</style>