<template>
  <section class="items" :class="[{scrollM:items.length >=1},{scrollD:items.length >=11}]">
    <button
      class="button"
      v-for="item in items"
      v-bind:key="item.id"
      v-on:click="drawOnCanvas(item)"
      ref="button">
			<p>CAN`T WEAR</p>
      <img :src="item.icon" alt />
    </button>
  </section>
</template>

<script>
export default {
	props: ['items','type','firstID','map','secondID','thirdID','fourthID'],
	name:'clothesitems',
	methods:{
		drawOnCanvas(elem){
			if((this.map[elem.id].disableFirst.indexOf(this.firstID) === -1)&&(this.map[elem.id].disableSecond.indexOf(this.secondID) === -1)&&(this.map[elem.id].disableThird.indexOf(this.thirdID) === -1)&&(this.map[elem.id].disableFourth.indexOf(this.fourthID) === -1)){
			this.$store.dispatch('PUSH_'+this.type, elem)
			}
		}
	},
	mounted(){
		for (var i=0; i<this.items.length; i++){
			if((this.map[this.items[i].id].disableFirst.indexOf(this.firstID) === -1)&&(this.map[this.items[i].id].disableSecond.indexOf(this.secondID) === -1)&&(this.map[this.items[i].id].disableThird.indexOf(this.thirdID) === -1)&&(this.map[this.items[i].id].disableThird.indexOf(this.thirdID) === -1)&&(this.map[this.items[i].id].disableFourth.indexOf(this.fourthID) === -1)){
				this.$refs.button[i].classList.add("enable")
			} else {
				this.$refs.button[i].classList.add("disable")
			}
		}
	}
}
</script>

<style scoped>
.items {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 1vw;
  height: 50vw;
}
.button {
  position: relative;
  width: 38vw;
	height: calc(var(--vh, 1vh) * 24);
	margin-top: calc(var(--vh, 1vh) * 0.4);
	margin-right: calc(var(--vh, 1vh) * 0.5);
  cursor: pointer;
  transition: 0.3s;
  flex-shrink: 0;
  border-radius: 1vw;
  background: linear-gradient(rgb(130, 255, 136), rgb(140, 242, 255));
  border: none;
}
.button p {
  position: absolute;
  color: red;
  font-size: 7vw;
  top: 14vw;
  left: 0vw;
  transform: rotate(45deg);
  font-family: "block", sans-serif;
  display: none;
}
.disable {
  background: rgb(44, 42, 42);
}
.disable img {
  filter: brightness(40%);
  z-index: 0;
}
.disable p {
  display: initial;
  z-index: 999;
}
.disable:hover {
  transform: scale(1);
  background: rgb(44, 42, 42);
  transition: 0.3s;
}
.scrollM{
	overflow-x: scroll;
}
.button:hover {
  transform: scale(1.05);
  background: none;
  transition: 0.3s;
}
img {
  width: 80%;
}
button:nth-of-type(3) img {
  height: 90%;
  width: initial;
}
button:nth-of-type(-2n+4) img,
button:nth-of-type(-n+12):nth-of-type(n+9) img{
  height: 60%;
  width: initial;
}
@media screen and (min-width: 760px) and (max-width: 999px) {
}

@media screen and (min-width: 1000px), (orientation: landscape) {
  .items {
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1vw;
    height: 23vw;
  }
  .button {
    margin: 0vw 0vw 0.4vw 0vw;
    width: 12.2vw;
    border-radius: 0.5vw;
    height: 10.8vw;
    flex-shrink: initial;
  }
  .button p {
    font-size: 2vw;
    top: 3vw;
    left: 0vw;
  }

  .scrollD{
		overflow-y: scroll;
	}
	.scrollM{
		overflow-x: hidden;
	}
  .button:hover {
    transform: scale(1.1);
  }
  .disable {
    background: rgb(44, 42, 42);
  }
}
@media screen and (max-width: 999px) and (orientation: landscape){
	.items{
		flex-wrap: nowrap;
		height: 23vw;
    justify-content: flex-start;
	}
	.scrollD{
		overflow-y: hidden;
	}
	.scrollM{
		overflow-x: scroll;
	}
	.button{
		cursor: pointer;
		transition: 0.3s;
		background: linear-gradient(rgb(130, 255, 136), rgb(140, 242, 255));
		border: none;
		width: 10vw;
		height: 12vw;
		border-radius: 0.5vw;
		margin-right: 1vw;
    flex-shrink: 0;
	}
  .disable {
    background: rgb(44, 42, 42);
  }
}
</style>