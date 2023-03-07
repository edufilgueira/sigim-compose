<template>
  <BaseCard :class="liClass">
    <div class="grid grid-cols-3 items-center">
      <div class="mt-4">
        <BaseText
          :text="accompanimentTypeFacility.facility.name"
          typeText="custom"
          mode="uppercase"
          weight="bold"
          size="x1"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="accompanimentTypeFacility.accompaniment_type.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <!-- <AppButtonIcon
          iconName="visibility"
          dispatch="AccompanimentTypeFacilities/openViewModal"
          :payload="accompanimentTypeFacility"
        /> -->
        <AppButtonIcon
          iconName="edit"
          dispatch="AccompanimentTypeFacilities/openEditModal"
          :payload="accompanimentTypeFacility"
        />
        <AppButtonIcon
          iconName="delete"
          dispatch="AccompanimentTypeFacilities/toggleModalDeleteAccompanimentTypeFacility"
          :payload="accompanimentTypeFacility"
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
    accompanimentTypeFacility: {
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
  },

  created() {
    // console.log("User info", this.user);
    // console.log("accompanimentTypeFacility", this.accompanimentTypeFacility);
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
