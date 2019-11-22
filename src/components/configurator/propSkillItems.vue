<template>
  <section>
    <article class="circles">
    <div class="sumOfSkill">
    <div class="circleSum">
      <p class="thousand">{{ sumOfScills }}</p>
    </div>
    <span>=</span>
    </div>
    <article class="SOFT">
      <div class="circleSoft">
      {{$t('thirdPage.skills.soft')}}
      <input
        @input="saveSkills"
        @focus="inputActive"
        @focusout="inputTrigger=false"
        type="text"
        v-model="softSkills"
        placeholder="0"
        maxlength="3"
      />
    </div>
    </article>
    <article class="HARD">
      <div class="circleHard">
      {{$t('thirdPage.skills.hard')}}
      <input
        @input="saveSkills"
        @focus="inputActive"
        @focusout="inputTrigger=false"
        type="text"
        v-model="hardSkill"
        placeholder="0"
        maxlength="3"
      />
    </div>
    <span>+</span>
    </article>
    </article>
    <article class="tickerContainer">
      <p class="ticker">
        {{ $t("thirdPage.ticker.text1")}}
        <b>Hard</b>
        {{ $t("thirdPage.ticker.text2")}}
        <b>Soft</b>
        {{ $t("thirdPage.ticker.text3")}}
      </p>
    </article>
    <transition>
      <router-link
        :class="{nextBtn:buttonTrigger}"
        is="button"
        class="Next_Button"
        @focus="goToNext"
        @click="goToNext"
      >Next</router-link>
    </transition>
  </section>
</template>

