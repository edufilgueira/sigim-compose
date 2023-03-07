<template>
  <div>
    <div :class="classesModal">
      <div id="content" :class="[width]" class="relative my-6 mx-auto max-w-7xl">
        <!--content-->
        <div :class="classesContent">
          <!--header-->
          <div id="header" :class="classesHeader" :style="styleHeaderObject">
            <slot name="header"></slot>
          </div>
          <!--body-->
          <div class="relative px-6 py-3 flex-auto">
            <slot name="body" />
          </div>
          <!--footer-->
          <div class="p-6">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
    <div class="opacity-50 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
export default {
  name: "base-modal",
  props: {
    width: {
      type: String,
      default: "w-full",
    },
    isHeaderColor: {
      type: Boolean,
      default: false,
    },
    headerColor: {
      type: String,
    },
  },
  computed: {
    styleHeaderObject() {
      let bgColor = this.headerColor || "#fff";
      let borderColor = this.headerColor || "#000";
      return { backgroundColor: bgColor, borderColor };
    },
    classesModal() {
      return {
        "overflow-x-hidden": true,
        "overflow-y-auto": true,
        fixed: true,
        "inset-0": true,
        "z-50": true,
        "outline-none": true,
        "focus:outline-none": true,
        "justify-center": true,
        "items-center": true,
        flex: false,
      };
    },
    classesContent() {
      return {
        "border-0": true,
        "rounded-lg": true,
        "shadow-lg": true,
        relative: true,
        flex: true,
        "flex-col": true,
        "w-full": true,
        "bg-white": true,
        "outline-none": true,
        "focus:outline-none": true,
      };
    },
    classesHeader() {
      return {
        "border-0": true,
        "rounded-t-lg": true,
        "px-6": true,
        "pt-6": true,
        "border-solid": true,
      };
    },
    classesBody() {
      return {
        "border-0": true,
        "rounded-lg": true,
        "shadow-lg": true,
        relative: true,
        flex: true,
        "flex-col": true,
        "w-full": true,
        "bg-white": true,
        "outline-none": true,
        "focus:outline-none": true,
      };
    },
    classesFooter() {
      return {
        flex: true,
        "items-center": true,
        "justify-end": true,
        "p-6": true,
        "border-t": true,
        "border-solid": true,
        "border-blueGray-200": true,
        "rounded-b": true,
      };
    },
  },
};
</script>
