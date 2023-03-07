<template>
  <BaseCard :class="liClass">
    <div class="grid grid-cols-5 items-center">
      <div class="mt-4">
        <BaseText
          :text="forwardingProtocol.person.name"
          typeText="custom"
          mode="uppercase"
          weight="bold"
          size="x1"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="forwardingProtocol.facility.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4">
        <BaseText
          :text="forwardingProtocol.accompaniment_type.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 ml-2">
        <BaseText
          :text="forwardingProtocol.sectorial.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="mt-4 justify-self-end">
        <AppButtonIcon
          iconName="visibility"
          dispatch="ForwardingProtocols/openViewModal"
          :payload="forwardingProtocol"
          v-if="permitShow"
        />
        <AppButtonIcon
          iconName="edit"
          dispatch="ForwardingProtocols/openEditModal"
          :payload="forwardingProtocol"
          v-if="permitUp"
        />
        <AppButtonIcon
          iconName="delete"
          dispatch="ForwardingProtocols/toggleModalDeleteForwardingProtocol"
          :payload="forwardingProtocol"
          v-if="permitDes"
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
    forwardingProtocol: {
      type: Object,
    },
  },

  data() {
    return {
      permitShow: false,
      permitUp: false,
      permitDes: false,
      permit: false,
    };
  },
  methods: {
    ...mapActions({ canAcces: "AccessControl/canAcces" }),
    forwardingProtocolCreate() {
      this.canAcces("forwarding_protocol_index").then((resp) => {
        this.permit = resp;
      });
    },
    forwardingProtocolAcces() {
      this.canAcces("forwarding_protocol_index").then((resp) => {
        this.permit = resp;
      });
    },
    forwardingProtocolDelete() {
      this.canAcces("forwarding_protocol_destroy").then((resp) => {
        this.permitDes = resp;
      });
    },
    forwardingProtocolChange() {
      this.canAcces("forwarding_protocol_update").then((resp) => {
        this.permitUp = resp;
      });
    },
  },

  created() {
    // console.log("User info", this.user);
    // console.log("forwardingProtocol", this.forwardingProtocol);
    this.forwardingProtocolCreate();
    this.forwardingProtocolAcces();
    this.forwardingProtocolChange();
    this.forwardingProtocolDelete();
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
