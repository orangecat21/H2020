<template>
  <section>
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
            is="button"
            v-if="buttonTrigger"
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
    <section class="scrollM">
    <div class="skillItem">
      <p>Инициативность</p>
      <input
        type="range"
        min="0"
        max="100"
        v-model.number="skill1"
        class="range"
        :style="{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill1Gradient+'%, #fff '+skill1Gradient+'%, #fff 100%)'}"
      />
      <p class="percent">{{ skill1 }}%</p>
    </div>
    <div class="skillItem">
      <p>Креативность</p>
      <input
        type="range"
        min="0"
        max="100"
        v-model.number="skill2"
        class="range"
        :style="{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill2Gradient+'%, #fff '+skill2Gradient+'%, #fff 100%)'}"
      />
      <p class="percent">{{ skill2 }}%</p>
    </div>
    <div class="skillItem">
      <p>Адаптируемость</p>
      <input
        type="range"
        min="0"
        max="100"
        v-model.number="skill3"
        class="range"
        :style="{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill3Gradient+'%, #fff '+skill3Gradient+'%, #fff 100%)'}"
      />
      <p class="percent">{{ skill3 }}%</p>
    </div>
    <div class="skillItem">
      <p>Рефлексия</p>
      <input
        type="range"
        min="0"
        max="100"
        v-model.number="skill4"
        class="range"
        :style="{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill4Gradient+'%, #fff '+skill4Gradient+'%, #fff 100%)'}"
      />
      <p class="percent">{{ skill4 }}%</p>
    </div>
    <div class="skillItem">
      <p>Многозадачность</p>
      <input
        type="range"
        min="0"
        max="100"
        v-model.number="skill5"
        class="range"
        :style="{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill5Gradient+'%, #fff '+skill5Gradient+'%, #fff 100%)'}"
      />
      <p class="percent">{{ skill5 }}%</p>
    </div>
    <div class="skillItem">
      <p>Умение слушать</p>
      <input
        type="range"
        min="0"
        max="100"
        v-model.number="skill6"
        class="range"
        :style="{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill6Gradient+'%, #fff '+skill6Gradient+'%, #fff 100%)'}"
      />
      <p class="percent">{{ skill6 }}%</p>
    </div>
    <div class="skillItem">
      <p>Работа в команде</p>
      <input
        type="range"
        min="0"
        max="100"
        v-model.number="skill7"
        class="range"
        :style="{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill7Gradient+'%, #fff '+skill7Gradient+'%, #fff 100%)'}"
      />
      <p class="percent">{{ skill7 }}%</p>
    </div>
    <div class="skillItem">
      <p>Критичность мышления</p>
      <input
        type="range"
        min="0"
        max="100"
        v-model.number="skill8"
        class="range"
        :style="{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill8Gradient+'%, #fff '+skill8Gradient+'%, #fff 100%)'}"
      />
      <p class="percent">{{ skill8 }}%</p>
    </div>
    <div class="skillItem">
      <p>Тайм-менеджмент</p>
      <input
        type="range"
        min="0"
        max="100"
        v-model.number="skill9"
        class="range"
        :style="{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill9Gradient+'%, #fff '+skill9Gradient+'%, #fff 100%)'}"
      />
      <p class="percent">{{ skill9 }}%</p>
    </div>
    </section>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: "softSkills",
  data() {
    return {
      softSkills: this.$store.getters.SOFTSKILLS,
      skill1: 0,
      skill2: 0,
      skill3: 0,
      skill4: 0,
      skill5: 0,
      skill6: 0,
      skill7: 0,
      skill8: 0,
      skill9: 0
    };
  },
  computed: {
    onePercentPrice() {
      return this.softSkills / 100;
    },
    skill1Gradient() {
      if (this.skill1 < 51) {
        return this.skill1 + 2;
      }
      return this.skill1 - 2;
    },
    skill2Gradient() {
      if (this.skill2 < 51) {
        return this.skill2 + 2;
      }
      return this.skill2 - 2;
    },
    skill3Gradient() {
      if (this.skill3 < 51) {
        return this.skill3 + 2;
      }
      return this.skill3 - 2;
    },
    skill4Gradient() {
      if (this.skill4 < 51) {
        return this.skill4 + 2;
      }
      return this.skill4 - 2;
    },
    skill5Gradient() {
      if (this.skill5 < 51) {
        return this.skill5 + 2;
      }
      return this.skill5 - 2;
    },
    skill6Gradient() {
      if (this.skill6 < 51) {
        return this.skill6 + 2;
      }
      return this.skill6 - 2;
    },
    skill7Gradient() {
      if (this.skill7 < 51) {
        return this.skill7 + 2;
      }
      return this.skill7 - 2;
    },
    skill8Gradient() {
      if (this.skill8 < 51) {
        return this.skill8 + 2;
      }
      return this.skill8 - 2;
    },
    skill9Gradient() {
      if (this.skill9 < 51) {
        return this.skill9 + 2;
      }
      return this.skill9 - 2;
    },
    priceOfRange() {
      return (
        (this.skill1 +
          this.skill2 +
          this.skill3 +
          this.skill4 +
          this.skill5 +
          this.skill6 +
          this.skill7 +
          this.skill8 +
          this.skill9) /
        100
      );
    },
    buttonTrigger(){
        if(this.priceOfRange !== 0){
            return true
        } return false
    },
    skill1Value() {
      return Math.round(
        (this.skill1 * this.onePercentPrice) / this.priceOfRange
      );
    },
    skill2Value() {
      return Math.round(
        (this.skill2 * this.onePercentPrice) / this.priceOfRange
      );
    },
    skill3Value() {
      return Math.round(
        (this.skill3 * this.onePercentPrice) / this.priceOfRange
      );
    },
    skill4Value() {
      return Math.round(
        (this.skill4 * this.onePercentPrice) / this.priceOfRange
      );
    },
    skill5Value() {
      return Math.round(
        (this.skill5 * this.onePercentPrice) / this.priceOfRange
      );
    },
    skill6Value() {
      return Math.round(
        (this.skill6 * this.onePercentPrice) / this.priceOfRange
      );
    },
    skill7Value() {
      return Math.round(
        (this.skill7 * this.onePercentPrice) / this.priceOfRange
      );
    },
    skill8Value() {
      return Math.round(
        (this.skill8 * this.onePercentPrice) / this.priceOfRange
      );
    },
    skill9Value() {
      return Math.round(
        (this.skill9 * this.onePercentPrice) / this.priceOfRange
      );
    },
    controllSum() {
      return (
        this.skill1Value +
        this.skill2Value +
        this.skill3Value +
        this.skill4Value +
        this.skill5Value +
        this.skill6Value +
        this.skill7Value +
        this.skill8Value +
        this.skill9Value
      );
    }
  },
  updated() {
    this.$store.dispatch("PUSH_INITIATIVE", this.skill1Value);
    this.$store.dispatch("PUSH_CREATIVITY", this.skill2Value);
    this.$store.dispatch("PUSH_ADAPTABILITY", this.skill3Value);
    this.$store.dispatch("PUSH_REFLECTION", this.skill4Value);
    this.$store.dispatch("PUSH_MULTITASKING", this.skill5Value);
    this.$store.dispatch("PUSH_LISTENING", this.skill6Value);
    this.$store.dispatch("PUSH_TEAMWORK", this.skill7Value);
    this.$store.dispatch("PUSH_CRITICAL", this.skill8Value);
    if (this.controllSum === this.softSkills + 4) {
      this.$store.dispatch("PUSH_LISTENING", this.skill6Value - 1);
      this.$store.dispatch("PUSH_TEAMWORK", this.skill7Value - 1);
      this.$store.dispatch("PUSH_CRITICAL", this.skill8Value - 1);
      this.$store.dispatch("PUSH_TIMEMANAGEMENT", this.skill9Value - 1);
    } else if (this.controllSum === this.softSkills + 3) {
      this.$store.dispatch("PUSH_TEAMWORK", this.skill7Value - 1);
      this.$store.dispatch("PUSH_CRITICAL", this.skill8Value - 1);
      this.$store.dispatch("PUSH_TIMEMANAGEMENT", this.skill9Value - 1);
    } else if (this.controllSum === this.softSkills + 2) {
      this.$store.dispatch("PUSH_CRITICAL", this.skill8Value - 1);
      this.$store.dispatch("PUSH_TIMEMANAGEMENT", this.skill9Value - 1);
    } else if (this.controllSum > this.softSkills) {
      this.$store.dispatch("PUSH_TIMEMANAGEMENT", this.skill9Value - 1);
    } else if (this.controllSum < this.softSkills) {
      this.$store.dispatch("PUSH_TIMEMANAGEMENT", this.skill9Value + 1);
    } else {
      this.$store.dispatch("PUSH_TIMEMANAGEMENT", this.skill9Value);
    }
  },
  components: {
    arrowsvg: () =>
      import(/* webpackChunkName: "arrowSVG" */ "../SVG/arrowSVG.vue"),
    resetsvg: () =>
      import(/* webpackChunkName: "resetSVG" */ "../SVG/resetSVG.vue")
  },
  methods: {
    goToNext() {
      this.$parent.goToNext()
    },
    goToBack() {
      this.$router.push("/create/hard_skill");
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
.scrollM{
    display: flex;
    flex-wrap:nowrap;
    overflow-x: scroll;
    justify-content: flex-start;
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
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 1vw;
  width: 100%;
}
.skillItem {
  width: 47vw;
  height: calc(var(--vh, 1vh) * 30);
  border-radius: 1vw;
  transition: 0.3s;
  background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
  border: none;
  margin: calc(var(--vh, 1vh) * 0.5);
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: 0vw 0vw 0.7vw#000;
  flex-shrink: 0;
}
.range:focus, .range:active{
    outline: 0.2vw solid rgb(36, 198, 219);
  }
p {
  font-size: calc(var(--vh, 1vh) * 2.5);
  letter-spacing: -0.2vw;
  margin: 0;
  font-weight: 400;
  color: #ac40f1;
  text-shadow: 0vw 0vw .1vw#000;
  text-align: center;
}
.percent {
  font-size: 4vw;
  margin-bottom: 1vw;
  background: none;
  background-color: rgba(56, 56, 56, 0.342);
  border-radius: 5vw;
  padding: 0vw 4vw;
  font-weight: 400;
}
.rangeSlider {
  width: 30%;
}
.clothesTitle {
  flex-basis: 100%;
  color: #ac40f1;
  font-size: 7vw;
  font-weight: 300;
  margin-bottom: 1vw;
}
.separate {
  margin: 1vw 0vw;
  flex-basis: 100%;
  height: 0.1vw;
  background: #ac40f1;
  border: #ac40f1 solid 0.1vw;
}
.range {
  appearance: none;
  transform: rotate(-90deg);
  border-radius: 5vw;
  width: calc(var(--vh, 1vh) * 22);
  height: 7vw;
  user-select: all;
  -moz-outline-radius: 20px;
}
.range::-moz-range-track {
  background: none;
}
.range::-moz-range-thumb {
  appearance: none;
  width: 7.3vw;
  height: 7.3vw;
  border-radius: 50%;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid;
}
.range::-webkit-slider-thumb {
  appearance: none;
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid;
}
.range::-moz-focus-outer {
  border: none;
}
@media screen and (min-width: 760px) and (max-width: 999px) {
}

@media screen and (min-width: 1000px), (orientation: landscape) {
  .rightButtonGroup {
    display: none;
  }
  .scrollD{
		overflow-y: scroll;
	}
	.scrollM{
		overflow-x: hidden;
    flex-wrap: wrap;
    justify-content: space-around;
	}
  .skillItem {
    width: 15vw;
    height: 8vw;
    border-radius: 0.5vw;
    margin-bottom: 1vw;
    flex-shrink: initial;
  }
  p {
    font-size: 1.4vw;
    color: #fff;
    text-shadow: 0vw 0vw 0.1vw#000;
    letter-spacing: normal;
  }
  .percent {
    font-size: 1.2vw;
    border-radius: 2vw;
    padding: 0vw 1vw;
  }
  .rangeSlider {
    width: 30%;
  }
  .clothesTitle {
    color: #fff;
    font-size: 3vw;
    margin-bottom: initial;
  }
  .separate {
    margin: 1vw 0vw;
    height: 0.1vw;
    border: #fff;
    background-color: #fff;
  }
  .range {
    appearance: none;
    border-radius: 1vw;
    width: 90%;
    height: 1.1vw;
    user-select: all;
    transform: initial;
    -moz-outline-radius: 20px;
  }
  .range::-moz-range-thumb {
    appearance: none;
    width: 1.2vw;
    height: 1.1vw;
    border-radius: 50%;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid;
  }
  .range::-webkit-slider-thumb {
    appearance: none;
    width: 1.2vw;
    height: 1.2vw;
    border-radius: 50%;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid;
  }
  .range::-moz-focus-outer {
    border: none;
  }
}
</style>