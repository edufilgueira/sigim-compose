<template>
  <div>
    <div class="grid grid-cols-5 items-center">
      <div class="mt-4 ml-5">
        <BaseText
          text="PESSOA"
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
          text="EQUIPAMENTO"
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
          text="TIPO DE ACOMPANHAMENTO"
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
          text="SETORIAL"
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
          <AppCardForwardingProtocol :forwardingProtocol="item" />
        </div>
        <div class="border-ashes w-full border"></div>
      </li>
    </BaseStaggeredFade>
  </div>
</template>

<script>
import AppCardForwardingProtocol from "../../components/AppCardForwardingProtocol.vue";
import BaseText from "../../components/BaseText.vue";
import BaseStaggeredFade from "../../components/BaseStaggeredFade.vue";

export default {
  components: {
    AppCardForwardingProtocol,
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
