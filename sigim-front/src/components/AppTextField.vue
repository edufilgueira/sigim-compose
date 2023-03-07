<template>
  <div class="flex flex-col items-start font-system">
    <BaseLabel :text="labelText" :required="required" :target="id" v-if="showLabel" />
    <BaseText :id="id" :text="text" :typeText="typeText" :mode="mode" />
  </div>
</template>

<script>
import BaseLabel from "./BaseLabel";
import BaseText from "./BaseText";

export default {
  components: {
    BaseLabel,
    BaseText,
  },

  props: {
    id: {
      type: String,
      default: null,
    },
    showLabel: {
      type: Boolean,
      default: false,
    },
    text: {
      type: [String, Number],
    },
    labelText: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    typeText: {
      type: String,
    },
    mode: {
      type: String,
      default: "capitalize",
    },
  },
};
</script>

<style></style>
