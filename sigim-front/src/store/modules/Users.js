import { getUsers } from "../../service/UsersApi";
import Vue from "vue";

const state = {
  users: [],
  filteredUsers: [],
  ability_profiles: [],
  filterUsers: {
    name: "",
    prifile_id: 0,
  },
  modalDeleteUsersConfirmationOpen: false,
  userIdForDeletion: null,
};

const mutations = {
  setUsersMutation: (state, users) => {
    state.users = users;
    state.filteredUsers = users;
    console.log("users", state.users);
  },
  addUserMutation: (state, user) => {
    state.users.push(user);
  },
  filterListMutation: (state, input) => {
    let users = state.users;
    state.filterUsers = users.filter((obj) => {
      let name = obj.name.toLowerCase().indexOf(input.value.toLowerCase());
      let cpf = obj.cpf.toLowerCase().indexOf(input.value.toLowerCase());

      return name > -1 || cpf > -1;
    });
  },
  filterListByNameMutation: (state, input) => {
    console.log("input.value", input);
    state.filterUsers.name = input.value;
  },
  filterListByProfileMutation: (state, input) => {
    state.filterUsers.profile_id = input.value;
  },
  clearQuery: (state) => {
    state.filterList = [];
    state.filteredUsers = [];
    state.ability_profiles = [];
    state.filterUsers.name = "";
    state.filterdUsers.profile_id = 0;
  },
  setRoleMutation: (state, role) => {
    console.log("role", role);
    state.ability_profiles = [role];
  },
};

const actions = {
  setUsers: ({ commit }, users) => {
    commit("setUsersMutation", users);
  },
  addUser: ({ commit }, user) => {
    commit("addUserMutation", user);
  },
  filterList: ({ commit }, payload) => {
    commit("filterListMutation", payload);
  },
  filterListByName: ({ commit }, payload) => {
    commit("filterListByNameMutation", payload);
  },
  filterListByProfile: ({ commit }, payload) => {
    commit("filterListByProfileMutation", payload);
  },
  clearQuery: ({ commit }) => {
    commit("clearQuery");
  },
  setRole: ({ commit }, payload) => {
    // console.log("payload", payload);
    commit("setRoleMutation", { ability_profile_id: payload.id, name: payload.name });
  },
  loadUsers: ({ commit }, payload) => {
    console.log("loadUser Payload", payload);
    const filters = {
      name_user: state.filterUsers.name,
      profile_id: state.filterUsers.profile_id,
    };
    console.log("loadUser filters", filters);
    getUsers(filters)
      .then((response) => {
        console.log("response users", response);
        commit("setUsersMutation", response.data.user);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
