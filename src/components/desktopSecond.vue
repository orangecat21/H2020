<template>
  <div id="app">
    <div class="hint" :class="{firstHintOut:firsthint}">
      <p class="firsthint">MOUSE OVER</p>
    </div>
    <div class="popup1" :class="{popupActive1:(evolve1) && (firsthint)}">
      <p class="fcaption">Hello Dick Sucker, my dick is big, is very very big</p>
    </div>
    <div class="popup2" :class="{popupActive2:(evolve2) && (firsthint)}">
      <p class="fcaption">Hello Dick Sucker, my dick is big, is very very big</p>
    </div>
    <div class="popup3" :class="{popupActive3:(evolve3) && (firsthint)}">
      <p class="fcaption">Hello Dick Sucker, my dick is big, is very very big</p>
    </div>
    <div class="popup4" :class="{popupActive4:(evolve4) && (firsthint)}">
      <p class="fcaption">Hello Dick Sucker, my dick is big, is very very big</p>
    </div>
    <div class="popup5" :class="{popupActive5:(evolve5) && (firsthint)}">
      <p class="fcaption">Hello Dick Sucker, my dick is big, is very very big</p>
    </div>
    <div class="popup6" :class="{popupActive6:(evolve6) && (firsthint)}">
      <p class="fcaption">Hello Dick Sucker, my dick is big, is very very big</p>
    </div>
    <div class="popup7" :class="{popupActive7:(evolve7) && (firsthint)}">
      <p class="fcaption">Hello Dick Sucker, my dick is big, is very very big</p>
    </div>
    <div class="popup8" :class="{popupActive8:(evolve8) && (firsthint)}">
      <p class="fcaption">❔ ❓ ❔ ❓ ❔ ❓ ❔ ❓ ❔ ❓ ❔ ❓ ❔ ❓ ❔ ❓ ❔ ❓ ❔ ❓ ❔</p>
    </div>
    <header>
      <p class="war">{{$t('secondPage.header.war')}}</p>
      <hr />
      <p class="politics">{{$t('secondPage.header.politics')}}</p>
      <hr />
      <p class="fun">{{$t('secondPage.header.fun')}}</p>
    </header>
    <h1 class="BackNumber">2020</h1>
    <main>
      <section class="humanity">
        <div class="evolve1">
          <p @mouseover="evolve1 = true" @mouseout="evolve1 = false" class="century">III</p>
          <img
            @mouseover="evolve1 = true, firsthint = true"
            @mouseout="evolve1 = false"
            class="🎁"
            :src="require('../assets/greek.png')"
            alt="evolve"
          />
          <span :class="{ruGreeks:(this.$i18n.locale==='ru')}">{{$t('secondPage.evolution.greek')}}</span>
        </div>
        <div class="evolve2">
          <p @mouseover="evolve2 = true" @mouseout="evolve2 = false" class="century">III</p>
          <img
            @mouseover="evolve2 = true"
            @mouseout="evolve2 = false"
            class="🎁"
            :src="require('../assets/renaissance.png')"
            alt="evolve"
          />
          <span
            :class="{esAristocrats:(this.$i18n.locale==='es'), ruAristocrats:(this.$i18n.locale==='ru')}"
          >{{$t('secondPage.evolution.aristocrat')}}</span>
        </div>
        <div class="evolve3">
          <p @mouseover="evolve3 = true" @mouseout="evolve3 = false" class="century">III</p>
          <img
            @mouseover="evolve3 = true"
            @mouseout="evolve3 = false"
            class="🎁"
            :src="require('../assets/industrial.png')"
            alt="evolve"
          />
          <span
            :class="{ruBourgeois:(this.$i18n.locale==='ru')}"
          >{{$t('secondPage.evolution.bourgeois')}}</span>
        </div>
        <div class="evolve4">
          <p @mouseover="evolve4 = true" @mouseout="evolve5 = false" class="century">III</p>
          <img
            @mouseover="evolve4 = true"
            @mouseout="evolve4 = false"
            class="🎁"
            :src="require('../assets/mafia.png')"
            alt="evolve"
          />
          <span :class="{ruMafia:(this.$i18n.locale==='ru')}">{{$t('secondPage.evolution.mafia')}}</span>
        </div>
        <div class="evolve5">
          <p @mouseover="evolve5 = true" @mouseout="evolve5 = false" class="century">III</p>
          <img
            @mouseover="evolve5 = true"
            @mouseout="evolve5 = false"
            class="🎁"
            :src="require('../assets/hippie.png')"
            alt="evolve"
          />
          <span :class="{ruHippie:(this.$i18n.locale==='ru')}">{{$t('secondPage.evolution.hippie')}}</span>
        </div>
        <div class="evolve6">
          <p @mouseover="evolve6 = true" @mouseout="evolve6 = false" class="century">III</p>
          <img
            @mouseover="evolve6 = true"
            @mouseout="evolve6 = false"
            class="🎁"
            :src="require('../assets/Punk.png')"
            alt="evolve"
          />
          <span
            :class="{esPunks:(this.$i18n.locale==='es'), ruPunks:(this.$i18n.locale==='ru')}"
          >{{$t('secondPage.evolution.punk')}}</span>
        </div>
        <div class="evolve7">
          <p @mouseover="evolve7 = true" @mouseout="evolve7 = false" class="century">III</p>
          <img
            @mouseover="evolve7 = true"
            @mouseout="evolve7 = false"
            class="🎁"
            :src="require('../assets/hipster.png')"
            alt="evolve"
          />
          <span
            :class="{esHipster:(this.$i18n.locale==='es'), ruHipsters:(this.$i18n.locale==='ru')}"
          >{{$t('secondPage.evolution.hipsters')}}</span>
        </div>
        <div class="evolve8">
          <p @mouseover="evolve8 = true" @mouseout="evolve8 = false" class="century">❔</p>
          <img
            @mouseover="evolve8 = true"
            @mouseout="evolve8 = false"
            class="🎁"
            :src="require('../assets/2020D.png')"
            alt="evolve"
          />
          <router-link is="button" @click="goToConstruct" class="BottomQuote_button">#2020</router-link>
        </div>
      </section>
      <img class="arrow" id="arrow" :src="require('../assets/Arrow.png')" alt="arrow" />
    </main>
    <footer>
      <router-link is="button" @click="goToBack" class="GoBack_button">
        <arrowsvg class="arrowbutton"></arrowsvg>
        {{ $t("footer.GoBack")}}
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "DesktopSecond",
  data() {
    return {
      evolve1: false,
      evolve2: false,
      evolve3: false,
      evolve4: false,
      evolve5: false,
      evolve6: false,
      evolve7: false,
      evolve8: false,
      firsthint: false
    };
  },
  methods: {
    goToConstruct() {
      this.$router.replace("/create/personalisation");
    },
    goToBack() {
      this.$router.push("/");
    }
  },
  components: {
    arrowsvg: () =>
      import(
        /* webpackChunkName: "arrowsvg" */ "../components/SVG/arrowSVG.vue"
      )
  },
  mounted() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
};
</script>

