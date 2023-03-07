<template>
  <BaseCard :class="liClass">
    <div class="grid grid-flow-col grids-cols-custom2">
      <div class="flex justify-start items-center">
        <div class="place-self-center">
          <div :class="iconClass">
            <img src="../assets/images/profile-vj.png" alt="Maria Antônia Soares" />
          </div>
        </div>
        <div class="justify-self-start place-self-center">
          <BaseText
            :text="user.name"
            typeText="custom"
            mode="uppercase"
            weight="bold"
            size="x1"
            color="purple"
          />
        </div>
      </div>
      <div class="justify-self-start">
        <BaseText
          :text="user.email"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <!-- <div class="justify-self-end">
        <BaseText
          :text="user.cpf"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div> -->
      <div v-if="permit">
        <div>
          <BaseText
            :text="user.ability_profile.name != undefined ? user.ability_profile.name : 'Não informado'"
            typeText="custom"
            :italic="false"
            mode="normal-case"
            size="sm"
            color="purple"
            class="pl-32"
          />
        </div>
      </div>
      <div v-else>
        <div class="pl-32">
          <BaseText
            text="Não informado"
            typeText="custom"
            :italic="false"
            mode="normal-case"
            size="sm"
            color="purple"
            class="mr-1"
          />
        </div>
      </div>

      <div class="pl-28">
        <BaseText
          :text="user.active ? 'Ativo' : 'Desativado'"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
          class="mr-1"
        />
      </div>
      <div class="pl-12">
        <AppButtonIcon iconName="edit" dispatch="User/openEditModal" v-if="permitUp" :payload="user" />
      </div>
      <div>
        <AppButtonIcon
          iconName="vpn_key"
          dispatch="User/openModalResetPassword"
          v-if="permitUp"
          :payload="user"
        />
      </div>
      <div class="pl-12">
        <AppButtonIcon
          iconName="delete"
          dispatch="User/openCloseDeleteUserConfirmation"
          v-if="permitDes"
          :payload="user"
        />
      </div>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from "./BaseCard.vue";
import AppButtonIcon from "./AppButtonIcon.vue";
import BaseText from "./BaseText.vue";
import { mapActions } from "vuex";

export default {
  components: {
    BaseCard,
    AppButtonIcon,
    BaseText,
  },

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
    },
  },

  data() {
    return {
      permitUp: false,
      permitDes: false,
      permit: false,
    };
  },
  methods: {
    ...mapActions({ canAcces: "AccessControl/canAcces" }),
    userAcces() {
      this.canAcces("user_index").then((resp) => {
        this.permit = resp;
      });
    },
    userDelete() {
      this.canAcces("user_destroy").then((resp) => {
        this.permitDes = resp;
      });
    },
    userChange() {
      this.canAcces("user_update").then((resp) => {
        this.permitUp = resp;
      });
    },
  },

  created() {
    // console.log("User info", this.user);
    this.userAcces();
    this.userChange();
    this.userDelete();
  },

  computed: {
    liClass() {
      return {
        "w-full": true,
        "h-28": true,
        "hover:shadow-box": true,
        "rounded-xl": true,
        "p-6": true,
        "cursor-pointer": true,
      };
    },
    iconClass() {
      let css = [];
      css.push("rounded-full");
      css.push("rounded-lg");
      css.push("w-12");
      css.push("h-12");
      css.push("grid");
      css.push("mr-3");
      css.push("items-center");
      css.push("justify-center");
      css.push("min-w-1");

      return css;
    },
  },
};
</script>

<style scoped>
.grids-cols-custom2 {
  grid-template-columns: 23% 15% 16% 21%;
}
.grid-cols-custom {
  grid-template-columns: 45% 15% 10% 15% 10%;
}
.min-w-1 {
  min-width: 3rem;
}
</style>
