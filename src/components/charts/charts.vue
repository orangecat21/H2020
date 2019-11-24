<template>
  <div id="chart">
    <apexchart type="donut" width="100%" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  props: ["series"],
  name: "chart",
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      chartOptions: {
        colors: ['#ac40f1','rgb(67, 251, 77)', 'rgb(36, 198, 219)','#e716ff','#02e2fd','rgb(48, 2, 173)'],
        labels: ['Initiative', 'Creativity' ,'Adaptability', 'Reflection', 'Multitasking', 'ListeningSkills', 'Teamwork', 'CriticalThinking', 'TimeManagement'],
        legend:{
            show: true,
            fontSize: '18vw',
            position: 'bottom',
            offsetX: 0,
            offsetY: 10
        }
      }
    }
  }
}
</script>

<style scoped>
div {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>