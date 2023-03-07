<template>
  <div>
    <BaseLabel :text="labelText" :required="required" v-if="showLabel" />
    <div class="flex flex-row">
      <div :key="index" v-for="(item, index) in values" class="mr-5 app-radio-button">
        <input
          :id="radionButtonId(item.name, index)"
          type="radio"
          :name="item.name"
          :value="item.value"
          @click="onClick(item, $event)"
          :checked="item.checked"
        />
        <BaseLabel :text="item.description" :target="radionButtonId(item.name, index)" />
      </div>
    </div>
    <span v-if="errorMessage" class="text-carmesim-hover text-xs font-system">{{ errorMessage }}</span>
  </div>
</template>

<script>
import BaseLabel from "./BaseLabel.vue";

export default {
  components: {
    BaseLabel,
  },

  props: {
    id: {
      type: String,
    },
    values: {
      type: Array,
    },
    required: {
      type: Boolean,
      default: false,
    },
    labelText: {
      type: String,
    },
    showLabel: {
      type: Boolean,
    },
    dispatch: {
      type: String,
    },
    errorMessage: {
      type: String,
    },
  },

  methods: {
    radionButtonId(name, index) {
      if (this.id) {
        return this.id;
      } else {
        return `${name}-${index}`;
      }
    },
    onClick(item) {
      if (this.dispatch) {
        this.$store.dispatch(this.dispatch, item);
      }
    },
  },
};
</script>

<style scoped>
.app-radio-button {
  display: inline-block;
  position: relative;
}

.app-radio-button input[type="radio"] {
  display: none;
}

.app-radio-button label {
  cursor: pointer;
}

.app-radio-button label::before {
  content: " ";
  display: inline-block;
  position: relative;
  margin: 0 5px 0 0;
  width: 20px;
  height: 20px;
  border-radius: 11px;
  background-color: transparent;
  top: 5px;
  cursor: pointer;
  @apply border-2 border-ashes-dark;
}

.app-radio-button input[type="radio"]:checked + label::after {
  content: " ";
  display: inline-block;
  position: absolute;
  border-radius: 11px;
  width: 12px;
  height: 12px;
  top: 9px;
  left: 4px;
  @apply bg-purple;
}
</style>
