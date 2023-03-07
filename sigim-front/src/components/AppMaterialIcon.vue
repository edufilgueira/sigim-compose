<template>
  <span :class="[classNamed, classSized]">{{ iconName }}</span>
</template>

<script>
export default {
  name: "AppMaterialIcon",

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
  },

  computed: {
    classNamed() {
      return this.iconType === "material" ? "material-icons" : `material-icons-${this.iconType}`;
    },
    classSized() {
      return `md-${this.iconSize}`;
    },
  },
};
</script>
