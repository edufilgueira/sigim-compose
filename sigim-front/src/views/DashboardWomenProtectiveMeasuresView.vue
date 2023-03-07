<template>
  <div class="mx-10 my-6">
    <div class="pl-12">
      <BaseText
        text="Dashboard Mulher"
        typeText="custom"
        weight="semibold"
        :italic="false"
        size="3xl"
        color="ashes-hover"
      />
    </div>
    <div class="pl-12">
      <BaseText
        text="Medidas Protetivas"
        typeText="custom"
        weight="semibold"
        :italic="false"
        size="2xl"
        color="ashes-hover"
      />
    </div>
    <div class="mx-12 my-6 grid grid-cols-2">
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Sistema de Origem dos Dados"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartPie
          width="100%"
          :chartCategories="getCategoriesToChart(qtdBySourceSystem)"
          :chartSeries="getSerieToChart(qtdBySourceSystem)"
        />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Nível de Risco"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartPolarArea
          width="100%"
          :chartCategories="getCategoriesToChart(qtdByRiskLevel)"
          :chartSeries="getSerieToChart(qtdByRiskLevel)"
        />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Gênero"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartSemiCircleGauge
          width="100%"
          :chartCategories="getCategoriesToChart(qtdByGender)"
          :chartSeries="getSeriePercentToChart(qtdByGender, qtdTotal)"
        />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Identidade de Gênero"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartSemidonut
          width="100%"
          :chartCategories="getCategoriesToChart(qtdByGenderIdentity)"
          :chartSeries="getSerieToChart(qtdByGenderIdentity)"
        />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Orientação Sexual"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartPolarArea
          width="100%"
          :chartCategories="getCategoriesToChart(qtdBySexualOrientation)"
          :chartSeries="getSerieToChart(qtdBySexualOrientation)"
        />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Escolaridade"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartBarHorizontal
          width="100%"
          :chartCategories="getCategoriesToChart(qtdByScholarity)"
          :chartSeries="getSerieToChart(qtdByScholarity)"
        />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Estado Civil"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartBarVertical
          width="100%"
          :chartCategories="getCategoriesToChart(qtdByCivilStatus)"
          :chartSeries="getSerieToChart(qtdByCivilStatus)"
        />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Raça"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartPie
          width="100%"
          :chartCategories="getCategoriesToChart(qtdByBreed)"
          :chartSeries="getSerieToChart(qtdByBreed)"
        />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Deficiência"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartBarVerticalMultipleColumns width="100%" :chartSeries="getSerieByPwd()" />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Faixa Etária"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartSemidonut
          width="100%"
          chartTitle="Atendimentos por Faixa Etária"
          chartColumnName="Faixa Etária"
          :chartCategories="getCategoriesByAge()"
          :chartSeries="getSerieByAge()"
          :chartTotal="qtdTotal"
        />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Cidade"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartTotalByColumn
          width="100%"
          chartTitle="Atendimento por cidade"
          chartColumnName="Cidade"
          :chartCategories="getCategoriesToChart(qtdByOccurrenceCity)"
          :chartSeries="getSerieToChart(qtdByOccurrenceCity)"
          :chartTotal="qtdTotal"
          :chartLimit="10"
        />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Tipo de Crime"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartPie
          width="100%"
          :chartCategories="getCategoriesToChart(qtdByCrimeType)"
          :chartSeries="getSerieToChart(qtdByCrimeType)"
        />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Tipo de Violência"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartPie
          width="100%"
          :chartCategories="getCategoriesToChart(qtdByViolenceType)"
          :chartSeries="getSerieToChart(qtdByViolenceType)"
        />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Motivação da Violência"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartPie
          width="100%"
          :chartCategories="getCategoriesToChart(qtdByViolenceMotivation)"
          :chartSeries="getSerieToChart(qtdByViolenceMotivation)"
        />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Por Mês"
          :icon="null"
          :icon-type="null"
          type="text-sm"
          weight="semibold"
          normal
          mode="uppercase"
        />
        <div class="border-ashes w-full border"></div>
        <ChartBarVerticalMultipleSeriesByCategorie
          width="100%"
          :chartCategories="getCategoriesByMonth()"
          :chartSeries="getSerieByMonth(qtdByAuthorizationMonth)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseText from "../components/BaseText.vue";
