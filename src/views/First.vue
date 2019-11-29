<template>
  <div id="app">
    <header>
      <button @click="changeLocEn" class="Eng">English</button>
      <hr />
      <button @click="changeLocEs" class="Spa">Espanol</button>
      <hr />
      <button @click="changeLocRu" class="Ru">Русский</button>
    </header>
    <img class="earth" :src="require('../assets/Earth.png')" alt="OurEarth" />
    <main class="snout">
      <h1 @mouseover="evolve1 = true, firsthint = true" @mouseout="evolve1 = false" class="title">
        {{ $t("firstPage.h1") }}
        <div class="popup1" :class="{popupActive1:(evolve1) && (firsthint)}">
          <p
            class="fcaption"
          >{{ $t('firstPage.popup1')}}</p>
        </div>
        <div class="hint" :class="{firstHintOut:firsthint}">
          <p class="firsthint">{{ $t('firstPage.hint')}}</p>
        </div>
        <div class="hintM" :class="{firstHintOut:firsthint}">
          <p class="firsthint">{{ $t('firstPage.hintM')}}</p>
        </div>
      </h1>
      <h2 @mouseover="evolve5 = true" @mouseout="evolve5 = false" class="TopQuote">
        <div class="popup5" :class="{popupActive5:(evolve5) && (firsthint)}">
          <p
            class="fcaption"
          >{{ $t('firstPage.popup5')}}</p>
        </div>
        {{ $t("firstPage.topQuote")}}
        <span
          id="trigger"
          class="invisible"
          :class="{ruTopQuote:(this.$i18n.locale==='ru')}"
        >
          {{ $t("firstPage.with")}}
          <router-link
            is="button"
            @click="goToEvolve"
            class="BottomQuote_button"
          >{{ $t('firstPage.choice')}}</router-link>»
        </span>
      </h2>
      <p
        @mouseover="evolve5 = true"
        @mouseout="evolve5 = false"
        class="BottomQuote"
        :class="{ruBottomQuote:(this.$i18n.locale==='ru')}"
      >
        {{ $t("firstPage.with")}}
        <router-link
          is="button"
          @click="goToEvolve"
          class="BottomQuote_button"
        >{{ $t("firstPage.choice")}}</router-link>»
      </p>
      <p class="autor">-{{ $t('firstPage.autor')}}</p>
      <h2
        :class="[{popupActive4:(evolve4) && (firsthint)}, {popupActive4M:(evolve4) && (firsthint)}]"
        @mouseover="evolve4 = true"
        @mouseout="evolve4 = false"
        @click="evolve4 = true"
        @focusout="evolve4 = false"
      >
        <p id="timer"></p>
        <div class="popup4">
          <p
            class="fcaption"
          >{{ $t('firstPage.popup4')}}</p>
        </div>
        <div class="popup4M">
          <p
            class="fcaption"
          >{{ $t('firstPage.popup4M')}}</p>
        </div>
      </h2>
      <p
        @mouseover="evolve4 = true"
        @mouseout="evolve4 = false"
        @click="evolve4 = true"
        @focusout="evolve4 = false"
        class="date"
        :class="{enDate:(this.$i18n.fallbackLocale ==='en'), enDate:(this.$i18n.locale==='en'), ruDate:(this.$i18n.locale==='ru'), esDate:(this.$i18n.locale==='es') }"
      >
        <span>{{ $t('firstPage.date.days')}}</span>
        <span>{{ $t('firstPage.date.hours')}}</span>
        <span>{{ $t('firstPage.date.mins')}}</span>
      </p>
      <div class="popupAndImg">
        <div class="popup3" :class="{popupActive3:(evolve3) && (firsthint)}">
          <p class="fcaption">{{ $t('firstPage.popup3')}}</p>
        </div>
        <div class="popup3M" :class="{popupActive3M:(evolve3) && (firsthint)}">
          <p
            class="fcaption"
          >{{ $t('firstPage.popup3M')}}</p>
        </div>
        <img
          @mouseover="evolve3 = true"
          @mouseout="evolve3 = false"
          @click="evolve3 = true, firsthint = true"
          @focusout="evolve3 = false"
          class="hand"
          :src="require('../assets/HAND.png')"
          alt="Hand"
        />
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "firstPage",
  data: function() {
    return {
      width: window.innerWidth,
      evolve1: false,
      evolve3: false,
      evolve4: false,
      evolve5: false,
      firsthint: false
    };
  },
  computed: {
    isDesktop: function() {
      if ((this.width >= 560)&&((window.innerWidth / window.innerHeight) > 1)) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    goToEvolve() {
      if (this.isDesktop === true) {
        this.$router.push("/evolve");
      } else this.$router.push("/evolve/1");
    },
    changeLocRu() {
      (this.$i18n.locale = "ru"), localStorage.setItem("locale", "ru");
    },
    changeLocEn() {
      (this.$i18n.locale = "en"), localStorage.setItem("locale", "en");
    },
    changeLocEs() {
      (this.$i18n.locale = "es"), localStorage.setItem("locale", "es");
    },
    updateWidth() {
      this.width = window.innerWidth;
    }
  },
  mounted() {
    this.changeLocEn();
    var text = document.querySelector("#timer");
    var now = new Date();
    var target = new Date(now.getFullYear() + 1, 0, 1, 0, 0);

    timer(target);
    setInterval(() => timer(target), 1000);

    function timer() {
      var now = new Date();
      var diff = Math.ceil((target - now) / 1000);

      var days = extract(diff, 60 * 60 * 24);
      var hours = extract(days.diff, 60 * 60);
      var minutes = extract(hours.diff, 60);

      text.innerHTML =
        addZero(days.value) +
        " " +
        addZero(hours.value) +
        " " +
        addZero(minutes.value);
    }

    function extract(diff, formula) {
      var value = Math.floor(diff / formula);
      diff = diff % formula;
      return { value: value, diff: diff };
    }

    function addZero(num) {
      if (num <= 9) {
        num = "0" + num;
      }
      return num;
    }

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
    window.addEventListener("resize", function() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }
};
</script>

<style>
.popup1,
.popup2,
.popup5,
.popup3,
.popup4,
.hint {
  display: none;
}
.fcaption {
  width: auto;
  color: #fff;
  font-size: 5vw;
  font-family: 'Caveat';
  font-weight: 400;
  line-height: 6vw;
  margin: auto 0;
  text-align: center;
  z-index: 999;
  opacity: 1;
}
.hintM {
  top: -45vw;
  border-end-end-radius: 1vw;
  border-start-end-radius: 1vw;
  right: 15vw;
  width: 40vw;
  height: 10vw;
  text-align: center;
  background: rgba(0, 0, 0, 0.233);
  position: absolute;
  transition: 1s;
}
.firstHintOut {
  opacity: 0;
}
.firsthint {
  color: #fff;
  font-size: 4.4vw;
  font-weight: 400;
  line-height: 3vw;
  text-align: center;
  margin-top: 3vw;
  z-index: 999;
  opacity: 1;
}
.hintM:after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  top: -7vw;
  left: -15vw;
  border-top: 12vw solid transparent;
  border-bottom: 12vw solid transparent;
  border-right: 15vw solid rgba(0, 0, 0, 0.233);
}
.popup3M {
  position: absolute;
  top: 2vw;
  left: -70vw;
  width: 70vw;
  height: 20vw;
  background: rgba(0, 0, 0, 0.233);
  border-radius: 1vw;
  z-index: 1;
  opacity: 0;
  transition: 1s;
}
.popup3M:after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  left: -5.5vw;
  top: 13vw;
  border: 1.5vw solid transparent;
  border-right: 4vw solid rgba(0, 0, 0, 0.233);
}
.popupActive3M {
  top: 2vw;
  left: 25vw;
  opacity: 1;
}
.popup4M {
  position: absolute;
  bottom: 8vw;
  left: 70vw;
  width: 60vw;
  height: 30vw;
  background: rgba(0, 0, 0, 0.233);
  border-radius: 1vw;
  z-index: 1;
  opacity: 0;
  transition: 0.5s;
}
.popup4M:after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  right: -6.5vw;
  top: 2vw;
  border: 1.5vw solid transparent;
  border-left: 5vw solid rgba(0, 0, 0, 0.233);
}
.popupActive4M .popup4M {
  bottom: 8vw;
  left: 3vw;
  opacity: 1;
}
header {
  position: absolute;
  z-index: 1;
  position: sticky;
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: flex-end;
  height: calc(var(--vh, 1vh) * 5);
}
hr {
  border: 0.1vw solid #ac40f1;
  width: 0.1vw;
  background: none;
  height: 5vw;
  margin: 2.5vw 0;
  margin-right: calc(1vw + 0.4vw);
  box-shadow: 0vw 0vw 0.15vw #000;
}
.Eng,
.Ru,
.Spa {
  background: none;
  border: none;
  color: #ac40f1;
  margin: 2vw 2vw 2vw 0;
  font-family: "Source", sans-serif;
  font-size: 4vw;
  outline: none;
  cursor: pointer;
  text-shadow: 0vw 0vw 0.2vw #000;
}
.Eng:active,
.Ru:active,
.Spa:active {
  color: #fff;
}
html {
  overflow: hidden;
}
#app {
  width: 100vw;
  background: linear-gradient(rgb(0, 247, 255), rgb(100, 255, 131));
  font-family: "Source", sans-serif;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.earth {
  position: absolute;
  width: 90vw;
  z-index: 0;
  animation: spin 190s infinite linear;
}
body {
  height: calc(var(--vh, 1vh) * 100);
}
main {
  position: relative;
  height: calc(var(--vh, 1vh) * 96);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  overflow: hidden;
}
.snout {
  background: url(../assets/HUMAN.png) 0vw 4vh no-repeat,
    url(../assets/morpheus.png) 93% 100% no-repeat;
  background-size: 13vh, 17vh;
}
.hand {
  position: absolute;
  width: 13vh;
  left: -0.1vh;
  top: 4vh;
  z-index: 1000;
  animation: rotate 1.2s infinite linear;
  transform-origin: 79% 75%;
}
.title {
  z-index: 1;
  color: #fff;
  text-align: center;
  width: 90vw;
  font-size: 14.5vw;
  text-shadow: 0vw 0vw 3vw #000;
  font-family: "Source", sans-serif;
  font-weight: 700;
  line-height: 12vw;
  margin: 15vw 0 2vw 0;
  position: relative;
  animation: TitleShadow 190s linear infinite;
}
#timer {
  text-shadow: 0vw 0vw 0.3vw #000;
  display: block;
  z-index: 1;
  font-weight: 400;
  color: #fff;
  font-size: 17vw;
  line-height: 13vw;
  margin-bottom: 1vw;
  animation: TitleShadow 190s linear infinite;
}
.TopQuote,
.BottomQuote {
  z-index: 1;
  color: #fff;
  font-size: 6vw;
  line-height: 6vw;
  text-shadow: 0vw 0vw 0.4vw #000;
  font-weight: 400;
}
.TopQuote {
  margin: 0 0 0 8vw;
  align-self: flex-start;
}
.BottomQuote {
  margin: 0 10vw 2vw 0;
  align-self: flex-end;
}
.invisible {
  display: none;
}
.BottomQuote_button {
  outline: none;
  position: relative;
  display: inline-block;
  color: #fff;
  overflow: hidden;
  background-color: #ac40f1;
  border-radius: 5vw;
  border: none;
  padding: 0.5vw 3vw;
  font-size: 7vw;
  cursor: pointer;
  box-shadow: 0vw 0vw 0.3vw #000;
  text-shadow: 0vw 0vw 0.2vw #000;
  animation: cycle 3s linear infinite;
}
.BottomQuote_button::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  filter: blur(2vw);
  width: 8vw;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  transform: translateX(-3vw) skewX(-45deg);
  animation: move-light 2s infinite;
}
.ruTopQuote {
  display: inline;
}
.ruBottomQuote {
  display: none;
}
.autor {
  z-index: 1;
  color: #fff;
  font-size: 4vw;
  align-self: flex-end;
  margin: 0 5vw 3vw 0;
  text-shadow: 0vw 0vw 0.3vw #000;
}
button::-moz-focus-inner {
  border: 0;
}
button {
  outline: none;
}
input {
  outline: none;
}
.date {
  color: #fff;
  z-index: 1;
  font-size: 3vw;
  font-family: "Source", sans-serif;
  word-spacing: 13vw;
  text-shadow: 0vw 0vw 0.2vw #000;
}
.esDate,
.ruDate {
  word-spacing: 0;
}
.esDate span:first-of-type,
.ruDate span:first-of-type {
  margin-left: 2vw;
  margin-right: -3vw;
}
.esDate span:nth-child(2),
.ruDate span:nth-child(2) {
  margin: 0vw 16vw;
}
.esDate span:nth-child(3),
.ruDate span:nth-child(3) {
  margin-left: -5vw;
}
.enDate span:nth-child(2) {
  margin: 0vw 13.5vw;
}
.BottomQuote_button:active {
  box-shadow: inset 0.2vw 0.2vw 0.3vw #000;
}
@keyframes Attention {
  0% {
    right: -1vw;
  }
  100% {
    right: -55vw;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(-1deg);
  }
  25% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(4deg);
  }
  75% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-1deg);
  }
}
@keyframes move-light {
  from {
    transform: translateX(-4em) skewX(-45deg);
  }
  to {
    transform: translateX(10em) skewX(-45deg);
  }
  to {
    transform: translateX(10em) skewX(-45deg);
  }
}
@keyframes cycle {
  35% {
    transform: rotate(0) translate(0, 0);
  }
  40% {
    transform: rotate(4deg) translate(0, -2px);
  }
  45% {
    transform: rotate(-2deg) translate(0, -2px);
  }
  50% {
    transform: rotate(4deg) translate(0, -2px);
  }
  55% {
    transform: rotate(-2deg) translate(0, -2px);
  }
  60% {
    transform: rotate(4deg) translate(0, -2px);
  }
  65% {
    transform: rotate(-2deg) translate(0, -2px);
  }
  70% {
    transform: rotate(0) translate(0, 0);
  }
}
@keyframes TitleShadow {
  0% {
    text-shadow: 0 0 3vw #e716ff;
  }
  50% {
    text-shadow: 0 0 3vw #02e2fd;
  }
  100% {
    text-shadow: 0 0 3vw #e716ff;
  }
}
@media screen and (min-width: 760px) and (max-width: 999px) {
  .earth {
    width: 80vw;
  }
  .title {
    font-size: 15.5vw;
    margin: 30vw 0 2vw 0;
  }
  .fcaption {
    font-size: 3.5vw;
    line-height: 5vw;
  }
  .popup3M {
  position: absolute;
  top: 2vw;
  left: -70vw;
  width: 70vw;
  height: 17vw;
  background: rgba(0, 0, 0, 0.233);
  border-radius: 1vw;
  z-index: 1;
  opacity: 0;
  transition: 1s;
}
.popup3M:after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  left: -5.4vw;
  top: 13vw;
  border: 1.5vw solid transparent;
  border-right: 4vw solid rgba(0, 0, 0, 0.233);
}
.popupActive3M {
  top: 2vw;
  left: 22vw;
  opacity: 1;
}
.popup4M {
  position: absolute;
  bottom: 2vw;
  left: 70vw;
  width: 60vw;
  height: 20vw;
  background: rgba(0, 0, 0, 0.233);
  border-radius: 1vw;
  z-index: 1;
  opacity: 0;
  transition: 0.5s;
}
.popup4M:after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  right: -6.5vw;
  top: 2vw;
  border: 1.5vw solid transparent;
  border-left: 5vw solid rgba(0, 0, 0, 0.233);
}
.popupActive4M .popup4M {
  bottom: 2vw;
  left: 3vw;
  opacity: 1;
}
}
@media screen and (min-width: 1000px), (orientation: landscape) {
  .popup4M,
  .popup3M,
  .hint3 {
    display: none;
  }
  .fcaption {
    width: auto;
    color: #fff;
    font-size: 2vw;
    font-weight: 400;
    line-height: 2vw;
    margin: auto 0;
    text-align: center;
    z-index: 999;
    opacity: 1;
  }
  .hint {
    top: 5vw;
    border-end-end-radius: 1vw;
    border-start-end-radius: 1vw;
    right: -3.4vw;
    width: 13vw;
    height: 3vw;
    text-align: center;
    background: rgba(0, 0, 0, 0.233);
    position: absolute;
    transition: 1s;
    display: initial;
  }
  .firstHintOut {
    opacity: 0;
  }
  .firsthint {
    color: #fff;
    font-size: 1.7vw;
    font-weight: 400;
    line-height: 3vw;
    text-align: center;
    margin-top: initial;
    z-index: 999;
    opacity: 1;
  }
  .hint:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -1.4vw;
    left: -5vw;
    border-top: 3vw solid transparent;
    border-bottom: 3vw solid transparent;
    border-right: 5vw solid rgba(0, 0, 0, 0.233);
  }
  .popup1 {
    display: initial;
    position: absolute;
    top: 3vw;
    left: 15vw;
    width: 60vw;
    height: 6vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 0.4s;
    transition-delay: 0.5s;
  }
  .popup1:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 4vw;
    top: 6vw;
    border: 2vw solid transparent;
    border-top: 0vw solid rgba(0, 0, 0, 0.233);
    border-right: 2vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive1 {
    top: -3.9vw;
    opacity: 1;
  }
  .popup2 {
    display: initial;
    position: absolute;
    top: 50vw;
    right: 50vw;
    width: 11vw;
    height: 3vw;
    background: rgba(255, 63, 63, 0.74);
    border-radius: 0.7vw;
    z-index: 1;
    opacity: 0;
    transition: 1.5s;
    transition-timing-function: ease-out;
    transform: rotate(-380deg) scale(10);
    transition-delay: 0.5s;
  }
  .popup2:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: -2.5vw;
    top: 1vw;
    border-top: 0.5vw solid transparent;
    border-bottom: 0.5vw solid transparent;
    border-right: 2.5vw solid rgba(255, 63, 63, 0.74);
  }
  .popupActive2 {
    top: 19vw;
    right: 16vw;
    opacity: 1;
    transform: rotate(-20deg) scale(1);
  }
  .popup3 {
    display: initial;
    position: absolute;
    top: 10vw;
    left: -16vw;
    width: 19vw;
    height: 8vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 1s;
  }
  .popup3:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 1vw;
    top: 8vw;
    border: 0.5vw solid transparent;
    border-top: 2vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive3 {
    left: 0.2vw;
    top: 0vw;
    opacity: 1;
  }
  .popup4 {
    display: initial;
    position: absolute;
    bottom: -5vw;
    left: 30vw;
    width: 36vw;
    height: 5vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 1s;
  }
  .popup4:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 18vw;
    top: 5vw;
    border: 0.5vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive4 .popup4 {
    bottom: 18.1vw;
    opacity: 1;
  }
  .popup5 {
    display: initial;
    position: absolute;
    top: -9vw;
    right: -39vw;
    width: 16vw;
    height: 10vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    border-end-start-radius: 0.2vw;
    z-index: 1;
    opacity: 0;
    transition: 1s;
  }
  .popup5:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 1vw;
    top: 10vw;
    border: 2vw solid transparent;
    border-top: 0vw solid rgba(0, 0, 0, 0.233);
    border-left: 2vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive5 {
    right: -27vw;
    opacity: 1;
  }
  #app {
    height: 100vh;
  }
  header {
    height: initial;
  }
  .snout {
    background: url(~@/assets/HUMAN.png) 0vw 15vh no-repeat,
      url(~@/assets/morpheus.png) 93% 100% no-repeat;
    background-size: 47vh, 35vh;
  }
  .hand {
    width: 47vh;
    left: -0.4vh;
    top: 15vh;
  }
  .Eng,
  .Ru,
  .Spa {
    font-size: 1.5vw;
    margin: 1.8vw 1vw 0 0;
    text-shadow: 0vw 0vw 0.03vw #000;
  }
  hr {
    border: 0.1vw solid #ac40f1;
    width: 0.1vw;
    background: none;
    margin: 2vw 0 0 0;
    height: 2vw;
    margin-right: calc(0.5vw + 0.4vw);
    box-shadow: 0vw 0vw 0.06vw #000;
  }
  .earth {
    width: 45vw;
  }
  .title {
    width: 90vw;
    text-shadow: 0vw 0vw 3vw #000;
    font-size: 11vw;
    margin: 3.5vw 0 1vw 0;
    animation: TitleShadow 190s linear infinite;
  }
  .BottomQuote {
    display: none;
  }
  .invisible {
    display: inline;
  }
  .TopQuote {
    margin: 0 0 1vw 0;
    font-weight: 400;
    font-size: 3vw;
    align-self: center;
    position: relative;
  }
  .BottomQuote_button {
    font-size: 3vw;
    padding: 0vw 2vw;
    line-height: 4vw;
    box-shadow: 0vw 0vw 0.2vw #000;
    text-shadow: 0vw 0vw 0.1vw #000;
    animation: cycle 3s linear infinite;
  }
  .autor {
    font-size: 2vw;
    margin: 0 25vw 0vw 0;
  }
  #timer {
    font-size: 11vw;
    font-weight: 400;
    position: relative;
    line-height: 10vw;
    margin-bottom: 0vw;
    animation: TitleShadow 190s linear infinite;
  }
  .date {
    font-size: 2vw;
    line-height: 2vw;
    word-spacing: 30vw;
    margin-bottom: 6vw;
  }
  .enDate span:nth-child(2) {
    margin: 0vw 8.5vw;
  }
  body {
    background: linear-gradient(rgb(0, 247, 255), rgb(100, 255, 131));
  }
  .BottomQuote_button::before {
    filter: blur(1vw);
    width: 3vw;
  }
  .esDate,
  .ruDate {
    word-spacing: 0;
  }
  .esDate span:nth-child(2),
  .ruDate span:nth-child(2) {
    margin: 0vw 12vw;
  }
  @keyframes TitleShadow {
    0% {
      text-shadow: 0 0 2vw #e716ff;
    }
    50% {
      text-shadow: 0 0 2vw #02e2fd;
    }
    100% {
      text-shadow: 0 0 2vw #e716ff;
    }
  }
  @keyframes Attention {
    0% {
      right: -1vw;
    }
    100% {
      right: -25vw;
    }
  }
}
@media screen and (max-width: 999px) and (orientation: landscape) {
  .popup4M,
  .popup3M,
  .hint3 {
    display: none;
  }
  .fcaption {
    width: auto;
    color: #fff;
    font-size: 1.5vw;
    font-weight: 400;
    line-height: 2vw;
    margin: auto 0;
    text-align: center;
    z-index: 999;
    opacity: 1;
  }
  .hint {
    top: 5vw;
    border-end-end-radius: 1vw;
    border-start-end-radius: 1vw;
    right: -3.4vw;
    width: 13vw;
    height: 3vw;
    text-align: center;
    background: rgba(0, 0, 0, 0.233);
    position: absolute;
    transition: 1s;
    display: initial;
  }
  .firstHintOut {
    opacity: 0;
  }
  .firsthint {
    color: #fff;
    font-size: 1.7vw;
    font-weight: 400;
    line-height: 3vw;
    text-align: center;
    margin-top: initial;
    z-index: 999;
    opacity: 1;
  }
  .hint:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -1.4vw;
    left: -5vw;
    border-top: 3vw solid transparent;
    border-bottom: 3vw solid transparent;
    border-right: 5vw solid rgba(0, 0, 0, 0.233);
  }
  .popup1 {
    display: initial;
    position: absolute;
    top: 3vw;
    left: 0vw;
    width: 75vw;
    height: 3vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 0.4s;
    transition-delay: 0.5s;
  }
  .popup1:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 4vw;
    top: 3vw;
    border: 2vw solid transparent;
    border-top: 0vw solid rgba(0, 0, 0, 0.233);
    border-right: 2vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive1 {
    top: -1.5vw;
    opacity: 1;
  }
  .popup2 {
    display: initial;
    position: absolute;
    top: 50vw;
    right: 50vw;
    width: 11vw;
    height: 3vw;
    background: rgba(255, 63, 63, 0.74);
    border-radius: 0.7vw;
    z-index: 1;
    opacity: 0;
    transition: 1.5s;
    transition-timing-function: ease-out;
    transform: rotate(-380deg) scale(10);
    transition-delay: 0.5s;
  }
  .popup2:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: -2.5vw;
    top: 1vw;
    border-top: 0.5vw solid transparent;
    border-bottom: 0.5vw solid transparent;
    border-right: 2.5vw solid rgba(255, 63, 63, 0.74);
  }
  .popupActive2 {
    top: 19vw;
    right: 16vw;
    opacity: 1;
    transform: rotate(-20deg) scale(1);
  }
  .popup3 {
    display: initial;
    position: absolute;
    top: 10vw;
    left: -16vw;
    width: 16vw;
    height: 7.5vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 1s;
  }
  .popup3:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 1vw;
    top: 7.5vw;
    border: 0.5vw solid transparent;
    border-top: 2vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive3 {
    left: 1vw;
    top: 0vw;
    opacity: 1;
  }
  .popup4 {
    display: initial;
    position: absolute;
    bottom: -5vw;
    left: 30vw;
    width: 36vw;
    height: 5vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 1s;
  }
  .popup4:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 18vw;
    top: 5vw;
    border: 0.5vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive4 .popup4 {
    bottom: 13.5vw;
    opacity: 1;
  }
  .popup5 {
    display: initial;
    position: absolute;
    top: -12.5vw;
    right: -39vw;
    width: 16vw;
    height: 11vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    border-end-start-radius: 0.2vw;
    z-index: 1;
    opacity: 0;
    transition: 1s;
  }
  .popup5:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 1vw;
    top: 11vw;
    border: 2vw solid transparent;
    border-top: 0vw solid rgba(0, 0, 0, 0.233);
    border-left: 1.7vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive5 {
    right: -27vw;
    opacity: 1;
  }
  #app {
    height: calc(var(--vh, 1vh) * 100);
  }
  header {
    height: 2vw;
  }
  .snout {
    background: url(~@/assets/HUMAN.png) 0vw 15vh no-repeat,
      url(~@/assets/morpheus.png) 93% 100% no-repeat;
    background-size: 47vh, 35vh;
  }
  .hand {
    width: 47vh;
    left: -0.4vh;
    top: 15vh;
  }
  hr {
    border: 0.1vw solid #ac40f1;
    width: 0.1vw;
    background: none;
    height: 2vw;
    margin-top: 1vw;
    margin-right: calc(0.5vw + 0.4vw);
    box-shadow: 0vw 0vw 0.05vw #000;
  }
  .earth {
    width: 35vw;
  }
  .title {
    width: 90vw;
    text-shadow: 0vw 0vw 3vw #000;
    font-size: 11vw;
    margin: 0;
    animation: TitleShadow 190s linear infinite;
  }
  .BottomQuote {
    display: none;
  }
  .invisible {
    display: inline;
  }
  .TopQuote {
    margin: 0 0 1vw 0;
    font-weight: 400;
    font-size: 3vw;
    align-self: center;
    position: relative;
  }
  .BottomQuote_button {
    font-size: 3vw;
    padding: 0vw 2vw;
    line-height: 4vw;
    box-shadow: 0vw 0vw 0.2vw #000;
    text-shadow: 0vw 0vw 0.1vw #000;
    animation: cycle 3s linear infinite;
  }
  .autor {
    font-size: 2vw;
    margin: 0 25vw 0vw 0;
  }
  #timer {
    font-size: 11vw;
    font-weight: 400;
    position: relative;
    line-height: 9vw;
    margin-bottom: 0vw;
    animation: TitleShadow 190s linear infinite;
  }
  .date {
    font-size: 2vw;
    line-height: 3vw;
    word-spacing: 30vw;
  }
  .enDate span:nth-child(2) {
    margin: 0vw 8.5vw;
  }
  body {
    background: linear-gradient(rgb(0, 247, 255), rgb(100, 255, 131));
  }
  .BottomQuote_button::before {
    filter: blur(1vw);
    width: 3vw;
  }
  .esDate,
  .ruDate {
    word-spacing: 0;
  }
  .esDate span:nth-child(2),
  .ruDate span:nth-child(2) {
    margin: 0vw 12vw;
  }
  @keyframes TitleShadow {
    0% {
      text-shadow: 0 0 2vw #e716ff;
    }
    50% {
      text-shadow: 0 0 2vw #02e2fd;
    }
    100% {
      text-shadow: 0 0 2vw #e716ff;
    }
  }
  @keyframes Attention {
    0% {
      right: -1vw;
    }
    100% {
      right: -25vw;
    }
  }
}
</style>
