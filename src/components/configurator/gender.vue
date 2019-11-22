<template>
	<section>
		<button @click='male' :class="{active:maleTrigger}">
			<malesvg class="malesvg"></malesvg>
			<p>{{$t('thirdPage.gender.male')}}</p>
		</button>
		<button @click='female' :class="{active:femaleTrigger}">
			<femalesvg class="femalesvg"></femalesvg>
			<p>{{$t('thirdPage.gender.female')}}</p>
		</button>
	</section>
</template>

<script>
export default {
	name:'gender',
	data(){
		return{
			maleTrigger: false,
			femaleTrigger: false
		}
	},
	components:{
		malesvg:() => import(/* webpackChunkName: "malesvg", webpackPrefetch: true */ '../SVG/maleSVG.vue'),
		femalesvg:() => import(/* webpackChunkName: "femalesvg", webpackPrefetch: true */ '../SVG/femaleSVG.vue')
	},
	methods:{
		male(){
			this.$store.dispatch('GET_GENDER', 'male')
			this.maleTrigger = true
			this.femaleTrigger = false
		},
		female(){
			this.$store.dispatch('GET_GENDER', 'female')
			this.maleTrigger = false
			this.femaleTrigger = true
		}
	}
}
</script>

<style scoped>
.malesvg, .femalesvg{
	height: calc(var(--vh, 1vh) * 24);
	width: calc(var(--vh, 1vh) * 24);
	fill: #5bc8ff;
}
.femalesvg{
	fill: #f5a9a9
}
button{
	position: relative;
	border: none;
	border-radius: 1vw;
	padding: 1vw;
	cursor: pointer;
	height: calc(var(--vh, 1vh) * 29);
	width: 47vw;
	background-color: rgb(226, 226, 226);
	transition: 0.2s;
}

button.active{
		transform: scale(1.05);
	border: 0.3vw solid #ac40f1;
	padding: 0.85vw;
	}
p{
	position: absolute;
	bottom: 1vw;
	right: 1vw;
	font-size: 4vw;
	font-weight: 400;
	color: #ac40f1;
}
@media screen and (min-width: 760px) and (max-width: 999px) {
}


@media screen and (min-width: 1000px), (orientation: landscape){
	.malesvg, .femalesvg{
	width: 22vw;
	height: initial;
	fill: #5bc8ff;
}
.femalesvg{
	fill: #f5a9a9
}
button{
	background-color: #fff;
	position: relative;
	border: none;
	border-radius: 0.5vw;
	padding: 0.5vw;
	cursor: pointer;
	height: 25vw;
	width: 25vw;
}
p{
	position: absolute;
	font-size: 2vw;
	font-weight: 200;
	color: #ac40f1;
}
}
</style>