<template>
  <button type="button" :class="buttonClass" @click="onClick">
    <BaseText :text="text" typeText="button-generic" />
    <span v-if="number" class="font-system">|</span>
    <BaseText v-if="number" :text="number" typeText="button-generic" />
    <AppMaterialIcon v-if="icon" :iconName="icon" class="align-text-bottom" />
  </button>
</template>

<script>
import BaseText from "./BaseText.vue";
import AppMaterialIcon from "./AppMaterialIcon.vue";

export default {
  components: {
    BaseText,
    AppMaterialIcon,
  },

  props: {
    text: {
      type: String,
    },
    number: {
      type: String,
    },
    icon: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    typeButton: {
      type: String,
    },
    status: {
      type: String,
    },
    payload: {
      type: Object,
    },
    dispatch: {
      type: String,
    },
  },

  computed: {
    buttonClass() {
      let css = {};

      switch (this.typeButton) {
        case "primary":
          css = this.primary;
          break;
        case "success":
          css = this.success;
          break;
        case "danger":
          css = this.danger;
          break;
        case "info":
          css = this.info;
          break;
      }

      Object.assign(css, { "cursor-not-allowed": this.disabled });

      return css;
    },
    primary() {
      return {
        "btn-status": true,
        "btn-status-primary": this.active,
        "btn-status-primary-off": !this.active,
      };
    },
    success() {
      return {
        "btn-status": true,
        "btn-status-success": this.active,
        "btn-status-success-off": !this.active,
      };
    },
    danger() {
      return {
        "btn-status": true,
        "btn-status-danger": this.active,
        "btn-status-danger-off": !this.active,
      };
    },
    info() {
      return {
        "btn-status": true,
        "btn-status-info": this.active,
        "btn-status-info-off": !this.active,
      };
    },
  },

  methods: {
    onClick() {
      let payload = { ...this.payload, status: this.status };
      if (!this.disabled && this.dispatch) {
        this.$store.dispatch(this.dispatch, payload);
      }
    },
  },
};
</script>

<style>
.btn-status {
  @apply border border-solid focus:outline-none rounded-full py-2 px-6;
}

.btn-status-info {
  @apply bg-ashes-dark text-white border-ashes-dark;
}

.btn-status-info-off {
  @apply text-ashes-hover hover:text-ashes-dark hover:border-ashes-dark;
}

.btn-status-primary {
  @apply bg-purple text-white border-purple;
}

.btn-status-primary-off {
  @apply text-ashes-hover hover:text-purple hover:border-purple;
}

.btn-status-success {
  @apply bg-herbal text-white border-herbal;
}

.btn-status-success-off {
  @apply text-ashes-hover hover:text-herbal hover:border-herbal;
}

.btn-status-danger {
  @apply bg-carmesim text-white border-carmesim;
}

.btn-status-danger-off {
  @apply text-ashes-hover hover:text-carmesim hover:border-carmesim;
}
</style>
