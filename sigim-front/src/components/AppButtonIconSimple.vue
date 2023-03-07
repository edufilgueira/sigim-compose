<template>
  <button type="button" :class="buttonClass()">
    <AppMaterialIcon :iconName="whatIsMyName()" :iconType="iconType" :iconSize="iconSize" />
  </button>
</template>
<script>
import AppMaterialIcon from "./AppMaterialIcon.vue";

export default {
  components: { AppMaterialIcon },

  props: {
    iconName: {
      type: String,
    },
    iconType: {
      type: String,
      default: "material",
    },
    iconSize: {
      type: String,
      default: "24",
    },
    forClose: {
      type: Boolean,
      default: false,
    },
    dispatch: {
      type: String,
    },
    payload: {
      type: [String, Object],
    },
  },

  methods: {
    buttonClass() {
      let css = {
        "focus:outline-none": true,
        "rounded-full": true,
        "leading-3": true,
        "text-ashes-dark": true,
      };

      if (!this.forClose || (this.forClose && this.iconSize === "36")) {
        css = Object.assign(css, {
          "h-10": true,
          "w-10": true,
        });
      } else {
        css = Object.assign(css, {
          "h-7": true,
          "w-7": true,
        });
      }

      let bgAshes = { "hover:bg-ashes": true };
      // let textpurple = { "hover:text-purple": true };
      let textPurple = { "hover:text-purple": true };

      css = this.forClose ? Object.assign(css, bgAshes) : Object.assign(css, textPurple);

      return css;
    },
    whatIsMyName() {
      if (this.forClose) {
        return "close";
      }

      return this.iconName;
    },
  },
};
</script>
