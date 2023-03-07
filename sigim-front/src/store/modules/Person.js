import Vue from "vue";
import { createPerson, updatePerson, deletePerson } from "../../service/PersonApi";

const state = {
  person: {
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
  emptyPerson: {
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
  modalToggle: false,
  modalConfirmDeletePerson: false,
  errorMessages: [],
  personId: 0,
};

const mutations = {
  toggleModalDeleteConfirmation: (state) => {
    state.modalConfirmDeletePerson = !state.modalConfirmDeletePerson;
  },
  personForDeletion: (state, payload) => {
    // console.log("payload.id", payload);
    state.personId = payload;
  },
  setIdMutation: (state, id) => {
    state.person.id = id;
  },
  setNameMutation: (state, name) => {
    state.person.name = name;
  },
  setEmailMutation: (state, email) => {
    state.person.email = email;
  },
  setPasswordMutation: (state, password) => {
    state.person.password = password;
  },
  setPasswordConfirmationMutation: (state, password_confirmation) => {
    state.person.password_confirmation = password_confirmation;
  },
  setCpfMutation: (state, cpf) => {
    state.person.cpf = cpf;
  },
  setPhoneNumberMutation: (state, phone_number) => {
    state.person.phone_number = phone_number;
  },
  clearPersonMutation: (state) => {
    state.person = Object.assign(state.person, state.emptyPerson);
  },
  toggleModalMutation: (state) => {
    state.modalToggle = !state.modalToggle;
  },
  setPersonMutation: (state, person) => {
    state.person = Object.assign(state.person, person);
    state.person.roles_attributes = person.ability_profile;
  },
  setRoleMutation: (state, role) => {
    // console.log("role", role);
    state.person.roles_attributes = [role];
  },
  setActiveMutation: (state, active) => {
    state.person.active = active;
  },
  setErrorMessagesMutation: (state, errorMessages) => {
    state.errorMessages = errorMessages;
  },
};

const actions = {
  openCloseDeletePersonConfirmation: ({ commit, state }, payload) => {
    // console.log("payload Person", payload);
    commit("toggleModalDeleteConfirmation");
    if (state.modalConfirmDeletePerson) {
      commit("personForDeletion", payload.id);
    } else {
      commit("personForDeletion", null);
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
    // commit("clearPersonMutation");
    commit("setErrorMessagesMutation", []);
  },
  setPerson: ({ commit }, payload) => {
    commit("setPersonMutation", payload);
  },
  openEditModal: ({ dispatch }, payload) => {
    dispatch("setPerson", payload);
    dispatch("openModal", payload);
  },
  setRole: ({ commit }, payload) => {
    // console.log("payload", payload);
    commit("setRoleMutation", { ability_profile_id: payload.id, name: payload.name });
  },
  save: ({ commit, dispatch }) => {
    const person = state.person;
    const objPerson = {
      id: person.id,
      name: person.name,
      email: person.email,
      active: person.active,
      cpf: person.cpf,
      phone_number: person.phone_number,
      password: person.password,
      password_confirmation: person.password_confirmation,
      ability_profile_id:
        person.roles_attributes.length > 0
          ? person.roles_attributes[0].ability_profile_id
          : person.ability_profile.id,
    };
    // console.log("objPerson", objPerson);
    createPerson(objPerson)
      .then((response) => {
        Vue.$toast.success("Criado com sucesso");
        dispatch("People/addPerson", response.data, { root: true });
        commit("toggleModalMutation");
        dispatch("People/loadPeople", null, { root: true });
      })
      .catch((e) => {
        Vue.$toast.error(
          "Não foi possivel cadastrar o pessoa! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
        console.log(e);
        commit("setErrorMessagesMutation", e.response.data.errors);
      });
  },
  update: ({ dispatch, state }) => {
    const person = state.person;
    // console.log("person", person);
    // console.log("person.roles_attributes.length", person.roles_attributes.length);
    const objPerson = {
      id: person.id,
      name: person.name,
      email: person.email,
      active: person.active,
      phone_number: person.phone_number,
      password: person.password,
      password_confirmation: person.password_confirmation,
      ability_profile_id:
        person.roles_attributes.length > 0
          ? person.roles_attributes[0].ability_profile_id
          : person.ability_profile.id,
    };
    // console.log("objPerson", objPerson);
    updatePerson(objPerson.id, objPerson).then((resp) => {
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Atualizado com sucesso");
        dispatch("People/loadPeople", null, { root: true });
        dispatch("closeModal");
      } else {
        Vue.$toast.error(
          "Não foi possivel cadastrar o pessoa! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
      }
    });
  },
  deletePerson: ({ commit, dispatch, state }) => {
    const personId = state.personId;
    // console.log("user_id", prof_id);
    deletePerson(personId).then((resp) => {
      // console.log("resp delete person", resp);
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Usuário deletado com sucesso");
        dispatch("People/loadPeople", null, { root: true });
        commit("toggleModalDeleteConfirmation");
      }
    });
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
