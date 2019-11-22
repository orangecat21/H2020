<template>
  <section>
    <div class="topConfMenu">
      <h1 class="clothesTitle">{{$t('thirdPage.hardskill.HARD')}}</h1>
      <div class="rightButtonGroup">
        <router-link is="button" @click="goToBack" class="GoBack_button">
          <arrowsvg class="arrowbutton"></arrowsvg>
        </router-link>
        <router-link is="button" @click="Reset" class="GoBack_button">
          <resetsvg class="arrowbutton"></resetsvg>
        </router-link>
        <transition>
          <router-link is="button" v-if="buttonTrigger" @click="goToNext" @focus="goToNext" class="GoNext_button">
            <arrowsvg class="arrowright"></arrowsvg>
          </router-link>
        </transition>
      </div>
    </div>
    <hr class="separate" />
    <hardskillitems :items="array"></hardskillitems>
    <transition>
      <router-link v-if="buttonTrigger" is="button" class="Next_Button" @click="goToNext">Next</router-link>
    </transition>
  </section>
</template>

<script>
export default {
  name: "hardSkill",
  components: {
    hardskillitems: () =>
      import(
        /* webpackChunkName: "hardskillitems", webpackPrefetch: true */ "../configurator/hardSkillItems.vue"
      ),
    arrowsvg: () =>
      import(/* webpackChunkName: "arrowSVG" */ "../SVG/arrowSVG.vue"),
    resetsvg: () =>
      import(/* webpackChunkName: "resetSVG" */ "../SVG/resetSVG.vue")
  },
  computed: {
    array() {
      return this.$store.state.hardSkillArray.hardSkill;
    },
    buttonTrigger() {
      if (this.$store.getters.HARDSKILLNAME !== 'null') {
        return true;
      }
      return false;
    }
  },
  methods: {
    goToNext() {
      this.$router.push("/create/soft_skill");
    },
    goToBack() {
      this.$router.push("/create/proportion_skills");
    },
    Reset() {
      this.$router.push('/create/personalisation'),
			this.$store.dispatch('GET_GENDER', null),
			this.$store.dispatch('PUSH_NAME', '')
			this.$store.dispatch('PUSH_HARDSKILL_NAME', 'null')
    }
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
  position: relative;
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
@media screen and (min-width: 760px) and (max-width: 999px) {
}

@media screen and (min-width: 1000px), (orientation: landscape) {
  .Next_Button {
    display: block;
  }
  .rightButtonGroup {
    display: none;
  }
  section {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 1vw;
    width: 100%;
  }
  .clothesTitle {
    flex-basis: 100%;
    color: #fff;
    font-size: 3vw;
    font-weight: 300;
  }
  .separate {
    margin: 0.5vw 0vw;
    flex-basis: 100%;
    height: 0.1vw;
    width: calc(100% - 2vw);
    border: 0.1vw solid #fff;
    background-color: #fff;
  }
  .Next_Button {
    border-radius: 2.5vw;
    background: #ac40f1;
    border: 0.1vw solid #ac40f1;
    color: #fff;
    font-size: 1.5vw;
    padding: 0.2vw 3vw;
    cursor: pointer;
    box-shadow: 0vw 0vw 0.2vw #000;
    text-shadow: 0vw 0vw 0.1vw #000;
    right: 2vw;
    bottom: -0.5vw;
    position: absolute;
  }
  .Next_Button:active {
    box-shadow: inset 0.2vw 0.2vw 0.3vw #000;
  }
}
</style>