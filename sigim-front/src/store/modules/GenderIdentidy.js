import { getGenderIdentidy } from "../../service/GendersIdentidyApi";

const state = {
  item: null,
  list: [],
};

const mutations = {
  setGendersIdentidyMutation: (state, list) => {
    state.list = list;
  },
  setGenderIdentidyMutation: (state, item) => {
    state.item = item;
  },
};

const actions = {
  loadGendersIdentidy: ({ commit }) => {
    getGenderIdentidy()
      .then((response) => {
        commit("setGendersIdentidyMutation", response.data.gender_identities);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setGenderIdentidy: ({ commit }, payload) => {
    commit("setGenderIdentidyMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
