<template>
  <BaseModal width="w-184" headerColor="#f1f1f1" v-if="open">
    <template v-slot:header>
      <div class="flex justify-between mb-4">
        <div>
          <BaseText
            text="Matriz geral de cálculo de valores da bolsa"
            typeText="custom"
            weight="semibold"
            mode="normal"
            size="2xl"
            color="quantum"
          />
        </div>
        <div>
          <AppButtonIcon dispatch="Benefits/toggleModalMatrixInfoOpen" forClose />
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="grid grid-cols-4 gap-4 mt-2">
        <div class="flex justify-center">
          <BaseText
            text="% de frequência"
            typeText="custom"
            weight="bold"
            mode="uppercase"
            size="lg"
            color="purple"
          />
        </div>
        <div class="flex justify-center">
          <BaseText text="FASE 1" typeText="custom" weight="bold" mode="uppercase" size="lg" color="purple" />
        </div>
        <div class="flex justify-center">
          <BaseText text="FASE 2" typeText="custom" weight="bold" mode="uppercase" size="lg" color="purple" />
        </div>
        <div class="flex justify-center">
          <BaseText text="FASE 3" typeText="custom" weight="bold" mode="uppercase" size="lg" color="purple" />
        </div>

        <div class="border-ashes-hover border-b-2 w-full col-span-4"></div>

        <div class="flex justify-center">
          <BaseText
            text="Abaixo de 25%"
            typeText="custom"
            weight="bold"
            mode="normal"
            size="lg"
            color="quantum"
          />
        </div>
        <div class="flex justify-center">
          <BaseText text="-" typeText="custom" weight="semibold" mode="uppercase" size="lg" color="quantum" />
        </div>
        <div class="flex justify-center">
          <BaseText text="-" typeText="custom" weight="semibold" mode="uppercase" size="lg" color="quantum" />
        </div>
        <div class="flex justify-center">
          <BaseText text="-" typeText="custom" weight="semibold" mode="uppercase" size="lg" color="quantum" />
        </div>

        <div class="border-ashes-hover border-b-2 w-full col-span-4"></div>

        <div class="flex justify-center">
          <BaseText
            text="Entre 25% e 50%"
            typeText="custom"
            weight="bold"
            mode="normal"
            size="lg"
            color="quantum"
          />
        </div>
        <div class="flex justify-center">
          <BaseText
            text="R$ 100,00"
            typeText="custom"
            weight="semibold"
            mode="uppercase"
            size="lg"
            color="quantum"
          />
        </div>
        <div class="flex justify-center">
          <BaseText
            text="R$ 150,00"
            typeText="custom"
            weight="semibold"
            mode="uppercase"
            size="lg"
            color="quantum"
          />
        </div>
        <div class="flex justify-center">
          <BaseText
            text="R$ 200,00"
            typeText="custom"
            weight="semibold"
            mode="uppercase"
            size="lg"
            color="quantum"
          />
        </div>

        <div class="border-ashes-hover border-b-2 w-full col-span-4"></div>

        <div class="flex justify-center">
          <BaseText
            text="Entre 50% e 75%"
            typeText="custom"
            weight="bold"
            mode="normal"
            size="lg"
            color="quantum"
          />
        </div>
        <div class="flex justify-center">
          <BaseText
            text="R$ 150,00"
            typeText="custom"
            weight="semibold"
            mode="uppercase"
            size="lg"
            color="quantum"
          />
        </div>
        <div class="flex justify-center">
          <BaseText
            text="R$ 200,00"
            typeText="custom"
            weight="semibold"
            mode="uppercase"
            size="lg"
            color="quantum"
          />
        </div>
        <div class="flex justify-center">
          <BaseText
            text="R$ 250,00"
            typeText="custom"
            weight="semibold"
            mode="uppercase"
            size="lg"
            color="quantum"
          />
        </div>

        <div class="border-ashes-hover border-b-2 w-full col-span-4"></div>

        <div class="flex justify-center">
          <BaseText
            text="A partir de 75%"
            typeText="custom"
            weight="bold"
            mode="normal"
            size="lg"
            color="quantum"
          />
        </div>
        <div class="flex justify-center">
          <BaseText
            text="R$ 200,00"
            typeText="custom"
            weight="semibold"
            mode="uppercase"
            size="lg"
            color="quantum"
          />
        </div>
        <div class="flex justify-center">
          <BaseText
            text="R$ 250,00"
            typeText="custom"
            weight="semibold"
            mode="uppercase"
            size="lg"
            color="quantum"
          />
        </div>
        <div class="flex justify-center">
          <BaseText
            text="R$ 300,00"
            typeText="custom"
            weight="semibold"
            mode="uppercase"
            size="lg"
            color="quantum"
          />
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import BaseText from "../../components/BaseText.vue";
import BaseModal from "../../components/BaseModal.vue";
import AppButtonIcon from "../../components/AppButtonIcon.vue";
import { mapState } from "vuex";

export default {
  components: {
    BaseModal,
    AppButtonIcon,
    BaseText,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState({
      matrix: (state) => state.Benefits.matrix,
    }),
  },
};
</script>
