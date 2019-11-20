<template>
	<section :class="[{scrollM:items.length >=1},{scrollD:items.length >=11}]">
		<button class="button"
			v-for="item in items"
			v-bind:key="item.id"
			v-on:click="drawOnCanvas(item)">
			<img :src="item.src" alt="">
		</button>
	</section>
</template>

<script>
export default {
	props: ['items','type'],
	name:'accessoriesItems',
	methods:{
		drawOnCanvas(elem){
			this.$store.dispatch('PUSH_'+this.type, elem)

		}
	}
}
</script>

<style scoped>
	section{
		display: flex;
		overflow: hidden;
		justify-content: space-between;
		flex-wrap: nowrap;
		height: 45vw;
	}
	.scrollM{
		overflow-x: scroll;
	}
	.button{
		width: 38vw;
		height: calc(var(--vh, 1vh) * 24);
		margin-top: calc(var(--vh, 1vh) * 0.4);
		margin-right: calc(var(--vh, 1vh) * 0.5);
		cursor: pointer;
		flex-shrink: 0;
		transition: 0.3s;
		background: linear-gradient(rgb(130, 255, 136), rgb(140, 242, 255));
		border: none;
		border-radius: 1vw;
	}
	.button::-moz-focus-outer{
		border: none;
	}
	.button:hover{
		transform: scale(1.05);
		background: none;
		transition: 0.3s;
	}
	img{
		height: 25%;
	}
	button:nth-of-type(n+4) img{
		height: 40%;
	}
	button:nth-of-type(n+8) img{
		height: 60%;
	}
	button:nth-child(n+4):nth-child(-n+6) img {
		height: 50%;
	}
	/* button:nth-of-type(11) img, button:nth-of-type(12) img{
		height: 70%;
	}
	button:nth-of-type(11) img, button:nth-of-type(12) img{
		height: 70%;
	} */
@media screen and (min-width: 760px) and (max-width: 999px) {
}


@media screen and (min-width: 1000px), (orientation: landscape){
	section{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		height: 23vw;
	}
	.scrollD{
		overflow-y: scroll;
	}
	.scrollM{
		overflow-x: hidden;
	}
	.button{
		margin-bottom: 0.4vw;
		cursor: pointer;
		transition: 0.3s;
		background: linear-gradient(rgb(130, 255, 136), rgb(140, 242, 255));
		border: none;
		border-radius: 1vw;
		width: 9.7vw;
		height: 10.8vw;
		border-radius: 0.5vw;
		margin: 0vw 0vw 0.4vw 0vw;
	}
	.button:hover{
		transform: scale(1.1);
		background: none;
		transition: 0.3s;
	}
	img{
		height: 80%;
	}
	button:nth-of-type(11) img{
		width: initial;
	}
}
</style>