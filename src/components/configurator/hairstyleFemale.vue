<template>
  <section>
    <button
      v-for="color in colors"
      v-bind:key="color.id"
      v-bind:class="['button', { active: currentColor === color.color }, color.color]"
      v-on:click="currentColor = color.color, array=color.array, changeColor()"
    ></button>
    <clothesitems :items="array" :type="type" class="currentColor"></clothesitems>
  </section>
</template>

<script>
export default {
  name: "Hairstyle",
  components: {
    clothesitems: () =>
      import(
        /* webpackChunkName: "clothesitems", webpackPrefetch: 967 */ "../configurator/hairItems.vue"
      )
  },
  methods: {
    changeColor() {
      if(this.$store.state.humanHead.id !== 0){
        this.currentID = +this.$store.state.humanHead.id-1
        this.$store.dispatch('PUSH_HEAD', this.array[this.currentID])
      }
    }
  },
  data() {
    return {
      currentColor: "black",
      type: "HEAD",
      currentID:0,
      array: this.$store.state.hairArrayFemale.hairBlackFemale,
      colors: [
        {
          id: 1,
          color: "black",
          array: this.$store.state.hairArrayFemale.hairBlackFemale
        },
        {
          id: 2,
          color: "bordo",
          array: this.$store.state.hairArrayFemale.hairBordoFemale
        },
        {
          id: 3,
          color: "brown",
          array: this.$store.state.hairArrayFemale.hairBrownFemale
        },
        {
          id: 4,
          color: "ginger",
          array: this.$store.state.hairArrayFemale.hairGingerFemale
        },
        {
          id: 5,
          color: "green",
          array: this.$store.state.hairArrayFemale.hairGreenFemale
        },
        {
          id: 6,
          color: "lightbrown",
          array: this.$store.state.hairArrayFemale.hairLightBrownFemale
        },
        {
          id: 7,
          color: "red",
          array: this.$store.state.hairArrayFemale.hairRedFemale
        }
      ]
    };
  }
};
</script>

<style scoped>
section {
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100vw;
}
.currentColor {
  flex-basis: 100%;
}
.button {
  width: calc(var(--vh, 1vh) * 5);
  height: calc(var(--vh, 1vh) * 5);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  margin-top: calc(var(--vh, 1vh) * 0.1);
}
.button:focus,
.button.active {
  border: 0.2vw solid #ac40f1;
}
.black {
  background-color: #202020;
}
.bordo {
  background-color: #6b2c26;
}
.brown {
  background-color: #885943;
}
.ginger {
  background-color: #a57d5a;
}
.green {
  background-color: #417334;
}
.lightbrown {
  background-color: #8c7e70;
}
.red {
  background-color: #5c2f00;
}
@media screen and (min-width: 760px) and (max-width: 999px) {
}
@media screen and (min-width: 1000px), (orientation: landscape) {
  section {
    justify-content: space-around;
    flex-wrap: wrap;
    width: initial;
  }
  .button {
    width: 3vw;
    height: 3vw;
    margin: 0vw;
  }
  .button.active {
    border: 0.2vw solid #fff;
  }
}
@media screen and (max-width: 999px) and (orientation: landscape) {
  section{
    width: 50vw;
  }
}
</style>