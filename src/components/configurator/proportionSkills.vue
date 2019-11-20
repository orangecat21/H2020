<template>
  <section :class="[{'inputM':inputTrigger},{'iphoneInput': iphoneTrigger}]">
    <div class="topConfMenu">
      <h1 class="clothesTitle">{{$t('thirdPage.clothes.clothes')}}</h1>
      <div class="rightButtonGroup">
        <router-link is="button" @click="goToBack" class="GoBack_button">
          <arrowsvg class="arrowbutton"></arrowsvg>
        </router-link>
        <router-link is="button" @click="Reset" class="GoBack_button">
          <resetsvg class="arrowbutton"></resetsvg>
        </router-link>
        <transition>
          <router-link
            v-if="buttonTrigger"
            is="button"
            @click="goToNext"
            @focus="goToNext"
            class="GoNext_button"
          >
            <arrowsvg class="arrowright"></arrowsvg>
          </router-link>
        </transition>
      </div>
    </div>
    <hr class="separate" />
    <div class="circleSum">
      <p class="sumOfScills">{{ sumOfScills }}</p>
    </div>
    <hr class="tophr" />
    <hr class="bothr" />
    <div class="circleSoft">
      Soft skills
      <input
        @focus="inputActive"
        @focusout="inputTrigger=false"
        type="text"
        v-model="softSkills"
        placeholder="0"
        maxlength="3"
      />
    </div>
    <div class="circleHard">
      Hard skill
      <input
        @focus="inputActive"
        @focusout="inputTrigger=false"
        type="text"
        v-model="hardSkill"
        placeholder="0"
        maxlength="3"
      />
    </div>
    <p class="ticker">
      {{ $t("thirdPage.ticker.text1")}}
      <b>Hard</b>
      {{ $t("thirdPage.ticker.text2")}}
      <b>Soft</b>
      {{ $t("thirdPage.ticker.text3")}}
    </p>
    <transition>
      <router-link
        v-if="buttonTrigger"
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
  name: "proportion_of_skills",
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
  beforeDestroy() {
    this.$store.dispatch("PUSH_SOFTSKILLS", this.softSkills);
    this.$store.dispatch("PUSH_HARDSKILL", this.hardSkill);
  },
  created(){
    if (navigator.userAgent.match(/iPhone/i)) {
      this.iphoneTrigger = true;
  }
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
    }
  },
  methods: {
    goToNext() {
      this.$router.push("/create/hard_skill");
    },
    goToBack() {
      if(this.$store.getters.GENDER ==='male'){
					this.$router.push('/create/man_clothes')
				} else this.$router.push('/create/women_clothes')
    },
    inputActive() {
      this.inputTrigger = true;
    },
    Reset() {
      this.$router.push("/create/personalisation"),
      this.$store.dispatch("GET_GENDER", null),
      this.$store.dispatch("PUSH_NAME", "");
    }
  },
  components: {
    arrowsvg: () =>
      import(/* webpackChunkName: "arrowSVG" */ "../SVG/arrowSVG.vue"),
    resetsvg: () =>
      import(/* webpackChunkName: "resetSVG" */ "../SVG/resetSVG.vue")
  }
};
</script>

