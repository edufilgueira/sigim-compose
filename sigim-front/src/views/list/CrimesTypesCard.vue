<template>
  <div>
    <div class="grid grid-cols-custom items-center">
      <div class="mt-4 ml-5">
        <BaseText
          text="ID do Perfil"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="xs"
          color="ashes-dark"
        />
      </div>
      <div class="mt-4">
        <BaseText
          text="Nome"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="xs"
          color="ashes-dark"
        />
      </div>
      <div class="mt-4 flex"></div>
    </div>
    <BaseStaggeredFade :duration="50" tag="ul">
      <li :key="crimetype.id" :data-index="index" v-for="(crimetype, index) in data">
        <div>
          <AppCardCrimesTypes :crimeType="crimetype" />
        </div>
        <div class="border-ashes w-full border"></div>
      </li>
    </BaseStaggeredFade>
  </div>
</template>

<script>
import AppCardCrimesTypes from "../../components/AppCardCrimesTypes.vue";
import BaseText from "../../components/BaseText.vue";
import BaseStaggeredFade from "../../components/BaseStaggeredFade.vue";
import router from "../../router/index";

export default {
  components: {
    AppCardCrimesTypes,
    BaseText,
    BaseStaggeredFade,
  },

  props: {
    data: {
      type: Array,
    },
  },

  methods: {
    gotToProfile(params) {
      router.push({ name: "crime_types", params: { id: params.id } });
    },
  },
};
</script>

<style scoped>
.grid-cols-custom {
  grid-template-columns: 29% 18% 18% 25%;
}
</style>
