import { getCitiesByStateId } from "../../service/CityApi";

const state = {
  city: null,
  cities: null,
};

const mutations = {
  setCitiesMutation: (state, cities) => {
    state.cities = cities;
  },
  setCityMutation: (state, city) => {
    state.city = city;
  },
};

const actions = {
  loadCities: ({ commit }) => {
    getCitiesByStateId(1)
      .then((response) => {
        // console.log("cities", response);
        commit("setCitiesMutation", response.data.cities);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setCity: ({ commit }, payload) => {
    commit("setCityMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
