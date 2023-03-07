<template>
  <BaseModal width="w-128" v-if="open">
    <template v-slot:header>
      <div class="flex flex-row-reverse">
        <AppButtonIcon for-close dispatch="Lawsuits/toggleModalDeleteLawsuit" />
      </div>
      <div class="flex">
        <img src="../../assets/images/icon-alerta.svg" class="mr-2" />
        <BaseText
          text="Excluir Processo Judicial"
          typeText="custom"
          weight="semibold"
          size="2xl"
          color="ashes-dark"
        />
      </div>
    </template>
    <template v-slot:body>
      <div class="mt-5">
        <BaseText
          text="Tem certeza que deseja excluir o processo judicial?"
          typeText="custom"
          weight="extrabold"
          color="quantum"
          size="lg"
        />
      </div>
    </template>
    <template v-slot:footer>
      <div class="flex justify-end">
        <AppButtonEmpty
          text="Não"
          type-button="danger"
          dispatch="Lawsuits/toggleModalDeleteLawsuit"
          class="mr-5"
        />
        <AppButtonEmpty text="Sim" type-button="success" dispatch="Lawsuits/delete" />
      </div>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "../../components/BaseModal.vue";
import BaseText from "../../components/BaseText.vue";
import AppButtonIcon from "../../components/AppButtonIcon.vue";
import AppButtonEmpty from "../../components/AppButtonEmpty.vue";

export default {
  components: {
    BaseModal,
    BaseText,
    AppButtonIcon,
    AppButtonEmpty,
  },

  props: {
    open: {
      type: Boolean,
    },
  },
};
</script>
