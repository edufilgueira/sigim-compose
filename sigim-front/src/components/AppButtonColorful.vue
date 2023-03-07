<template>
  <button :id="id" type="button" :class="buttonClass" @click="onClick">
    <AppMaterialIcon
      v-if="showIcon && !right"
      :icon-name="iconName"
      :icon-type="iconType"
      class="relative inset-y-1"
    />
    <BaseText :text="text" :type-text="typeText" />
    <AppMaterialIcon
      v-if="showIcon && right"
      :icon-name="iconName"
      :icon-type="iconType"
      class="relative inset-y-1 -right-2"
    />
  </button>
</template>

<script>
import BaseText from "./BaseText.vue";
import AppMaterialIcon from "./AppMaterialIcon.vue";
import { mapState } from "vuex";

export default {
  components: {
    BaseText,
    AppMaterialIcon,
  },

  props: {
    id: {
      type: String,
      default: "btn",
    },
    text: {
      type: [String, Number],
    },
    typeText: {
      type: String,
      default: "button-generic",
    },
    typeButton: {
      type: String,
    },
    dispatch: {
      type: String,
    },
    payload: {
      type: Object,
    },
    showIcon: {
      type: Boolean,
    },
    iconName: {
      type: String,
    },
    iconType: {
      type: String,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      showStudentDropdown: (state) => state.Season.showStudentDropdown,
    }),
    buttonClass() {
      switch (this.typeButton) {
        case "dropdown":
          return ["btn-dropdown", `btn-dropdown-${this.typeButton}`];
        default:
          return ["btn-color", `btn-color-${this.typeButton}`];
      }
    },
  },

  methods: {
    onClick() {
      if (this.dispatch) {
        this.$store.dispatch(this.dispatch, this.payload);
      }
    },
  },
};
</script>

<style>
.btn-color {
  @apply border border-solid focus:outline-none rounded-full py-2 px-6;
}

.btn-dropdown {
  @apply focus:outline-none rounded-full py-2 px-6;
}

.btn-color-primary {
  @apply text-white
         bg-purple-classic
         border-purple
         hover:bg-purple-hover
         hover:border-purple-hover;
}

.btn-color-success {
  @apply text-white
         bg-herbal
         border-herbal
         hover:bg-herbal-hover
         hover:border-herbal-hover;
}

.btn-color-danger {
  @apply text-white
         bg-carmesim
         border-carmesim
         hover:bg-carmesim-hover
         hover:border-carmesim-hover;
}
</style>
