<template>
	<div id="app" >
    <header>
			<p class="war">{{$t('secondPage.header.war')}}</p>
			<hr>
			<p class="politics">{{$t('secondPage.header.politics')}}</p>
			<hr>
			<p class="fun">{{$t('secondPage.header.fun')}}</p>
		</header>
		<h1 class="BackNumber">2020</h1>
		<main>
			<img class="humanity" :src="require('../assets/evolve.png')" alt="evolve">
			<p class="description">
			<span :class="{ruGreeks:(this.$i18n.locale==='ru')}">{{$t('secondPage.evolution.greek')}}</span>  
			<span :class="{esAristocrats:(this.$i18n.locale==='es'), ruAristocrats:(this.$i18n.locale==='ru')}">{{$t('secondPage.evolution.aristocrat')}}</span>  
			<span :class="{ruBourgeois:(this.$i18n.locale==='ru')}">{{$t('secondPage.evolution.bourgeois')}}</span> 
			<span :class="{ruMafia:(this.$i18n.locale==='ru')}">{{$t('secondPage.evolution.mafia')}}</span>   
			<span :class="{ruHippie:(this.$i18n.locale==='ru')}" >{{$t('secondPage.evolution.hippie')}}</span>  
			<span :class="{esPunks:(this.$i18n.locale==='es'), ruPunks:(this.$i18n.locale==='ru')}">{{$t('secondPage.evolution.punk')}}</span> 
			<span :class="{esHipster:(this.$i18n.locale==='es'), ruHipsters:(this.$i18n.locale==='ru')}">{{$t('secondPage.evolution.hipsters')}}</span>  
			<router-link is="button" @click="goToConstruct"  class="BottomQuote_button">#2020</router-link></p>
			<img class="arrow" id="arrow" :src="require('../assets/Arrow.png')" alt="arrow">
		</main>
		<footer><router-link is="button" @click="goToBack" class="GoBack_button"><arrowsvg class="arrowbutton"></arrowsvg>{{ $t("footer.GoBack")}}</router-link></footer> 
	</div>
</template>

<script>
export default {
	name:'DesktopSecond',
	methods: {
		goToConstruct(){
			this.$router.replace('/create/personalisation')
		},
		goToBack(){
			this.$router.push('/')
		},
	},
	components:{
		arrowsvg:() => import(/* webpackChunkName: "arrowsvg" */ '../components/SVG/arrowSVG.vue')
	},
	mounted(){
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)
	}
}
</script>

<style scoped>
	.BackNumber{
	color: azure;
	transform: rotate(-64deg);
	font-size: 70vw;
	color: #000;
	opacity: 0.1;
	position: absolute;
	z-index: 0;
}
footer{
	display: flex;
	width: 95vw;
	align-items: flex-start;
}
.GoBack_button{
	margin-bottom: 1vw;
}
.humanity, .arrow{
	display: none;
}
.description{
	display: none;
}
main{
	flex-direction: row;
}
.evolve{
	outline: none;
	position: relative;
	display: inline-block;
	border: none;
	overflow: hidden;
	border-radius: 4vw;
	padding: 0.5vw 3vw;
	font-size: 5.5vw;
	font-weight: 400;
	color: #E0FFFF;
	background-color: #ac40f1;
	cursor: pointer;
	box-shadow: 1vw 1vw 5vw #000;
}
.evolve::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
	filter: blur(2vw);
	width: 9vw;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  transform: translateX(-3vw) skewX(-45deg);
  animation: move-light 1.7s infinite;
}

header{
	justify-content: center;
	align-items: flex-end;
	height: 50vw;
}
.war, .politics, .fun{
	background: none;
	border: none;
	color: #E0FFFF;
	margin: 2vw 2vw 0 0;
	font-family: 'Source', sans-serif;
	font-size: 7vw;
	outline: none;
}
hr{
	height: 8vw;
	border: 0;
	width: 0.4vw;
	background-color: #E0FFFF;
}
@media screen and (min-width: 760px) and (max-width: 999px){
	.BackNumber{
		transform: rotate(-58deg);
		font-size: 62vw;
	}
	header{
		height: 34vw;
	}
}

