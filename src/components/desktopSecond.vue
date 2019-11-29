<template>
  <div id="app">
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
        <article class="evolve1">
          <div class="hint" :class="{firstHintOut:firsthint}">
            <p class="firsthint">{{$t('secondPage.hint')}}</p>
          </div>
          <div class="popup1" :class="{popupActive1:(evolve1) && (firsthint)}">
            <p class="fcaption">{{$t('secondPage.popup1')}}</p>
          </div>
          <p
            @mouseover="evolve1 = true"
            @mouseout="evolve1 = false"
            class="century"
          >{{$t('secondPage.century1')}}</p>
          <img
            @mouseover="evolve1 = true, firsthint = true"
            @mouseout="evolve1 = false"
            class="🎁"
            :src="require('../assets/greek.png')"
            alt="evolve"
          />
          <span :class="{ruGreeks:(this.$i18n.locale==='ru')}">{{$t('secondPage.evolution.greek')}}</span>
        </article>
        <article class="evolve2">
          <div class="popup2" :class="{popupActive2:(evolve2) && (firsthint)}">
            <p class="fcaption">{{$t('secondPage.popup2')}}</p>
          </div>
          <p
            @mouseover="evolve2 = true"
            @mouseout="evolve2 = false"
            class="century"
          >{{$t('secondPage.century2')}}</p>
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
        </article>
        <article class="evolve3">
          <div class="popup3" :class="{popupActive3:(evolve3) && (firsthint)}">
            <p class="fcaption">{{$t('secondPage.popup3')}}</p>
          </div>
          <p
            @mouseover="evolve3 = true"
            @mouseout="evolve3 = false"
            class="century"
          >{{$t('secondPage.century3')}}</p>
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
        </article>
        <article class="evolve4">
          <div class="popup4" :class="{popupActive4:(evolve4) && (firsthint)}">
            <p class="fcaption">{{$t('secondPage.popup4')}}</p>
          </div>
          <p
            @mouseover="evolve4 = true"
            @mouseout="evolve5 = false"
            class="century"
          >{{$t('secondPage.century4')}}</p>
          <img
            @mouseover="evolve4 = true"
            @mouseout="evolve4 = false"
            class="🎁"
            :src="require('../assets/mafia.png')"
            alt="evolve"
          />
          <span :class="{ruMafia:(this.$i18n.locale==='ru')}">{{$t('secondPage.evolution.mafia')}}</span>
        </article>
        <article class="evolve5">
          <div class="popup5" :class="{popupActive5:(evolve5) && (firsthint)}">
            <p class="fcaption">{{$t('secondPage.popup5')}}</p>
          </div>
          <p
            @mouseover="evolve5 = true"
            @mouseout="evolve5 = false"
            class="century"
          >{{$t('secondPage.century5')}}</p>
          <img
            @mouseover="evolve5 = true"
            @mouseout="evolve5 = false"
            class="🎁"
            :src="require('../assets/hippie.png')"
            alt="evolve"
          />
          <span :class="{ruHippie:(this.$i18n.locale==='ru')}">{{$t('secondPage.evolution.hippie')}}</span>
        </article>
        <article class="evolve6">
          <div class="popup6" :class="{popupActive6:(evolve6) && (firsthint)}">
            <p class="fcaption">{{$t('secondPage.popup6')}}</p>
          </div>
          <p
            @mouseover="evolve6 = true"
            @mouseout="evolve6 = false"
            class="century"
          >{{$t('secondPage.century6')}}</p>
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
        </article>
        <article class="evolve7">
          <div class="popup7" :class="{popupActive7:(evolve7) && (firsthint)}">
            <p class="fcaption">{{$t('secondPage.popup7')}}</p>
          </div>
          <p
            @mouseover="evolve7 = true"
            @mouseout="evolve7 = false"
            class="century"
          >{{$t('secondPage.century7')}}</p>
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
        </article>
        <article class="evolve8">
          <div class="popup8" :class="{popupActive8:(evolve8) && (firsthint)}">
            <p class="fcaption">❔ ❓ ❔ ❓ ❔ ❓</p>
          </div>
          <p @mouseover="evolve8 = true" @mouseout="evolve8 = false" class="century ❔">❔</p>
          <img
            @mouseover="evolve8 = true"
            @mouseout="evolve8 = false"
            class="🎁"
            :src="require('../assets/2020D.png')"
            alt="evolve"
          />
          <router-link is="button" @click="goToConstruct" class="BottomQuote_button">#2020</router-link>
        </article>
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
      this.$router.replace("/evolve/popup");
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
  background-color: #fff;
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
    height: 5vw;
    margin-top: 1.5vw;
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
  .humanity article:nth-of-type(n) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    position: relative;
  }
  .humanity article:nth-of-type(n) span:nth-of-type(n) {
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
    top: 0vw;
    border-start-end-radius: 1vw;
    border-start-start-radius: 1vw;
    border-end-end-radius: 0vw;
    left: 1.5vw;
    width: 6.5vw;
    height: 3.5vw;
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
    font-size: 1.5vw;
    font-weight: 400;
    text-align: center;
    z-index: 999;
    line-height: 1.8vw;
    opacity: 1;
  }
  .hint:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 3.5vw;
    left: -0.8vw;
    border-left: 4vw solid transparent;
    border-right: 4vw solid transparent;
    border-top: 2vw solid rgba(0, 0, 0, 0.233);
  }
  .popup1 {
    position: absolute;
    top: -5vw;
    left: -60vw;
    width: 60vw;
    height: 3vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 0.8s;
  }
  .popup1:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 3vw;
    top: 3vw;
    border: 0.5vw solid transparent;
    border-top: 2vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive1 {
    top: 1.4vw;
    left: 0vw;
    opacity: 1;
  }
  .popup2 {
    position: absolute;
    top: 1.4vw;
    right: 0;
    left: -50vw;
    width: 50vw;
    height: 3vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 0.7vw;
    z-index: 1;
    opacity: 0;
    transition: 0.8s;
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
    right: 0;
    left: 0vw;
    opacity: 1;
    transform: initial;
    right: initial;
    top: 1.4vw;
  }
  .popup3 {
    position: absolute;
    top: -10vw;
    left: -6vw;
    width: 70vw;
    height: 3vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
  }
  .popup3:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 10vw;
    top: 3vw;
    border: 0.5vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive3 {
    top: 1.4vw;
    opacity: 1;
  }
  .popup4 {
    position: absolute;
    top: -10vw;
    left: -33vw;
    width: 49vw;
    height: 3vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
  }
  .popup4:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 10vw;
    top: 3vw;
    border: 0.5vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive4 {
    top: 1.4vw;
    opacity: 1;
  }
  .popup5 {
    position: absolute;
    top: 1.4vw;
    right: -80vw;
    width: 60vw;
    height: 3vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
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
    right: -31vw;
    opacity: 1;
  }
  .popup6 {
    position: absolute;
    top: -10vw;
    right: 0vw;
    width: 65vw;
    height: 3vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
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
    top: 1.4vw;
    opacity: 1;
  }
  .popup7 {
    position: absolute;
    top: 1.4vw;
    right: -60vw;
    width: 71vw;
    height: 3vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
  }
  .popup7:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 3vw;
    top: 3vw;
    border: 1vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
    border-left: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive7 {
    right: 0vw;
    top: 1.4vw;
    opacity: 1;
  }
  .popup8 {
    position: absolute;
    width: 7vw;
    top: 0vw;
    right: -10vw;
    height: 5.5vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 0;
    opacity: 0;
    transform: scale(3);
    transition: 0.5s;
  }
  .popup8:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: -1.65vw;
    top: 3.2vw;
    border: 0.7vw solid transparent;
    border-right: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive8 {
    transform: scale(1);
    transition: 0.5s;
    top: 1.5vw;
    right: -2vw;
    opacity: 1;
  }
  .humanity article:nth-of-type(n) .century {
    position: absolute;
    word-spacing: -0.2vw;
    top: 50%;
    left: 50%;
    transform: translate(-30%, -10%);
    color: #fff;
    font-size: 1.5vw;
    font-weight: 700;
    z-index: 999;
    opacity: 0;
    width: 7vw;
  }
  .humanity article:nth-of-type(n):hover .century {
    transform: translate(-30%, -60%);
    transition: 2s;
    opacity: 1;
  }
  .humanity article:nth-of-type(n) .❔{
    transform: translate(-20%, -10%);
  }
  .humanity article:nth-of-type(n):hover .❔ {
    transform: translate(-20%, -60%);
  }
  .🎁 {
    width: 11vw;
  }
  .humanity article:nth-of-type(n) img {
    transition: 0.5s;
  }
  .humanity article:nth-of-type(n) img:hover {
    filter: brightness(30%);
  }
  .humanity article:nth-of-type(n) .century:hover ~ img {
    filter: brightness(30%);
  }
  .evolve4 img {
    width: 12vw;
  }
  .humanity article:nth-of-type(n):hover {
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
@media screen and (max-width: 999px) and (orientation: landscape) {
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
    height: 5vw;
    margin-top: 1.5vw;
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
  .humanity article:nth-of-type(n) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    position: relative;
  }
  .humanity article:nth-of-type(n) span:nth-of-type(n) {
    color: #fff;
    font-family: "Source", sans-serif;
    font-size: 2vw;
    text-shadow: 0vw 0vw 0.1vw #000;
  }
  .fcaption {
    width: auto;
    color: #fff;
    font-size: 1.4vw;
    font-weight: 400;
    line-height: 2vw;
    margin: auto 0;
    text-align: center;
    z-index: 999;
    opacity: 1;
  }
  .hint {
    top: 0vw;
    border-start-end-radius: 1vw;
    border-start-start-radius: 1vw;
    border-end-end-radius: 0vw;
    left: 1.5vw;
    width: 5.5vw;
    height: 3vw;
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
    font-size: 1.3vw;
    font-weight: 400;
    text-align: center;
    z-index: 999;
    line-height: 1.5vw;
    opacity: 1;
  }
  .hint:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 3vw;
    left: -2.2vw;
    border-left: 5vw solid transparent;
    border-right: 5vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popup1 {
    position: absolute;
    top: -5vw;
    left: -45vw;
    width: 45vw;
    height: 2vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 0.8s;
  }
  .popup1:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 3vw;
    top: 2vw;
    border: 0.5vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive1 {
    top: 1.4vw;
    left: 0vw;
    opacity: 1;
  }
  .popup2 {
    position: absolute;
    top: 1.4vw;
    right: 0;
    left: -50vw;
    width: 40vw;
    height: 2vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 0.7vw;
    z-index: 1;
    opacity: 0;
    transition: 0.8s;
    transition-timing-function: ease-out;
    transform: initial;
  }
  .popup2:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 3vw;
    top: 2vw;
    border: 0.5vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive2 {
    right: 0;
    left: 0vw;
    opacity: 1;
    transform: initial;
    right: initial;
    top: 1.4vw;
  }
  .popup3 {
    position: absolute;
    top: -10vw;
    left: 0vw;
    width: 50vw;
    height: 2vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
  }
  .popup3:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 3vw;
    top: 2vw;
    border: 0.5vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive3 {
    top: 1.1vw;
    opacity: 1;
  }
  .popup4 {
    position: absolute;
    top: -10vw;
    left: -27vw;
    width: 35vw;
    height: 2vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
  }
  .popup4:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 3vw;
    top: 2vw;
    border: 0.5vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive4 {
    top: 1.05vw;
    opacity: 1;
  }
  .popup5 {
    position: absolute;
    top: 1.4vw;
    right: -80vw;
    width: 40vw;
    height: 2vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
  }
  .popup5:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 22vw;
    top: 2vw;
    border: 0.5vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive5 {
    right: -13vw;
    opacity: 1;
  }
  .popup6 {
    position: absolute;
    top: -10vw;
    right: -2.5vw;
    width: 45vw;
    height: 2vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
  }
  .popup6:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 5vw;
    top: 2vw;
    border: 0.5vw solid transparent;
    border-top: 1vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive6 {
    top: 1.05vw;
    opacity: 1;
  }
  .popup7 {
    position: absolute;
    top: 1.4vw;
    right: -50vw;
    width: 55vw;
    height: 2vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
  }
  .popup7:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 3vw;
    top: 2vw;
    border: 0.5vw solid transparent;
    border-top: 0.5vw solid rgba(0, 0, 0, 0.233);
    border-left: 0.5vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive7 {
    right: -1vw;
    top: 1.4vw;
    opacity: 1;
  }
  .popup8 {
    position: absolute;
    width: 5.8vw;
    top: 0vw;
    right: -10vw;
    height: 4.5vw;
    background: rgba(0, 0, 0, 0.233);
    border-radius: 1vw;
    z-index: 0;
    opacity: 0;
    transform: scale(3);
    transition: 0.5s;
  }
  .popup8:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: -1.2vw;
    top: 2.5vw;
    border: 0.5vw solid transparent;
    border-right: 0.7vw solid rgba(0, 0, 0, 0.233);
  }
  .popupActive8 {
    transform: scale(1);
    transition: 0.5s;
    top: 1.1vw;
    right: -2vw;
    opacity: 1;
  }
  .humanity article:nth-of-type(n) .century {
    position: absolute;
    top: 50%;
    left: 50%;
    word-spacing: -0.2vw;
    transform: translate(-30%, -10%);
    color: #fff;
    font-weight: 700;
    font-size: 1.5vw;
    z-index: 999;
    opacity: 0;
  }
  .humanity article:nth-of-type(n):hover .century {
    transform: translate(-30%, -10%);
    transition: 2s;
    opacity: 1;
  }
  .🎁 {
    width: 8vw;
  }
  .humanity article:nth-of-type(n) img {
    transition: 0.5s;
  }
  .humanity article:nth-of-type(n) img:hover {
    filter: brightness(30%);
  }
  .humanity article:nth-of-type(n) .century:hover ~ img {
    filter: brightness(30%);
  }
  .evolve4 img {
    width: 9vw;
  }
  .humanity article:nth-of-type(n):hover {
    transform: scale(1.1);
    z-index: 999;
  }
  .arrow {
    width: 75vw;
    margin-top: 0vw;
  }
  main {
    flex-direction: column;
    justify-content: flex-start;
    height: calc(var(--vh, 1vh) * 74);
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