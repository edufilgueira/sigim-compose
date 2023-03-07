<template>
  <label :for="target" class="mb-1 font-system uppercase font-medium text-xs text-ashes-dark">
    {{ text }} <span v-if="required" class="text-purple">*</span>
  </label>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    target: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
