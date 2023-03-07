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
    chartCategories: [],
    chartSeries: [],
    width: {
      default: 500,
    },
    stacked: {
      default: false,
    },
  },

  computed: {
    ...mapState({}),
  },

  data() {
    return {
      configs: {
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
            stacked: this.stacked,
            stackType: "100%",
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
              show: true,
            },
            categories: this.chartCategories,
          },
          plotOptions: {
            bar: {
              horizontal: false,
              barHeight: "100%",
              barWidth: "100%",
              rangeBarGroupRows: false,
              distributed: false,
            },
          },
        },
        series: this.chartSeries,
      },
    };
  },
};
</script>
