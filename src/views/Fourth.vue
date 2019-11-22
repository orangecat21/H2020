<template>
	<div id="app">
		<header>Human 2020</header>
		<h1 class="BackNumber">2020</h1>
		<main>
			<section class="workSpace">
				<section class="progressBar active">
					<personsvg class="personSVG"></personsvg>
					<arrowsvg class="arrowSVG"></arrowsvg>
					<hangersvg class="hangerSVG"></hangersvg>
					<arrowsvg class="arrowSVG"></arrowsvg>
					<seekersvg class="seekerSVG"></seekersvg>
					<arrowsvg class="arrowSVG"></arrowsvg>
					<awardsvg class="awardSVG Champ"></awardsvg>
				</section>
				<section class="configurator">
					<p class="sooon">DeVeLoPeRs aRe WoRkInG oN tHiS sCrEeN😤🤕😘</p>
				</section>
			</section>
			<section class="canvascontainer" ref="canvascontainer"><p class="description">Statistics from around the WORLD will be collected here...🌍</p>
				<v-stage ref="stage" :config="stage">
					<v-layer>
						<v-text :config="{text:name, fontSize:60, x:posX, y:20, fill:'#ac40f1'}"></v-text>
						<v-image :config="{image:podium, x: 320, y:1060, scale:{x:2,y:2}}"></v-image>
						<v-image :config="{image:question, x: 380, y:450, scale:{x:.8,y:.8}}"></v-image>
						<v-image :config="{image:human, x: 340, y:140, scale:{x:1,y:1}}"></v-image>
						<v-image
							:config="{image:pants, x:this.$store.getters.HUMAN_PANTS.posX,y:this.$store.getters.HUMAN_PANTS.posY, scale:{x:.3801,y:.3801}}">
						</v-image>
						<v-image
							:config="{image:shoes, x:this.$store.getters.HUMAN_SHOES.posX,y:this.$store.getters.HUMAN_SHOES.posY, scale:{x:.3801,y:.3801}}">
						</v-image>
						<v-image
							:config="{image:shirt, x:this.$store.getters.HUMAN_SHIRT.posX,y:this.$store.getters.HUMAN_SHIRT.posY, scale:{x:.3801,y:.3801}}">
						</v-image>
						<v-image
							:config="{image:jacket, x:this.$store.getters.HUMAN_JACKET.posX,y:this.$store.getters.HUMAN_JACKET.posY, scale:{x:.3801,y:.3801}}">
						</v-image>
						<v-image
							:config="{image:accessories, x:this.$store.getters.HUMAN_ACCESSORIES.posX,y:this.$store.getters.HUMAN_ACCESSORIES.posY, scale:{x:.38,y:.38}}">
						</v-image>
						<v-image 
							:config="{image:hair, x:this.$store.getters.HUMAN_HEAD.posX,y:this.$store.getters.HUMAN_HEAD.posY, scale:{x:.38,y:.38}}">
						</v-image>
					</v-layer>
				</v-stage>
			</section>
		</main>
	</div>
</template>

<script>
export default {
	components:{
		personsvg:() => import(/* webpackChunkName: "personSVG", webpackPrefetch: 989 */ '../components/SVG/personSVG.vue'),
		arrowsvg:() => import(/* webpackChunkName: "arrowSVG", webpackPrefetch: 988 */ '../components/SVG/arrowSVG.vue'),
		hangersvg:() => import(/* webpackChunkName: "hangerSVG", webpackPrefetch: 987 */ '../components/SVG/hangerSVG.vue'),
		seekersvg:() => import(/* webpackChunkName: "seekerSVG", webpackPrefetch: 986 */ '../components/SVG/seekerSVG.vue'),
		awardsvg:() => import(/* webpackChunkName: "awardSVG", webpackPrefetch: 985 */ '../components/SVG/awardSVG.vue')
	},
	mounted(){
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)
	},
	beforeDestroy(){
    this.$router.push('/create/personalisation')
  },
}
</script>

