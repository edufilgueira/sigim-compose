<template>
  <div>
    <label :for="id" :class="classCss">
      <span>{{ text }}</span>
      <AppMaterialIcon :iconName="iconName" class="absolute top-0 right-1" />
    </label>
    <input
      :id="id"
      :id_file="id_file"
      class="opacity-0 w-0"
      type="file"
      :name="name"
      ref="documents"
      :multiple="isMultiple"
      @change="onFileSelected"
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
    id_file: {
      type: String,
      default: "0",
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
      selectedFile: null,
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
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.setIconSelected();
      if (this.dispatch) {
        this.$store.dispatch(this.dispatch, this.selectedFile);
      }
    },
    setIconSelected() {
      this.iconName = "check_circle";
      this.state = true;
    },
    setIconUnSelected() {
      this.iconName = "remove_circle";
      this.state = false;
    },
  },
  updated: function () {
    if (parseInt(this.id_file) > 0) {
      this.setIconSelected();
    } else {
      this.setIconUnSelected();
    }
  },
  mounted: function () {
    if (parseInt(this.id_file) > 0) {
      this.setIconSelected();
    } else {
      this.setIconUnSelected();
    }
  },
};
</script>
