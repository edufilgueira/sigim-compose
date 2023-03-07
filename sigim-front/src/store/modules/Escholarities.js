import { getScholarities } from "../../service/EscholaritesApi";

const state = {
  item: null,
  list: null,
};

const mutations = {
  setScholaritiesMutation: (state, list) => {
    state.list = list;
  },
  setScholaritieMutation: (state, item) => {
    state.item = item;
  },
};

const actions = {
  loadScholarities: ({ commit }) => {
    getScholarities()
      .then((response) => {
        // console.log("Scholarities", response);
        commit("setScholaritiesMutation", response.data.scholarities);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setScholaritie: ({ commit }, payload) => {
    commit("setScholaritieMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