<style scoped>
.personSVG, .awardSVG, .seekerSVG, .hangerSVG{
	height: 8vw;
}
.arrowSVG{
	height: 5vw;
	transform: rotate(270deg);
}
footer{
	position: relative;
	display: none;
	width: 94vw;
	align-items: center;
	justify-content: space-between;
}
.leftButtonGroup{
	display: flex;
	justify-content: flex-start;
}
.progressBar{
	height: calc(var(--vh, 1vh) * 40);
	right: 10vw;
	top: calc(var(--vh, 1vh) * 11);
	position: absolute;
	z-index: 0;
	border-radius: .3vw;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	fill: rgb(138, 138, 138);
}
.active{
	fill: rgb(255, 255, 255);
}
.Champ{
	fill: rgba(0, 54, 155, 0.877);
}
.configurator{
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(var(--vh, 1vh) * 40);
	width: 100vw;
	border-radius: .5vw;
	z-index: 999;
	background-color: rgb(255, 255, 255);
}
.sooon{
	font-size: 12vw;
	color: rgb(71, 243, 255);
	text-align: center;
	line-height: 12vw;
	align-self: center;
	text-shadow: 0 0 1vw rgb(48, 2, 173);
	font-weight: 700;
}
.description{
	color: rgb(48, 2, 173);
	font-size: 8vw;
	font-weight: 700;
	text-align: center;
	text-shadow: 0 0 0.5vw #fff;
}
.canvascontainer{
	height: calc(var(--vh, 1vh) * 60);
	width: calc(var(--vh, 1vh) * 46.9);
}
.workSpace{
	order: 2;
}
main{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: calc(var(--vh, 1vh) * 100);
}
header{
	display: none;
}
.BackNumber{
	color: azure;
	transform: rotate(-64deg);
	font-size: 70vw;
	color: #000;
	opacity: 0.1;
	position: absolute;
	z-index: 0;
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
	margin-right: 1vw;
}
.GoNext_button{
	background-color: #ac40f1;
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
	margin-right: initial;
	margin-bottom: 1vw;
	box-shadow: 0vw 0vw 0.2vw #000;
	text-shadow: 0vw 0vw 0.1vw #000;
}
.GoNext_button:active{
	box-shadow: inset 0.2vw 0.2vw 0.3vw #000;
}
.arrowbutton{
	width: 1.5vw;
	fill: #fff;
	margin-right: 0.5vw;
}
.arrowright{
	width: 1.5vw;
	fill: #fff;
	margin-left: 0.5vw;
	transform: rotate(180deg);
}
@media screen and (min-width: 760px) and (max-width: 999px) {
}


@media screen and (min-width: 1000px), (orientation: landscape){
	.BackNumber{
		transform: rotate(-10deg);
		font-size: 45vw;
	}
	main{
		height: 100vh;
		flex-direction: row;
		justify-content: space-around;
	}
	.personSVG, .awardSVG, .seekerSVG, .hangerSVG{
		height: 5.5vw;
	}
	.arrowSVG{
		height: 3vw;
		transform: rotate(180deg);
	}
	footer{
		display: flex;
		width: 94vw;
		align-items: center;
		justify-content: space-between;
	}
	.leftButtonGroup{
		display: flex;
		justify-content: flex-start;
	}
	.progressBar{
		height: 6vw;
		width: 55vw;
		border-radius: .3vw;
		display: flex;
		justify-content: space-around;
		align-items: center;
		fill: rgb(189, 189, 189);
		height: 6vw;
		right: initial;
		top: initial;
		position: initial;
		flex-direction: row;
	}
	.active{
		fill: #fff;
	}
	.configurator{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		height: 35vw;
		width: 55vw;
		border-radius: .5vw;
		background-color: rgba(0, 0, 0, 0.25);
	}
	.sooon{
	font-size: 7vw;
	color: #fff;
	text-align: center;
	line-height: 7.5vw;
	align-self: center;
	text-shadow: 0 0 1vw rgb(48, 2, 173);
	font-weight: 700;
}
.description{
	color: rgb(48, 2, 173);
	font-size: 4vw;
	font-weight: 700;
	text-align: center;
	text-shadow: 0 0 0.5vw #fff;
}
	.canvascontainer{
		height: 41vw;
		order: 2;
		width: 32vw;
		border-radius: .5vw;
		background-color: rgb(255, 255, 255);
	}
	.workSpace{
		order: 2;
		display: flex;
		flex-direction: column;
	}
	#app{
		display: flex;
		height: 100vh;
	}
	.GoBack_button{
	margin-bottom: 1vw;
	}
	@-moz-document url-prefix(){
		#app{
		height: 100vh;
		}
	}
}
</style>