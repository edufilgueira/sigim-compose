<template>
  <div>
    <BaseModal headerColor="#62146a" v-if="open">
      <template v-slot:header>
        <div class="grid grid-cols-2">
          <div class="mb-3 justify-self-start">
            <div id="options" class="md:w-full lg:w-full">
              <div id="name-incidentReport">
                <BaseText
                  :text="getIncidentReportNumber"
                  type-text="custom"
                  weight="medium"
                  mode="capitalize"
                  color="white"
                  size="xl"
                />
              </div>
            </div>
          </div>
          <div class="justify-self-end">
            <AppButtonIcon for-close dispatch="IncidentReports/closeViewModal" />
          </div>
        </div>
      </template>
      <template v-slot:body>
        <div class="container1">
          <div class="container2">
            <IncidentReportData />
          </div>
        </div>
      </template>
    </BaseModal>
  </div>
</template>

<script>
import BaseModal from "../../components/BaseModal.vue";
import AppButtonIcon from "../../components/AppButtonIcon.vue";
import BaseText from "../../components/BaseText.vue";
import IncidentReportData from "./IncidentReportData.vue";
import { mapState } from "vuex";

export default {
  components: {
    BaseModal,
    BaseText,
    AppButtonIcon,
    IncidentReportData,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState({
      incidentReport: (state) => state.IncidentReports.incidentReport,
      getIncidentReportNumber() {
        return `Boletim de Ocorrência - Nº ${this.incidentReport.number}`;
      },
    }),
  },
};
</script>

<style scoped>
.container1 {
  height: 800px;
  width: 100%;
  overflow: hidden;
}

.container2 {
  width: 105%;
  height: 100%;
  overflow: auto;
  padding-right: 4%;
  padding-left: 4px;
}
</style>
<style>
.buttons-insc {
  margin-top: -10%;
}
.show {
  display: block;
}
.hide {
  display: none;
}
</style>
