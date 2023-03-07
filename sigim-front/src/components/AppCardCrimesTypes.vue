<template>
  <BaseCard>
    <div class="grid grid-cols-custom items-center">
      <div class="mt-4">
        <BaseText
          :text="crimeType.name"
          mode="underline"
          color="quantum"
          typeText="custom"
          weight="bold"
          size="xl"
        />
      </div>
      <div class="mt-4 flex">
        <AppButtonIcon iconName="edit" :payload="crimeType" dispatch="CrimeTypes/openEditModal" />
        <AppButtonIcon
          iconName="delete"
          :payload="crimeType"
          dispatch="CrimeTypes/openCloseDeleteCrimeTypeConfirmation"
        />
      </div>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from "./BaseCard.vue";
import AppButtonIcon from "./AppButtonIcon.vue";
import BaseText from "./BaseText.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    BaseCard,
    AppButtonIcon,
    BaseText,
  },

  data() {
    return {
      permitUp: false,
      permitDes: false,
      permit: false,
    };
  },

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    crimeType: {
      type: Object,
    },
  },

  methods: {
    ...mapActions({ canAcces: "AccessControl/canAcces" }),
    profileAcces() {
      this.canAcces("ability_profile_show").then((resp) => {
        // console.log("profile permit", resp);
        this.permit = resp;
      });
    },
    profileDelete() {
      this.canAcces("ability_profile_destroy").then((resp) => {
        // console.log("profile permit destroy", resp);
        this.permitDes = resp;
      });
    },
    profileChange() {
      this.canAcces("ability_profile_update").then((resp) => {
        // console.log("profile permit change", resp);
        this.permitUp = resp;
      });
    },
    // permitChangeProfile() {
    //   console.log("cheange", this.permit);
    //   return this.permitUp;
    // },
    // permitDestroyProfile() {
    //   console.log("destroy", this.permit);
    //   return this.permitDes;
    // },
  },

  created() {
    this.profileAcces();
    this.profileChange();
    this.profileDelete();
  },

  computed: {
    liClass() {
      return {
        "w-full": true,
        "h-28": true,
        "hover:shadow-box": true,
        "rounded-xl": true,
        grid: true,
        "grid-cols-4": true,
        "justify-items-stretch": true,
        "gap-4": true,
        "content-center": true,
        "p-6": true,
        flex: true,
        "items-center": true,
        "cursor-pointer": true,
      };
    },
    ...mapState({
      showModalPermissions: (state) => state.AccessControl.modalPerrmissionsOpen,
    }),
  },
};
</script>

<style scoped>
.grid-cols-custom {
  grid-template-columns: 3fr 2fr 2fr 3fr 0fr;
}
</style>
