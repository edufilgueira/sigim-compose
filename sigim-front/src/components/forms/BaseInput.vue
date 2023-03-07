<template>
  <div class="flex flex-col items-start font-system">
    <BaseLabel :text="labelText" :required="required" :target="id" v-if="showLabel" />
    <div class="relative w-full">
      <input
        v-if="mask"
        :id="id"
        :class="classes"
        :type="inputType"
        :name="inputName"
        :placeholder="inputPlaceholder"
        :value="value"
        v-the-mask="mask"
        @input="onInput($event)"
        :min="inputMin"
      />
      <input
        v-else
        :id="id"
        :class="classes"
        :type="inputType"
        :name="inputName"
        :placeholder="inputPlaceholder"
        :value="value"
        @input="onInput($event)"
        :min="inputMin"
      />
      <AppMaterialIcon v-if="showIcon" :iconName="iconName" class="icon-input text-quantum" />
      <span v-if="errorMessage" class="text-carmesim-hover text-xs">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import AppMaterialIcon from "../AppMaterialIcon";
import BaseLabel from "../BaseLabel";
import { mask } from "vue-the-mask";

export default {
  directives: {
    "the-mask": mask,
  },

  components: {
    AppMaterialIcon,
    BaseLabel,
  },

  props: {
    id: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: true,
    },
    inputMin: {
      type: [Number, String],
      defaut: 1,
    },
    inputName: {
      type: String,
      require: true,
    },
    inputPlaceholder: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
      validator: function (value) {
        return ["text", "number", "password", "hidden", "date", "time"].indexOf(value) !== -1;
      },
    },
    mask: {
      String,
      Array,
    },
    value: {
      type: [String, Number],
    },
    required: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
      default: "",
    },
    labelText: {
      type: String,
      default: "",
    },
    showLabel: {
      type: Boolean,
      defautl: false,
    },
    showIcon: {
      type: Boolean,
      defautl: false,
    },
    dispatch: {
      type: String,
    },
    payload: {
      type: Object,
    },
    errorMessage: {
      type: String,
    },
  },

  computed: {
    classes() {
      let roundBorder = {
        "rounded-xl": true,
        "w-full": true,
        "py-2": true,
        "px-6": true,
        "border-2": true,
        "border-carmesim": this.errorMessage,
        "border-ashes-dark": !this.errorMessage,
        "focus:border-carmesim-hover": this.errorMessage,
        "focus:border-purple": !this.errorMessage,
      };

      let textButton = {
        "text-quantum": true,
        "font-medium": true,
        "text-base": true,
        "focus:outline-none": true,
      };

      let success = {
        "bg-transparent": true,
      };

      let inputInactive = {
        "bg-ashes": true,
        "cursor-not-allowed": true,
      };

      let css = {
        "pl-14": this.showIcon,
      };

      css = Object.assign(css, roundBorder);
      css = Object.assign(css, textButton);

      css = this.active ? Object.assign(css, success) : Object.assign(css, inputInactive);

      return css;
    },
  },
  methods: {
    onInput(event) {
      if (this.dispatch) {
        this.$store.dispatch(this.dispatch, { value: event.target.value, ...this.payload });
      }
    },
  },
};
</script>

<style>
.icon-input {
  line-height: 46px !important;
  position: absolute;
  top: 0;
  left: 10px;
  text-align: center;
  width: 36px;
}
</style>
