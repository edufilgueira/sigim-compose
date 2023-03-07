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
    <div class="mx-12 my-6 grid grid-cols-2">
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Boletim de Ocorrência x Medida Protetiva x Processo Judicial - Por Mês"
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
          :chartSeries="getSerieByMonth()"
        />
      </div>
      <div class="m-1 p-4 text-purple shadow-lg text-sm h-full">
        <Label
          text="Boletim de Ocorrência x Medida Protetiva x Processo Judicial - Por Sistema de Origem"
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
          :chartCategories="getCategoriesBySourceSystems()"
          :chartSeries="getSerieBySourceSystem()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseText from "../components/BaseText.vue";
// import ChartBarHorizontal from "./charts/ChartBarHorizontal.vue";
// import ChartBarVertical from "./charts/ChartBarVertical.vue";
// import ChartPolarArea from "./charts/ChartPolarArea.vue";
// import ChartPie from "./charts/ChartPie.vue";
// import ChartSemidonut from "./charts/ChartSemidonut.vue";
// import ChartSemiCircleGauge from "./charts/ChartSemiCircleGauge.vue";
// // import ChartRadialBarBasic from "./charts/ChartRadialBarBasic.vue";
// import ChartTotalByColumn from "./charts/ChartTotalByColumn.vue";
// import ChartBarVerticalMultipleColumns from "./charts/ChartBarVerticalMultipleColumns.vue";
import ChartBarVerticalMultipleSeriesByCategorie from "./charts/ChartBarVerticalMultipleSeriesByCategorie.vue";
// import ChartTotalByColumnPie from "./charts/ChartTotalByColumnPie.vue";
import Label from "../components/Label.vue";
import { mapState } from "vuex";

