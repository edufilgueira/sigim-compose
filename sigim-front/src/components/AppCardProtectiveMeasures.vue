<template>
  <BaseCard :class="liClass">
    <div class="grid grid-cols-6 items-center">
      <div class="mt-4">
        <BaseText
          :text="protectiveMeasure.source_system_name"
          typeText="custom"
          mode="uppercase"
          weight="bold"
          size="x1"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="protectiveMeasure.number"
          typeText="custom"
          mode="uppercase"
          weight="bold"
          size="x1"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="protectiveMeasure.incident_report.number"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="protectiveMeasure.petitioner"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 ml-2">
        <BaseText
          :text="protectiveMeasure.police_authority"
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
          dispatch="ProtectiveMeasures/openViewModal"
          :payload="protectiveMeasure"
          v-if="permitShow"
        />
        <AppButtonIcon
          iconName="edit"
          dispatch="ProtectiveMeasures/openEditModal"
          :payload="protectiveMeasure"
          v-if="permitUp"
        />
        <AppButtonIcon
          iconName="delete"
          dispatch="ProtectiveMeasures/toggleModalDeleteProtectiveMeasure"
          :payload="protectiveMeasure"
          v-if="permitDes"
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
    protectiveMeasure: {
      type: Object,
    },
  },

  data() {
    return {
      permitShow: false,
      permitUp: false,
      permitDes: false,
      permit: false,
    };
  },
  methods: {
    ...mapActions({ canAcces: "AccessControl/canAcces" }),
    protectiveMeasureCreate() {
      this.canAcces("protective_measure_index").then((resp) => {
        this.permit = resp;
      });
    },
    protectiveMeasureAcces() {
      this.canAcces("protective_measure_index").then((resp) => {
        this.permit = resp;
      });
    },
    protectiveMeasureDelete() {
      this.canAcces("protective_measure_destroy").then((resp) => {
        this.permitDes = resp;
      });
    },
    protectiveMeasureChange() {
      this.canAcces("protective_measure_update").then((resp) => {
        this.permitUp = resp;
      });
    },
  },

  created() {
    // console.log("protectiveMeasure info", this.protectiveMeasure);
    // console.log("protectiveMeasure", this.protectiveMeasure);
    this.protectiveMeasureCreate();
    this.protectiveMeasureAcces();
    this.protectiveMeasureChange();
    this.protectiveMeasureDelete();
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
