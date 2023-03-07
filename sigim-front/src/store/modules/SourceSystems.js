import { getSourceSystems } from "../../service/SourceSystemsApi";

const state = {
  item: null,
  list: null,
};

const mutations = {
  setSourceSystems: (state, list) => {
    state.list = list;
  },
  setSourceSystemMutation: (state, item) => {
    state.item = item;
  },
};

const actions = {
  loadSourceSystems: ({ commit }) => {
    getSourceSystems()
      .then((response) => {
        commit("setSourceSystems", response.data.source_systems);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setSourceSystem: ({ commit }, payload) => {
    commit("setSourceSystemMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
