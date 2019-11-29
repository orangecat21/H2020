<template>
  <section>
    <button @click="male" :class="{active:maleTrigger && loadTrigger}">
      <malesvg class="malesvg"></malesvg>
      <p>{{$t('thirdPage.gender.male')}}</p>
        <div class="spinner-box"  v-if="!loadTrigger && gender === 'male'">
          <div class="circle-border">
            <div class="circle-core"></div>
          </div>
        </div>
    </button>
    <button @click="female" :class="{active:femaleTrigger && loadTrigger}">
      <femalesvg class="femalesvg"></femalesvg>
      <p>{{$t('thirdPage.gender.female')}}</p>
			<div class="spinner-box"  v-if="!loadTrigger && gender === 'female'">
          <div class="circle-border">
            <div class="circle-core"></div>
          </div>
        </div>
    </button>
  </section>
</template>

<script>
export default {
  name: "gender",
  data() {
    return {
      maleTrigger: false,
			femaleTrigger: false
    };
  },
  components: {
    malesvg: () =>
      import(
        /* webpackChunkName: "malesvg", webpackPrefetch: true */ "../SVG/maleSVG.vue"
      ),
    femalesvg: () =>
      import(
        /* webpackChunkName: "femalesvg", webpackPrefetch: true */ "../SVG/femaleSVG.vue"
      )
	},
	computed:{
		loadTrigger(){
			return this.$store.getters.GENDER_LOAD_TRIGGER
		},
		gender(){
			return this.$store.getters.GENDER
		}
	},
  methods: {
    male() {
			if (!this.maleTrigger) {
      this.$store.dispatch("GET_GENDER", "male");
      this.$store.dispatch("PUSH_HEAD", {
        id: 0,
        src: "null",
        posX: 0,
        posY: 0,
        z: 10
      });
      this.$store.dispatch("PUSH_BEARD", {
        id: 0,
        src: "null",
        posX: 0,
        posY: 0,
        z: 9
      });
      this.$store.dispatch("PUSH_JACKETS", {
        id: 0,
        src: "null",
        posX: 0,
        posY: 0,
        z: 7
      });
      this.$store.dispatch("PUSH_SHIRTS", {
        id: 0,
        src: "null",
        posX: 0,
        posY: 0,
        z: 6
      });
      this.$store.dispatch("PUSH_PANTS", {
        id: 0,
        src: "null",
        posX: 0,
        posY: 0,
        z: 4
      });
      this.$store.dispatch("PUSH_SHOES", {
        id: 0,
        src: "null",
        icon: "null",
        posX: 0,
        posY: 0,
        z: 5
      });
      this.$store.dispatch("PUSH_ACCESSORIES", {
        id: 0,
        src: "null",
        icon: "null",
        posX: 0,
        posY: 0,
        z: 8
      });
      this.$store.dispatch("PUSH_VEHICLE", {
        id: 0,
        src: "null",
        icon: "null",
        posX: 0,
        posY: 0,
        z: 11
      });
      this.$store.dispatch("PUSH_GENDER_LOAD", false);
      this.maleTrigger = true;
      this.femaleTrigger = false;
		}},
    female() {
			if (!this.femaleTrigger) {
      this.$store.dispatch("GET_GENDER", "female");
      this.$store.dispatch("PUSH_HEAD", {
        id: 0,
        src: "null",
        posX: 0,
        posY: 0,
        z: 10
      });
      this.$store.dispatch("PUSH_BEARD", {
        id: 0,
        src: "null",
        posX: 0,
        posY: 0,
        z: 9
      });
      this.$store.dispatch("PUSH_JACKETS", {
        id: 0,
        src: "null",
        posX: 0,
        posY: 0,
        z: 7
      });
      this.$store.dispatch("PUSH_SHIRTS", {
        id: 0,
        src: "null",
        posX: 0,
        posY: 0,
        z: 6
      });
      this.$store.dispatch("PUSH_PANTS", {
        id: 0,
        src: "null",
        posX: 0,
        posY: 0,
        z: 4
      });
      this.$store.dispatch("PUSH_SHOES", {
        id: 0,
        src: "null",
        icon: "null",
        posX: 0,
        posY: 0,
        z: 5
      });
      this.$store.dispatch("PUSH_ACCESSORIES", {
        id: 0,
        src: "null",
        icon: "null",
        posX: 0,
        posY: 0,
        z: 8
      });
      this.$store.dispatch("PUSH_VEHICLE", {
        id: 0,
        src: "null",
        icon: "null",
        posX: 0,
        posY: 0,
        z: 11
      });
      this.$store.dispatch("PUSH_GENDER_LOAD", false);
      this.maleTrigger = false;
      this.femaleTrigger = true;
    }}
  }
};
</script>

