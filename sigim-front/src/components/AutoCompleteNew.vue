<template>
  <div>
    <label class="typo__label" for="ajax">Pessoa</label>
    <multiselect
      v-model="selectedPeople"
      id="ajax"
      label="name"
      track-by="code"
      placeholder="Digite parte do nome"
      open-direction="bottom"
      :options="peopleAll"
      :multiple="true"
      :searchable="true"
      :loading="isLoading"
      :internal-search="false"
      :clear-on-select="false"
      :close-on-select="false"
      :options-limit="300"
      :limit="3"
      :limit-text="limitText"
      :max-height="600"
      :show-no-results="false"
      :hide-selected="true"
      @search-change="searchPeople"
      @input="callBack(selectedPeople)"
    >
      <template slot="tag" slot-scope="{ option, remove }"
        ><span class="custom__tag"
          ><span>{{ option.name }}</span
          ><span class="font-extrabold text-lg text-purple" @click="remove(option)"> X </span></span
        ></template
      >
      <template slot="clear" slot-scope="props">
        <div
          class="multiselect__clear"
          v-if="selectedPeople.length"
          @mousedown.prevent.stop="clearAll(props.search)"
        ></div> </template
      ><span slot="noResult">Oops! Nenhum resiltado encontrado!.</span>
    </multiselect>
    <!-- <pre class="language-json"><code>{{ selectedPeople  }}</code></pre> -->
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
// import { ajaxFindCountry } from "./countriesApi";
import { mapActions } from "vuex";

export default {
  components: {
    Multiselect,
  },
  props: {
    index: {
      type: Number,
      default: 0,
    },
    source: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      selectedPeople: [],
      peopleAll: [],
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      setPersonKinship: "People/setPersonKinship",
    }),
    limitText(count) {
      return `and ${count} other countries`;
    },
    searchPeople(query) {
      const authHeaders = JSON.parse(localStorage.getItem("authHeaders"));
      if (authHeaders) {
        const headers = {
          "access-token": authHeaders["access-token"],
          client: authHeaders["client"],
          uid: authHeaders["uid"],
        };
        var myHeaders = new Headers(headers);
        var myInit = { method: "GET", headers: myHeaders, mode: "cors", cache: "default" };
        fetch(`http://localhost:3000/api/people?name=${query}&limit=10`, myInit)
          .then((response) => response.json())
          .then((r) => {
            // console.log("R", r);
            this.peopleAll = r.people;
            // console.log("R", this.peopleAll);
          });
      }
    },
    clearAll() {
      this.selectedPeople = [];
    },
    callBack(payload) {
      var dispatch = "";
      console.log("index", this.index);
      console.log("payload", payload);
      console.log("this.source", this.source);
      if (this.source == 1) {
        dispatch = "People/setPersonKinshipNew";
      }
      if (this.source == 2) {
        dispatch = "People/setPersonKinship";
      }
      console.log("dispatch", dispatch);
      let data = {
        index: this.index,
        id: payload[0].id,
        name: payload[0].name,
      };
      console.log("data", data);
      this.$store.dispatch(dispatch, data);
    },
  },
};
</script>
