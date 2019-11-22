<template>
      <router-view></router-view>
</template>

<script>
export default {
	name:"H2020",
	data(){
		return {
			saved_state: null
		}
	},
	beforeCreate(){
		if(localStorage.getItem('locale') === null){
			localStorage.setItem('locale', 'en')
		}
	},
	updated(){
		let json = JSON.stringify(this.$store.state)
		sessionStorage.setItem('state', json)
	},
	mounted(){
		this.saved_state = JSON.parse(sessionStorage.getItem('state'))
		
		setTimeout(()=>{
			this.$store.dispatch('GET_GENDER', this.saved_state.gender)
			this.$store.dispatch('PUSH_NAME', this.saved_state.humanName)
			this.$store.dispatch('PUSH_HEAD', this.saved_state.humanHead)
			this.$store.dispatch('PUSH_SHIRTS', this.saved_state.humanShirt)
			this.$store.dispatch('PUSH_JACKETS', this.saved_state.humanJackets)
			this.$store.dispatch('PUSH_PANTS', this.saved_state.humanPants)
			this.$store.dispatch('PUSH_SHOES', this.saved_state.humanShoes)
			this.$store.dispatch('PUSH_ACCESSORIES', this.saved_state.humanAccessories)
			this.$store.dispatch('PUSH_HARDSKILL', this.saved_state.hardSkillPoints)
			this.$store.dispatch('PUSH_SOFTSKILLS', this.saved_state.softSkillsPoints)
			this.$store.dispatch('PUSH_HARDSKILL_NAME', this.saved_state.hardSkillName)
			this.$store.dispatch('PUSH_INITIATIVE', this.saved_state.Initiative)
			this.$store.dispatch('PUSH_CREATIVITY', this.saved_state.Creativity)
			this.$store.dispatch('PUSH_ADAPTABILITY', this.saved_state.Adaptability)
			this.$store.dispatch('PUSH_REFLECTION', this.saved_state.Reflection)
			this.$store.dispatch('PUSH_MULTITASKING', this.saved_state.Multitasking)
			this.$store.dispatch('PUSH_LISTENING', this.saved_state.ListeningSkills)
			this.$store.dispatch('PUSH_TEAMWORK', this.saved_state.Teamwork)
			this.$store.dispatch('PUSH_CRITICAL', this.saved_state.CriticalThinking)
			this.$store.dispatch('PUSH_TIMEMANAGEMENT', this.saved_state.TimeManagement)
			this.$store.dispatch('PUSH_HUMANIMG', this.saved_state.humanImg)
			let json = JSON.stringify(this.$store.state)
			sessionStorage.setItem('state', json)
		},1000)

	}

}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	user-select: none;
}
ul{
	list-style-type: none;
}
a{
	text-decoration: none;
}
@font-face{
	font-family: 'Source';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src:
	url('~@/assets/fonts/source-sans-pro-v13-cyrillic-700.woff2') format('woff2'),
  url('~@/assets/fonts/source-sans-pro-v13-cyrillic-700.woff') format('woff');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face{
	font-family: 'Source';
	font-style: normal;
	font-weight: 400;
	font-display: swap;
	src:
	url('~@/assets/fonts/source-sans-pro-v13-cyrillic-regular.woff2') format('woff2'),
  url('~@/assets/fonts/source-sans-pro-v13-cyrillic-regular.woff') format('woff');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face{
	font-family: 'Source';
	font-style: normal;
	font-weight: 300;
	font-display: swap;
	src:
	url('~@/assets/fonts/source-sans-pro-v13-cyrillic-300.woff2') format('woff2'),
  url('~@/assets/fonts/source-sans-pro-v13-cyrillic-300.woff') format('woff');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face{
	font-family: 'Source';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src:
	url('~@/assets/fonts/source-sans-pro-v13-latin-700.woff2') format('woff2'),
  url('~@/assets/fonts/source-sans-pro-v13-latin-700.woff') format('woff');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face{
	font-family: 'Source';
	font-style: normal;
	font-weight: 400;
	font-display: swap;
	src:
	url('~@/assets/fonts/source-sans-pro-v13-latin-regular.woff2') format('woff2'),
  url('~@/assets/fonts/source-sans-pro-v13-latin-regular.woff') format('woff');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face{
	font-family: 'Source';
	font-style: normal;
	font-weight: 300;
	font-display: swap;
	src:
	url('~@/assets/fonts/source-sans-pro-v13-latin-300.woff2') format('woff2'),
  url('~@/assets/fonts/source-sans-pro-v13-latin-300.woff') format('woff');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face{
	font-family: 'Source';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src:
	url('~@/assets/fonts/source-sans-pro-v13-latin-ext-700.woff2') format('woff2'),
  url('~@/assets/fonts/source-sans-pro-v13-latin-ext-700.woff') format('woff');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face{
	font-family: 'Source';
	font-style: normal;
	font-weight: 400;
	font-display: swap;
	src:
	url('~@/assets/fonts/source-sans-pro-v13-latin-ext-regular.woff2') format('woff2'),
  url('~@/assets/fonts/source-sans-pro-v13-latin-ext-regular.woff') format('woff');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face{
	font-family: 'Source';
	font-style: normal;
	font-weight: 300;
	font-display: swap;
	src:
	url('~@/assets/fonts/source-sans-pro-v13-latin-ext-300.woff2') format('woff2'),
  url('~@/assets/fonts/source-sans-pro-v13-latin-ext-300.woff') format('woff');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
</style>