<style scoped>
.malesvg,
.femalesvg {
  height: calc(var(--vh, 1vh) * 24);
  width: calc(var(--vh, 1vh) * 24);
  fill: #5bc8ff;
}
.femalesvg {
  fill: #f5a9a9;
}
button {
  position: relative;
  border: none;
  border-radius: 1vw;
  padding: 1vw;
  cursor: pointer;
  height: calc(var(--vh, 1vh) * 29);
  width: 47vw;
  background-color: rgb(226, 226, 226);
  transition: 0.2s;
}

button.active {
  transform: scale(1.05);
  border: 0.3vw solid #ac40f1;
  padding: 0.85vw;
}
p {
  position: absolute;
  bottom: 1vw;
  right: 1vw;
  font-size: 4vw;
  font-weight: 400;
  color: #ac40f1;
}
.spinner-box {
	position: absolute;
	top: 0;
	left: 0;
	height: calc(var(--vh, 1vh) * 29);
  width: 47vw;
  display: flex;
	border-radius: 0.5vw;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}
.circle-border {
  width: 30vw;
  height: 30vw;
  padding: 0.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63,249,220);
  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);
  animation: spin .8s linear 0s infinite;
}

.circle-core {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 50%;
}
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
}
@media screen and (min-width: 760px) and (max-width: 999px) {
}

@media screen and (min-width: 1000px), (orientation: landscape) {
	.spinner-box {
	position: absolute;
	top: 0;
	left: 0;
	width: 24vw;
	height: 24vw;
  display: flex;
	border-radius: 0.5vw;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}
.circle-border {
  width: 20vw;
  height: 20vw;
  padding: 0.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63,249,220);
  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);
  animation: spin .8s linear 0s infinite;
}

.circle-core {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 50%;
}
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
}
  .malesvg,
  .femalesvg {
    width: 22vw;
    height: initial;
    fill: #5bc8ff;
  }
  .femalesvg {
    fill: #f5a9a9;
  }
  button {
    background-color: #fff;
    position: relative;
    border: none;
    border-radius: 0.5vw;
    padding: 0.5vw;
    cursor: pointer;
    height: 25vw;
    width: 25vw;
  }
  p {
    position: absolute;
    font-size: 2vw;
    font-weight: 200;
    color: #ac40f1;
  }
}
@media screen and (max-width: 1000px) and (orientation: landscape) {
  button {
    background-color: #fff;
    position: relative;
    border: none;
    border-radius: 0.5vw;
    padding: 0.5vw;
    cursor: pointer;
    height: 20vw;
    width: 20vw;
  }
  .malesvg,
  .femalesvg {
    width: 17vw;
    height: initial;
  }
  p {
    position: absolute;
    font-size: 2vw;
    font-weight: 200;
    color: #ac40f1;
  }
	.spinner-box {
	position: absolute;
	top: 0;
	left: 0;
	width: 20vw;
	height: 20vw;
  display: flex;
	border-radius: 0.5vw;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}
.circle-border {
  width: 15vw;
  height: 15vw;
  padding: 0.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63,249,220);
  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);
  animation: spin .8s linear 0s infinite;
}

.circle-core {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 50%;
}
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
}
}
</style>