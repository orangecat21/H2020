<template>
<clothesitems :items="array"  :type="type"></clothesitems>    
</template>

<script>
export default {
    data(){
        return{
            type:'BEARD'
        }
    },
    computed:{
        array(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.beardsArray.beards
            } return null
        }
    },
    components:{
        clothesitems:() => import(/* webpackChunkName: "pantsitems", webpackPreload: true */ '../configurator/beardsItems.vue')
    }
    
}
</script>

<style scoped>

</style>