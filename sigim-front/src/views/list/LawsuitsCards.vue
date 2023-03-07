<template>
  <div>
    <div class="grid grid-cols-8 items-center">
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
          text="Nº P.J."
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
          text="TIPO DE CRIME"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="base"
          color="ashes-dark"
        />
      </div>
      <div class="mt-4 ml-2">
        <BaseText
          text="TIPO DE VIOLÊNCIA"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="base"
          color="ashes-dark"
        />
      </div>
      <div class="mt-4 ml-0">
        <BaseText
          text="MOTIVAÇÃO"
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
          text="VÍTIMA"
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
          text="AGRESSOR"
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
          <AppCardLawsuits :lawsuit="item" />
        </div>
        <div class="border-ashes w-full border"></div>
      </li>
    </BaseStaggeredFade>
  </div>
</template>

<script>
import AppCardLawsuits from "../../components/AppCardLawsuits.vue";
import BaseText from "../../components/BaseText.vue";
import BaseStaggeredFade from "../../components/BaseStaggeredFade.vue";

export default {
  components: {
    AppCardLawsuits,
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
