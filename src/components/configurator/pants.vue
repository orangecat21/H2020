<template>
<clothesitems :items="array" :map="map" :firstID="shirtsID" :secondID="jacketID" :thirdID="shoesID" :fourthID="accessID" :type="type"></clothesitems>    
</template>

<script>
export default {
    data(){
        return{
            type:'PANTS'
        }
    },
    computed:{
        array(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.pantsArray.pantsMale
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.pantsArray.pantsFemale
            } return null
        },
        map(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.pantsArray.maleMap
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.pantsArray.femaleMap
            } return null
        },
        shirtsID(){
            return this.$store.getters.HUMAN_SHIRT.id
        },
        jacketID(){
            return this.$store.getters.HUMAN_JACKET.id
        },
        accessID(){
            return this.$store.getters.HUMAN_ACCESSORIES.id
        },
        shoesID(){
            return this.$store.getters.HUMAN_SHOES.id
        }
    },
    components:{
        clothesitems:() => import(/* webpackChunkName: "pantsitems", webpackPreload: true */ '../configurator/clothesItems.vue')
    }
    
}
</script>

<style scoped>

</style>