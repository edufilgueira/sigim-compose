<template>
  <div>
    <label :for="id" :class="classCss">
      <span>{{ text }}</span>
      <AppMaterialIcon :iconName="iconName" class="absolute top-0 right-1" />
    </label>
    <input
      :id="id"
      class="opacity-0 w-0"
      type="file"
      :name="name"
      ref="documents"
      :multiple="isMultiple"
      @input="addFileInStore(typeDocument, $event)"
    />
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
    },
    text: {
      type: String,
    },
    dispatch: {
      type: String,
    },
    typeDocument: {
      type: String,
    },
    name: {
      type: String,
    },
    added: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "ashes-dark",
    },
    isMultiple: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      state: this.added,
      iconName: "remove_circle",
    };
  },

  computed: {
    classCss() {
      let css = {
        flex: true,
        "justify-center": true,
        "items-center": true,
        "rounded-full": true,
        relative: true,
        border: true,
        "w-60": true,
        "cursor-pointer": true,
        "font-bold": true,
      };

      if (this.state) {
        css["bg-herbal-classic"] = true;
        css["border-herbal-classic"] = true;
        css["text-white"] = true;
      } else {
        css["bg-transparent"] = true;
        css[`border-${this.color}`] = true;
        css[`text-${this.color}`] = true;
      }

      return css;
    },
  },

  methods: {
    addFileInStore(type) {
      let dataForm = new FormData();

      for (let file of this.$refs.documents.files) {
        dataForm.append(`file`, file);
      }
      this.state = true;
      this.iconName = "check_circle";

      if (this.dispatch) {
        this.$store.dispatch(this.dispatch, { file: dataForm, type });
      }
    },
  },
};
</script>
