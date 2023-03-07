import { getCivilStatuses } from "../../service/CivilStatusesApi";

const state = {
  item: null,
  list: null,
};

const mutations = {
  setCivilStatusesMutation: (state, list) => {
    state.list = list;
  },
  setCivilStatusMutation: (state, item) => {
    state.item = item;
  },
};

const actions = {
  loadCivilStatuses: ({ commit }) => {
    getCivilStatuses()
      .then((response) => {
        // console.log("CivilStatuses", response);
        commit("setCivilStatusesMutation", response.data.civil_statuses);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setCivilStatus: ({ commit }, payload) => {
    commit("setCivilStatusMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
