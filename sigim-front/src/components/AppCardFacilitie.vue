<template>
  <BaseCard :class="liClass">
    <div class="grid grid-cols-5 items-center">
      <div class="mt-4">
        <BaseText
          :text="facilitie.name"
          typeText="custom"
          mode="uppercase"
          weight="bold"
          size="x1"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="facilitie.facility_type.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="facilitie.sectorial.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="facilitie.community.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 justify-self-end">
        <AppButtonIcon iconName="visibility" dispatch="Facilities/openViewModal" :payload="facilitie" />
        <AppButtonIcon
          iconName="edit"
          dispatch="Facilities/openEditModal"
          :payload="facilitie"
          v-if="permitUp"
        />
        <AppButtonIcon
          iconName="delete"
          dispatch="Facilities/toggleModalDeleteFacilitie"
          :payload="facilitie"
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
    facilitie: {
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
    facilityShow() {
      this.canAcces("facility_show").then((resp) => {
        this.permit = resp;
      });
    },
    facilityAcces() {
      this.canAcces("facility_index").then((resp) => {
        this.permit = resp;
      });
    },
    facilityDelete() {
      this.canAcces("facility_destroy").then((resp) => {
        this.permitDes = resp;
      });
    },
    facilityChange() {
      this.canAcces("facility_update").then((resp) => {
        this.permitUp = resp;
      });
    },
  },

  created() {
    // console.log("facility info", this.facility);
    // console.log("facilitie", this.facilitie);
    this.facilityShow();
    this.facilityAcces();
    this.facilityChange();
    this.facilityDelete();
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
