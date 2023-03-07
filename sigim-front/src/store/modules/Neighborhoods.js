import {
  getNeighborhoodsByCityId,
  getNeighborhoodsByCityIdWithoutArea,
} from "../../service/NeighborhoodsApi";

const state = {
  neighborhoods: [],
  neighborhoodsWithoutArea: [],
};

const mutations = {
  setNeighborhoods: (state, neighborhoods) => {
    state.neighborhoods = neighborhoods;
  },
  setNeighborhoodsWithoutArea: (state, neighborhoods) => {
    state.neighborhoodsWithoutArea = neighborhoods;
  },
};

const actions = {
  loadNeighborhoods: ({ commit, rootState }, payload) => {
    let id = payload ? payload : rootState.City.city.id;
    getNeighborhoodsByCityId(id)
      .then((response) => {
        commit("setNeighborhoods", response.data.neighborhoods);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadNeighborhoodsWithoutArea: ({ commit, rootState }) => {
    let id = rootState.City.city.id;
    getNeighborhoodsByCityIdWithoutArea(id)
      .then((response) => {
        commit("setNeighborhoodsWithoutArea", response.data.neighborhoods);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
