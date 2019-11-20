<template>
	<section :class="[{scrollM:items.length >=1},{scrollD:items.length >=11}]">
		<button class="button"
			v-for="item in items"
			v-bind:key="item.id"
			v-on:click="saveToStore(item.skill)">
			<p>{{ item.skill }}</p>
		</button>
	</section>
</template>

<script>
export default {
	props: ['items'],
	name:'hardSkillItems',
	methods:{
		saveToStore(elem){
			this.$store.dispatch('PUSH_HARDSKILL_NAME', elem)
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
		height: 65vw;
	}
	.scrollM{
		overflow-x: scroll;
	}
	.button{
		font-size: 6vw;
		color: #ac40f1;
		margin-bottom: 0.4vw;
		width: 41vw;
		height: calc(var(--vh, 1vh) * 30);
		margin-top: calc(var(--vh, 1vh) * 0.5);
		margin-right: calc(var(--vh, 1vh) * 0.7);
		cursor: pointer;
		flex-shrink: 0;
		transition: 0.3s;
		background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
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
		border: 0.2vw solid #ac40f1;
	}
	.button:active{
		transform: scale(1.1);
		background: #ac40f1;
		transition: 0.3s;
	}
@media screen and (min-width: 760px) and (max-width: 999px) {
}


@media screen and (min-width: 1000px), (orientation: landscape){
	section{
		flex-wrap: wrap;
		height: 27vw;
	}
	.scrollD{
		overflow-y: scroll;
	}
	.scrollM{
		overflow-x: hidden;
	}
	.button{
		font-size: 1.5vw;
		color: #fff;
		cursor: pointer;
		transition: 0.3s;
		background: linear-gradient(rgb(130, 255, 136), rgb(140, 242, 255));
		border: none;
		width: 9.8vw;
		height: 12vw;
		border-radius: 0.5vw;
		margin: 0vw 0.4vw 0.4vw 0vw;
	}
	.button:hover{
		transform: scale(1.1);
		background: none;
		transition: 0.3s;
	}
	.button:focus{
		transform: scale(1.1);
		background: #ac40f1;
		transition: 0.3s;
	}
}
</style>