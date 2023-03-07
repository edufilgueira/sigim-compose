const state = {
  modalPreInscriptionOpen: false,
  modalForgotPassword: false,
};

const mutations = {
  toggleModalPreInscription: (state) => {
    state.modalPreInscriptionOpen = !state.modalPreInscriptionOpen;
  },
  toggleModalForgotPasswordMutation: (state) => {
    state.modalForgotPassword = !state.modalForgotPassword;
  },
};

const actions = {
  toggleModalPreInscription: ({ commit, dispatch }) => {
    commit("toggleModalPreInscription");
    dispatch("Student/load", null, { root: true });
    dispatch("Student/setErrorMessages", [], { root: true });
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
