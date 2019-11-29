<template>
<clothesItemsMale v-if="this.gender==='male'" :items="array" :map="map" :firstID="shirtsID" :secondID="pantsID" :thirdID="jacketsID" :fourthID="1" :type="type"/> 
<clothesItemsFemale :items="array" :map="map" :firstID="shirtsID" :secondID="pantsID" :thirdID="jacketsID" :fourthID="1" :type="type" v-else/>  
</template>

<script>
export default {
    data(){
        return{
            type:'ACCESSORIES'
        }
    },
    computed:{
        array(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.accessoriesArray.accessoriesMale
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.accessoriesArray.accessoriesFemale
            } return null
        },
        gender(){
            return this.$store.getters.GENDER
        },
        map(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.accessoriesArray.maleMap
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.accessoriesArray.femaleMap
            } return null
        },
        pantsID(){
            return this.$store.getters.HUMAN_PANTS.id
        },
        shirtsID(){
            return this.$store.getters.HUMAN_SHIRT.id
        },
        jacketsID(){
            return this.$store.getters.HUMAN_JACKET.id
        }
    },
    components:{
        clothesItemsMale:() => import(/* webpackChunkName: "accessoriesitems", webpackPrefetch: 966 */ '../configurator/accessoriesItemsMale.vue'),
        clothesItemsFemale:() => import(/* webpackChunkName: "accessoriesitems", webpackPrefetch: 966 */ '../configurator/accessoriesItemsFemale.vue')
    }
    
}
</script>

<style scoped>

</style>