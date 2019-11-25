<template>
  <vc-donut
    class="donut"
    background="white"
    foreground="#FF6384"
    :size="65"
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
  font-size: 2.7vw;
  text-align: left;
}
.cdc-legend {
  justify-content: flex-start;
}
</style>