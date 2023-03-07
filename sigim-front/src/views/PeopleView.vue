<template>
  <div>
    <div class="pl-12">
      <BaseText
        text="Pessoas"
        typeText="custom"
        weight="semibold"
        :italic="false"
        size="3xl"
        color="ashes-hover"
      />
    </div>
    <div id="tabs-button" class="flex justify-between mx-12 my-6">
      <div class="grid grid-cols-2 gap-x-2 gap-y-4">
        <div class="w-104">
          <BaseInput
            active
            inputName=""
            inputType="text"
            iconName="search"
            showIcon
            input-placeholder="Pesquisar por nome ou cpf"
            dispatch="People/filterListByName"
            ref="name_people"
          />
        </div>
        <div>
          <Multiselect
            id="select-risk"
            select-placeholder="Nível de risco"
            close-on-select
            show-label
            :value="filter_people.risk_level"
            :options="risk_level"
            :dispatch="filterListByRiskLevel"
            :multiple-option="false"
            class="mr-4"
            ref="risk_id"
          />
        </div>
        <div>
          <Multiselect
            id="select-gender"
            select-placeholder="Identidade de gênero"
            close-on-select
            show-label
            :value="filter_people.filter_genderIdentidy"
            :options="gendersIdentidy"
            :dispatch="filterListByGenderIdentidy"
            :multiple-option="false"
            class="mr-4"
            ref="gender_id"
          />
        </div>
        <div>
          <AppButtonColorful
            id="btn-consult-people"
            showIcon
            iconName="search"
            text="Consultar dados"
            dispatch="People/loadPeople"
            typeButton="primary"
          />
        </div>
        <div v-if="People.length > 0">
          <a href="javascript:void(0)" @click="clearFields()">
            <AppButtonColorful
              id="btn-consult-facilities"
              showIcon
              iconName="remove"
              text="Limpar consulta"
              typeButton="primary"
            />
          </a>
        </div>
      </div>
      <div class="float-right" v-if="permitUp">
        <AppButtonColorful
          id="btn-add-teacher"
          showIcon
          iconName="add"
          text="Adicionar Pessoa"
          dispatch="People/openModal"
          typeButton="primary"
        />
      </div>
    </div>
    <div class="p-4">
      <div class="mx-10"><PeopleCards :data="People" /></div>
    </div>
    <!-- <pagination
      v-if="paginate.total_count"
      :offset="offset"
      :total="total"
      :limit="limit"
      @change-page="changePage"
    /> -->
    <ModalPeople :open="toggleModal" />
    <ModalConfirmDeletePeople :open="modalConfirmDeletePeople" />
  </div>
</template>

<script>
import ModalPeople from "./ModalPeople.vue";
// import Pagination from "../components/AppPagination.vue";
import Multiselect from "../components/forms/Multiselect.vue";
import PeopleCards from "./list/PeopleCards.vue";
import BaseText from "../components/BaseText.vue";
import AppButtonColorful from "../components/AppButtonColorful.vue";
import BaseInput from "../components/forms/BaseInput.vue";
import ModalConfirmDeletePeople from "./ModalConfirmDeletePeople.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    PeopleCards,
    ModalConfirmDeletePeople,
    BaseText,
    ModalPeople,
    Multiselect,
    AppButtonColorful,
    // Pagination,
    BaseInput,
  },
  data() {
    return {
      permitUp: false,
      permitDes: false,
      permit: false,
      risk_level: [
        { id: 1, name: "NÃO CLASSIFICADO" },
        { id: 2, name: "SUPERADO" },
        { id: 3, name: "BAIXO" },
        { id: 4, name: "MÉDIO" },
        { id: 5, name: "ALTO" },
        { id: 6, name: "SUPER ALTO" },
      ],
    };
  },
  // beforeCreate() {
  //   this.$store.dispatch("People/loadPeople", this.offset);
  // },
  methods: {
    ...mapActions({
      canAcces: "AccessControl/canAcces",
      filterListByGenderIdentidy: "People/filterListByGenderIdentidy",
      filterListByRiskLevel: "People/filterListByRiskLevel",
    }),
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
        // console.log("person_update", resp);
        this.permitUp = resp;
      });
    },
    changePage(value) {
      this.offset = value;
      this.$store.dispatch("People/loadPeople", value);
    },
    clearFields() {
      this.$refs["name_people"].value = "";
      this.$refs["gender_id"].value = "";
      this.$refs["risk_id"].value = "";
      this.$store.dispatch("People/clearQuery");
    },
  },
  computed: {
    ...mapState({
      People: (state) => state.People.filterPeople,
      filter_people: (state) => state.People.filter_people,
      paginate: (state) => state.People.paginate,
      offset: (state) => state.People.offset,
      total: (state) => state.People.total,
      toggleModal: (state) => state.People.modalToggle,
      modalConfirmDeletePeople: (state) => state.People.modalConfirmDeletePerson,
      gendersIdentidy: (state) => state.GenderIdentidy.list,
    }),
  },
  created() {
    // console.log("people info", this.people);
    this.$store.dispatch("GenderIdentidy/loadGendersIdentidy");
    this.peopleAcces();
    this.peopleChange();
    this.peopleDelete();
  },
};
</script>
