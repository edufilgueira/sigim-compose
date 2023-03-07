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
    totalSeries: {
      type: Number,
      default: 0,
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
            height: 350,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              offsetY: 5,
              startAngle: 0,
              endAngle: 240,
              dataLabels: {
                name: {
                  fontSize: "12px",
                },
                value: {
                  fontSize: "12px",
                },
                total: {
                  show: true,
                  label: "Total",
                  formatter: function (w) {
                    this.totalSeries = 0;
                    w.globals.series.forEach((serie) => {
                      this.totalSeries += parseFloat(serie);
                    });
                    // console.log(" TOTALLLL ", this.totalSeries);
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return this.totalSeries + " %";
                  },
                },
              },
            },
          },
          labels: this.chartCategories,
          legend: {
            show: true,
            floating: true,
            fontSize: "12px",
            position: "left",
            offsetX: 0,
            offsetY: 5,
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
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  show: false,
                },
              },
            },
          ],
          tooltip: {
            enabled: false,
          },
        },
      },
    };
  },
};
</script>
