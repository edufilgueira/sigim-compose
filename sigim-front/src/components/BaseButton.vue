<template>
  <button type="button" :class="classes" @click.stop="onClick">
    <Label :text="label" :icon="iconName" weight="bold" mode="uppercase" :type="labelSize" />
  </button>
</template>

<script>
import Label from "./Label";

export default {
  components: {
    Label,
  },

  props: {
    label: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
    styleButton: {
      type: String,
      default: "primary",
    },
    iconName: {
      type: String,
    },
    void: {
      type: Boolean,
      default: false,
    },
    labelSize: String,
    dispatch: {
      type: String,
    },
  },

  computed: {
    classes() {
      let css = {};
      css = Object.assign(css, this.textButton());

      if (this.void) {
        css = Object.assign(css, this.buttonVoid());
      }

      if (this.active) {
        css = Object.assign(css, this.buttonRing());
        switch (this.styleButton) {
          case "primary":
            if (this.void) {
              css = Object.assign(css, this.primaryVoid());
            } else {
              css = Object.assign(css, this.primary());
            }
            break;
          case "success":
            if (this.void) {
              css = Object.assign(css, this.successVoid());
            } else {
              css = Object.assign(css, this.success());
            }
            break;
          case "danger":
            if (this.void) {
              css = Object.assign(css, this.dangerVoid());
            } else {
              css = Object.assign(css, this.danger());
            }
            break;
        }
      } else {
        css = Object.assign(css, this.buttonInactive());
      }

      return css;
    },
  },

  methods: {
    onClick() {
      if (this.active) {
        this.$emit("onClick");
        if (this.dispatch) {
          this.$store.dispatch(this.dispatch);
        }
      }
    },
    textButton() {
      let styleTextDefault = {
        "text-xs": true,
      };
      if (this.void) return styleTextDefault;

      return Object.assign(styleTextDefault, { "text-white": true });
    },
    buttonRing() {
      return {
        "focus:outline-none": true,
        "focus:ring-2": true,
      };
    },
    buttonVoid() {
      return {
        "border-2": true,
        "border-solid": true,
        "bg-white": true,
      };
    },
    primary() {
      return Object.assign(this.roundButton(), {
        "bg-purple": true,
        "hover:bg-purple-hover": true,
        "focus:ring-purple": true,
      });
    },
    danger() {
      return Object.assign(this.roundButton(), {
        "bg-carmesim": true,
        "hover:bg-carmesim-hover": true,
        "focus:ring-carmesim": true,
      });
    },
    success() {
      return Object.assign(this.roundButton(), {
        "bg-herbal": true,
        "hover:bg-herbal-hover": true,
        "focus:ring-herbal": true,
      });
    },
    primaryVoid() {
      return Object.assign(this.roundButton(), {
        "border-purple": true,
        "text-purple": true,
        "focus:ring-purple": true,
        "hover:bg-purple-hover": true,
        "hover:text-white": true,
      });
    },
    dangerVoid() {
      return Object.assign(this.roundButton(), {
        "border-carmesim": true,
        "text-carmesim": true,
        "focus:ring-carmesim": true,
        "hover:bg-carmesim-hover": true,
        "hover:text-white": true,
      });
    },
    successVoid() {
      return Object.assign(this.roundButton(), {
        "border-herbal": true,
        "text-herbal": true,
        "focus:ring-herbal": true,
        "hover:bg-herbal-hover": true,
        "hover:text-white": true,
      });
    },
    buttonInactive() {
      let buttonInactiveStyle = this.roundButton();

      if (this.void) {
        return Object.assign(buttonInactiveStyle, {
          "bg-white": true,
          "cursor-not-allowed": true,
          "border-ashes": true,
          "hover:bg-white": true,
          "focus:outline-none": true,
          "text-ashes-hover": true,
        });
      }

      return Object.assign(buttonInactiveStyle, {
        "bg-ashes": true,
        "cursor-not-allowed": true,
        "hover:bg-ashes": true,
        "focus:outline-none": true,
        "text-white": true,
      });
    },
    roundButton() {
      if (this.label) {
        return {
          "rounded-full": true,
          "py-3": true,
          "px-6": true,
        };
      }

      return {
        "rounded-full": true,
        "h-10": true,
        "w-10": true,
      };
    },
  },
};
</script>
