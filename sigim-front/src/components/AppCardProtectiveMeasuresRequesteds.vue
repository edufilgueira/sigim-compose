<template>
  <BaseCard :class="liClass">
    <div class="grid grid-cols-8 items-center">
      <div class="mt-4">
        <BaseText
          :text="protectiveMeasureRequested.protective_measure.number"
          typeText="custom"
          mode="uppercase"
          weight="bold"
          size="x1"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="protectiveMeasureRequested.incident_report.number"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 ml-1">
        <BaseText
          :text="protectiveMeasureRequested.victim.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 ml-1">
        <BaseText
          :text="protectiveMeasureRequested.aggressor.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 ml-2 col-span-2">
        <BaseText
          :text="protectiveMeasureRequested.protective_measure_type.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 ml-10">
        <BaseText
          :text="isRequestedProtectiveMeasure()"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 justify-self-end">
        <!-- <AppButtonIcon
          iconName="visibility"
          dispatch="ProtectiveMeasuresRequesteds/openViewModal"
          :payload="protectiveMeasureRequested"
          v-if="permitShow"
        /> -->
        <AppButtonIcon
          iconName="edit"
          dispatch="ProtectiveMeasuresRequesteds/openEditModal"
          :payload="protectiveMeasureRequested"
          v-if="permitUp"
        />
        <AppButtonIcon
          iconName="delete"
          dispatch="ProtectiveMeasuresRequesteds/toggleModalDeleteProtectiveMeasureRequested"
          :payload="protectiveMeasureRequested"
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
    protectiveMeasureRequested: {
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
    protectiveMeasureRequestedsCreate() {
      this.canAcces("protective_measure_requested_index").then((resp) => {
        this.permit = resp;
      });
    },
    protectiveMeasureRequestedsAcces() {
      this.canAcces("protective_measure_requested_index").then((resp) => {
        this.permit = resp;
      });
    },
    protectiveMeasureRequestedsDelete() {
      this.canAcces("protective_measure_requested_destroy").then((resp) => {
        this.permitDes = resp;
      });
    },
    protectiveMeasureRequestedsChange() {
      this.canAcces("protective_measure_requested_update").then((resp) => {
        this.permitUp = resp;
      });
    },
    isRequestedProtectiveMeasure() {
      if (this.protectiveMeasureRequested.requested) {
        return "Sim";
      } else {
        return "Não";
      }
    },
  },

  created() {
    // console.log("protectiveMeasureRequesteds info", this.protectiveMeasureRequesteds);
    // console.log("protectiveMeasureRequesteds", this.protectiveMeasureRequesteds);
    this.protectiveMeasureRequestedsCreate();
    this.protectiveMeasureRequestedsAcces();
    this.protectiveMeasureRequestedsChange();
    this.protectiveMeasureRequestedsDelete();
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
