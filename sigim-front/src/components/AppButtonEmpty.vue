<template>
  <button type="button" :class="[buttonClass, 'flex', 'justify-center', 'items-center']" @click="onClick">
    <BaseText :text="text" :typeText="typeText" />
  </button>
</template>

<script>
import BaseText from "./BaseText.vue";

export default {
  components: {
    BaseText,
  },

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
    },
    typeButton: {
      type: String,
    },
    dispatch: {
      type: String,
    },
    payload: {
      type: [String, Object],
    },
    callToAction: {
      type: Boolean,
      default: false,
    },
    typeText: {
      type: String,
      default: "button-uppercase",
    },
  },

  computed: {
    buttonClass() {
      let classCss;
      if (this.active) {
        classCss = `btn-empty-${this.typeButton}-active`;
      } else {
        classCss = this.callToAction ? `btn-empty-${this.typeButton}-cta` : `btn-empty-${this.typeButton}`;
      }

      return ["btn-empty", classCss];
    },
  },

  methods: {
    onClick() {
      if (this.dispatch && !this.active) {
        this.$store.dispatch(this.dispatch, this.payload);
      }
    },
  },
};
</script>

<style>
.btn-empty {
  @apply border border-solid bg-white hover:text-white focus:outline-none rounded-full py-2 px-6;
}

.btn-empty-info {
  @apply bg-white text-ashes-hover border-ashes-hover hover:bg-ashes-hover;
}

.btn-empty-primary {
  @apply bg-white text-purple border-purple hover:bg-purple;
}

.btn-empty-success {
  @apply bg-white text-herbal border-herbal hover:bg-herbal;
}

.btn-empty-danger {
  @apply bg-white text-carmesim border-carmesim hover:bg-carmesim;
}

.btn-empty-default {
  @apply bg-transparent text-white border-white hover:border-herbal hover:bg-herbal;
}

.btn-empty-default-cta {
  @apply bg-white text-herbal border-white hover:border-herbal hover:bg-herbal hover:text-white;
}

.btn-empty-active {
  @apply border border-solid bg-white hover:text-white focus:outline-none rounded-full py-2 px-6 cursor-default;
}

.btn-empty-info-active {
  @apply text-white border-ashes-hover bg-ashes-hover cursor-default;
}

.btn-empty-primary-active {
  @apply text-white border-purple bg-purple cursor-default;
}

.btn-empty-success-active {
  @apply text-white border-herbal bg-herbal cursor-default;
}

.btn-empty-danger-active {
  @apply text-white border-carmesim bg-carmesim cursor-default;
}

.btn-empty-default-active {
  @apply bg-transparent text-white border-herbal bg-herbal cursor-default;
}
</style>
