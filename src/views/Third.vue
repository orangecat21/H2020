<template>
	<div id="app">
		<header>Human 2020</header>
		<h1 class="BackNumber">2020</h1>
		<main :class="{'mobileMain':this.$route.path === '/create/soft_skill/finish'}">
			<section @mouseover="evolve1 = true" class="workSpace">
				<section class="progressBar" :class="{progressBarTriggered:this.$store.getters.skillInputActive}">
					<personsvg class="personSVG" :class="[{'active':this.$route.path === firstStep}, {'active':this.$route.path === secondStepM},{'active': this.$route.path === (secondStepW)},{'active': this.$route.path === justALittle},{'active': this.$route.path === proportionSkills}, {'active':this.$route.path === hardSkill}, {'active':this.$route.path === softSkill}]"></personsvg>
					<arrowsvg class="arrowSVG" :class="[{'active':this.$route.path === secondStepM},{'active': this.$route.path === secondStepW},{'active': this.$route.path === justALittle},{'active': this.$route.path === proportionSkills},{'active':this.$route.path === hardSkill}, {'active':this.$route.path === softSkill}]"></arrowsvg>
					<hangersvg class="hangerSVG" :class="[{'active':this.$route.path === secondStepM},{'active': this.$route.path === secondStepW},{'active': this.$route.path === justALittle},{'active': this.$route.path === proportionSkills}, {'active':this.$route.path === hardSkill}, {'active':this.$route.path === softSkill}]"></hangersvg>
					<arrowsvg class="arrowSVG" :class="[{'active': this.$route.path === justALittle},{'active': this.$route.path === proportionSkills}, {'active':this.$route.path === hardSkill}, {'active':this.$route.path === softSkill}]"></arrowsvg>
					<seekersvg class="seekerSVG" :class="[{'active': this.$route.path === justALittle},{'active': this.$route.path === proportionSkills}, {'active':this.$route.path === hardSkill}, {'active':this.$route.path === softSkill}]"></seekersvg>
					<arrowsvg class="arrowSVG"></arrowsvg>
					<awardsvg class="awardSVG"></awardsvg>
				</section>
				<section class="configurator" :class="{configTriggered:this.$store.getters.skillInputActive}">
					<router-view/>
				</section>
			</section>
			<section class="canvascontainer" ref="canvascontainer" :class="{canvascontainerTriggered:skillInputActive}">
				<v-stage ref="stage" :config="stage">
					<v-layer ref="scene">
						<v-text :config="{text:name, fontSize:60, x:posX, y:20, fill:'#ac40f1'}"></v-text>
						<v-image :config="{image:podium, x: 320, y:1060, scale:{x:2,y:2}}"></v-image>
						<v-image :config="{image:question, x: 380, y:450, scale:{x:.8,y:.8}}"></v-image>
						<v-image :config="{image:human, x: 340, y:140, scale:{x:1,y:1}}"></v-image>
						<v-image ref="pants"
							:config="{image:pants, x:this.$store.getters.HUMAN_PANTS.posX,y:this.$store.getters.HUMAN_PANTS.posY, scale:{x:.3801,y:.3801}}">
						</v-image>
						<v-image ref="shoes"
							:config="{image:shoes, x:this.$store.getters.HUMAN_SHOES.posX,y:this.$store.getters.HUMAN_SHOES.posY, scale:{x:.3801,y:.3801}}">
						</v-image>
						<v-image ref="shirt"
							:config="{image:shirt, x:this.$store.getters.HUMAN_SHIRT.posX,y:this.$store.getters.HUMAN_SHIRT.posY, scale:{x:.3801,y:.3801}}">
						</v-image>
						<v-image ref="jacket"
							:config="{image:jacket, x:this.$store.getters.HUMAN_JACKET.posX,y:this.$store.getters.HUMAN_JACKET.posY, scale:{x:.3801,y:.3801}}">
						</v-image>
						<v-image ref="accessories"
							:config="{image:accessories, x:this.$store.getters.HUMAN_ACCESSORIES.posX,y:this.$store.getters.HUMAN_ACCESSORIES.posY, scale:{x:.38,y:.38}}">
						</v-image>
						<v-image ref="hair"
							:config="{image:hair, x:this.$store.getters.HUMAN_HEAD.posX,y:this.$store.getters.HUMAN_HEAD.posY, scale:{x:.38,y:.38}}">
						</v-image>
					</v-layer>
				</v-stage>
			</section>
		</main>
		
		<footer>
			<div class="invisible" :class="[{overlay: this.$route.path === finish}, {overlay:childOverlay}]" @click="closeOverlay"></div>
			<div class="leftButtonGroup">
				<router-link is="button" @click="goToBack" class="GoBack_button"><arrowsvg class="arrowbutton"></arrowsvg>{{ $t("footer.GoBack")}}</router-link>
			<router-link v-if="this.$route.path !== firstStep" is="button" @click="Reset" class="GoBack_button"><resetsvg class="arrowbutton"></resetsvg>{{ $t("footer.reset")}}</router-link>
			</div>
			<router-link v-if="this.$route.path === secondStepM || this.$route.path === secondStepW ||this.$route.path === softSkill" is="button" @click="goToNext" class="GoNext_button">{{ $t("footer.next")}}<arrowsvg class="arrowright"></arrowsvg></router-link>
		</footer>
	</div>
