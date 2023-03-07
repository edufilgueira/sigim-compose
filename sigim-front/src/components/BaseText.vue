<template>
  <span class="font-system" :class="textClass">
    {{ textFor() }}
    <slot></slot>
  </span>
</template>

<script>
export default {
  components: {},

  props: {
    text: {
      type: [String, Number],
    },
    typeText: {
      type: String,
    },
    weight: {
      type: String,
      default: "normal",
    },
    italic: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: "normal-case",
    },
    size: {
      type: String,
      default: "base",
    },
    color: {
      type: String,
    },
  },

  computed: {
    textClass() {
      let css = [];
      let typeFont = this.italic ? "italic" : "not-italic";
      if (this.typeText === "custom") {
        css.push(this.mode);
        css.push(`font-${this.weight}`);
        css.push(`text-${this.size}`);
        if (this.color) {
          css.push(`text-${this.color}`);
        }
      } else {
        css.push(this.classTypeText(this.typeText));
      }

      css.push(typeFont);
      return css;
    },
  },

  methods: {
    textFor() {
      return this.text ? String(this.text) : "";
    },
    classTypeText(typeText) {
      let data = {
        "button-generic": ["text-lg", "font-bold"],
        "button-uppercase": ["text-lg", "uppercase", "font-bold"],
        "sidebar-menu": ["text-lg", "font-extrabold"],
        "sidebar-submenu": ["text-lg", "font-medium"],
        "title-forms": ["text-sm", "font-medium", "text-purple", "uppercase"],
        "topic-details": ["text-lg", "font-medium", "text-quantum"],
      };

      return data[typeText];
    },
  },
};
</script>