import ChartBarHorizontal from "./charts/ChartBarHorizontal.vue";
import ChartBarVertical from "./charts/ChartBarVertical.vue";
import ChartPolarArea from "./charts/ChartPolarArea.vue";
import ChartPie from "./charts/ChartPie.vue";
import ChartSemidonut from "./charts/ChartSemidonut.vue";
import ChartSemiCircleGauge from "./charts/ChartSemiCircleGauge.vue";
// import ChartRadialBarBasic from "./charts/ChartRadialBarBasic.vue";
import ChartTotalByColumn from "./charts/ChartTotalByColumn.vue";
import ChartBarVerticalMultipleColumns from "./charts/ChartBarVerticalMultipleColumns.vue";
import ChartBarVerticalMultipleSeriesByCategorie from "./charts/ChartBarVerticalMultipleSeriesByCategorie.vue";
// import ChartTotalByColumnPie from "./charts/ChartTotalByColumnPie.vue";
import Label from "../components/Label.vue";
import { mapState } from "vuex";

export default {
  components: {
    BaseText,
    ChartBarHorizontal,
    ChartBarVertical,
    ChartPolarArea,
    ChartPie,
    ChartSemidonut,
    ChartSemiCircleGauge,
    // ChartRadialBarBasic,
    ChartTotalByColumn,
    // ChartTotalByColumnPie,
    ChartBarVerticalMultipleColumns,
    ChartBarVerticalMultipleSeriesByCategorie,
    Label,
  },
  beforeCreate() {
    let paramsDashboard = {
      params: {
        state_id: "",
        city_id: "",
        place_of_birth_id: "",
        gender_id: "",
        gender_identity_id: "",
        sexual_orientation_id: "",
        breed_id: "",
        skin_color_id: "",
        ethnicity_id: "",
        civil_status_id: "",
        scholarity_id: "",
        average_income: "",
        average_income_start: "",
        average_income_end: "",
        chemical_dependent: "",
        psychological_disorder: "",
        pwd: "",
        order_by: "total DESC",
        limit: "",
      },
    };

    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdTotal", paramsDashboard);
    //---
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByGender", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByGenderIdentity", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByScholarity", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByCivilStatus", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByBreed", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdBySexualOrientation", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByPwd", paramsDashboard);
    //---
    // this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByAge", paramsDashboard);
    //---
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByAge18a24", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByAge25a34", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByAge35a44", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByAge45a54", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByAge55orMore", paramsDashboard);
    //---
    // this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByAverageIncome", paramsDashboard);
    //---
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByCrimeType", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByViolenceType", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByViolenceMotivation", paramsDashboard);
    //---
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdBySourceSystem", paramsDashboard);
    //---
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByOccurrenceCity", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByRiskLevel", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByAuthorizationMonth", paramsDashboard);
  },
  computed: {
    ...mapState({
      qtdTotal: (state) => state.DashboardWomenProtectiveMeasures.qtdTotal,
      //---
      qtdByGender: (state) => state.DashboardWomenProtectiveMeasures.qtdByGender,
      qtdByGenderIdentity: (state) => state.DashboardWomenProtectiveMeasures.qtdByGenderIdentity,
      qtdByScholarity: (state) => state.DashboardWomenProtectiveMeasures.qtdByScholarity,
      qtdByCivilStatus: (state) => state.DashboardWomenProtectiveMeasures.qtdByCivilStatus,
      qtdByBreed: (state) => state.DashboardWomenProtectiveMeasures.qtdByBreed,
      qtdBySexualOrientation: (state) => state.DashboardWomenProtectiveMeasures.qtdBySexualOrientation,
      qtdByPwd: (state) => state.DashboardWomenProtectiveMeasures.qtdByPwd,
      //---
      // qtdByAge: (state) => state.DashboardWomenProtectiveMeasures.qtdByAge,
      //---
      qtdByAge18a24: (state) => state.DashboardWomenProtectiveMeasures.qtdByAge18a24,
      qtdByAge25a34: (state) => state.DashboardWomenProtectiveMeasures.qtdByAge25a34,
      qtdByAge35a44: (state) => state.DashboardWomenProtectiveMeasures.qtdByAge35a44,
      qtdByAge45a54: (state) => state.DashboardWomenProtectiveMeasures.qtdByAge45a54,
      qtdByAge55orMore: (state) => state.DashboardWomenProtectiveMeasures.qtdByAge55orMore,
      // qtdByAgeUninformed: (state) => state.DashboardWomenProtectiveMeasures.qtdByAgeUninformed,
      //---
      // qtdByAverageIncome: (state) => state.DashboardWomenProtectiveMeasures.qtdByAverageIncome,
      //---
      qtdByCrimeType: (state) => state.DashboardWomenProtectiveMeasures.qtdByCrimeType,
      qtdByViolenceType: (state) => state.DashboardWomenProtectiveMeasures.qtdByViolenceType,
      qtdByViolenceMotivation: (state) => state.DashboardWomenProtectiveMeasures.qtdByViolenceMotivation,
      //---
      qtdBySourceSystem: (state) => state.DashboardWomenProtectiveMeasures.qtdBySourceSystem,
      //---
      qtdByOccurrenceCity: (state) => state.DashboardWomenProtectiveMeasures.qtdByOccurrenceCity,
      qtdByRiskLevel: (state) => state.DashboardWomenProtectiveMeasures.qtdByRiskLevel,
      qtdByAuthorizationMonth: (state) => state.DashboardWomenProtectiveMeasures.qtdByAuthorizationMonth,
    }),
  },
  methods: {
    getCategoriesToChart(data) {
      let dataChart = [];
      data.forEach((element) => {
        dataChart.push(element.name);
      });
      return dataChart;
    },
    getSerieToChart(data) {
      let dataChart = [];
      data.forEach((element) => {
        dataChart.push(element.total);
      });
      return dataChart;
    },
    getSeriePercentToChart(data, total) {
      let dataChart = [];
      data.forEach((element) => {
        dataChart.push(this.getPercent(element.total, total));
      });
      return dataChart;
    },
    getPercent(value, total) {
      let perc = ((value * 100) / total).toFixed(2);
      return perc;
    },
    getCategoriesByAge() {
      let dataChart = [];
      dataChart.push("18 a 24");
      dataChart.push("25 a 34");
      dataChart.push("35 a 44");
      dataChart.push("45 a 54");
      dataChart.push("55 ou Mais");
      dataChart.push("Não Informado");
      return dataChart;
    },
    getSerieByAge() {
      let dataChart = [];
      dataChart.push(this.qtdByAge18a24);
      dataChart.push(this.qtdByAge25a34);
      dataChart.push(this.qtdByAge35a44);
      dataChart.push(this.qtdByAge45a54);
      dataChart.push(this.qtdByAge55orMore);
      let qtdByAgeUninformed = this.qtdTotal;
      qtdByAgeUninformed -= this.qtdByAge18a24;
      qtdByAgeUninformed -= this.qtdByAge25a34;
      qtdByAgeUninformed -= this.qtdByAge35a44;
      qtdByAgeUninformed -= this.qtdByAge45a54;
      qtdByAgeUninformed -= this.qtdByAge55orMore;
      dataChart.push(qtdByAgeUninformed);
      return dataChart;
    },

    getSerieByPwd() {
      let dataChart = [];
      this.qtdByPwd.forEach((element) => {
        if (element.pwd) {
          dataChart.push({
            name: "COM",
            data: [element.total],
          });
        } else {
          dataChart.push({
            name: "SEM",
            data: [element.total],
          });
        }
      });
      return dataChart;
    },

    getCategoriesByMonth() {
      let dataChart = [];
      dataChart.push("JAN");
      dataChart.push("FEV");
      dataChart.push("MAR");
      dataChart.push("ABR");
      dataChart.push("MAI");
      dataChart.push("JUN");
      dataChart.push("JUL");
      dataChart.push("AGO");
      dataChart.push("SET");
      dataChart.push("OUT");
      dataChart.push("NOV");
      dataChart.push("DEZ");

      return dataChart;
    },

    getSerieByMonth(data) {
      let dataChart = [];
      let months = [];

      for (let m = 0; m < 12; m++) {
        months[m] = 0;
      }

      data.forEach((element) => {
        months[element.month - 1] = element.total;
      });

      let serie = {
        name: "Medida Protetiva",
        data: months,
      };

      dataChart.push(serie);
      return dataChart;
    },
  },
};
</script>
