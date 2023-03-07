<template>
  <BaseCard :class="liClass">
    <div class="grid grid-cols-9">
      <div class="justify-self-start place-self-center">
        <BaseText
          :text="person.source_system_name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
          class="mr-10"
        />
      </div>
      <div class="col-span-2 flex justify-start items-center">
        <div class="place-self-center">
          <div :class="iconClass">
            <img src="../assets/images/profile-vj.png" alt="Maria Antônia Soares" />
          </div>
        </div>
        <div class="justify-self-start place-self-center">
          <BaseText
            :text="person.name"
            typeText="custom"
            mode="uppercase"
            weight="bold"
            size="x1"
            color="purple"
          />
        </div>
      </div>
      <div class="justify-self-start place-self-center">
        <BaseText
          :text="person.social_name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
          class="mr-10"
        />
      </div>
      <div :class="`justify-self-start place-self-center ` + getRiskLevelColor(person.risk_level.id)">
        <BaseText
          :text="person.risk_level.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          class=""
        />
      </div>
      <div class="justify-self-start place-self-center">
        <BaseText
          :text="formatDate(person.birth_date)"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="justify-self-start place-self-center ml-2">
        <BaseText
          :text="person.cpf"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
        />
      </div>
      <div class="justify-self-start place-self-center ml-3">
        <BaseText
          :text="person.gender_identity.name"
          typeText="custom"
          :italic="false"
          mode="normal-case"
          size="sm"
          color="purple"
          class="mr-1"
        />
      </div>
      <div class="justify-self-end place-self-center">
        <AppButtonIcon iconName="edit" dispatch="People/openEditModal" :payload="person" v-if="permitUp" />
        <AppButtonIcon
          iconName="delete"
          dispatch="People/openCloseDeletePersonConfirmation"
          :payload="person"
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
import moment from "moment";

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
    person: {
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
    peopleAcces() {
      this.canAcces("person_index").then((resp) => {
        this.permit = resp;
      });
    },
    peopleDelete() {
      this.canAcces("person_destroy").then((resp) => {
        this.permitDes = resp;
      });
    },
    peopleChange() {
      this.canAcces("person_update").then((resp) => {
        this.permitUp = resp;
      });
    },
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },
    getRiskLevelColor(level) {
      let bg = "";
      let text = "";
      switch (level) {
        case 1:
          bg = "riskNotClassified";
          text = "black";
          break;
        case 2:
          bg = "riskOvercome";
          text = "gray  p-2";
          break;
        case 3:
          bg = "riskLow";
          text = "black  p-2";
          break;
        case 4:
          bg = "riskMedium";
          text = "white  p-2";
          break;
        case 5:
          bg = "riskHight";
          text = "white  p-2";
          break;
        case 6:
          bg = "riskSuperHight";
          text = "white  p-2";
          break;
        default:
          bg = "transparent";
          text = "purple";
      }
      return " bg-" + bg + " text-" + text;
    },
  },

  created() {
    // console.log("people info", this.people);
    this.peopleAcces();
    this.peopleChange();
    this.peopleDelete();
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
