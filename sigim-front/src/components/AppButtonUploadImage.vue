<template>
  <div>
    <label :for="id" :class="classCss">
      <span>{{ text }}</span>
      <div class="absolute top-40 right-0 w-10 h-10 bg-purple-hover rounded-full text-white">
        <AppMaterialIcon :iconName="iconName" class="ml-2 mt-2" />
      </div>
    </label>
    <input
      :id="id"
      class="opacity-0 w-0"
      type="file"
      :name="name"
      accept="image/*"
      ref="documents"
      :multiple="isMultiple"
      @input="addImageInStore($event)"
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
      required: true,
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
      iconName: "add",
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
        "w-52": true,
        "h-52": true,
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
    addImageInStore(event) {
      const file = event.target.files[0];

      let dataForm = new FormData();
      dataForm.append("name", "avatar");
      dataForm.append("file", file);

      //Show Image Selected Logic
      this.state = true;
      this.iconName = "check_circle";

      if (this.dispatch) {
        this.$store.dispatch(this.dispatch, dataForm);
      }
    },
  },
};
</script>
