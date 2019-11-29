<template>
<shoesItemsMale v-if="this.gender==='male'" :items="array" :map="map" :firstID="pantsID" :secondID="1" :thirdID="1" :fourthID="1" :type="type"/>
<shoesItemsFemale :items="array" :map="map" :firstID="pantsID" :secondID="1" :thirdID="1" :fourthID="1" :type="type" v-else/>   
</template>

<script>
export default {
    data(){
        return{
            type:'SHOES'
        }
    },
    computed:{
        array(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.shoesArray.shoesMale
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.shoesArray.shoesFemale
            } return null
        },
        gender(){
            return this.$store.getters.GENDER
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
        }
    },
    components:{
        shoesItemsMale:() => import(/* webpackChunkName: "shirtsitems", webpackPrefetch: 965 */ '../configurator/shoesItemsMale.vue'),
        shoesItemsFemale:() => import(/* webpackChunkName: "shirtsitems", webpackPrefetch: 965 */ '../configurator/shoesItemsFemale.vue')
    }
    
}
</script>

<style scoped>
    
</style>