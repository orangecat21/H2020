<template>
  <main>
    <div class="character">
      <div class="popupM" :class="{popupActiveM:(evolveM)}">
        <p class="fcaption">{{$t('secondPage.popup3')}}</p>
      </div>
      <img :src="require('../assets/industrial.png')" alt="industrial" />
    </div>
    <section class="submenu">
      <h2>{{$t('secondPage.evolution.bourgeois')}}</h2>
      <router-link
        is="button"
        @click="goToNext"
        class="evolve"
      >{{$t('secondPage.evolution.evolve')}}</router-link>
      <router-link is="button" @click="goToBack" class="GoBack_button">
        <arrowsvg class="arrowbutton"></arrowsvg>back
      </router-link>
    </section>
  </main>
</template>

<script>
export default {
  name: "thirdEvolve",
  data() {
    return {
      evolveM: false
    };
  },
  methods: {
    goToNext() {
      this.$router.push("/evolve/4");
    },
    goToBack() {
      this.$router.push("/evolve/2");
    }
  },
  components: {
    arrowsvg: () =>
      import(
        /* webpackChunkName: "arrowsvg" */ "../components/SVG/arrowSVG.vue"
      )
  },
  mounted() {
    setTimeout(() => {
      this.evolveM = true;
    }, 500);
  }
};
</script>

<style scoped>
.popupM {
  position: absolute;
  top: 3vw;
  left: 100vw;
  width: 62vw;
  height: 30vw;
  background: rgba(0, 0, 0, 0.233);
  border-radius: 1vw;
  z-index: 1;
  opacity: 0;
  transition: 0.8s;
}
.fcaption{
  font-size: 6.4vw;
  line-height: 7vw;
}
.popupM:after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  left: 3vw;
  top: 30vw;
  border: 2vw solid transparent;
  border-top: 2vw solid rgba(0, 0, 0, 0.233);
  border-left: 2vw solid rgba(0, 0, 0, 0.233);
}
.popupActiveM {
  top: 3vw;
  left: 37vw;
  opacity: 1;
}
main {
  flex-direction: row;
  align-items: flex-start;
}
.character {
  width: 52vw;
  height: 52vw;
  margin-right: 5vw;
}
img {
  width: 28vh;
}
.submenu {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 25vw;
  color: #ac40f1;
  font-family: "Source", sans-serif;
}
.submenu h2 {
  font-size: 7vw;
  font-weight: 400;
  margin-bottom: 2vw;
  text-shadow: 0 0 0.5vw #fff;
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
  color: #fff;
  background-color: #ac40f1;
  cursor: pointer;
  box-shadow: 0vw 0vw 2vw #000;
  animation: cycle 3s linear infinite;
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
.GoBack_button {
  background: none;
  border: none;
  font-size: 5vw;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  box-shadow: 0vw 0vw 2vw #000;
  padding: 1vw 3vw 0.6vw 3vw;
  border-radius: 4vw;
  display: flex;
  margin-top: 4vw;
  align-items: center;
}
.arrowbutton {
  width: 5vw;
  fill: #fff;
  margin-right: 2vw;
}
</style>