<template>
  <div>
    <div>
      <apexchart :width="width" type="pie" :options="configs.options" :series="configs.series"></apexchart>
    </div>
    <div class="grid grid-cols-2 m-1" :width="width">
      <div>
        <Label
          :text="chartTitle"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
      </div>
      <div class="text-right">
        <Label
          :text="'TOTAL: ' + chartTotal"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 m-1">
      <div class="justify-self-start col-span-3">
        <Label
          :text="chartColumnName"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
      </div>
      <div class="text-right">
        <Label
          :text="'TOTAL por ' + chartColumnName"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
      </div>
      <div class="text-right">
        <Label
          text="%"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
      </div>
    </div>

    <div :key="index" :data-index="index" v-for="(item, index) in chartCategories">
      <div class="grid grid-cols-5 m-1 text-xs">
        <div class="justify-self-start col-span-3">
          <Label
            :text="item"
            :icon="null"
            :icon-type="null"
            type="text-sm"
            weight="normal"
            normal
            mode="uppercase"
          />
        </div>
        <div class="text-right">
          <Label
            :text="chartSeries[index]"
            :icon="null"
            :icon-type="null"
            type="text-sm"
            weight="normal"
            normal
            mode="uppercase"
          />
        </div>
        <div class="text-right">
          <Label
            :text="getPercent(chartSeries[index], chartTotal)"
            :icon="null"
            :icon-type="null"
            type="text-sm"
            weight="normal"
            normal
            mode="uppercase"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Label from "../../components/Label.vue";
import { mapState } from "vuex";

export default {
  components: {
    Label,
  },

  props: {
    chartTitle: {
      type: String,
      default: "Total por campo",
    },
    chartColumnName: {
      type: String,
      default: "Campo",
    },
    chartTotal: {
      type: Number,
      default: 0,
    },
    chartLimit: {
      type: Number,
      default: 0,
    },
    chartCategories: [],
    chartSeries: [],
    width: {
      default: 500,
    },
  },

  computed: {
    ...mapState({}),
  },

  methods: {
    getPercent(value, total) {
      let perc = (value * 100) / total;
      return perc.toFixed(2);
    },
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
