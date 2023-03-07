import { getViolenceMotivations } from "../../service/ViolenceMotivationsApi";

const state = {
  item: null,
  list: null,
};

const mutations = {
  setViolenceMotivationsMutation: (state, list) => {
    state.list = list;
  },
  setViolenceMotivationMutation: (state, item) => {
    state.item = item;
  },
};

const actions = {
  loadViolenceMotivations: ({ commit }) => {
    getViolenceMotivations()
      .then((response) => {
        commit("setViolenceMotivationsMutation", response.data.violence_motivations);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setViolenceMotivation: ({ commit }, payload) => {
    commit("setViolenceMotivationMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
