<template>
<div>
  <section class="overlay"></section>
  <section class="popup">
      <p class="minititle">{{ $t("secondPage.popup.title") }}</p>
      <section class="name">
          <p>{{ $t("secondPage.popup.age") }}</p>
          <p>{{ $t("secondPage.popup.gender") }}</p>
      </section>
      <section class="buttons">
          <section class="age">
              <button @click="setAge('<18'), first()" :class="{'active':activeTrigger1}">&lt; 18</button>
              <button @click="setAge('18-21'), second()" :class="{'active':activeTrigger2}">18 - 21</button>
              <button @click="setAge('22-25'), third()" :class="{'active':activeTrigger3}">22 - 25</button>
              <button @click="setAge('26-35'), fourth()" :class="{'active':activeTrigger4}">26 - 35</button>
              <button @click="setAge('36-45'), fifth()" :class="{'active':activeTrigger5}">36 - 45</button>
              <button @click="setAge('>46'), sixth()" :class="{'active':activeTrigger6}">&gt; 46</button>
          </section>
          <section class="gender">
              <button @click="setGender('male'),male()" :class="{'active':maleTrigger}">{{$t('thirdPage.gender.male')}}</button>
              <button @click="setGender('female'), female()" :class="{'active':femaleTrigger}">{{$t('thirdPage.gender.female')}}</button>
          </section>
      </section>
      <router-link v-if="nextTrigger" is="button" @click="goToConstruct" class="nextButton">{{ $t("footer.next")}}</router-link>
  </section>
</div>
</template>

<script>
export default {
    name: 'popup',
    data(){
        return{
            respondentGender: null,
            respondentAge: 0,
            activeTrigger1: false,
            activeTrigger2: false,
            activeTrigger3: false,
            activeTrigger4: false,
            activeTrigger5: false,
            activeTrigger6: false,
            maleTrigger: false,
			femaleTrigger: false
        }
    },
    computed:{
        nextTrigger(){
            if((this.respondentGender !== null)&&(this.respondentAge !==0)){
                return true
            } else return false
        }
    },
    methods:{
        goToConstruct() {
            this.$store.dispatch('PUSH_RESPGENDER', this.respondentGender)
            this.$store.dispatch('PUSH_RESPAGE', this.respondentAge)
            this.$router.replace("/create/personalisation");
        },
        setAge(value){
            this.respondentAge = value
        },
        setGender(value){
            this.respondentGender = value
        },
        first(){
            this.activeTrigger1 = true
            this.activeTrigger2 = false
            this.activeTrigger3 = false
            this.activeTrigger4 = false
            this.activeTrigger5 = false
            this.activeTrigger6 = false
        },
        second(){
            this.activeTrigger1 = false
            this.activeTrigger2 = true
            this.activeTrigger3 = false
            this.activeTrigger4 = false
            this.activeTrigger5 = false
            this.activeTrigger6 = false
            },
        third(){
            this.activeTrigger1 = false
            this.activeTrigger2 = false
            this.activeTrigger3 = true
            this.activeTrigger4 = false
            this.activeTrigger5 = false
            this.activeTrigger6 = false
            
            },
        fourth(){
            this.activeTrigger1 = false
            this.activeTrigger2 = false
            this.activeTrigger3 = false
            this.activeTrigger4 = true
            this.activeTrigger5 = false
            this.activeTrigger6 = false
        },
        fifth(){
            this.activeTrigger1 = false
            this.activeTrigger2 = false
            this.activeTrigger3 = false
            this.activeTrigger4 = false
            this.activeTrigger5 = true
            this.activeTrigger6 = false
        },
        sixth(){
            this.activeTrigger1 = false
            this.activeTrigger2 = false
            this.activeTrigger3 = false
            this.activeTrigger4 = false
            this.activeTrigger5 = false
            this.activeTrigger6 = true
        },
        male(){
			this.maleTrigger = true
			this.femaleTrigger = false
        },
        female(){
			this.maleTrigger = false
			this.femaleTrigger = true
        }
    }
}
</script>

<style scoped>
.overlay{
	display: block;
	position: absolute;
	left: -10%;
	right: -10%;
	top: 0;
	bottom: 0;
	background: black;
	opacity: 0.8;
	z-index: 998;
}
.popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 4vw;
  position: absolute;
  width: 80vw;
  height: 40vh;
  background: linear-gradient(rgb(100, 255, 131), rgb(0, 247, 255));
  left: calc(50% - 40vw);
  top: calc(50% - 20vh);
  z-index: 999;
  flex-shrink: 0;
  border-radius: 2vw;
}
.minititle{
    text-align: center;
}
.name{
    display: flex;
    flex-direction: row;
    width: 80vw;
    justify-content: space-between;
    padding: 0 0 0 9vw;
}
.name p:first-child{
    margin-right: 10vw;
}
.buttons{
    display: flex;
    flex-direction: row;
    width: 80vw;
    justify-content: space-around;
}
.age{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;
}
.gender{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 40%;
}
button{
    outline: none;
  position: relative;
  display: inline-block;
  color: #fff;
  overflow: hidden;
  background-color: #ac40f1;
  border-radius: 5vw;
  border: none;
  width: 20vw;
  margin-bottom: 2vw;
  margin-top: 2vw;
  padding: 0.5vw 0vw;
  font-size: 4vw;
  cursor: pointer;
  box-shadow: 0vw 0vw 0.6vw #000;
  text-shadow: 0vw 0vw 0.4vw #000;
  flex-shrink: 0;
}
.active{
    box-shadow: inset 0.3vw 0.3vw 0.4vw #000
}
p{
    font-size: 7vw;
    font-family: 'Source';
    color: #fff;
}
.name p{
    width: 50%;
    text-align: center;
}
.nextButton{
    animation: cycle 3s infinite;
}
@media screen and (min-width: 760px) and (max-width: 999px) {

}
@media screen and (min-width: 1000px), (orientation: landscape) {
    .name{
        padding: 0 0 0 0;
    }
.name p:first-child{
    margin-right: 0vw;
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
	z-index: 998;
}
.popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 1.5vw;
  position: absolute;
  width: 60vw;
  height: 60vh;
  background: linear-gradient(rgb(100, 255, 131), rgb(0, 247, 255));
  left: calc(50% - 30vw);
  top: calc(50% - 30vh);
  z-index: 999;
  flex-shrink: 0;
  border-radius: 2vw;
}
.name{
    display: flex;
    flex-direction: row;
    width: 50vw;
    justify-content: space-around;
}
.buttons{
    display: flex;
    flex-direction: row;
    width: 50vw;
    justify-content: space-around;
}
.age{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 50%;
}
.gender{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50%;
}
button{
    outline: none;
  position: relative;
  display: inline-block;
  color: #fff;
  overflow: hidden;
  background-color: #ac40f1;
  border-radius: 5vw;
  border: none;
  width: 10vw;
  margin-bottom: 1vw;
  margin-top: 1vw;
  padding: 0.5vw 0vw;
  font-size: 1.8vw;
  cursor: pointer;
  box-shadow: 0vw 0vw 0.4vw #000;
  text-shadow: 0vw 0vw 0.3vw #000;
  flex-shrink: 0;
}
.active{
    box-shadow: inset 0.2vw 0.2vw 0.3vw #000
}
p{
    font-size: 3vw;
    font-family: 'Source';
    color: #ffffff;
}
.name p{
    width: 50%;
    text-align: center;
}
.nextButton{
    animation: cycle 3s infinite;
}
}
</style>