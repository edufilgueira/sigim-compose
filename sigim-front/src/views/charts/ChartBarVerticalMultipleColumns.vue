<template>
  <div>
    <apexchart :width="width" type="bar" :options="configs.options" :series="configs.series"></apexchart>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},

  props: {
    chartSeries: [],
    width: {
      default: 500,
    },
  },

  computed: {
    ...mapState({}),
  },

  data() {
    return {
      configs: {
        series: this.chartSeries,
        options: {
          colors: [
            "#845EC2",
            "#D65DB1",
            "#FF6F91",
            "#FF9671",
            "#FFC75F",
            "#ecc789",
            "#D5CABD",
            "#2aa5d5",
            "#B39CD0",
            "#00C9A7",
            "#cd5f4c",
            "#e6a6fc",
          ],
          chart: {
            id: "SIGIM",
            type: "bar",
            height: 350,
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%",
              endingShape: "rounded",
            },
          },
          dataLabels: {
            enabled: true,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
          },
          xaxis: {
            labels: {
              show: false,
            },
            categories: ["TOTAL"],
          },
          fill: {
            opacity: 1,
          },
        },
      },
    };
  },
};
</script>
