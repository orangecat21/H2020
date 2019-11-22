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
      <h1 class="title">{{ $t("firstPage.h1") }}</h1>
      <p class="TopQuote">
        {{ $t("firstPage.topQuote")}}
        <span id="trigger" class="invisible" :class="{ruTopQuote:(this.$i18n.locale==='ru')}">
          {{ $t("firstPage.with")}}
          <router-link
            is="button"
            @click="goToEvolve"
            class="BottomQuote_button"
          >{{ $t('firstPage.choice')}}</router-link>»
        </span>
      </p>
      <p class="BottomQuote" :class="{ruBottomQuote:(this.$i18n.locale==='ru')}">
        {{ $t("firstPage.with")}}
        <router-link
          is="button"
          @click="goToEvolve"
          class="BottomQuote_button"
        >{{ $t("firstPage.choice")}}</router-link>»
      </p>
      <p class="autor">-{{ $t('firstPage.autor')}}</p>
      <p id="timer"></p>
      <p
        class="date"
        :class="{enDate:(this.$i18n.locale==='en'), ruDate:(this.$i18n.locale==='ru'), esDate:(this.$i18n.locale==='es') }"
      >
        <span>{{ $t('firstPage.date.days')}}</span>
        <span>{{ $t('firstPage.date.hours')}}</span>
        <span>{{ $t('firstPage.date.mins')}}</span>
      </p>
      <img class="hand" :src="require('../assets/HAND.png')" alt="Hand" />
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "firstPage",
  data: function() {
    return {
      width: window.innerWidth
    };
  },
  computed: {
    isDesktop: function() {
      if (this.width >= 560) {
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
header {
  position: absolute;
  z-index: 1;
  position: sticky;
  display: flex;
  width: 100vw;
  justify-content: flex-end;
  height: calc(var(--vh, 1vh) * 4);
}
hr {
  border: 0.1vw solid #e0ffff;
  width: 0.1vw;
  background: none;
  height: 5vw;
  margin-top: 2vw;
  margin-right: calc(1vw + 0.4vw);
  box-shadow: 0vw 0vw 0.15vw #000;
}
.Eng,
.Ru,
.Spa {
  background: none;
  border: none;
  color: #fff;
  margin: 2vw 2vw 0 0;
  font-family: "Source", sans-serif;
  font-size: 4vw;
  outline: none;
  cursor: pointer;
  text-shadow: 0vw 0vw 0.2vw #000;
}
.Eng:active,
.Ru:active,
.Spa:active {
  color: #ac40f1;
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
  animation: rotate 1.2s infinite linear;
  transform-origin: 79% 75%;
}
.title {
  z-index: 1;
  color: #e0ffff;
  text-transform: uppercase;
  text-align: center;
  width: 90vw;
  font-size: 14.5vw;
  text-shadow: 0vw 0vw 3vw #000;
  font-family: "Source", sans-serif;
  font-weight: 700;
  line-height: 12vw;
  margin: 15vw 0 2vw 0;
}
#timer {
  text-shadow: 0vw 0vw 0.3vw #000;
  display: block;
  z-index: 1;
  color: #e0ffff;
  font-size: 17vw;
  line-height: 13vw;
  margin-bottom: 1vw;
}
.TopQuote,
.BottomQuote {
  z-index: 1;
  color: #e0ffff;
  font-size: 6vw;
  line-height: 6vw;
  text-shadow: 0vw 0vw 0.3vw #000;
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
  color: #e0ffff;
  overflow: hidden;
  background-color: #ac40f1;
  border-radius: 5vw;
  border: none;
  padding: 0.5vw 3vw;
  font-size: 7vw;
  cursor: pointer;
  box-shadow: 0vw 0vw 0.3vw #000;
  text-shadow: 0vw 0vw 0.2vw #000;
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
  color: #e0ffff;
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
  color: #e0ffff;
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
.enDate span:nth-child(2){
    margin: 0vw 13.5vw;
  }
.BottomQuote_button:active {
  box-shadow: inset 0.2vw 0.2vw 0.3vw #000;
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
@media screen and (min-width: 760px) and (max-width: 999px) {
  .earth {
    width: 80vw;
  }
  .title {
    font-size: 15.5vw;
    margin: 30vw 0 2vw 0;
  }
}
@media screen and (min-width: 1000px), (orientation: landscape) {
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
  }
  hr {
    border: 0.1vw solid #e0ffff;
    width: 0.1vw;
    background: none;
    height: 2vw;
    margin-top: 2vw;
    margin-right: calc(0.5vw + 0.4vw);
    box-shadow: 0vw 0vw 0.1vw #000;
  }
  .earth {
    width: 45vw;
  }
  .title {
    width: 90vw;
    text-shadow: 0vw 0vw 3vw #000;
    font-size: 11vw;
    margin: 3.5vw 0 1vw 0;
  }
  .BottomQuote {
    display: none;
  }
  .invisible {
    display: inline;
  }
  .TopQuote {
    margin: 0 0 1vw 0;
    font-size: 3vw;
    align-self: center;
  }
  .BottomQuote_button {
    font-size: 3vw;
    padding: 0vw 2vw;
    line-height: 4vw;
    box-shadow: 0vw 0vw 0.2vw #000;
    text-shadow: 0vw 0vw 0.1vw #000;
  }
  .autor {
    font-size: 2vw;
    margin: 0 25vw 0vw 0;
  }
  #timer {
    font-size: 11vw;
    line-height: 13vw;
    margin-bottom: 0vw;
    text-shadow: 0vw 0vw 0.5vw #000;
  }
  .date {
    font-size: 2vw;
    line-height: 5vw;
    word-spacing: 30vw;
  }
  .enDate span:nth-child(2){
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
}
</style>
