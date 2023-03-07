import { getSexualOrientations } from "../../service/SexualOrientationsApi";

const state = {
  item: null,
  list: null,
};

const mutations = {
  setSexualOrientationsMutation: (state, list) => {
    state.list = list;
  },
  setSexualOrientationMutation: (state, item) => {
    state.item = item;
  },
};

const actions = {
  loadSexualOrientations: ({ commit }) => {
    getSexualOrientations()
      .then((response) => {
        // console.log("SexualOrientations", response);
        commit("setSexualOrientationsMutation", response.data.sexual_orientations);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setsexualOrientation: ({ commit }, payload) => {
    commit("setSexualOrientationMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
