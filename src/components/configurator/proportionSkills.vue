<template>
  <section :class="[{'inputM':inputTrigger},{'iphoneInput': iphoneTrigger}]">
    <div class="topConfMenu">
      <h1 class="clothesTitle">{{$t('thirdPage.skills.skillPoint')}}</h1>
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
    <propskillitems></propskillitems>
  </section>
</template>

<script>
export default {
  name: "proportion_of_skills",
  data() {
    return {
      iphoneTrigger: false
    };
  },
  computed: {
    buttonTrigger() {
      if (
        this.$store.getters.HARDSKILL !== 0 ||
        this.$store.getters.SOFTSKILLS !== 0
      ) {
        return true;
      }
      return false;
    },
    inputTrigger() {
      return this.$store.getters.skillInputActive;
    }
  },
  created() {
    if (navigator.userAgent.match(/iPhone/i)) {
      this.iphoneTrigger = true;
    }
  },
  methods: {
    goToNext() {
      this.$router.push("/create/hard_skill");
    },
    goToBack() {
      if (this.$store.getters.GENDER === "male") {
        this.$router.push("/create/man_clothes");
      } else this.$router.push("/create/women_clothes");
    },
    Reset() {
      this.$router.push("/create/personalisation"),
        this.$store.dispatch("GET_GENDER", null),
        this.$store.dispatch("PUSH_NAME", "");
    }
  },
  components: {
    propskillitems: () =>
      import(
        /* webpackChunkName: "hardskillitems", webpackPrefetch: true */ "../configurator/propSkillItems.vue"
      ),
    arrowsvg: () =>
      import(/* webpackChunkName: "arrowSVG" */ "../SVG/arrowSVG.vue"),
    resetsvg: () =>
      import(/* webpackChunkName: "resetSVG" */ "../SVG/resetSVG.vue")
  }
};
</script>

<style scoped>
.Next_Button {
  display: none;
}
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
.topConfMenu {
  display: flex;
  justify-content: space-between;
  flex-basis: 100%;
}
.rightButtonGroup {
  display: flex;
  margin: 0.5vw 0vw;
}
section {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 1vw;
  width: 100%;
}
.clothesTitle {
  flex-basis: 100%;
  color: #ac40f1;
  font-size: 7vw;
  font-weight: 300;
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
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: 0.2s;
}
.inputM.iphoneInput {
  all: initial;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  .Next_Button {
    display: none;
  }
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
  .topConfMenu {
    display: flex;
    justify-content: space-between;
    flex-basis: 100%;
  }
  .rightButtonGroup {
    display: flex;
    margin: 0.5vw 0vw;
  }
  section {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 1vw;
    width: 100%;
  }
  .clothesTitle {
    flex-basis: 100%;
    color: #ac40f1;
    font-size: 7vw;
    font-weight: 300;
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
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  .v-enter-active,
  .v-leave-active {
    transition: 0.2s;
  }
  .inputM {
    position: absolute;
    top: 0;
    z-index: 999;
    left: 0;
    right: 0;
    background-color: #fff;
  }
}
</style>