@media screen and (max-width: 999px) and (orientation: landscape) {
.BackNumber{
		transform: rotate(-10deg);
		font-size: 45vw;
	}
	.war, .politics, .fun{
		font-size: 3.5vw;
		text-shadow: 0vw 0vw 0.1vw #000;
	}
	header{
		height: calc(var(--vh, 1vh) * 11);
	}
	hr{
	height: calc(var(--vh, 1vh) * 10);
	width: 0.2vw;
	}
	.humanity, .arrow{
		display: block;
	}
	.humanity{
		width: 95vw;
	}
	.arrow{
		width: 75vw;
		margin-top: 1vw;
	}
	main{
		flex-direction: column;
	}
	.description{
		color: #E0FFFF;
		font-family: 'Source', sans-serif;
		font-size: 2vw;
		align-self: flex-start;
		display: inline;
		text-shadow: 0vw 0vw 0.1vw #000;
	}
	span:first-of-type{
		margin-left: 4.5vw;
		margin-right: 4vw;
	}
	span:nth-of-type(2){
		margin-right: 4vw;
	}
	span:nth-of-type(3){
		margin-right: 5vw;
	}
	span:nth-of-type(4){
		margin-right: 7.5vw;
	}
	span:nth-of-type(5){
		margin-right: 7vw;
	}
	span:nth-of-type(6){
		margin-right: 7vw;
	}
	span:nth-of-type(7){
		margin-right: 4vw;
	}
	.BottomQuote_button{
		padding: 0vw 2vw;
		font-size: 2vw;
		line-height: 3vw;
	}
	.GoBack_button{
		background: none;
		border: none;
		font-size: 1.5vw;
		color: #fff;
		font-weight: 300;
		cursor: pointer;
		z-index: 100;
		box-shadow: 0vw 0vw 15vw 1vw #000;
		padding: 0.3vw 2vw;
		border-radius: 3vw;
		display: flex;
		align-items: center;
	}
	.arrowbutton{
		width: 1.5vw;
		fill: #fff;
		margin-right: 0.5vw;
	}
	span.ruAristocrats{
		margin-right: 2vw;
	}
	span.ruBourgeois{
		margin-right: 3.5vw;
	}
	span.ruMafia{
		margin-right: 6.5vw;
	}
	span.ruHippie{
		margin-right: 7vw;
	}
	span.ruPunks{
		margin-right: 6vw;
	}
	span.ruHipsters{
		margin-right: 3vw;
	}
	span.esAristocrats{
		margin-right: 3vw;
	}
	span.esPunks{
		margin-right: 6.5vw;
	}
	span.esHipster{
		margin-right: 3.75vw;
	}
}

@media screen and (min-width: 1000px){
	.BackNumber{
		transform: rotate(-10deg);
		font-size: 45vw;
	}
	.war, .politics, .fun{
		font-size: 4vw;
		text-shadow: 0vw 0vw 0.1vw #000;
	}
	header{
		height: 10vw;
	}
	hr{
	height: 4.5vw;
	width: 0.2vw;
	}
	.humanity, .arrow{
		display: block;
	}
	.humanity{
		width: 95vw;
	}
	.arrow{
		width: 75vw;
		margin-top: 2vw;
	}
	main{
		flex-direction: column;
	}
	.description{
		color: #E0FFFF;
		font-family: 'Source', sans-serif;
		font-size: 2vw;
		align-self: flex-start;
		display: inline;
		text-shadow: 0vw 0vw 0.1vw #000;
	}
	span:first-of-type{
		margin-left: 4.5vw;
		margin-right: 4vw;
	}
	span:nth-of-type(2){
		margin-right: 4vw;
	}
	span:nth-of-type(3){
		margin-right: 5vw;
	}
	span:nth-of-type(4){
		margin-right: 7.5vw;
	}
	span:nth-of-type(5){
		margin-right: 7vw;
	}
	span:nth-of-type(6){
		margin-right: 7vw;
	}
	span:nth-of-type(7){
		margin-right: 4vw;
	}
	.BottomQuote_button{
		padding: 0vw 2vw;
		font-size: 2vw;
		line-height: 3vw;
	}
	.GoBack_button{
		background: none;
		border: none;
		font-size: 1.5vw;
		color: #fff;
		font-weight: 300;
		cursor: pointer;
		z-index: 100;
		box-shadow: 0vw 0vw 15vw 1vw #000;
		padding: 0.3vw 2vw;
		border-radius: 3vw;
		display: flex;
		align-items: center;
	}
	.arrowbutton{
		width: 1.5vw;
		fill: #fff;
		margin-right: 0.5vw;
	}
	span.ruAristocrats{
		margin-right: 2vw;
	}
	span.ruBourgeois{
		margin-right: 3.5vw;
	}
	span.ruMafia{
		margin-right: 6.5vw;
	}
	span.ruHippie{
		margin-right: 7vw;
	}
	span.ruPunks{
		margin-right: 6vw;
	}
	span.ruHipsters{
		margin-right: 3vw;
	}
	span.esAristocrats{
		margin-right: 3vw;
	}
	span.esPunks{
		margin-right: 6.5vw;
	}
	span.esHipster{
		margin-right: 3.75vw;
	}
}
</style>