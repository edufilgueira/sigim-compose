import { getEthnicities } from "../../service/EthnicitiesApi";

const state = {
  item: null,
  list: null,
};

const mutations = {
  setEthnicitiesMutation: (state, list) => {
    state.list = list;
  },
  setEthnicitieMutation: (state, item) => {
    state.item = item;
  },
};

const actions = {
  loadEthnicities: ({ commit }) => {
    getEthnicities()
      .then((response) => {
        // console.log("Ethnicities", response);
        commit("setEthnicitiesMutation", response.data.ethnicities);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setEthnicitie: ({ commit }, payload) => {
    commit("setEthnicitieMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