export default {
  components: {
    BaseText,
    // ChartBarHorizontal,
    // ChartBarVertical,
    // ChartPolarArea,
    // ChartPie,
    // ChartSemidonut,
    // ChartSemiCircleGauge,
    // ChartRadialBarBasic,
    // ChartTotalByColumn,
    // ChartTotalByColumnPie,
    // ChartBarVerticalMultipleColumns,
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

    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdTotal", paramsDashboard);
    // //---
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByGender", paramsDashboard);
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByGenderIdentity", paramsDashboard);
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByScholarity", paramsDashboard);
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByCivilStatus", paramsDashboard);
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByBreed", paramsDashboard);
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdBySexualOrientation", paramsDashboard);
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByPwd", paramsDashboard);
    // //---
    // // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByAge", paramsDashboard);
    // //---
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByAge18a24", paramsDashboard);
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByAge25a34", paramsDashboard);
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByAge35a44", paramsDashboard);
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByAge45a54", paramsDashboard);
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByAge55orMore", paramsDashboard);
    // //---
    // // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByAverageIncome", paramsDashboard);
    // //---
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByCrimeType", paramsDashboard);
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByViolenceType", paramsDashboard);
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByViolenceMotivation", paramsDashboard);
    // //---
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdBySourceSystem", paramsDashboard);
    // //---
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByOccurrenceCity", paramsDashboard);
    // this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByRiskLevel", paramsDashboard);
    this.$store.dispatch("DashboardWomenIncidentReports/loadQtdByCommunicationMonth", paramsDashboard);
    this.$store.dispatch("DashboardWomenLawsuits/loadQtdByOpeningMonth", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdByAuthorizationMonth", paramsDashboard);

    this.$store.dispatch("SourceSystems/loadSourceSystems", paramsDashboard);

    this.$store.dispatch("DashboardWomenIncidentReports/loadQtdBySourceSystem", paramsDashboard);
    this.$store.dispatch("DashboardWomenLawsuits/loadQtdBySourceSystem", paramsDashboard);
    this.$store.dispatch("DashboardWomenProtectiveMeasures/loadQtdBySourceSystem", paramsDashboard);
  },
  computed: {
    ...mapState({
      // qtdTotal: (state) => state.DashboardWomenIncidentReports.qtdTotal,
      // //---
      // qtdByGender: (state) => state.DashboardWomenIncidentReports.qtdByGender,
      // qtdByGenderIdentity: (state) => state.DashboardWomenIncidentReports.qtdByGenderIdentity,
      // qtdByScholarity: (state) => state.DashboardWomenIncidentReports.qtdByScholarity,
      // qtdByCivilStatus: (state) => state.DashboardWomenIncidentReports.qtdByCivilStatus,
      // qtdByBreed: (state) => state.DashboardWomenIncidentReports.qtdByBreed,
      // qtdBySexualOrientation: (state) => state.DashboardWomenIncidentReports.qtdBySexualOrientation,
      // qtdByPwd: (state) => state.DashboardWomenIncidentReports.qtdByPwd,
      // //---
      // // qtdByAge: (state) => state.DashboardWomenIncidentReports.qtdByAge,
      // //---
      // qtdByAge18a24: (state) => state.DashboardWomenIncidentReports.qtdByAge18a24,
      // qtdByAge25a34: (state) => state.DashboardWomenIncidentReports.qtdByAge25a34,
      // qtdByAge35a44: (state) => state.DashboardWomenIncidentReports.qtdByAge35a44,
      // qtdByAge45a54: (state) => state.DashboardWomenIncidentReports.qtdByAge45a54,
      // qtdByAge55orMore: (state) => state.DashboardWomenIncidentReports.qtdByAge55orMore,
      // // qtdByAgeUninformed: (state) => state.DashboardWomenIncidentReports.qtdByAgeUninformed,
      // //---
      // // qtdByAverageIncome: (state) => state.DashboardWomenIncidentReports.qtdByAverageIncome,
      // //---
      // qtdByCrimeType: (state) => state.DashboardWomenIncidentReports.qtdByCrimeType,
      // qtdByViolenceType: (state) => state.DashboardWomenIncidentReports.qtdByViolenceType,
      // qtdByViolenceMotivation: (state) => state.DashboardWomenIncidentReports.qtdByViolenceMotivation,
      // //---
      // qtdBySourceSystem: (state) => state.DashboardWomenIncidentReports.qtdBySourceSystem,
      // //---
      // qtdByOccurrenceCity: (state) => state.DashboardWomenIncidentReports.qtdByOccurrenceCity,
      // qtdByRiskLevel: (state) => state.DashboardWomenIncidentReports.qtdByRiskLevel,
      qtdIncRepByCommunicationMonth: (state) => state.DashboardWomenIncidentReports.qtdByCommunicationMonth,
      qtdLawsuitByOpeningMonth: (state) => state.DashboardWomenLawsuits.qtdByOpeningMonth,
      qtdProtMeasureByAuthorizationMonth: (state) =>
        state.DashboardWomenProtectiveMeasures.qtdByAuthorizationMonth,
      sourceSystems: (state) => state.SourceSystems.list,
      qtdIncRepBySourceSystem: (state) => state.DashboardWomenIncidentReports.qtdBySourceSystem,
      qtdLawsuitBySourceSystem: (state) => state.DashboardWomenLawsuits.qtdBySourceSystem,
      qtdProtMeasureBySourceSystem: (state) => state.DashboardWomenProtectiveMeasures.qtdBySourceSystem,
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

    getSerieByMonth() {
      let qtdIncRep = this.qtdIncRepByCommunicationMonth;
      let qtdLawsuit = this.qtdLawsuitByOpeningMonth;
      let qtdProtMeasure = this.qtdProtMeasureByAuthorizationMonth;

      let dataChart = [];

      let monthsIncRep = [];
      let monthsLawsuit = [];
      let monthsProtMeasure = [];

      for (let m = 0; m < 12; m++) {
        monthsIncRep[m] = 0;
        monthsLawsuit[m] = 0;
        monthsProtMeasure[m] = 0;
      }

      qtdIncRep.forEach((element) => {
        monthsIncRep[element.month - 1] = element.total;
      });
      qtdLawsuit.forEach((element) => {
        monthsLawsuit[element.month - 1] = element.total;
      });
      qtdProtMeasure.forEach((element) => {
        monthsProtMeasure[element.month - 1] = element.total;
      });

      let serieIncRep = {
        name: "Boletim de Ocorrência",
        data: monthsIncRep,
      };
      dataChart.push(serieIncRep);

      let serieProtMeasure = {
        name: "Medida Protetiva",
        data: monthsProtMeasure,
      };
      dataChart.push(serieProtMeasure);

      let serieLawsuit = {
        name: "Processo Judicial",
        data: monthsLawsuit,
      };
      dataChart.push(serieLawsuit);

      return dataChart;
    },
    // ------------------------------------------------
    getCategoriesBySourceSystems() {
      let dataChart = [];
      dataChart.push("Boletim de Ocorrência");
      dataChart.push("Medida Protetiva");
      dataChart.push("Processo Judicial");
      return dataChart;
    },

    getSerieBySourceSystem() {
      let qtdIncRep = this.qtdIncRepBySourceSystem;
      let qtdLawsuit = this.qtdLawsuitBySourceSystem;
      let qtdProtMeasure = this.qtdProtMeasureBySourceSystem;

      let dataChart = [];

      let valuesIncRep = [];
      let valuesLawsuit = [];
      let valuesProtMeasure = [];

      this.sourceSystems.forEach((element) => {
        valuesIncRep[element.name] = 0;
        valuesLawsuit[element.name] = 0;
        valuesProtMeasure[element.name] = 0;
      });

      qtdIncRep.forEach((element) => {
        valuesIncRep[element.name] = element.total;
      });

      qtdLawsuit.forEach((element) => {
        valuesLawsuit[element.name] = element.total;
      });

      qtdProtMeasure.forEach((element) => {
        valuesProtMeasure[element.name] = element.total;
      });

      this.sourceSystems.forEach((element) => {
        let serieName = element.name;
        let serieValues = [];
        serieValues.push(valuesIncRep[serieName]);
        serieValues.push(valuesProtMeasure[serieName]);
        serieValues.push(valuesLawsuit[serieName]);
        let serie = {
          name: serieName,
          data: serieValues,
        };
        dataChart.push(serie);
      });

      return dataChart;
    },
  },
};
</script>
