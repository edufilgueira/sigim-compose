import { getSkinColors } from "../../service/SkinColorsApi";

const state = {
  item: null,
  list: null,
};

const mutations = {
  setSkinColorsMutation: (state, list) => {
    state.list = list;
  },
  setSkinColorMutation: (state, item) => {
    state.item = item;
  },
};

const actions = {
  loadSkinColors: ({ commit }) => {
    getSkinColors()
      .then((response) => {
        // console.log("SkinColors", response);
        commit("setSkinColorsMutation", response.data.skin_colors);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setSkinColor: ({ commit }, payload) => {
    commit("setSkinColorMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
