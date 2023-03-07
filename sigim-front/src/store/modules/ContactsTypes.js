import { getContactsTypes } from "../../service/ContactsTypesApi";

const state = {
  item: null,
  list: null,
};

const mutations = {
  setContactsMutation: (state, list) => {
    state.list = list;
  },
  setGenderMutation: (state, item) => {
    state.item = item;
  },
};

const actions = {
  loadContactsTypes: ({ commit }) => {
    getContactsTypes()
      .then((response) => {
        // console.log("Contacts", response);
        commit("setContactsMutation", response.data.contact_types);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setGender: ({ commit }, payload) => {
    commit("setGenderMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
