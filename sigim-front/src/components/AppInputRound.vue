<template>
  <div class="font-system relative">
    <label
      :class="[dynamicClass, textColorClass]"
      class="absolute pt-4 pb-3 px-5 opacity-75 cursor-text"
      :for="id"
    >
      {{ labelText }}
    </label>
    <input
      :id="id"
      :type="typeInput"
      :class="[textColorClass, borderColorClass]"
      class="border focus:outline-none rounded-full pt-4 pb-3 pl-5 pr-12 w-full bg-transparent"
      @focus="moveLabelUp"
      @blur="moveLabelDown"
      v-model="valueInput"
      @input="onInput()"
    />
    <button type="button" :class="{ 'cursor-default': !hiddenValue }" @click.stop="showPassword">
      <AppMaterialIcon :iconName="icon" :iconType="iconType" class="icon-rigth" :class="[textColorClass]" />
    </button>
  </div>
</template>

<script>
import AppMaterialIcon from "./AppMaterialIcon.vue";

export default {
  components: {
    AppMaterialIcon,
  },

  props: {
    id: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
    },
    labelText: {
      type: String,
    },
    textColor: {
      type: String,
    },
    borderColor: {
      type: String,
    },
    iconType: {
      type: String,
    },
    hiddenValue: {
      type: Boolean,
      default: false,
    },
    dispatch: {
      type: String,
    },
  },

  data() {
    return {
      isActive: false,
      valueInput: "",
      typeInput: this.setTypeInput(),
      icon: this.iconName,
    };
  },

  computed: {
    dynamicClass() {
      return {
        transition: true,
        "duration-300": true,
        "ease-in-out": true,
        transform: this.isActive,
        "-translate-x-1.5": this.isActive,
        "-translate-y-4": this.isActive,
        "scale-75": this.isActive,
      };
    },
    textColorClass() {
      return [`text-${this.textColor}`];
    },
    borderColorClass() {
      return [`border-${this.borderColor}`];
    },
  },

  methods: {
    moveLabelUp() {
      if (this.valueInput === "") {
        this.isActive = true;
      }
    },
    moveLabelDown() {
      if (this.valueInput === "") {
        this.isActive = false;
      }
    },
    showPassword() {
      if (this.hiddenValue) {
        if (this.typeInput === "text") {
          this.typeInput = "password";
          this.icon = "visibility_off";
        } else {
          this.typeInput = "text";
          this.icon = "visibility";
        }
      }
    },
    setTypeInput() {
      if (this.hiddenValue) {
        return "password";
      } else {
        return "text";
      }
    },
    onInput() {
      this.$store.dispatch(this.dispatch, this.valueInput);
    },
  },
};
</script>

<style>
.icon-rigth {
  line-height: 55px !important;
  position: absolute;
  top: 0;
  right: 10px;
  text-align: center;
  width: 36px;
}
</style>
