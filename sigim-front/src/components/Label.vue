<template>
  <span class="font-system" :class="classes">
    <font-awesome-icon v-if="icon && iconType" :icon="[prefixIconType, icon]" />
    {{ text }}
  </span>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar as farStar, faBuilding as farBuilding, faMap } from "@fortawesome/free-regular-svg-icons";

import {
  faStar as fasStar,
  faGraduationCap,
  faBuilding,
  faBookReader,
  faTrash,
  faTrashAlt,
  faEdit,
  faPrint,
  faChalkboardTeacher,
  faAngleUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faPlus,
  faAngleDoubleUp,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  farStar,
  fasStar,
  faGraduationCap,
  faMap,
  faBuilding,
  farBuilding,
  faBookReader,
  faTrash,
  faTrashAlt,
  faEdit,
  faPrint,
  faChalkboardTeacher,
  faAngleUp,
  faAngleRight,
  faAngleDown,
  faPlus,
  faAngleLeft,
  faAngleDown,
  faAngleDoubleUp,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleDoubleDown
);

export default {
  name: "Label",

  components: {
    FontAwesomeIcon,
  },

  data() {
    return {
      regular: "far",
      solid: "fas",
    };
  },

  props: {
    text: [String, Number],
    icon: String,
    iconType: {
      type: String,
      default: "far",
    },
    type: String,
    weight: {
      type: String,
      default: "normal",
    },
    normal: {
      type: Boolean,
      default: true,
    },
    mode: {
      type: String,
      default: "normal-case",
    },
  },

  computed: {
    prefixIconType() {
      let prefix = {
        regular: "far",
        solid: "fas",
      };

      return prefix[this.iconType];
    },
    classes() {
      let css = [];
      let typeFont = this.normal ? "normal" : "italic";

      css.push(this.type);

      css.push(typeFont);
      css.push(`font-${this.weight}`);
      css.push(this.mode);

      return css;
    },
  },
};
</script>
