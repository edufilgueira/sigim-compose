import Vue from "vue";
import { createUser, updateUser, deleteUSer, resetPassword } from "../../service/UserApi";

const state = {
  user: {
    id: null,
    name: "",
    email: "",
    cpf: "",
    phone_number: "",
    password: "",
    password_confirmation: "",
    active: true,
    roles_attributes: [],
  },
  emptyUser: {
    id: null,
    name: "",
    email: "",
    cpf: "",
    phone_number: "",
    password: "",
    password_confirmation: "",
    active: true,
    roles_attributes: [],
  },
  modalResetPassword: false,
  modalToggle: false,
  modalConfirmDeleteUser: false,
  errorMessages: [],
  userId: 0,
};

const mutations = {
  toggleModalDeleteConfirmation: (state) => {
    state.modalConfirmDeleteUser = !state.modalConfirmDeleteUser;
  },
  userForDeletion: (state, payload) => {
    // console.log("payload.id", payload);
    state.userId = payload;
  },
  setIdMutation: (state, id) => {
    state.user.id = id;
  },
  setNameMutation: (state, name) => {
    state.user.name = name;
  },
  setEmailMutation: (state, email) => {
    state.user.email = email;
  },
  setPasswordMutation: (state, password) => {
    state.user.password = password;
  },
  setPasswordConfirmationMutation: (state, password_confirmation) => {
    state.user.password_confirmation = password_confirmation;
  },
  setCpfMutation: (state, cpf) => {
    state.user.cpf = cpf;
  },
  setPhoneNumberMutation: (state, phone_number) => {
    state.user.phone_number = phone_number;
  },
  clearUserMutation: (state) => {
    state.user = Object.assign(state.user, state.emptyUser);
  },
  toggleModalMutation: (state) => {
    state.modalToggle = !state.modalToggle;
  },
  toggleModalResetPasswordMutation: (state) => {
    state.modalResetPassword = !state.modalResetPassword;
  },
  setUserMutation: (state, user) => {
    state.user = Object.assign(state.user, user);
    state.user.roles_attributes = user.ability_profile;
  },
  setRoleMutation: (state, role) => {
    console.log("role", role);
    state.user.roles_attributes = [role];
  },
  setActiveMutation: (state, active) => {
    state.user.active = active;
  },
  setErrorMessagesMutation: (state, errorMessages) => {
    state.errorMessages = errorMessages;
  },
};

