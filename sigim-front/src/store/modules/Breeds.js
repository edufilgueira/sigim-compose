import { getBreeds } from "../../service/BreedsApi";

const state = {
  item: null,
  list: null,
};

const mutations = {
  setBreedsMutation: (state, list) => {
    state.list = list;
  },
  setBreedMutation: (state, item) => {
    state.item = item;
  },
};

const actions = {
  loadBreeds: ({ commit }) => {
    getBreeds()
      .then((response) => {
        // console.log("breeds", response);
        commit("setBreedsMutation", response.data.breeds);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setBreed: ({ commit }, payload) => {
    commit("setBreedMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
