<template>
  <div style="display: contents">
    <tr :key="datacolumn.id" v-for="datacolumn in dataColumns">
      <td
        :key="`${datacolumn.id}-${headerColumn.key}`"
        v-for="headerColumn in headerColumns"
        class="py-3 border-b-2 border-solid border-gray-100 align-middle"
      >
        <div class="flex justify-left items-center">
          <div
            :key="index"
            v-for="(item, index) in filterDataByHeaderColumnKey(datacolumn, headerColumn.key)"
            class="mr-3"
          >
            <img
              :src="require(`../assets/images/profile-vj.png`)"
              v-if="item.isImage"
              class="inline rounded-lg h-12 w-12"
            />
            <Label v-if="item.isLabel" :text="item.text" :weight="item.weight" />
            <AppButtonColorful
              v-if="item.isButton && item.label"
              :text="item.label"
              :type-text="item.typeText"
              :type-button="item.styleButton"
              :show-icon="item.showIcon"
              :icon-name="item.iconName"
              :icon-type="item.iconType"
              :class="item.classCss"
              :payload="item.payload"
              :dispatch="item.dispatch"
            />
            <AppButtonIconStudent v-if="item.isButtonIcon" :icon-name="item.iconName" />
          </div>
        </div>
      </td>
    </tr>
  </div>
</template>

<script>
import Label from "./Label.vue";
import AppButtonIconStudent from "./AppButtonIconStudent.vue";
import AppButtonColorful from "./AppButtonColorful.vue";

export default {
  name: "BaseTableDataCell",

  components: {
    Label,
    AppButtonIconStudent,
    AppButtonColorful,
  },

  props: {
    dataColumns: Array,
    headerColumns: Array,
  },

  methods: {
    filterDataByHeaderColumnKey(datacolumn, key) {
      if (datacolumn[key]) {
        return datacolumn[key].items;
      } else {
        return [];
      }
    },
  },
};
</script>
