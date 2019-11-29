<template>
<clothesitems :items="array" :map="map" :firstID="shirtsID" :secondID="pantsID" :thirdID="accessID" :fourthID="1" :type="type"></clothesitems>    
</template>

<script>
export default {
    data(){
        return{
            type:'JACKETS'
        }
    },
    computed:{
        array(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.jacketsArray.jacketsMale
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.jacketsArray.jacketsFemale
            } return null
        },
        map(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.jacketsArray.maleMap
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.jacketsArray.femaleMap
            } return null
        },
        pantsID(){
            return this.$store.getters.HUMAN_PANTS.id
        },
        shirtsID(){
            return this.$store.getters.HUMAN_SHIRT.id
        },
        accessID(){
            return this.$store.getters.HUMAN_ACCESSORIES.id
        }
    },
    components:{
        clothesitems:() => import(/* webpackChunkName: "jacketsitems", webpackPrefetch: true */ '../configurator/clothesItems.vue')
    }
    
}
</script>

<style scoped>

</style>