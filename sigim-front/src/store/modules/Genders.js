import { getGenders } from "../../service/GendersApi";

const state = {
  item: null,
  list: null,
};

const mutations = {
  setGendersMutation: (state, list) => {
    state.list = list;
  },
  setGenderMutation: (state, item) => {
    state.item = item;
  },
};

const actions = {
  loadGenders: ({ commit }) => {
    getGenders()
      .then((response) => {
        // console.log("Genders", response);
        commit("setGendersMutation", response.data.genders);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setGender: ({ commit }, payload) => {
    commit("setGenderMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