<style scoped>
.BackNumber {
  color: azure;
  transform: rotate(-64deg);
  font-size: 70vw;
  color: #000;
  opacity: 0.1;
  position: absolute;
  z-index: 0;
}
footer {
  display: flex;
  width: 95vw;
  align-items: flex-start;
}
.GoBack_button {
  margin-bottom: 1vw;
}
.humanity,
.arrow {
  display: none;
}
.description {
  display: none;
}
main {
  flex-direction: row;
}
.evolve {
  outline: none;
  position: relative;
  display: inline-block;
  border: none;
  overflow: hidden;
  border-radius: 4vw;
  padding: 0.5vw 3vw;
  font-size: 5.5vw;
  font-weight: 400;
  color: #e0ffff;
  background-color: #ac40f1;
  cursor: pointer;
  box-shadow: 1vw 1vw 5vw #000;
}
.evolve::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  filter: blur(2vw);
  width: 9vw;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  transform: translateX(-3vw) skewX(-45deg);
  animation: move-light 1.7s infinite;
}

header {
  justify-content: center;
  align-items: flex-end;
  height: 50vw;
}
.war,
.politics,
.fun {
  background: none;
  border: none;
  color: #e0ffff;
  margin: 2vw 2vw 0 0;
  font-family: "Source", sans-serif;
  font-size: 7vw;
  outline: none;
}
hr {
  height: 8vw;
  border: 0;
  width: 0.4vw;
  background-color: #e0ffff;
}
@media screen and (min-width: 760px) and (max-width: 999px) {
  .BackNumber {
    transform: rotate(-58deg);
    font-size: 62vw;
  }
  header {
    height: 34vw;
  }
}

