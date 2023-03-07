<template>
  <BaseCard :class="liClass">
    <div class="grid grid-cols-8 items-center">
      <div class="mt-4">
        <BaseText
          :text="lawsuit.source_system_name"
          typeText="custom"
          mode="uppercase"
          weight="bold"
          size="x1"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="lawsuit.number"
          typeText="custom"
          mode="uppercase"
          weight="bold"
          size="x1"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="lawsuit.crime_type.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="lawsuit.violence_type.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="lawsuit.violence_motivation.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 ml-1">
        <BaseText
          :text="lawsuit.victim.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 ml-3">
        <BaseText
          :text="lawsuit.aggressor.name"
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
          dispatch="Lawsuits/openViewModal"
          :payload="lawsuit"
          v-if="permitShow"
        />
        <AppButtonIcon iconName="edit" dispatch="Lawsuits/openEditModal" :payload="lawsuit" v-if="permit" />
        <AppButtonIcon
          iconName="delete"
          dispatch="Lawsuits/toggleModalDeleteLawsuit"
          :payload="lawsuit"
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
    lawsuit: {
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
    lawsuitShow() {
      this.canAcces("lawsuit_show").then((resp) => {
        this.permit = resp;
      });
    },
    lawsuitAcces() {
      this.canAcces("lawsuit_index").then((resp) => {
        this.permit = resp;
      });
    },
    lawsuitDelete() {
      this.canAcces("lawsuit_destroy").then((resp) => {
        this.permitDes = resp;
      });
    },
    lawsuitChange() {
      this.canAcces("lawsuit_update").then((resp) => {
        this.permitUp = resp;
      });
    },
  },

  created() {
    // console.log("lawsuit info", this.lawsuit);
    this.lawsuitShow();
    this.lawsuitAcces();
    this.lawsuitChange();
    this.lawsuitDelete();
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
