<template>
  <BaseCard :class="liClass">
    <div class="grid grid-cols-9 items-center">
      <div class="mt-4">
        <BaseText
          :text="incidentReport.source_system_name"
          typeText="custom"
          mode="uppercase"
          weight="bold"
          size="x1"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="incidentReport.number"
          typeText="custom"
          mode="uppercase"
          weight="bold"
          size="x1"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="incidentReport.crime_type.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="incidentReport.violence_type.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="incidentReport.violence_motivation.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 ml-1">
        <BaseText
          :text="incidentReport.victim.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 ml-3">
        <BaseText
          :text="incidentReport.aggressor.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 ml-3">
        <BaseText
          :text="hasProtectiveMeasure()"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 justify-self-end">
        <AppButtonIcon
          iconName="visibility"
          dispatch="IncidentReports/openViewModal"
          :payload="incidentReport"
        />
        <AppButtonIcon iconName="edit" dispatch="IncidentReports/openEditModal" :payload="incidentReport" />
        <AppButtonIcon
          iconName="delete"
          dispatch="IncidentReports/toggleModalDeleteIncidentReport"
          :payload="incidentReport"
        />
      </div>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from "./BaseCard.vue";
import AppButtonIcon from "./AppButtonIcon.vue";
import BaseText from "./BaseText.vue";
import { mapActions } from "vuex";

export default {
  components: {
    BaseCard,
    AppButtonIcon,
    BaseText,
  },

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    incidentReport: {
      type: Object,
    },
  },
  data() {
    return {
      permitUp: false,
      permitDes: false,
      permit: false,
    };
  },
  methods: {
    ...mapActions({ canAcces: "AccessControl/canAcces" }),
    userAcces() {
      this.canAcces("user_index").then((resp) => {
        this.permit = resp;
      });
    },
    userDelete() {
      this.canAcces("user_destroy").then((resp) => {
        this.permitDes = resp;
      });
    },
    userChange() {
      this.canAcces("user_update").then((resp) => {
        this.permitUp = resp;
      });
    },
    hasProtectiveMeasure() {
      if (this.incidentReport.protective_measure_count > 0) {
        return "Sim";
      } else {
        return "Não";
      }
    },
  },

  created() {
    // console.log("User info", this.user);
    // console.log("incidentReport", this.incidentReport);
    this.userAcces();
    this.userChange();
    this.userDelete();
  },

  computed: {
    liClass() {
      return {
        "w-full": true,
        "h-28": true,
        "hover:shadow-box": true,
        "rounded-xl": true,
        "p-6": true,
        "cursor-pointer": true,
      };
    },
    iconClass() {
      let css = [];
      css.push("rounded-full");
      css.push("rounded-lg");
      css.push("w-12");
      css.push("h-12");
      css.push("grid");
      css.push("mr-3");
      css.push("items-center");
      css.push("justify-center");
      css.push("min-w-1");

      return css;
    },
  },
};
</script>

<style scoped>
.grids-cols-custom2 {
  grid-template-columns: 23% 15% 16% 21%;
}
.grid-cols-custom {
  grid-template-columns: 45% 15% 10% 15% 10%;
}
.min-w-1 {
  min-width: 3rem;
}
</style>
