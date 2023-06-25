<script>
import { mapGetters } from "vuex";
import VueApexCharts from "vue3-apexcharts";
export default {
  name: "TheChart",
  components: { VueApexCharts },
  data() {
    return {
      options: {
        chart: {
          type: "area",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        stroke: {
          curve: "smooth",
        },
        grid: {
          show: false,
        },
      },
    };
  },
  computed: {
    ...mapGetters(["accountData", "type"]),
    chartSeries() {
      return [
        {
          data: this.accountData.map((type) => type[this.type]),
        },
      ];
    },
  },
};
</script>

<template>
  <div class="chart">
    <VueApexCharts
      type="area"
      height="350"
      :options="options"
      :series="chartSeries"
    ></VueApexCharts>
  </div>
</template>

<style lang="scss">
.chart {
  @apply rounded bg-white p-10;
}
</style>
