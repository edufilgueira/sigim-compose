<template>
  <div>
    <div class="grid grid-cols-3 items-center">
      <div class="mt-4 ml-5">
        <BaseText
          text="NOME - EQUIPAMENTO"
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
          text="TIPO DE ACOMPANHAMENTO"
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
          <AppCardAccompanimentTypeFacility :accompanimentTypeFacility="item" />
        </div>
        <div class="border-ashes w-full border"></div>
      </li>
    </BaseStaggeredFade>
  </div>
</template>

<script>
import AppCardAccompanimentTypeFacility from "../../components/AppCardAccompanimentTypeFacility.vue";
import BaseText from "../../components/BaseText.vue";
import BaseStaggeredFade from "../../components/BaseStaggeredFade.vue";

export default {
  components: {
    AppCardAccompanimentTypeFacility,
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
