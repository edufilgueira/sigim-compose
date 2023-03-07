<template>
  <div>
    <div class="grid grid-cols-6 items-center">
      <div class="mt-4 ml-5">
        <BaseText
          text="SISTEMA"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="base"
          color="ashes-dark"
        />
      </div>
      <div class="mt-4 ml-4">
        <BaseText
          text="Nº M.P."
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="base"
          color="ashes-dark"
        />
      </div>
      <div class="mt-4 ml-3">
        <BaseText
          text="Nº B.O."
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="base"
          color="ashes-dark"
        />
      </div>
      <div class="mt-4 ml-1">
        <BaseText
          text="REQUERENTE"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="base"
          color="ashes-dark"
        />
      </div>
      <div class="mt-4">
        <BaseText
          text="AUTORIDADE POLICIAL"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="base"
          color="ashes-dark"
        />
      </div>
      <div class="mt-4"></div>
    </div>
    <BaseStaggeredFade :duration="50" tag="ul">
      <li :key="index" :data-index="index" v-for="(item, index) in data">
        <div>
          <AppCardProtectiveMeasures :protectiveMeasure="item" />
        </div>
        <div class="border-ashes w-full border"></div>
      </li>
    </BaseStaggeredFade>
  </div>
</template>

<script>
import AppCardProtectiveMeasures from "../../components/AppCardProtectiveMeasures.vue";
import BaseText from "../../components/BaseText.vue";
import BaseStaggeredFade from "../../components/BaseStaggeredFade.vue";

export default {
  components: {
    AppCardProtectiveMeasures,
    BaseText,
    BaseStaggeredFade,
  },

  props: {
    data: {
      type: Array,
    },
  },
  methods: {},
};
</script>

<style scoped>
.grids-cols-custom {
  grid-template-columns: 24% 24% 14% 19% 0%;
}
</style>
