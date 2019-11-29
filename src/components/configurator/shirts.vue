<template>
<clothesitems :items="array" :map="map" :firstID="pantsID" :secondID="jacketID" :thirdID="accessID" :fourthID="1" :type="type"></clothesitems>    
</template>

<script>
export default {
    data(){
        return{
            type:'SHIRTS'
        }
    },
    computed:{
        array(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.shirtsArray.shirtsMale
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.shirtsArray.shirtsFemale
            } return null
        },
        map(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.shirtsArray.maleMap
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.shirtsArray.femaleMap
            } return null
        },
        pantsID(){
            return this.$store.getters.HUMAN_PANTS.id
        },
        jacketID(){
            return this.$store.getters.HUMAN_JACKET.id
        },
        accessID(){
            return this.$store.getters.HUMAN_ACCESSORIES.id
        }
    },
    components:{
        clothesitems:() => import(/* webpackChunkName: "shirtsitems", webpackPrefetch: true */ '../configurator/clothesItems.vue')
    }
    
}
</script>

<style scoped>

</style>