<template>
  <div>
    <BaseModal headerColor="#62146a" v-if="open">
      <template v-slot:header>
        <div class="grid grid-cols-2">
          <div class="mb-3 justify-self-start">
            <div id="options" class="md:w-full lg:w-full">
              <div id="name-protectiveMeasure">
                <BaseText
                  :text="getProtectiveMeasureNumber"
                  type-text="custom"
                  weight="medium"
                  mode="capitalize"
                  color="white"
                  size="xl"
                />
              </div>
            </div>
          </div>
          <div class="justify-self-end">
            <AppButtonIcon for-close dispatch="ProtectiveMeasures/closeViewModal" />
          </div>
        </div>
      </template>
      <template v-slot:body>
        <div class="container1">
          <div class="container2">
            <ProtectiveMeasureData />
          </div>
        </div>
      </template>
    </BaseModal>
  </div>
</template>

<script>
import BaseModal from "../../components/BaseModal.vue";
import AppButtonIcon from "../../components/AppButtonIcon.vue";
import BaseText from "../../components/BaseText.vue";
import ProtectiveMeasureData from "./ProtectiveMeasureData.vue";
import { mapState } from "vuex";

export default {
  components: {
    BaseModal,
    BaseText,
    AppButtonIcon,
    ProtectiveMeasureData,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      protectiveMeasure: (state) => state.ProtectiveMeasures.protectiveMeasure,
      getProtectiveMeasureNumber() {
        return `Medida Protetiva - Nº ${this.protectiveMeasure.number}`;
      },
    }),
  },
};
</script>

<style scoped>
.container1 {
  height: 350px;
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
