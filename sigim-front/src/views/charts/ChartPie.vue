<template>
  <div>
    <apexchart :width="width" type="pie" :options="configs.options" :series="configs.series"></apexchart>
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
            width: 380,
            type: "pie",
          },
          labels: this.chartCategories,
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      },
    };
  },
};
</script>
