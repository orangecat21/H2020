<template>
  <vc-donut
    class="donut"
    background="white"
    foreground="#FF6384"
    :size="55"
    unit="vw"
    :thickness="30"
    hasLegend
    legendPlacement="right"
    :sections="sections"
    :total="1000"
  >{{ $t(hardSkill) }}</vc-donut>
</template>

<script>
import Donut from "vue-css-donut-chart";
import "vue-css-donut-chart/dist/vcdonut.css";
import Vue from "vue";

Vue.use(Donut);
export default {
  props: ["sections", "hardSkill"]
};
</script>

<style>
.donut {
  font-size: 2.5vw;
  text-align: left;
}
.cdc-legend {
  justify-content: flex-start;
}
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