@media screen and (max-width: 999px) and (orientation: landscape) {
  .BackNumber {
    transform: rotate(-10deg);
    font-size: 45vw;
  }
  .war,
  .politics,
  .fun {
    font-size: 3.5vw;
    text-shadow: 0vw 0vw 0.1vw #000;
  }
  header {
    height: calc(var(--vh, 1vh) * 11);
  }
  hr {
    height: calc(var(--vh, 1vh) * 10);
    width: 0.2vw;
  }
  .humanity,
  .arrow {
    display: block;
  }
  .humanity {
    width: 95vw;
  }
  .arrow {
    width: 75vw;
    margin-top: 1vw;
  }
  main {
    flex-direction: column;
  }
  .description {
    color: #e0ffff;
    font-family: "Source", sans-serif;
    font-size: 2vw;
    align-self: flex-start;
    display: inline;
    text-shadow: 0vw 0vw 0.1vw #000;
  }
  span:first-of-type {
    margin-left: 4.5vw;
    margin-right: 4vw;
  }
  span:nth-of-type(2) {
    margin-right: 4vw;
  }
  span:nth-of-type(3) {
    margin-right: 5vw;
  }
  span:nth-of-type(4) {
    margin-right: 7.5vw;
  }
  span:nth-of-type(5) {
    margin-right: 7vw;
  }
  span:nth-of-type(6) {
    margin-right: 7vw;
  }
  span:nth-of-type(7) {
    margin-right: 4vw;
  }
  .BottomQuote_button {
    padding: 0vw 2vw;
    font-size: 2vw;
    line-height: 3vw;
  }
  .GoBack_button {
    background: none;
    border: none;
    font-size: 1.5vw;
    color: #fff;
    font-weight: 300;
    cursor: pointer;
    z-index: 100;
    box-shadow: 0vw 0vw 15vw 1vw #000;
    padding: 0.3vw 2vw;
    border-radius: 3vw;
    display: flex;
    align-items: center;
  }
  .arrowbutton {
    width: 1.5vw;
    fill: #fff;
    margin-right: 0.5vw;
  }
  span.ruAristocrats {
    margin-right: 2vw;
  }
  span.ruBourgeois {
    margin-right: 3.5vw;
  }
  span.ruMafia {
    margin-right: 6.5vw;
  }
  span.ruHippie {
    margin-right: 7vw;
  }
  span.ruPunks {
    margin-right: 6vw;
  }
  span.ruHipsters {
    margin-right: 3vw;
  }
  span.esAristocrats {
    margin-right: 3vw;
  }
  span.esPunks {
    margin-right: 6.5vw;
  }
  span.esHipster {
    margin-right: 3.75vw;
  }
}

