<template>
  <vc-donut class="donut"
    background="white" foreground="#FF6384"
    :size="78" unit="%" :thickness="20"
    hasLegend legendPlacement="top"
    :sections="sections" :total="1000"
  >
    {{ $t(hardSkill) }}
  </vc-donut>
</template>

<script>
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import Vue from 'vue'

Vue.use(Donut);
export default {
    props:['sections','hardSkill']
}
</script>

<style>
 @media screen and (max-width: 999px) and (orientation: landscape){
     .cdc-legend{
     justify-content: flex-start;
     font-size: .7vw;
     color: rgb(48, 2, 173);
 }
 }
 @media screen and (min-width: 1000px), (orientation: landscape) {
   .donut{
     font-size: 1vw;
     text-align: left;
 }
 .cdc-legend{
     justify-content: flex-start;
     color: rgb(48, 2, 173);
 }
 }
</style>