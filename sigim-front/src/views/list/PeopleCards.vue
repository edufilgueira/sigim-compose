<template>
  <div>
    <div class="grid grid-cols-9 mt-4">
      <div class="ml-5 justify-self-start">
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
      <div class="ml-6 col-span-2 justify-self-start">
        <BaseText
          text="NOME"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="xs"
          color="ashes-dark"
        />
      </div>
      <div class="justify-self-start ml-2">
        <BaseText
          text="NOME SOCIAL"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="xs"
          color="ashes-dark"
        />
      </div>
      <div class="justify-self-start ml-2">
        <BaseText
          text="NÍVEL DE RISCO"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="xs"
          color="ashes-dark"
        />
      </div>
      <div class="justify-self-start">
        <BaseText
          text="DATA DE NASCIMENTO"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="xs"
          color="ashes-dark"
        />
      </div>
      <div class="justify-self-start">
        <BaseText
          text="CPF"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="xs"
          color="ashes-dark"
        />
      </div>
      <div class="justify-self-start">
        <BaseText
          text="IDENTIDADE DE GÊNERO"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="xs"
          color="ashes-dark"
        />
      </div>
      <div class="justify-self-end"></div>
    </div>
    <BaseStaggeredFade :duration="50" tag="ul">
      <li :key="index" :data-index="index" v-for="(person, index) in data">
        <div>
          <AppCardPeople :person="person" />
        </div>
        <div class="border-ashes w-full border"></div>
      </li>
    </BaseStaggeredFade>
  </div>
</template>

<script>
import AppCardPeople from "../../components/AppCardPeople.vue";
import BaseText from "../../components/BaseText.vue";
import BaseStaggeredFade from "../../components/BaseStaggeredFade.vue";

export default {
  components: {
    AppCardPeople,
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