@media screen and (min-width: 1000px) {
  .BackNumber {
    transform: rotate(-10deg);
    font-size: 45vw;
  }
  .war,
  .politics,
  .fun {
    font-size: 4vw;
    text-shadow: 0vw 0vw 0.1vw #000;
  }
  header {
    height: 10vw;
  }
  hr {
    height: 4.5vw;
    width: 0.2vw;
  }
  .arrow {
    display: block;
  }
  .humanity {
    width: 95vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .humanity div:nth-of-type(n) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    position: relative;
  }
  .humanity div:nth-of-type(n) span:nth-of-type(n) {
    color: #fff;
    font-family: "Source", sans-serif;
    font-size: 2vw;
    text-shadow: 0vw 0vw 0.1vw #000;
  }
  .fcaption {
    width: auto;
    color: #fff;
    font-size: 2vw;
    font-weight: 400;
    line-height: 2.5vw;
    margin: auto 0;
    text-align: center;
    z-index: 999;
    opacity: 1;
  }
  .hint {
    top: 4vw;
    border-start-end-radius: 1vw;
    border-start-start-radius: 1vw;
    border-end-end-radius: 0vw;
    left: 5vw;
    width: 6.5vw;
    height: 5.2vw;
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
    font-size: 2vw;
    font-weight: 400;
    margin-top: 0.2vw;
    text-align: center;
    z-index: 999;
    opacity: 1;
  }
  .hint:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 5.2vw;
    left: -3.8vw;
    border-radius: 2vw;
    border-left: 7vw solid transparent;
    border-right: 7vw solid transparent;
    border-top: 4vw solid rgba(0, 0, 0, 0.233);
  }
  .popup1 {
    position: absolute;
    top: 1vw;
    left: -16vw;
    width: 16vw;
    height: 9.5vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 1s;
  }
  .popup1:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 3vw;
    top: 9.5vw;
    border: 0.5vw solid transparent;
    border-top: 2vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive1 {
    left: 4vw;
    opacity: 1;
  }
  .popup2 {
    position: absolute;
    top: 8vw;
    left: -50vw;
    width: 50vw;
    height: 3vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 0.7vw;
    z-index: 1;
    opacity: 0;
    transition: 1.5s;
    transition-timing-function: ease-out;
    transform: initial;
  }
  .popup2:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 3vw;
    top: 3vw;
    border: 0.5vw solid transparent;
    border-top: 2vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive2 {
    left: 16vw;
    opacity: 1;
    transform: initial;
    right: initial;
    top: 8vw;
  }
  .popup3 {
    position: absolute;
    top: -3vw;
    left: 28vw;
    width: 50vw;
    height: 3vw;
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
    left: 3vw;
    top: 3vw;
    border: 0.5vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive3 {
    top: 8vw;
    opacity: 1;
  }
  .popup4 {
    position: absolute;
    top: -3vw;
    left: 5vw;
    width: 42vw;
    height: 3vw;
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
    right: 3vw;
    top: 3vw;
    border: 0.5vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive4 {
    top: 8vw;
    opacity: 1;
  }
  .popup5 {
    position: absolute;
    top: 8vw;
    right: 0vw;
    width: 45vw;
    height: 3vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 1s;
  }
  .popup5:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 22vw;
    top: 3vw;
    border: 0.5vw solid transparent;
    border-top: 2vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive5 {
    right: 22vw;
    opacity: 1;
  }
  .popup6 {
    position: absolute;
    top: 15vw;
    right: 27vw;
    width: 43vw;
    height: 3vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 1s;
  }
  .popup6:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 5vw;
    top: 3vw;
    border: 0.5vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive6 {
    top: 8vw;
    opacity: 1;
  }
  .popup7 {
    position: absolute;
    top: 1vw;
    right: -20vw;
    width: 20vw;
    height: 9.5vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 1s;
  }
  .popup7:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 2vw;
    top: 9.5vw;
    border: 1vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
    border-left: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive7 {
    right: 3vw;
    opacity: 1;
  }
  .popup8 {
    position: absolute;
    width: 16vw;
    top: 20vw;
    right: 40vw;
    height: 9.5vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 0;
    opacity: 0;
    transition: 1.5s;
    transform: scale(8);
  }
  .popup8:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 3vw;
    top: 9.5vw;
    border: 1vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
    border-right: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive8 {
    transform: scale(1);
    transition: 1.5s;
    top: 1vw;
    right: 6vw;
    opacity: 1;
  }
  .humanity div:nth-of-type(n) .century {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-70%, -10%);
    color: #fff;
    font-size: 2vw;
    z-index: 999;
    opacity: 0;
  }
  .humanity div:nth-of-type(n):hover .century {
    transform: translate(-70%, -60%);
    transition: 2s;
    opacity: 1;
  }
  .🎁 {
    width: 11vw;
  }
  .humanity div:nth-of-type(n) img {
    transition: 0.5s;
  }
  .humanity div:nth-of-type(n) img:hover {
    filter: brightness(30%);
  }
  .humanity div:nth-of-type(n) .century:hover~img {
    filter: brightness(30%);
  }
  .evolve4 img {
    width: 12vw;
  }
  .humanity div:nth-of-type(n):hover {
    transform: scale(1.1);
    z-index: 999;
  }
  .arrow {
    width: 75vw;
    margin-top: 2vw;
  }
  main {
    flex-direction: column;
  }
  .BottomQuote_button {
    padding: 0vw 2vw;
    font-size: 2vw;
    line-height: 3vw;
  }
  .GoBack_button {
    background: none;
    border: none;
    font-size: 1.5vw;
    color: #fff;
    font-weight: 300;
    cursor: pointer;
    z-index: 100;
    box-shadow: 0vw 0vw 15vw 1vw #000;
    padding: 0.3vw 2vw;
    border-radius: 3vw;
    display: flex;
    align-items: center;
  }
  .arrowbutton {
    width: 1.5vw;
    fill: #fff;
    margin-right: 0.5vw;
  }
}
</style>