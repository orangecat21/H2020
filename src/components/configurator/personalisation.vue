<template>
  <section>
    <button
      v-for="tab in tabs"
      v-bind:key="tab.id"
      v-bind:class="['button', { active: currentTab === tab.component }, {tap:tab.id !== 1}]"
      v-on:click="currentTab = tab.component"
    >{{ tab.text }}</button>
    <transition mode="out-in">
      <component :is="currentTab" class="currentTab"></component>
    </transition>
  </section>
</template>


<script>
export default {
  name: "personalisation",
  components: {
    Gender: () =>
      import(
        /* webpackChunkName: "gender", webpackPrefetch: 982 */ "./gender.vue"
      ),
    Name: () =>
      import(/* webpackChunkName: "name", webpackPrefetch: 981 */ "./name.vue")
  },
  data() {
    return {
      currentTab: "Gender",
      tabs: [
        {
          id: 1,
          text: this.$t("thirdPage.gender.gender"),
          component: "Gender"
        },
        { id: 2, text: this.$t("thirdPage.name.name"), component: "Name" }
      ]
    };
  }
};
</script>


<style scoped>
section {
  display: flex;
  flex-basis: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2vw 1.5vw 0vw 1.5vw;
  height: calc(var(--vh, 1vh) * 40);
}
.button {
  position: relative;
  display: inline-block;
  color: #fff;
  overflow: hidden;
  background-color: #cdcdcd;
  border-radius: 1vw;
  border: none;
  padding: 0.5vw 2vw;
  font-size: 6vw;
  cursor: pointer;
  width: 47vw;
  height: 10vw;
}
button:focus {
  transform: scale(1.05);
  border: 0.3vw solid rgb(48, 2, 173);
  padding: 0vw 1.4vw;
}
.tap:not(.active) {
  animation: cycle 3s linear infinite;
}
.currentTab {
  flex-basis: 100%;
  padding: 3vw 0;
  justify-content: space-around;
}
.button:hover {
  background-color: #ac40f1;
}
.button.active {
  background-color: #ac40f1;
  transform: scale(1.05);
  border: 0.3vw solid #ac40f1;
  padding: 0vw 1.4vw;
}
.v-enter-active {
  transition: opacity 0.2s;
}
.v-leave-active {
  transition: opacity 0.2s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
@keyframes cycle {
  35% {
    transform: rotate(0) translate(0, 0);
  }
  40% {
    transform: rotate(3deg) translate(0, -2px);
  }
  45% {
    transform: rotate(-1deg) translate(0, -2px);
  }
  50% {
    transform: rotate(3deg) translate(0, -2px);
  }
  55% {
    transform: rotate(-1deg) translate(0, -2px);
  }
  60% {
    transform: rotate(3deg) translate(0, -2px);
  }
  65% {
    transform: rotate(-1deg) translate(0, -2px);
  }
  70% {
    transform: rotate(0) translate(0, 0);
  }
}
@media screen and (min-width: 760px) and (max-width: 999px) {
}

@media screen and (min-width: 1000px), (orientation: landscape) {
  section {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1vw;
    margin-top: 1vw;
  }
  .button {
    position: relative;
    display: inline-block;
    color: #e0ffff;
    overflow: hidden;
    background-color: #cdcdcd;
    border-radius: 0.5vw;
    border: none;
    padding: 0.5vw 2vw;
    font-size: 2.5vw;
    cursor: pointer;
    box-shadow: 3vw 3vw 10vw #000;
    width: 25vw;
    height: 4vw;
  }
  .currentTab {
    flex-basis: 100%;
    padding: 1vw 0;
    justify-content: space-around;
  }
  .button:hover {
    background-color: #ac40f1;
  }
  .button.active {
    background-color: #ac40f1;
    transform: scale(1.05);
    border: 0.3vw solid rgb(48, 2, 173);
    padding: 0vw 1.4vw;
  }
  button:focus {
    transform: scale(1.05);
    border: 0.3vw solid rgb(48, 2, 173);
    padding: 0vw 1.4vw;
  }
  .v-enter-active {
    transition: opacity 0.2s;
  }
  .v-leave-active {
    transition: opacity 0.2s;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
}
@media screen and (max-width: 999px) and (orientation: landscape) {
button:focus {
  transform: scale(1);
}
.button {
    position: relative;
    display: inline-block;
    color: #e0ffff;
    overflow: hidden;
    background-color: #cdcdcd;
    border-radius: 0.5vw;
    border: none;
    padding: 0.5vw 1vw;
    font-size: 2vw;
    cursor: pointer;
    box-shadow: 3vw 3vw 10vw #000;
    width: 20vw;
    height: 3vw;
  }
  section {
    margin-top: 0vw;
  }
}
</style>