</template>
<script>
import API, { graphqlOperation } from "@aws-amplify/api";
import { createAnswer } from "../graphql/mutations";
export default {
	name: 'thirdPage',
	data(){
		return{
			stage:{
				width: this.stageWidth,
				height: this.stageHeight
			},
			stageWidth:1000,
			stageHeight:1282,
			human:null,
			name:'',
			podium:null,
			question:null,
			hair:null,
			jacket:null,
			shirt:null,
			pants:null,
			accessories:null,
			shoes:null,
			canvascontainer:'',
			posX:'',
			firstStep: '/create/personalisation',
			secondStepM: '/create/man_clothes',
			secondStepW: '/create/women_clothes',
			justALittle:'/create/just_a_little',
			proportionSkills:'/create/proportion_skills',
			hardSkill: '/create/hard_skill',
			softSkill: '/create/soft_skill',
			finish: '/create/soft_skill/finish',
			humanImg: null,
			scene:null
		}
	},
	computed:{
		humanLink(){
			if(this.$store.getters.GENDER ==='male'){
				return require('../assets/boy.png')
			} else if(this.$store.getters.GENDER ==='female'){
				return require('../assets/girl.png')
			} else return null
		},
		humanName(){
			return this.$store.getters.HUMAN_NAME
		},
		humanNameLenght(){
			return this.$store.getters.HUMAN_NAME.length
		},
		hairSrc(){
			return this.$store.getters.HUMAN_HEAD.src
		},
		jacketSrc(){
			return this.$store.getters.HUMAN_JACKET.src
		},
		shirtSrc(){
			return this.$store.getters.HUMAN_SHIRT.src
		},
		pantsSrc(){
			return this.$store.getters.HUMAN_PANTS.src
		},
		accessoriesSrc(){
			return this.$store.getters.HUMAN_ACCESSORIES.src
		},
		shoesSrc(){
			return this.$store.getters.HUMAN_SHOES.src
		},
		skillInputActive(){
			return this.$store.getters.skillInputActive
		},
		childOverlay(){
			return this.$store.getters.popupActive
		},
		gender() {
          return this.$store.getters.GENDER;
        },
        humanHead() {
          return this.$store.getters.HUMAN_HEAD;
        },
        humanShirt() {
          return this.$store.getters.HUMAN_SHIRT;
        },
        humanPants() {
          return this.$store.getters.HUMAN_PANTS;
        },
        humanShoes() {
          return this.$store.getters.HUMAN_SHOES;
        },
        humanAccessories() {
          return this.$store.getters.HUMAN_ACCESSORIES;
        },
        humanJackets() {
          return this.$store.getters.HUMAN_JACKET;
        },
        hardSkillName() {
          return this.$store.getters.HARDSKILLNAME;
        },
        hardSkillPoints() {
          return this.$store.getters.HARDSKILL;
        },
        softSkillsPoints() {
          return this.$store.getters.SOFTSKILLS;
        },
        Initiative() {
          return this.$store.state.Initiative;
        },
        Creativity() {
          return this.$store.state.Creativity;
        },
        Adaptability() {
          return this.$store.state.Adaptability;
        },
        Reflection() {
          return this.$store.state.Reflection;
        },
        Multitasking() {
          return this.$store.state.Multitasking;
        },
        ListeningSkills() {
          return this.$store.state.ListeningSkills;
        },
        Teamwork() {
          return this.$store.state.Teamwork;
        },
        CriticalThinking() {
          return this.$store.state.CriticalThinking;
        },
        TimeManagement() {
          return this.$store.state.TimeManagement;
        }
	},
	watch:{
		humanLink: function(){
			this.newGender()
			this.hair = null,
			this.jacket = null,
			this.shirt = null,
			this.pants = null,
			this.shoes = null,
			this.accessories = null
		},
		humanName: function(){
			this.name = this.humanName
			this.posX = this.calcPosName()
		},
		hairSrc:function(){
			this.newHair()
		},
		jacketSrc: function(){
			this.newJacket()
		},
		shirtSrc: function(){
			this.newShirt()
		},
		pantsSrc: function(){
			this.newPants()
		},
		accessoriesSrc: function(){
			this.newAccessories()
		},
		shoesSrc: function(){
			this.newShoes()
		},
		async shoes(){
			await this.$refs.shoes.getStage().setZIndex(this.$store.getters.HUMAN_SHOES.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.pants.getStage().setZIndex(this.$store.getters.HUMAN_PANTS.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.shirt.getStage().setZIndex(this.$store.getters.HUMAN_SHIRT.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.jacket.getStage().setZIndex(this.$store.getters.HUMAN_JACKET.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.hair.getStage().setZIndex(this.$store.getters.HUMAN_HEAD.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.accessories.getStage().setZIndex(this.$store.getters.HUMAN_ACCESSORIES.z)
			await this.$refs.scene.getStage().draw()
		},
		async pants(){
			await this.$refs.shoes.getStage().setZIndex(this.$store.getters.HUMAN_SHOES.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.pants.getStage().setZIndex(this.$store.getters.HUMAN_PANTS.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.shirt.getStage().setZIndex(this.$store.getters.HUMAN_SHIRT.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.jacket.getStage().setZIndex(this.$store.getters.HUMAN_JACKET.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.hair.getStage().setZIndex(this.$store.getters.HUMAN_HEAD.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.accessories.getStage().setZIndex(this.$store.getters.HUMAN_ACCESSORIES.z)
			await this.$refs.scene.getStage().draw()
		},
		async shirt(){
			await this.$refs.shoes.getStage().setZIndex(this.$store.getters.HUMAN_SHOES.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.pants.getStage().setZIndex(this.$store.getters.HUMAN_PANTS.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.shirt.getStage().setZIndex(this.$store.getters.HUMAN_SHIRT.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.jacket.getStage().setZIndex(this.$store.getters.HUMAN_JACKET.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.hair.getStage().setZIndex(this.$store.getters.HUMAN_HEAD.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.accessories.getStage().setZIndex(this.$store.getters.HUMAN_ACCESSORIES.z)
			await this.$refs.scene.getStage().draw()
		},
		async jacket(){
			await this.$refs.shoes.getStage().setZIndex(this.$store.getters.HUMAN_SHOES.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.pants.getStage().setZIndex(this.$store.getters.HUMAN_PANTS.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.shirt.getStage().setZIndex(this.$store.getters.HUMAN_SHIRT.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.jacket.getStage().setZIndex(this.$store.getters.HUMAN_JACKET.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.hair.getStage().setZIndex(this.$store.getters.HUMAN_HEAD.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.accessories.getStage().setZIndex(this.$store.getters.HUMAN_ACCESSORIES.z)
			await this.$refs.scene.getStage().draw()
		},
		async accessories(){
			await this.$refs.shoes.getStage().setZIndex(this.$store.getters.HUMAN_SHOES.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.pants.getStage().setZIndex(this.$store.getters.HUMAN_PANTS.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.shirt.getStage().setZIndex(this.$store.getters.HUMAN_SHIRT.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.jacket.getStage().setZIndex(this.$store.getters.HUMAN_JACKET.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.hair.getStage().setZIndex(this.$store.getters.HUMAN_HEAD.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.accessories.getStage().setZIndex(this.$store.getters.HUMAN_ACCESSORIES.z)
			await this.$refs.scene.getStage().draw()
		},
		async hair(){
			await this.$refs.shoes.getStage().setZIndex(this.$store.getters.HUMAN_SHOES.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.pants.getStage().setZIndex(this.$store.getters.HUMAN_PANTS.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.shirt.getStage().setZIndex(this.$store.getters.HUMAN_SHIRT.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.jacket.getStage().setZIndex(this.$store.getters.HUMAN_JACKET.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.hair.getStage().setZIndex(this.$store.getters.HUMAN_HEAD.z)
			await this.$refs.scene.getStage().draw()
			await this.$refs.accessories.getStage().setZIndex(this.$store.getters.HUMAN_ACCESSORIES.z)
			await this.$refs.scene.getStage().draw()
		}
		
	},
	components:{
		personsvg:() => import(/* webpackChunkName: "personSVG", webpackPrefetch: 989 */ '../components/SVG/personSVG.vue'),
		arrowsvg:() => import(/* webpackChunkName: "arrowSVG", webpackPrefetch: 988 */ '../components/SVG/arrowSVG.vue'),
		hangersvg:() => import(/* webpackChunkName: "hangerSVG", webpackPrefetch: 987 */ '../components/SVG/hangerSVG.vue'),
		seekersvg:() => import(/* webpackChunkName: "seekerSVG", webpackPrefetch: 986 */ '../components/SVG/seekerSVG.vue'),
		awardsvg:() => import(/* webpackChunkName: "awardSVG", webpackPrefetch: 985 */ '../components/SVG/awardSVG.vue'),
		resetsvg:() => import(/* webpackChunkName: "resetSVG", webpackPrefetch: 984 */ '../components/SVG/resetSVG.vue')
	},
	methods: {
		goToBack(){
			if(this.$route.path === this.firstStep) {
				this.$router.push('/evolve/8')
			} else if ((this.$route.path == this.secondStepW)||(this.$route.path == this.secondStepM)) {
				this.$router.push(this.firstStep)
			} else if (this.$route.path === this.justALittle){
				if(this.$store.getters.GENDER ==='male'){
					this.$router.push(this.secondStepM)
				} else this.$router.push(this.secondStepW)
			} else if (this.$route.path === this.proportionSkills){
				this.$router.push(this.justALittle)
			} else if (this.$route.path === this.hardSkill){
				this.$router.push(this.proportionSkills)
			} else if (this.$route.path === this.softSkill){
				this.$router.push(this.hardSkill)
			}
		},
		closeOverlay(){
			this.$router.push("/stats")
		},
		goToNext(){
			if(this.$route.path === this.softSkill){
				this.name = ''
				if(this.$store.getters.requestCounter < 2){
				this.pushToDynamo()}
				setTimeout(() => {
					this.$router.push('/create/soft_skill/finish')
					this.humanImg = this.$refs.stage.getStage().toDataURL({pixelRatio: 3})
					this.$store.dispatch('PUSH_HUMANIMG', this.humanImg)
				},500)
				setTimeout(()=>{this.name = this.humanName},600)
			}else this.$router.push('/create/just_a_little')
		},
		async pushToDynamo() {
			const answer = {
				gender: this.gender,
				humanName: this.humanName,
				humanHead: this.humanHead,
				humanShirt: this.humanShirt,
				humanJackets: this.humanJackets,
				humanPants: this.humanPants,
				humanShoes: this.humanShoes,
				humanAccessories: this.humanAccessories,
				hardSkillPoints: this.hardSkillPoints,
				softSkillsPoints: this.softSkillsPoints,
				hardSkillName: this.hardSkillName,
				Initiative: this.Initiative,
				Creativity: this.Creativity,
				Adaptability: this.Adaptability,
				Reflection: this.Reflection,
				Multitasking: this.Multitasking,
				ListeningSkills: this.ListeningSkills,
				Teamwork: this.Teamwork,
				CriticalThinking: this.CriticalThinking,
				TimeManagement: this.TimeManagement
			};
			await API.graphql(graphqlOperation(createAnswer, { input: answer }));
			var counter = this.$store.getters.requestCounter
			counter = counter + 1
			this.$store.dispatch('PUSH_COUNTER', counter)
		},
		Reset(){
			this.$router.push('/create/personalisation'),
			this.$store.dispatch('GET_GENDER', null),
			this.$store.dispatch('PUSH_NAME', '')
			this.$store.dispatch('PUSH_HARDSKILL_NAME', 'null')
		},
		newGender(){
			const image = new window.Image()
			image.src =  this.humanLink
			image.onload = () =>{
			this.human=image
			this.question=null
			}
		},
		newHair(){
			const image = new window.Image()
			image.src = this.hairSrc
			image.onload = () =>{
				this.hair=image
			}
		},
		newJacket(){
			const image = new window.Image()
			image.src = this.jacketSrc
			image.onload = () =>{
				this.jacket=image
			}
		},
		newShirt(){
			const image = new window.Image()
			image.src = this.shirtSrc
			image.onload = () =>{
				this.shirt=image
			}
		},
		newPants(){
			const image = new window.Image()
			image.src = this.pantsSrc
			image.onload = () =>{
				this.pants=image
			}
		},
		newAccessories(){
			const image = new window.Image()
			image.src = this.accessoriesSrc
			image.onload = () =>{
				this.accessories=image
			}
		},
		newShoes(){
			const image = new window.Image()
			image.src = this.shoesSrc
			image.onload = () =>{
				this.shoes=image
			}
			
		},
		changeCanvas(){
			this.canvascontainer = this.$refs.canvascontainer
			if (!this.canvascontainer){
				return
			}
			var width = this.canvascontainer.offsetWidth
			var scale = width/this.stageWidth
			this.stage.width = this.stageWidth*scale
			this.stage.height = this.stageHeight*scale
			this.stage.scaleX = scale
			this.stage.scaleY = scale
		},
		calcPosName(){
			return (this.stageWidth/2 - (this.humanNameLenght * 24)/2)
		}
	},
	created(){
		window.addEventListener("resize", this.changeCanvas)
		const image = new window.Image()
		const question = new window.Image()
		question.src = require('../assets/question.png')
		image.src =  require('../assets/podium.png')
		image.onload = () =>{
			this.podium=image
		}
		question.onload =() =>{
			this.question=question
		}
		setTimeout(() => {
		if((this.$store.getters.GENDER === null)||(this.$store.getters.HUMAN_NAME === '')){
			this.$router.push('/create/personalisation')
		}},1000)
	},
	mounted(){
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)
		this.scene = this.$refs.scene.getStage()
		this.changeCanvas()
		// setTimeout(()=>{ this.newGender() },300),
		// this.posX = this.calcPosName()
		// this.newHair(),
		// this.newAccessories(),
		// this.newPants(),
		// this.newShirt(),
		// this.newJacket(),
		// this.name = this.humanName,
		// this.newShoes()
	},
	updated(){
		this.changeCanvas()
	}
}
</script>

<style scoped>
.invisible{
	display: none;
}
.overlay{
	display: block;
	position: absolute;
	left: -10%;
	right: -10%;
	top: 0;
	bottom: 0;
	background: black;
	opacity: 0.8;
	z-index: 100000;
}
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
.progressBarTriggered{
	display: none;
}
.active{
	fill: rgb(255, 255, 255);
}
.configurator{
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	height: calc(var(--vh, 1vh) * 40);
	width: 100vw;
	border-radius: .5vw;
	z-index: 999;
	background-color: rgb(255, 255, 255);
}
.canvascontainer{
	height: calc(var(--vh, 1vh) * 60);
	width: calc(var(--vh, 1vh) * 46.9);
}
.workSpace{
	order: 2;
}
.configTriggered{
	height: calc(var(--vh, 1vh) * 100);
}
.canvascontainerTriggered{
	display: none;
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
	.canvascontainerTriggered{
	display: initial;
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
@media screen and (max-width: 999px) and (orientation: landscape){
	main{
		height: 70vh;
	}
	.progressBar{
		width: 35vw;
		border-radius: .3vw;
		display: flex;
		justify-content: space-around;
		align-items: center;
		fill: rgb(189, 189, 189);
		height: 4vw;
		right: initial;
		top: initial;
		position: initial;
		flex-direction: row;
	}
	.configurator{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		height: 26vw;
		width: 55vw;
		border-radius: .5vw;
		background-color: rgba(0, 0, 0, 0.25);
	}
	.personSVG, .awardSVG, .seekerSVG, .hangerSVG{
		height: 3.8vw;
	}
	.arrowSVG{
		height: 2vw;
		transform: rotate(180deg);
	}
	.canvascontainer{
		height: 30vw;
		order: 2;
		width: 23.4vw;
		border-radius: .5vw;
		background-color: rgb(255, 255, 255);
	}
	.workSpace{
		order: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	footer{
		width: 89vw;
	}
	.mobileMain{
		height: 100vh;
	}
}
@media screen and (max-width: 600px) and (orientation: landscape){
	main{
		height: 100vh;
	}
}
</style>