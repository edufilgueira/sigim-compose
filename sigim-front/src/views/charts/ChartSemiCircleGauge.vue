<template>
  <div>
    <apexchart
      :width="width"
      type="radialBar"
      :options="configs.options"
      :series="configs.series"
    ></apexchart>
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
            type: "radialBar",
            offsetY: 5,
            sparkline: {
              enabled: true,
            },
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: "97%",
                margin: 5, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: "#999",
                  opacity: 1,
                  blur: 2,
                },
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  offsetY: -4,
                  fontSize: "12px",
                },
              },
            },
          },
          grid: {
            padding: {
              top: -10,
              bottom: 50,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "light",
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91],
            },
          },
          labels: this.chartCategories,
          legend: {
            show: true,
            floating: false,
            fontSize: "12px",
            position: "right",
            offsetX: 0,
            offsetY: -10,
            labels: {
              useSeriesColors: true,
            },
            markers: {
              size: 0,
            },
            formatter: function (seriesName, opts) {
              return seriesName + ": " + opts.w.globals.series[opts.seriesIndex] + " %";
            },
            itemMargin: {
              vertical: 1,
            },
          },
        },
      },
    };
  },
};
</script>
