<template>
	<div id="app">
    <header :class="{ruHeader:(this.$i18n.locale==='ru', 'es')}">
			<p class="war" :class="{ruWar:(this.$i18n.locale==='ru', 'es')}">{{$t('secondPage.header.war')}}</p>
			<hr :class="{ruHr:(this.$i18n.locale==='ru', 'es')}">
			<p class="politics" :class="{ruPolitics:(this.$i18n.locale==='ru', 'es')}">{{$t('secondPage.header.politics')}}</p>
			<hr :class="{ruHr:(this.$i18n.locale==='ru', 'es')}">
			<p class="fun" :class="{ruFun:(this.$i18n.locale==='ru', 'es')}">{{$t('secondPage.header.fun')}}</p>
		</header>
		<h1 class="BackNumber">2020</h1>
		<!-- <transition appear mode="out-in" name="evolve"> -->
		<router-view/>
		<!-- </transition> -->
		<footer></footer> 
	</div>
</template>

<script>
export default {
	name:'MobileSecond',
	methods: {
		goToBack(){
			if (this.$route.path === '/evolve'){
				this.$router.push('/')
			} else if(this.$route.path === '/evolve/1'){
				this.$router.push('/')
			} else if(this.$route.path === '/evolve/2'){
				this.$router.push('/evolve/1')
			} else if(this.$route.path === '/evolve/3'){
				this.$router.push('/evolve/2')
			} else if (this.$route.path === '/evolve/4'){
				this.$router.push('/evolve/3')
			} else if(this.$route.path === '/evolve/5'){
				this.$router.push('/evolve/4')
			} else if(this.$route.path === '/evolve/6'){
				this.$router.push('/evolve/5')
			} else if(this.$route.path === '/evolve/7'){
				this.$router.push('/evolve/6')
			} else if (this.$route.path === '/evolve/8'){
				this.$router.push('/evolve/7')
			}	
		}
	},
	mounted(){
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)
	}
}
</script>

<style scoped>
.evolve-enter-active, .evolve-leave-active {
  transition: opacity .2s;
}
.evolve-enter, .evolve-leave-to{
  opacity: 0;
}
.evolve-enter-to, .evolve-leave{
	opacity: 1;
}
#app{
	height: 100vh;
	height: calc(var(--vh, 1vh) * 100);
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
header{
	justify-content: center;
	align-items: flex-end;
	height: 30vw;
	margin-bottom: 3vw;
}
.ruHeader{
	flex-direction: column;
	align-items: center;
}
.war, .politics, .fun{
	background: none;
	border: none;
	color: #20252a;
	margin: 2vw 2vw 0 0;
	font-family: 'Source', sans-serif;
	font-size: 7vw;
	outline: none;
}
.ruFun, .ruWar, .ruPolitics{
	line-height: 6vw;
}

hr{
	height: 8vw;
	border: 0.1vw solid #20252a;
	width: 0.1vw;
	background: none;
}
.ruHr{
	display: none;
}
footer{
	display: flex;
	width: 90vw;
	align-items: flex-start;
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
</style>