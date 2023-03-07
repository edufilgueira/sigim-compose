<template>
  <div>
    <BaseLabel :text="labelText" :required="required" v-if="showLabel" />
    <div class="flex flex-row">
      <div :key="index" v-for="(item, index) in values" class="mr-5 app-checkbox">
        <input
          :id="checkboxId(item.action_code, index)"
          type="checkbox"
          :name="item.name"
          :value="item.checked"
          @click="onClick(item, $event)"
          :checked="item.checked"
        />
        <BaseLabel :text="item.name" :target="checkboxId(item.action_code, index)" />
      </div>
    </div>
    <span v-if="errorMessage" class="text-carmesim-hover text-xs">{{ errorMessage }}</span>
  </div>
</template>

<script>
import BaseLabel from "./BaseLabel.vue";
// import { mapState } from "vuex";

export default {
  components: {
    BaseLabel,
  },

  props: {
    values: {
      type: Array,
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
    required: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
    },
  },
  // computed: {
  //   ...mapState({
  //     profiles: (state) => state.AccessControl.arrPermits,
  //   }),
  // },

  //  created() {
  //   this.$store.dispatch("AccessControl/getPermits");
  // },

  methods: {
    checkboxId(name, index) {
      return `${name}-${index}`;
    },
    onClick(item) {
      // console.log("item", item);
      if (this.dispatch) {
        this.$store.dispatch(this.dispatch, item);
      }
    },
  },
};
</script>

<style scoped>
.app-checkbox {
  display: inline-block;
  position: relative;
}

.app-checkbox input[type="checkbox"] {
  display: none;
}

.app-checkbox label {
  cursor: pointer;
}

.app-checkbox label::before {
  content: " ";
  display: inline-block;
  position: relative;
  margin: 0 5px 0 0;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: transparent;
  top: 5px;
  cursor: pointer;
  @apply border-2 border-ashes-dark;
}

.app-checkbox input[type="checkbox"]:checked + label::after {
  content: " ";
  display: inline-block;
  position: absolute;
  border-radius: 3px;
  width: 12px;
  height: 12px;
  top: 9px;
  left: 4px;
  @apply bg-purple;
}
</style>
