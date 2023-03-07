<template>
  <transition-group
    name="staggered-fade"
    :css="false"
    appear
    v-bind="$attrs"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <slot></slot>
  </transition-group>
</template>

<script>
import Velocity from "velocity-animate";
export default {
  inheritAttrs: false,
  props: {
    duration: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      // Cada elemento requer um atributo data-index para que a transição funcione corretamente
      const index = el.dataset.index || 1;
      var delay = index * this.duration;
      setTimeout(() => {
        Velocity(el, { opacity: 1, height: "100%" }, { complete: done });
      }, delay);
    },
    leave(el, done) {
      // Cada elemento requer um atributo data-index para que a transição funcione corretamente
      const index = el.dataset.index || 1;
      var delay = index * this.duration;
      setTimeout(() => {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    },
  },
};
</script>
