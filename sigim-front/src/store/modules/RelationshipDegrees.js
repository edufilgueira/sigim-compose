import { getRelationshipDegrees } from "../../service/RelationshipDegreesApi";

const state = {
  item: null,
  list: null,
};

const mutations = {
  setRelationshipDegreesMutation: (state, list) => {
    state.list = list;
  },
  setRelationshipDegreeMutation: (state, item) => {
    state.item = item;
  },
};

const actions = {
  loadRelationshipDegrees: ({ commit }) => {
    getRelationshipDegrees()
      .then((response) => {
        // console.log("RelationshipDegrees", response);
        commit("setRelationshipDegreesMutation", response.data.relationship_degrees);
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
