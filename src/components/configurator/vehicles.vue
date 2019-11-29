<template>
<clothesitems :items="array"  :type="type"></clothesitems>    
</template>

<script>
export default {
    data(){
        return{
            type:'VEHICLE'
        }
    },
    computed:{
        array(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.vehiclesArray.vehicleMale
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.vehiclesArray.vehicleFemale
            } return null
        }
    },
    components:{
        clothesitems:() => import(/* webpackChunkName: "pantsitems", webpackPreload: true */ '../configurator/vehicleItems.vue')
    }
    
}
</script>

<style scoped>

</style>