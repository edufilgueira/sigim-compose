<template>
  <div class="flex flex-col items-start font-system w-full">
    <BaseLabel :text="labelText" :required="required" :target="id" v-if="showLabel" />
    <multiselect
      :id="id"
      :label="label"
      :track-by="trackBy"
      :placeholder="selectPlaceholder"
      :close-on-select="closeOnSelect"
      :clear-on-select="clearOnSelect"
      :options="options"
      :multiple="multipleOption"
      :optionHeight="39"
      :hideSelected="hideSelectedOption"
      :showLabels="false"
      :taggable="showTagSelected"
      :value="value"
      class="rounded-xl"
      @input="dispatch"
    >
      <template slot="noOptions">{{ this.noOptionsMessage }}</template>
    </multiselect>
    <span v-if="errorMessage" class="text-carmesim-hover text-xs mt-1">{{ errorMessage }}</span>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import BaseLabel from "../BaseLabel.vue";

export default {
  components: {
    Multiselect,
    BaseLabel,
  },
  props: {
    closeOnSelect: {
      type: Boolean,
      default: false,
    },
    hideSelectedOption: {
      type: Boolean,
      default: false,
    },
    showLabel: {
      type: Boolean,
      defautl: false,
    },
    clearOnSelect: {
      type: Boolean,
      require: false,
    },
    selectPlaceholder: {
      type: String,
      default: "Selecione as opções",
    },
    labelText: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    multipleOption: {
      type: Boolean,
      default: true,
    },
    showTagSelected: {
      type: Boolean,
    },
    options: {
      type: Array,
      require: true,
      default: () => [],
    },
    trackBy: {
      type: String,
      default: "id",
    },
    label: {
      type: String,
      default: "name",
    },
    value: {
      type: [Array, Object, String],
    },
    dispatch: {
      type: Function,
      default: () => {},
    },
    required: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
    },
    errorStyle: {
      type: Boolean,
      default: false,
    },
    noOptionsMessage: {
      type: String,
      default: "Lista vazia.",
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.multiselect__option--selected.multiselect__option--highlight {
  background: #f3f3f3 !important;
  color: #000 !important;
}

.multiselect__tags {
  border: 2px solid #808080;
  min-height: auto !important;
  border-radius: 0.75rem;
}

.multiselect__tag {
  background-color: #62006a;
  border-radius: 0.75rem;
  margin-bottom: 0px;
}

.multiselect__select {
  top: 2px;
}

.multiselect__option--highlight {
  background-color: #62006a;
}

.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
  background: #62006a;
}

.multiselect {
  min-height: auto !important;
}

.multiselect__input,
.multiselect__single {
  border-radius: 0.75rem;
}

.multiselect__content-wrapper {
  border: 2px solid #808080;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
  border-top: none;
  margin-top: -3px;
}

.multiselect__select:before {
  position: relative;
  right: 1px;
  top: 20%;
  margin-top: 4px;
  border-style: solid;
  border-width: 0;
  border-color: transparent transparent transparent transparent;
  content: url(../../assets/images/expand_more_black_18dp.svg);
}

.multiselect--active .multiselect__select {
  transform: rotateZ(180dg);
}

.multiselect__tag-icon:after {
  content: "×";
  color: #fff;
  font-size: 14px;
  margin-bottom: 1px;
  position: relative;
}

.multiselect__tag > span {
  position: relative;
}

.multiselect__placeholder {
  color: #cecece;
  display: inline-block;
  margin-bottom: 10px;
  padding-top: 2px;
  font-size: 14px;
}

.multiselect__input::placeholder {
  color: #cecece;
  display: inline-block;
  margin-bottom: 10px;
  padding-top: 2px;
  font-size: 14px;
}
</style>
