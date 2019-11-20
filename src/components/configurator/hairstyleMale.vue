<template>
    <section>
        <button
			v-for="color in colors"
			v-bind:key="color.id"
			v-bind:class="['button', { active: currentColor === color.color }, color.color]"
			v-on:click="currentColor = color.color, array=color.array">
        </button>
        <clothesitems :items="array"  :type="type" class="currentColor"></clothesitems>
    </section>
</template>

<script>
export default {
    name: 'Hairstyle',
    components:{
        clothesitems:() => import(/* webpackChunkName: "hairitems", webpackPrefetch: 967 */ '../configurator/hairItems.vue'),
    },
    methods:{
        changeColor(){
        
        }
    },
    data(){
        return{
            currentColor:'black',
            type:'HEAD',
            array:this.$store.state.hairArrayMale.hairBlackMale,
            colors:[
                {
                    id:1,
                    color:'black',
                    array: this.$store.state.hairArrayMale.hairBlackMale
                },
                {
                    id:2,
                    color:'brown',
                    array: this.$store.state.hairArrayMale.hairBrownMale
                },
                {
                    id:3,
                    color:'darkbrown',
                    array: this.$store.state.hairArrayMale.hairDarkBrownMale
                },
                {
                    id:4,
                    color:'ginger',
                    array: this.$store.state.hairArrayMale.hairGingerMale
                },
                {
                    id:5,
                    color:'green',
                    array: this.$store.state.hairArrayMale.hairGreenMale
                },
                {
                    id:6,
                    color:'grey',
                    array: this.$store.state.hairArrayMale.hairGreyMale
                },
                {
                    id:7,
                    color:'red',
                    array: this.$store.state.hairArrayMale.hairRedMale
                },
            ]
        }
    }
}
</script>

<style scoped>
    section{
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100vw;
    }
    .currentColor{
        flex-basis: 100%;
    }
    .button{
        width: calc(var(--vh, 1vh) * 5);
        height: calc(var(--vh, 1vh) * 5);
        border-radius: 50%;
        border: none;
        cursor: pointer;
        margin-top: calc(var(--vh, 1vh) * 0.2);
    }
    .button:focus, .button.active {
		border: 0.2vw solid #ac40f1;
	}
    .black{
        background-color: #202020;
    }
    .brown{
        background-color: #b58e66;
    }
    .darkbrown{
        background-color: #473726;
    }
    .ginger{
        background-color: #e48e37;
    }
    .green{
        background-color: #417334;
    }
    .grey{
        background-color: #8c7e70;
    }
    .red{
        background-color: #5c2f00;
    }
    @media screen and (min-width: 760px) and (max-width: 999px) {
    }
    @media screen and (min-width: 1000px), (orientation: landscape){
        section{
            width: initial;
        }
        .button{
            width: 3vw;
            height: 3vw;
            margin: 0vw 0vw 0vw 0vw;
        }
        .button.active{
            border: 0.2vw solid #fff;
        }
    }
</style>