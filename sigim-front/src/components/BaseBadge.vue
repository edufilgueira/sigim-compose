<template>
  <span :class="classes" :style="style">{{ badgeCount }}</span>
</template>

<script>
export default {
  name: "base-badge",

  props: {
    badgeCount: {
      type: Number,
      required: true,
      default: 0,
    },
    backgroundColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: "small",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
  },

  computed: {
    classes() {
      let roundedBadge = {
        "rounded-full": true,
        flex: true,
        "items-center": true,
        "justify-center": true,
      };

      let textProp = {
        "text-white": true,
        "font-bold": true,
      };

      let sizeSmall = {
        "w-6": true,
        "h-6": true,
        "text-xs": true,
      };

      let sizeMedium = {
        "w-8": true,
        "h-8": true,
        "text-sm": true,
      };

      let sizeLarge = {
        "w-10": true,
        "h-10": true,
        "text-base": true,
      };

      let badgeActive = {
        "bg-blue-500": true,
      };

      let badgeInactive = {
        "bg-ashes": true,
        "cursor-not-allowed": true,
      };

      let css = {};

      css = Object.assign(css, roundedBadge);
      css = Object.assign(css, textProp);

      css = this.active ? Object.assign(css, badgeActive) : Object.assign(css, badgeInactive);

      switch (this.size) {
        case "small":
          css = Object.assign(css, sizeSmall);
          break;
        case "medium":
          css = Object.assign(css, sizeMedium);
          break;
        case "large":
          css = Object.assign(css, sizeLarge);
          break;
      }

      return css;
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.textColor,
      };
    },
  },

  methods: {},
};
</script>
