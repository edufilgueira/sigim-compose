<template>
  <li :class="liClass" @click="openEdition">
    <div :class="divClass">
      <div>
        <Label
          :text="edition.name"
          :icon="null"
          :iconType="null"
          type="text-xl"
          weight="extrabold"
          normal
          mode="normal-case"
        />
      </div>
      <div>
        <span v-for="area in edition.areas_attributes" :key="area.code">
          |
          <Label
            :text="area.name"
            :icon="null"
            :iconType="null"
            type="text-xs"
            weight="medium"
            normal
            mode="uppercase"
            class="text-purple"
          />
        </span>
        |
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div>
        <Label
          :text="edition.date_inscription_start"
          :iconType="null"
          type="text-xs"
          icon="none"
          weight="medium"
          normal
          mode="uppercase"
          class="text-ashes-dark"
        />
        -
        <Label
          :text="edition.date_inscription_end"
          :iconType="null"
          type="text-xs"
          icon="none"
          weight="medium"
          normal
          mode="uppercase"
          class="text-ashes-dark"
        />
      </div>
      <div>
        |
        <Label
          :text="edition.inscription_status"
          :iconType="null"
          type="text-xs"
          icon="none"
          weight="bold"
          normal
          mode="uppercase"
          :class="statusClassInscription"
        />
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div>
        <Label
          :text="edition.date_execution_start"
          :iconType="null"
          type="text-xs"
          icon="none"
          weight="medium"
          normal
          mode="uppercase"
          class="text-ashes-dark"
        />
        -
        <Label
          :text="edition.date_execution_end"
          :iconType="null"
          type="text-xs"
          icon="none"
          weight="medium"
          normal
          mode="uppercase"
          class="text-ashes-dark"
        />
      </div>
      <div>
        |
        <Label
          :text="edition.execution_status"
          :iconType="null"
          type="text-xs"
          icon="none"
          weight="bold"
          normal
          mode="uppercase"
          :class="statusClassExecution"
        />
      </div>
    </div>
    <div>
      <Label
        :text="edition.qtdInscriptions + ' Novas pré-inscrições'"
        :iconType="null"
        type="text-xs"
        icon="none"
        weight="bold"
        normal
        mode="uppercase"
      />
    </div>
    <div :class="editBtn">
      <AppButtonIcon iconName="edit" dispatch="Seasons/openEditModal" :payload="edition" />
    </div>
  </li>
</template>

<script>
import Label from "../Label.vue";
import AppButtonIcon from "../AppButtonIcon.vue";

export default {
  name: "app-edition",

  components: {
    Label,
    AppButtonIcon,
  },

  props: {
    edition: {
      type: Object,
    },
  },
  computed: {
    liClass() {
      return {
        "w-full": true,
        "h-28": true,
        "hover:shadow-box": true,
        "rounded-xl": true,
        grid: true,
        "grid-cols-5": true,
        "gap-4": true,
        "content-center": true,
        "p-6": true,
        flex: true,
        "items-center": true,
        "cursor-pointer": true,
      };
    },
    divClass() {
      return {
        grid: true,
        "grid-rows-2": true,
        "content-center": true,
      };
    },
    editBtn() {
      return {
        "text-right": true,
      };
    },
    statusClassExecution() {
      let css = {};

      switch (this.statusExecution) {
        case "Encerrado":
          css = "text-black";
          break;
        case "Em andamento":
          css = "text-purple-classic";
          break;
        case "Não iniciado":
          css = "text-ashes-hover";
          break;
      }

      return css;
    },
    statusClassInscription() {
      let css = {};

      switch (this.statusInscription) {
        case "Encerrado":
          css = "text-black";
          break;
        case "Em andamento":
          css = "text-purple-classic";
          break;
        case "Não iniciado":
          css = "text-ashes-hover";
          break;
      }

      return css;
    },
  },
  methods: {
    openEdition() {
      this.$emit("toSeason", { id: this.edition.id });
      localStorage.setItem("season_id", this.edition.id);
    },
  },
};
</script>
