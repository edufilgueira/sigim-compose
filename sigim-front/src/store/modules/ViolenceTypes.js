import { getViolenceTypes } from "../../service/ViolenceTypesApi";

const state = {
  item: null,
  list: null,
};

const mutations = {
  setViolenceTypesMutation: (state, list) => {
    state.list = list;
  },
  setViolenceTypeMutation: (state, item) => {
    state.item = item;
  },
};

const actions = {
  loadViolenceTypes: ({ commit }) => {
    getViolenceTypes()
      .then((response) => {
        // console.log("ViolenceTypes", response);
        commit("setViolenceTypesMutation", response.data.violence_types);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setViolenceType: ({ commit }, payload) => {
    commit("setViolenceTypeMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