<script>
export default {
  name: "propskillitems",
  data() {
    return {
      softSkills: null,
      hardSkill: null,
      buttonTrigger: false,
      inputTrigger: false,
      iphoneTrigger: false
    };
  },
  computed: {
    sumOfScills() {
      return this.$store.getters.SUMOFSKILLS;
    }
  },
  created() {
    window.removeEventListener("resize", function() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  },
  watch: {
    softSkills: function() {
      if (this.softSkills !== 0 && !isNaN(this.softSkills)) {
        this.hardSkill = this.sumOfScills - this.softSkills;
        this.buttonTrigger = true;
      } else {
        this.hardSkill = 0;
        this.softSkills = 0;
        this.buttonTrigger = false;
      }
    },
    hardSkill: function() {
      if (this.hardSkill !== 0 && !isNaN(this.hardSkill)) {
        this.softSkills = this.sumOfScills - this.hardSkill;
      } else {
        this.softSkills = 0;
        this.hardSkill = 0;
      }
    },
    inputTrigger: function() {
      this.$store.dispatch("PUSH_ORDER", this.inputTrigger);
    }
  },
  methods: {
    goToNext() {
      this.$router.push("/create/hard_skill");
    },
    inputActive() {
      this.inputTrigger = true;
    },
    saveSkills() {
      this.$store.dispatch("PUSH_SOFTSKILLS", this.softSkills);
      this.$store.dispatch("PUSH_HARDSKILL", this.hardSkill);
    }
  },
  beforeDestroy(){
    this.$store.dispatch("PUSH_ORDER", false);
  }
};
</script>

<style scoped>
span{
  color: #ac40f1;
  font-size: 9vw;
  margin: 0 2vw;
}
.circles{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
.Next_Button{
  display: none;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 33vh;
}
.sumOfSkill {
  display: flex;
  align-items: center;
  order: 1;
}
.SOFT {
  display: flex;
  align-items: center;
  order: 3;
}
.HARD {
  display: flex;
  align-items: center;
  order: 2;
}
.tickerContainer {
  display: flex;
  order: 4;
}
.ticker {
  color: #ac40f1;
  font-size: 5vw;
  font-weight: 400;
  flex-shrink: 0;
  transform: translateX(100vw);
  animation: ticker 28s linear infinite;
}
input {
  caret-color: #ac40f1;
  border: none;
  width: 15vw;
  height: 6vw;
  background: none;
  background-color: rgba(56, 56, 56, 0.52);
  border-radius: 5vw;
  color: #fff;
  font-size: 4vw;
  font-weight: 300;
  text-align: center;
  user-select: all;
}
.circleSum {
  width: 26vw;
  height: 26vw;
  border-radius: 50%;
  background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
  z-index: 997;
  display: flex;
  flex-direction: column;
  font-size: 11vw;
  color: #fff;
  line-height: 6vw;
  justify-content: center;
  align-items: center;
  box-shadow: 0vw 0vw 0.4vw #000;
  text-shadow: 0vw 0vw 0.3vw #000;
}
.circleSoft {
  width: 26vw;
  height: 26vw;
  border-radius: 50%;
  background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
}
.circleHard {
  width: 26vw;
  height: 26vw;
  border-radius: 50%;
  background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
}
.circleHard,
.circleSoft {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 6vw;
  color: #fff;
  font-weight: 300;
  z-index: 997;
  box-shadow: 0vw 0vw 0.4vw #000;
  text-shadow: 0vw 0vw 0.3vw #000;
}
/* .inputM.iphoneInput {
  all: initial;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
} */
@keyframes ticker {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(-100%);
  }
}
@media screen and (min-width: 760px) and (max-width: 999px) {
}


@media screen and (min-width: 1000px), (orientation: landscape){
  .Next_Button {
  justify-self: center;
  border-radius: 5vw;
  align-self: center;
  background: #ac40f1;
  border: 0.1vw solid #ac40f1;
  color: #fff;
  opacity: 0;
  font-size: 2vw;
  padding: 0.1vw 4vw;
  cursor: pointer;
  box-shadow: 0vw 0vw 0.8vw #000;
  text-shadow: 0vw 0vw 0.4vw #000;
}
.Next_Button:active {
  box-shadow: inset 0.2vw 0.2vw 0.3vw #000;
}
.nextBtn{
  opacity: 1;
  transition: 0.5s;
}
  span{
    color: #fff;
    text-shadow: 0 0 0.3vw #ac40f1;
  font-size: 4vw;
  margin: 0 0.5vw;
}
.circles{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
.Next_Button{
  display: initial;
}
section {
  height: 63vh;
}
.ticker {
  text-shadow: 0 0 0.3vw #ac40f1;
  font-size: 2vw;
  color: #fff;
  font-weight: 400;
  transform: translateX(35%);
  animation: ticker 28s linear infinite;
}
input {
  border: none;
  width: 8vw;
  height: 2vw;
  background: none;
  background-color: rgba(56, 56, 56, 0.52);
  border-radius: 5vw;
  color: #fff;
  font-size: 2vw;
  font-weight: 300;
  text-align: center;
  user-select: all;
}
.circleSum {
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
  z-index: 997;
  display: flex;
  font-size: 6vw;
  color: #fff;
  justify-content: center;
  align-items: center;
  box-shadow: 0vw 0vw 0.4vw #000;
  text-shadow: 0vw 0vw 0.2vw #000;
}
.circleHard,
.circleSoft {
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3.5vw;
  color: #fff;
  font-weight: 300;
  z-index: 997;
  box-shadow: 0vw 0vw 0.4vw #000;
  text-shadow: 0vw 0vw 0.2vw #000;
}
@keyframes ticker {
  0% {
    transform: translateX(35%);
  }
  100% {
    transform: translateX(-100%);
  }
}
}
@media screen and (max-width: 759px) and (orientation: landscape) {
  span{
  color: #ac40f1;
  font-size: 9vw;
  margin: 0 2vw;
}
.circles{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
.Next_Button{
  display: none;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100vw;
  height: 50vh;
}
.sumOfSkill {
  display: flex;
  align-items: center;
  order: 1;
}
.SOFT {
  display: flex;
  align-items: center;
  order: 3;
}
.HARD {
  display: flex;
  align-items: center;
  order: 2;
}
.tickerContainer {
  display: flex;
  order: 4;
}
.ticker {
  color: #ac40f1;
  font-size: 5vw;
  font-weight: 400;
  flex-shrink: 0;
  transform: translateX(22%);
  animation: ticker 28s linear infinite;
}
input {
  border: none;
  width: 15vw;
  height: 6vw;
  background: none;
  background-color: rgba(56, 56, 56, 0.52);
  border-radius: 5vw;
  color: #fff;
  font-size: 4vw;
  font-weight: 300;
  text-align: center;
  user-select: all;
}
.circleSum {
  width: 26vw;
  height: 26vw;
  border-radius: 50%;
  background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
  z-index: 997;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0vw 0vw 0.4vw #000;
  text-shadow: 0vw 0vw 0.3vw #000;
}
.circleSoft {
  width: 26vw;
  height: 26vw;
  border-radius: 50%;
  background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
}
.circleHard {
  width: 26vw;
  height: 26vw;
  border-radius: 50%;
  background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
}
.circleHard,
.circleSoft {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 6vw;
  color: #fff;
  font-weight: 300;
  z-index: 997;
  box-shadow: 0vw 0vw 0.4vw #000;
  text-shadow: 0vw 0vw 0.3vw #000;
}
}
</style>