<template>
  <div :class="classCss">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classCss() {
      return {
        "w-full": true,
        "h-28": true,
        "shadow-box": this.active,
        "hover:shadow-box": !this.active,
        "rounded-xl": true,
        "p-6": true,
        "my-3": true,
      };
    },
  },
};
</script>

<style></style>
