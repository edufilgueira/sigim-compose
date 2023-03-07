<template>
  <div>
    <BaseModal headerColor="#62146a" v-if="open">
      <template v-slot:header>
        <div class="grid grid-cols-2">
          <div class="mb-3 justify-self-start">
            <div id="options" class="md:w-full lg:w-full">
              <div id="name-facilitie" @click="closeModal">
                <BaseText
                  :text="chartTitle"
                  type-text="custom"
                  weight="medium"
                  mode="capitalize"
                  color="white"
                  size="xl"
                />
              </div>
            </div>
          </div>
          <div class="justify-self-end" @click="closeModal">
            <AppButtonIconSimple for-close />
          </div>
        </div>
      </template>
      <template v-slot:body>
        <div>
          <div class="grid grid-cols-2 m-1">
            <div>
              <Label
                :text="chartTitle"
                :icon="null"
                :icon-type="null"
                type="text-sm"
                weight="semibold"
                normal
                mode="uppercase"
              />
            </div>
            <div class="text-right">
              <Label
                :text="'TOTAL: ' + chartTotal"
                :icon="null"
                :icon-type="null"
                type="text-sm"
                weight="semibold"
                normal
                mode="uppercase"
              />
            </div>
          </div>
          <div class="grid grid-cols-5 m-1">
            <div class="justify-self-start col-span-3">
              <Label
                :text="chartColumnName"
                :icon="null"
                :icon-type="null"
                type="text-sm"
                weight="semibold"
                normal
                mode="uppercase"
              />
            </div>
            <div class="text-right">
              <Label
                :text="'TOTAL por ' + chartColumnName"
                :icon="null"
                :icon-type="null"
                type="text-sm"
                weight="semibold"
                normal
                mode="uppercase"
              />
            </div>
            <div class="text-right">
              <Label
                text="%"
                :icon="null"
                :icon-type="null"
                type="text-sm"
                weight="semibold"
                normal
                mode="uppercase"
              />
            </div>
          </div>

          <div :key="index" :data-index="index" v-for="(item, index) in chartCategories">
            <div class="grid grid-cols-5 m-1 text-xs">
              <div class="justify-self-start col-span-3">
                <Label
                  :text="item"
                  :icon="null"
                  :icon-type="null"
                  type="text-sm"
                  weight="normal"
                  normal
                  mode="uppercase"
                />
              </div>
              <div class="text-right">
                <Label
                  :text="chartSeries[index]"
                  :icon="null"
                  :icon-type="null"
                  type="text-sm"
                  weight="normal"
                  normal
                  mode="uppercase"
                />
              </div>
              <div class="text-right">
                <Label
                  :text="getPercent(chartSeries[index], chartTotal)"
                  :icon="null"
                  :icon-type="null"
                  type="text-sm"
                  weight="normal"
                  normal
                  mode="uppercase"
                />
              </div>
            </div>
          </div>
          <div>Listando {{ chartCategories.length }} de {{ chartCategories.length }} registros.</div>
        </div>
      </template>
    </BaseModal>
  </div>
</template>

<script>
import BaseModal from "../../components/BaseModal.vue";
import AppButtonIconSimple from "../../components/AppButtonIconSimple.vue";
import BaseText from "../../components/BaseText.vue";
import Label from "../../components/Label.vue";

export default {
  components: {
    Label,
    BaseModal,
    BaseText,
    AppButtonIconSimple,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    chartTitle: {
      type: String,
      default: "Total por campo",
    },
    chartColumnName: {
      type: String,
      default: "Campo",
    },
    chartTotal: {
      type: Number,
      default: 0,
    },
    chartCategories: [],
    chartSeries: [],
  },

  methods: {
    closeModal() {
      this.$parent.openCloseModalDetail();
    },
    getPercent(value, total) {
      //console.log("TOTAL ", total);
      let perc = ((value * 100) / total).toFixed(2);
      //console.log("PERCENT ", perc);
      return perc;
    },
  },
};
</script>

<style scoped>
.container1 {
  height: 600px;
  width: 100%;
  overflow: hidden;
}

.container2 {
  width: 105%;
  height: 100%;
  overflow: auto;
  padding-right: 4%;
  padding-left: 4px;
}
</style>
<style>
.buttons-insc {
  margin-top: -10%;
}
.show {
  display: block;
}
.hide {
  display: none;
}
</style>