const actions = {
  openCloseDeleteUserConfirmation: ({ commit, state }, payload) => {
    console.log("payload user", payload);
    commit("toggleModalDeleteConfirmation");
    if (state.modalConfirmDeleteUser) {
      commit("userForDeletion", payload.id);
    } else {
      commit("userForDeletion", null);
    }
  },
  setName: ({ commit }, payload) => {
    commit("setNameMutation", payload.value);
  },
  setEmail: ({ commit }, payload) => {
    commit("setEmailMutation", payload.value);
  },
  setPassword: ({ commit }, payload) => {
    commit("setPasswordMutation", payload.value);
  },
  setPasswordConfirmation: ({ commit }, payload) => {
    commit("setPasswordConfirmationMutation", payload.value);
  },
  setCpf: ({ commit }, payload) => {
    commit("setCpfMutation", payload.value);
  },
  setPhoneNumber: ({ commit }, payload) => {
    commit("setPhoneNumberMutation", payload.value);
  },
  setActive: ({ commit }, payload) => {
    commit("setActiveMutation", payload.value);
  },
  openModal: ({ commit }) => {
    commit("toggleModalMutation");
  },
  closeModal: ({ commit }) => {
    commit("toggleModalMutation");
    commit("clearUserMutation");
    commit("setErrorMessagesMutation", []);
  },
  setUser: ({ commit }, payload) => {
    commit("setUserMutation", payload);
  },
  openEditModal: ({ dispatch }, payload) => {
    dispatch("setUser", payload);
    dispatch("openModal", payload);
  },
  openModalResetPassword: ({ dispatch, commit }, payload) => {
    dispatch("setUser", payload);
    commit("toggleModalResetPasswordMutation");
  },
  closeModalResetPassword: ({ commit }) => {
    commit("toggleModalResetPasswordMutation");
    commit("clearUserMutation");
    commit("setErrorMessagesMutation", []);
  },
  setRole: ({ commit }, payload) => {
    // console.log("payload", payload);
    commit("setRoleMutation", { ability_profile_id: payload.id, name: payload.name });
  },
  save: ({ commit, dispatch }) => {
    const user = state.user;
    const objUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      active: user.active,
      cpf: user.cpf,
      phone_number: user.phone_number,
      password: user.password,
      password_confirmation: user.password_confirmation,
      ability_profile_id:
        user.roles_attributes.length > 0
          ? user.roles_attributes[0].ability_profile_id
          : user.ability_profile.id,
    };
    console.log("objUser", objUser);
    createUser(objUser)
      .then((response) => {
        if (response.status == 200 || response.status == 201) {
          Vue.$toast.success("Criado com sucesso");
          dispatch("Users/addUser", response.data, { root: true });
          dispatch("closeModal");
          dispatch("Users/loadUsers", null, { root: true });
        } else {
          Vue.$toast.error(
            "Não foi possivel cadastrar o usuário! " +
              "Por favor verifique se todos os campos com ( * ) foram preenchidos"
          );
        }
      })
      .catch((e) => {
        Vue.$toast.error(
          "Não foi possivel cadastrar o usuário! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
        console.log(e);
        commit("setErrorMessagesMutation", e.response.data.errors);
      });
  },
  update: ({ dispatch, state }) => {
    const user = state.user;
    console.log("user", user);
    console.log("user.roles_attributes.length", user.roles_attributes.length);
    const objUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      active: user.active,
      phone_number: user.phone_number,
      password: user.password,
      password_confirmation: user.password_confirmation,
      ability_profile_id:
        user.roles_attributes.length > 0
          ? user.roles_attributes[0].ability_profile_id
          : user.ability_profile.id,
    };
    console.log("objUser", objUser);
    updateUser(objUser.id, objUser).then((resp) => {
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Atualizado com sucesso");
        dispatch("Users/loadUsers", null, { root: true });
        dispatch("closeModal");
      } else {
        Vue.$toast.error(
          "Não foi possivel cadastrar o usuário! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
      }
    });
  },
  deleteUSer: ({ commit, dispatch, state }) => {
    const userId = state.userId;
    // console.log("user_id", prof_id);
    deleteUSer(userId).then((resp) => {
      console.log("resp delete user", resp);
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Usuário deletado com sucesso");
        dispatch("Users/loadUsers", null, { root: true });
        commit("toggleModalDeleteConfirmation");
      }
    });
  },
  resetPassword: ({ commit, dispatch }) => {
    if (state.user.password == "" || state.user.password_confirmation == "") {
      Vue.$toast.error("Campos de senha e confirmação de senha devem ser preenchidos!");
    } else if (state.user.password != state.user.password_confirmation) {
      Vue.$toast.error("Campos de senha e confirmação de senha foram preenchidos com valores diferentes!");
    } else {
      resetPassword(state.user.id, state.user.password, state.user.password_confirmation)
        .then((response) => {
          Vue.$toast.success("Senha atualizada com sucesso!");
          console.log(response);
          dispatch("closeModalResetPassword");
          dispatch("Users/loadUsers", null, { root: true });
        })
        .catch((e) => {
          Vue.$toast.error("Não foi possível atualizar a senha!");
          console.log(e);
          commit("setErrorMessagesMutation", e.response.data.errors);
        });
    }
  },
};

const getters = {
  getErrorMessage: (state) => (key, field) => {
    let error = state.errorMessages.find((errorMessage) => {
      return errorMessage.attribute === key;
    });

    if (error) {
      switch (error.type) {
        case "blank":
          if (field === "" || field === " " || field === undefined || field === null || field.length === 0) {
            return error.message;
          } else {
            return null;
          }

        case "invalid_cpf":
          return error.message;

        case "invalid":
          return error.message;

        case "taken":
          return error.message;

        default:
          return null;
      }
    } else {
      return null;
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
