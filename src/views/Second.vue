<template>
	<div>
		<DesktopSecond v-if="this.isDesktop"/>
		<MobileSecond v-else/>
	</div>
</template>

<script>
	export default{
		name: 'secondPage',
		components:{
			DesktopSecond:() => import(/* webpackChunkName: "desktopsecond", webpackPrefetch: 999 */ '../components/desktopSecond.vue'),
			MobileSecond:() => import(/* webpackChunkName: "mobilesecond", webpackPreload:true */ '../components/mobileSecond.vue')
		},
		data: function(){
			return{
				width: window.innerWidth,
				height: window.innerHeight
			}
		},
		computed: {
      isDesktop: function(){
        if((this.width >= 561)&&(this.width/this.height>=1)){
          return true
        }
        else{
			return false
        }
      }
    },
		methods: {
			updateWidth(){
				this.width = window.innerWidth
				if(this.width <= 560){
					if(this.$route.path === '/evolve'){
					this.$router.push('/evolve/8')
					}
				}
			},
		},
		created(){
			window.addEventListener('resize', this.updateWidth)
			window.addEventListener('resize', function(){
				let vh = window.innerHeight * 0.01
				document.documentElement.style.setProperty('--vh', `${vh}px`)
			})
		},
		beforeDestroy(){
			window.removeEventListener('resize', this.updateWidth)
		},
		mounted(){
			let vh = window.innerHeight * 0.01
			document.documentElement.style.setProperty('--vh', `${vh}px`)
		}
	}
</script>

<style scoped>

</style>