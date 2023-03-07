import { getRelationships } from "../../service/RelationshipApi";

const state = {
  item: null,
  list: null,
};

const mutations = {
  setRelationshipMutation: (state, list) => {
    state.list = list;
  },
  setRelationshipDegreeMutation: (state, item) => {
    state.item = item;
  },
};

const actions = {
  loadRelationships: ({ commit }) => {
    getRelationships()
      .then((response) => {
        // console.log("Relationship", response);
        commit("setRelationshipMutation", response.data.relationship_degrees);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setRelationshipDegree: ({ commit }, payload) => {
    commit("setRelationshipDegreeMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
