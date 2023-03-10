<template>
  <div class="relative">
    <div class="relative rounded-md">
      <div class="absolute flex items-center inset-y-0 left-0 pl-3 text-gray-400">
        <div style="width: 14px">
          <slot name="icon">
            <svg
              data-v-8dab3068=""
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                data-v-8dab3068=""
                fill="currentColor"
                d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"
                class=""
              />
            </svg>
          </slot>
        </div>
      </div>

      <input
        type="text"
        ref="input"
        :value="keyword"
        :class="inputClassList"
        :placeholder="placeholder"
        @input="onInput($event.target.value)"
        @blur="onBlur"
        @keydown="onKeydown"
      />

      <button
        v-if="keyword"
        type="button"
        class="absolute right-0 top-0 inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 focus:outline-none hover:text-gray-400"
        @click="onClear()"
      >
        <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
          <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    </div>

    <div
      v-show="mutableOptions.length"
      class="absolute right-0 mt-2 w-full rounded-md shadow-lg z-50 overflow-y-scroll"
      style="max-height: 200px"
    >
      <ul class="py-1 rounded-md bg-white shadow-xs">
        <li
          v-for="(opt, index) in mutableOptions"
          :key="opt.id"
          :ref="`option_${index}`"
          class="autocomplete-item block px-4 py-2 text-sm leading-5 text-gray-700 cursor-pointer"
          :class="{ 'bg-gray-200': arrowCounter === index }"
          tabindex="0"
          @click="onSelect()"
          @mouseover="setArrowCounter(index)"
        >
          <span class="font-normal" v-html="opt.name" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Autocomplete",
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    labelKey: {
      type: String,
      default: "label",
    },
    nameKey: {
      type: String,
      default: "name",
    },
    valueKey: {
      type: String,
      default: "id",
    },
    searchMinLength: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      keyword: "",
      arrowCounter: 0,
      originalOptions: [],
      mutableOptions: [],
    };
  },
  computed: {
    inputClassList() {
      return [
        "appearance-none rounded w-full transition duration-150 ease-in-out",
        this.getTextSizeClass,
        this.getTextColorClass,
        this.getBorderColorClass,
        this.getPaddingClass,
      ];
    },
    getTextSizeClass() {
      return "text-sm leading-5";
    },
    getTextColorClass() {
      return "text-gray-800 placeholder-gray-400";
    },
    getBorderColorClass() {
      return "focus:outline-none border border-gray-40 focus:border-blue-400";
    },
    getPaddingClass() {
      return "h-10 pr-6 pl-8";
    },
  },
  watch: {
    value(value) {
      console.log("watch", value);
      this.keyword = value;
    },
    options() {
      this.cloneOptions();
    },
  },
  created() {
    this.keyword = this.value;
    if (this.options.length) {
      this.cloneOptions();
    }
  },
  methods: {
    onInput(vl) {
      this.keyword = vl;
      this.emitInput();
      if (vl.length >= this.searchMinLength) {
        if (!this.originalOptions.length) {
          this.$emit("shouldSearch", vl);
        } else {
          this.searchInternally();
        }
      } else {
        this.resetOptions();
      }
    },
    searchInternally() {
      const search = this.keyword;
      console.log("this.keyword", this.keyword);
      console.log("searchInternally1", this.mutableOptions);
      this.mutableOptions = this.originalOptions.filter((o) => o.name.includes(search) >= 0);
      console.log("searchInternally2", this.mutableOptions);
      this.highlightOptions();
    },
    highlightOptions() {
      const search = this.keyword;
      const query = new RegExp(search, "i");
      this.mutableOptions.forEach((o) => {
        this.$set(
          o,
          `${this.nameKey}_highlighted`,
          o.name.replace(query, '<span class="font-bold">$&</span>')
        );
      });
    },
    cloneOptions() {
      this.originalOptions = JSON.parse(JSON.stringify(this.options));
      this.mutableOptions = JSON.parse(JSON.stringify(this.options));
      console.log("cloneOptions", this.mutableOptions);
      this.searchInternally();
    },
    resetOptions() {
      this.originalOptions = [];
      this.mutableOptions = [];
    },
    onKeydown(evt) {
      if (!this.mutableOptions.length) {
        return;
      }
      switch (evt.code) {
        case "ArrowDown":
          evt.preventDefault();
          this.onArrowDown();
          break;
        case "ArrowUp":
          evt.preventDefault();
          this.onArrowUp();
          break;
        case "Enter":
          this.onSelect();
          break;
        case "Escape":
          this.onEsc();
          break;
      }
    },
    onEsc() {
      this.$refs.input.blur();
      this.resetArrowCounter();
      this.resetOptions();
    },
    onArrowDown() {
      if (this.arrowCounter < this.mutableOptions.length - 1) {
        this.arrowCounter += 1;
      }
      this.fixScrolling();
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter -= 1;
      }
      this.fixScrolling();
    },
    onBlur(evt) {
      const tgt = evt.relatedTarget;
      if (tgt && tgt.classList.contains("autocomplete-item")) {
        return;
      }
      this.resetOptions();
      this.resetArrowCounter();
    },
    setArrowCounter(number) {
      this.arrowCounter = number;
    },
    fixScrolling() {
      this.$refs[`option_${this.arrowCounter}`][0].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    },
    resetArrowCounter() {
      this.arrowCounter = 0;
    },
    onSelect() {
      const selected = this.mutableOptions[this.arrowCounter];
      const selectedOption = this.options.find((o) => o[this.valueKey] === selected[this.valueKey]);
      if (selectedOption) {
        this.$emit("select", selectedOption);
        this.keyword = selectedOption[this.nameKey];
        this.emitInput();
        this.resetOptions();
        this.resetArrowCounter();
      }
    },
    emitInput() {
      this.$emit("input", this.keyword);
    },
    resetKeyword() {
      this.keyword = "";
      this.emitInput();
    },
    onClear() {
      this.$emit("select", null);
      this.resetKeyword();
      this.resetOptions();
    },
  },
};
</script>
