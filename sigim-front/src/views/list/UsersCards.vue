<template>
  <div>
    <div class="grid grids-cols-custom items-center mt-4">
      <div class="ml-6">
        <BaseText
          text="USUÁRIO"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="xs"
          color="ashes-dark"
        />
      </div>
      <div class="">
        <BaseText
          text="E-MAIL"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="xs"
          color="ashes-dark"
        />
      </div>
      <!-- <div class="">
        <BaseText
          text="CPF"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="xs"
          color="ashes-dark"
        />
      </div> -->
      <div class="">
        <BaseText
          text="PERFIL DE ACESSO"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="xs"
          color="ashes-dark"
        />
      </div>
      <div class="">
        <BaseText
          text="STATUS"
          typeText="custom"
          weight="bold"
          :italic="false"
          mode="uppercase"
          size="xs"
          color="ashes-dark"
        />
      </div>
      <div class="flex"></div>
    </div>
    <BaseStaggeredFade :duration="50" tag="ul">
      <li :key="index" :data-index="index" v-for="(user, index) in data">
        <div>
          <AppCardUser :user="user" />
        </div>
        <div class="border-ashes w-full border"></div>
      </li>
    </BaseStaggeredFade>
  </div>
</template>

<script>
import AppCardUser from "../../components/AppCardUser.vue";
import BaseText from "../../components/BaseText.vue";
import BaseStaggeredFade from "../../components/BaseStaggeredFade.vue";

export default {
  components: {
    AppCardUser,
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