<style scoped>
.GoBack_button {
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: none;
  transition: 0.2s;
}
.arrowbutton {
  width: 8vw;
  fill: #ac40f1;
  margin-right: 0.5vw;
}
.arrowright {
  width: 8vw;
  fill: rgb(255, 255, 255);
  margin-left: 0.5vw;
  transform: rotate(180deg);
}
.GoNext_button {
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #ac40f1;
  border-radius: 50%;
  padding: 0.5vw;
}
.rightButtonGroup > button {
  margin-right: 2vw;
  border: none;
}
.clothesTitle {
  color: #ac40f1;
  font-size: 8vw;
  font-weight: 300;
  margin-left: 1vw;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: 0.2s;
}
section {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
input {
  border: none;
  width: calc(var(--vh, 1vh) * 10);
  height: calc(var(--vh, 1vh) *4);
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
  width: calc(var(--vh, 1vh) * 22);
  height: calc(var(--vh, 1vh) * 22);
  border-radius: 50%;
  background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
  position: absolute;
  top: calc(var(--vh, 1vh) * 15);
  z-index: 997;
  left: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0vw 0vw 0.4vw #000;
  text-shadow: 0vw 0vw 0.3vw #000;
}
.circleSoft {
  width: calc(var(--vh, 1vh) * 16);
  height: calc(var(--vh, 1vh) * 16);
  border-radius: 50%;
  background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
  position: absolute;
  top: calc(var(--vh, 1vh) * 7);
  left: 50vw;
}
.circleHard {
  width: calc(var(--vh, 1vh) * 14);
  height: calc(var(--vh, 1vh) * 14);
  border-radius: 50%;
  background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
  position: absolute;
  top: calc(var(--vh, 1vh) * 23);
  left: 70vw;
}
.circleHard,
.circleSoft {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(var(--vh, 1vh) * 3.3);
  color: #fff;
  font-weight: 300;
  z-index: 997;
  box-shadow: 0vw 0vw 0.4vw #000;
  text-shadow: 0vw 0vw 0.3vw #000;
}
hr {
  width: 20vw;
  height: 0.1vw;
  height: calc(var(--vh, 1vh) * 0.1);
  border-radius: 30%;
  position: absolute;
  border: 0.2vw solid rgb(67, 251, 77);
  box-shadow: 0 0 0.3vw rgb(36, 198, 219);
}
.separate {
  margin: 0.3vw 0vw;
  height: 0.1vw;
  width: calc(100% - 2vw);
  border-radius: 0;
  border: initial;
  margin-left: 1vw;
  border: 0.1vw solid #ac40f1;
  background-color: #ac40f1;
  box-shadow: 0 0 0.1vw #000;
}
p {
  position: absolute;
  color: #fff;
  font-weight: 300;
}
.ticker {
  position: absolute;
  bottom: 1vw;
  left: 1vw;
  color: #ac40f1;
  font-size: 5vw;
  font-weight: 400;
  white-space: nowrap;
  transform: translateX(43%);
  z-index: 998;
  animation: ticker 20s linear infinite;
}
.tophr {
  transform: rotate(-25deg);
  left: calc(var(--vh, 1vh) * 18);
  top: calc(var(--vh, 1vh) * 19);
  width: 23vw;
}
.bothr {
  transform: rotate(12deg);
  left: calc(var(--vh, 1vh) * 20);
  top: calc(var(--vh, 1vh) * 28);
  width: 40vw
}
.sumOfScills {
  position: relative;
  left: initial;
  bottom: initial;
  font-size: calc(var(--vh, 1vh) * 10);
}
.Next_Button {
  display: none;
}
.topConfMenu {
  display: flex;
  justify-content: space-between;
  flex-basis: 100%;
}
.rightButtonGroup {
  display: flex;
  margin: 0.5vw 0vw;
}
.inputM {
  position: absolute;
  top: 0;
  z-index: 999;
  left: 0;
  height: 100vh;
  right: 0;
  background-color: #fff;
}
.inputM.iphoneInput{
  all: initial;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
@keyframes ticker {
  0% {
    transform: translateX(43%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@media screen and (min-width: 760px) and (max-width: 999px) {
}

@media screen and (min-width: 1000px), (orientation: landscape) {
  .inputM {
    top: initial;
    z-index: initial;
    left: initial;
    right: initial;
    background-color: initial;
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .rightButtonGroup {
    display: none;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  .v-enter-active,
  .v-leave-active {
    transition: 0.2s;
  }
  section {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  h1 {
    color: #fff;
    font-size: 3vw;
    font-weight: 300;
    margin-left: 1vw;
    text-shadow: 0vw 0vw 0.1vw #000;
  }
  input {
    width: 4vw;
    height: 1.5vw;
    border-radius: 2vw;
    font-size: 1.3vw;
  }
  .circleSum {
    width: 10vw;
    height: 10vw;
    top: calc(50% - 5vw);
    left: 10%;
  }
  .circleSoft {
    width: 8vw;
    height: 8vw;
    top: calc(25% - 4vw);
    left: 35vw;
  }
  .circleHard {
    width: 8vw;
    height: 8vw;
    top: calc(75% - 4vw);
    left: 40vw;
  }
  .circleHard,
  .circleSoft {
    font-size: 1.5vw;
    color: #fff;
    font-weight: 300;
  }
  .separate {
    background-color: #fff;
    border: 0.1vw solid #fff;
  }
  p {
    text-shadow: 0vw 0vw 0.2vw #000;
  }
  .ticker {
    color: #fff;
    font-size: 2vw;
    white-space: nowrap;
    transform: translateX(43%);
    animation: ticker 20s linear infinite;
  }
  .tophr {
    transform: rotate(-17deg);
    width: 18vw;
    left: 16vw;
    top: 11vw;
  }
  .bothr {
    transform: rotate(15deg);
    left: 16vw;
    top: 20vw;
    width: 23vw;
  }
  .sumOfScills {
    font-size: 3vw;
  }
  .Next_Button {
    display: block;
    border-radius: 2.5vw;
    background: #ac40f1;
    border: 0.1vw solid #ac40f1;
    color: #fff;
    font-size: 2vw;
    padding: 0.2vw 3vw;
    cursor: pointer;
    box-shadow: 0vw 0vw 0.2vw #000;
    text-shadow: 0vw 0vw 0.1vw #000;
    right: 2vw;
    bottom: 45%;
    position: absolute;
  }
  .Next_Button:active {
    box-shadow: inset 0.2vw 0.2vw 0.3vw #000;
  }
  .clothesTitle {
    color: #fff;
    font-size: 3vw;
    font-weight: 300;
  }
}
@media screen and (max-width: 759px) and (orientation: landscape) {
  .GoBack_button {
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: #fff;
    border: none;
    transition: 0.2s;
  }
  .arrowbutton {
    width: 8vw;
    fill: #ac40f1;
    margin-right: 0.5vw;
  }
  .arrowright {
    width: 8vw;
    fill: rgb(255, 255, 255);
    margin-left: 0.5vw;
    transform: rotate(180deg);
  }
  .GoNext_button {
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: #ac40f1;
    border-radius: 50%;
    padding: 0.5vw;
  }
  .rightButtonGroup > button {
    margin-right: 2vw;
    border: none;
  }
  .clothesTitle {
    color: #ac40f1;
    font-size: 8vw;
    font-weight: 300;
    margin-left: 1vw;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  .v-enter-active,
  .v-leave-active {
    transition: 0.2s;
  }
  section {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  input {
    border: none;
    width: 20vw;
    height: 7vw;
    background: none;
    background-color: rgba(56, 56, 56, 0.52);
    border-radius: 5vw;
    color: rgb(255, 255, 255);
    font-size: 4vw;
    font-weight: 300;
    text-align: center;
  }
  .circleSum {
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
    position: absolute;
    top: 28vw;
    left: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0vw 0vw 0.3vw #000;
    text-shadow: 0vw 0vw 0.2vw #000;
  }
  .circleSoft {
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
    position: absolute;
    top: 11.5vw;
    left: 50vw;
    box-shadow: 0vw 0vw 0.3vw #000;
    text-shadow: 0vw 0vw 0.2vw #000;
  }
  .circleHard {
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
    background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
    position: absolute;
    top: 43vw;
    left: 70vw;
    box-shadow: 0vw 0vw 0.3vw #000;
    text-shadow: 0vw 0vw 0.2vw #000;
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
  }
  hr {
    width: 20vw;
    height: 0.3vw;
    border-radius: 30%;
    background-color: #fff;
    position: absolute;
    border: 0.2vw solid #ffffff;
  }
  .separate {
    margin: 0.3vw 0vw;
    height: 0.1vw;
    width: calc(100% - 2vw);
    border-radius: 0;
    border: initial;
    margin-left: 1vw;
    border: 0.1vw solid #ac40f1;
    background-color: #ac40f1;
  }
  p {
    position: absolute;
    color: rgb(255, 255, 255);
    font-weight: 300;
  }
  .ticker {
    position: absolute;
    bottom: 1vw;
    left: 1vw;
    color: #ac40f1;
    font-size: 5vw;
    font-weight: 400;
    white-space: nowrap;
    transform: translateX(43%);
    animation: ticker 20s linear infinite;
  }
  .tophr {
    transform: rotate(-25deg);
    left: 40vw;
    top: 34.5vw;
    width: 12vw;
  }
  .bothr {
    transform: rotate(12deg);
    left: 42vw;
    top: 50vw;
    width: 28vw;
  }
  .sumOfScills {
    position: relative;
    left: initial;
    bottom: initial;
    font-size: 15vw;
  }
  .Next_Button {
    display: none;
  }
  .topConfMenu {
    display: flex;
    justify-content: space-between;
    flex-basis: 100%;
  }
  .rightButtonGroup {
    display: flex;
    margin: 0.5vw 0vw;
  }
  .inputM {
    position: absolute;
    top: 0;
    z-index: 999;
    left: 0;
    height: 100vh;
    right: 0;
    background-color: #fff;
  }
}
</style>