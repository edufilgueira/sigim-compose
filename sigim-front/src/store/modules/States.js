// import Vue from "vue";
import { getStates } from "../../service/StatesApi";

const state = {
  states: [],
  state_id: 0,
};

const mutations = {
  setStatesMutation: (state, payload) => {
    state.states = payload;
  },
  setStateIdMutation: (state, state_id) => {
    state.state_id = state_id;
  },
};

const actions = {
  loadStates: ({ commit }) => {
    getStates()
      .then((resp) => {
        commit("setStatesMutation", resp.data.states);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  toggleModalForgotPassword: ({ commit }) => {
    commit("toggleModalForgotPasswordMutation");
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
