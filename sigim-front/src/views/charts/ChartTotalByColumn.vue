<template>
  <div>
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

    <div :key="index" :data-index="index" v-for="(item, index) in chartCategories.slice(0, chartLimit)">
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
    <div v-if="chartCategories.length > chartLimit">
      Listando {{ chartLimit }} de {{ chartCategories.length }} registros.
      <a href="javascript:void(0)" @click="openCloseModalDetail()">[CLIQUE PARA VER TODOS]</a>
    </div>
    <ModalChartTotalByColumnDetail
      :open="modalOpenDetail"
      :chartTitle="modalChartTitle"
      :chartColumnName="modalChartColumnName"
      :chartCategories="modalChartCategories"
      :chartSeries="modalChartSeries"
      :chartTotal="modalChartTotal"
    />
  </div>
</template>

<script>
import Label from "../../components/Label.vue";
import ModalChartTotalByColumnDetail from "./ModalChartTotalByColumnDetail.vue";

export default {
  components: {
    Label,
    ModalChartTotalByColumnDetail,
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
      default: 7,
    },
    chartCategories: [],
    chartSeries: [],
    width: {
      default: 500,
    },
    openDetail: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    getPercent(value, total) {
      let perc = (value * 100) / total;
      return perc.toFixed(2);
    },
  },

  data() {
    return {
      modalOpenDetail: this.openDetail,
      modalChartTitle: this.chartTitle,
      modalChartColumnName: this.chartColumnName,
      modalChartTotal: this.chartTotal,
      modalChartLimit: this.chartLimit,
      modalChartCategories: this.chartCategories,
      modalChartSeries: this.chartSeries,
      openCloseModalDetail() {
        this.modalOpenDetail = !this.modalOpenDetail;
      },
    };
  },
};
</script>
