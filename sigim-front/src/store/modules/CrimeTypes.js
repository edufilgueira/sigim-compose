import Vue from "vue";
import {
  createCrimeType,
  updateCrimeType,
  destroyCrimeType,
  getCrimesType,
} from "../../service/CrimeTypesApi";

const state = {
  crimeType: [],
  crimeTypeName: "",
  emptyCrimeType: [],
  modalToggle: false,
  modalConfirmDeleteCrimeType: false,
  errorMessages: [],
  filterCrimesTypes: [],
  crimeTypeId: 0,
};

const mutations = {
  toggleModalDeleteConfirmation: (state) => {
    state.modalConfirmDeleteCrimeType = !state.modalConfirmDeleteCrimeType;
  },
  crimeTypeForDeletion: (state, payload) => {
    // console.log("payload.id", payload);
    state.crimeTypeId = payload;
  },
  setIdMutation: (state, id) => {
    state.crimeType.id = id;
  },
  setPasswordConfirmationMutation: (state, password_confirmation) => {
    state.crimeType.password_confirmation = password_confirmation;
  },
  clearCrimeTypeMutation: (state) => {
    state.crimeType = Object.assign(state.crimeType, state.emptyCrimeType);
    state.crimeTypeName = "";
  },
  toggleModalMutation: (state) => {
    state.modalToggle = !state.modalToggle;
    // console.log("state.modalToggle", state.modalToggle);
  },
  filterListMutation: (state, input) => {
    let crimeTypes = state.crimeType;
    state.filterCrimesTypes = crimeTypes.filter((obj) => {
      let name = obj.name.toLowerCase().indexOf(input.value.toLowerCase());
      return name > -1;
    });
  },
  setCrimeTypeMutation: (state, crimeType) => {
    state.crimeType = Object.assign(state.crimeType, crimeType);
    state.filterCrimesTypes = crimeType;
    // console.log("state.crimeType", state.crimeType);
  },
  setTypeCrimeMutation: (state, crimeType) => {
    state.crimeTypeName = crimeType;
    // console.log("state.crimeTypeName", state.crimeTypeName.name);
  },
  setActiveMutation: (state, active) => {
    state.crimeType.active = active;
  },
  setErrorMessagesMutation: (state, errorMessages) => {
    state.errorMessages = errorMessages;
  },
};

const actions = {
  openCloseDeleteCrimeTypeConfirmation: ({ commit, state }, payload) => {
    // console.log("payload crimetype", payload);
    commit("toggleModalDeleteConfirmation");
    if (state.modalConfirmDeleteCrimeType) {
      commit("crimeTypeForDeletion", payload.id);
    } else {
      commit("crimeTypeForDeletion", null);
    }
  },
  setActive: ({ commit }, payload) => {
    commit("setActiveMutation", payload.value);
  },
  openModal: ({ commit }) => {
    commit("toggleModalMutation");
  },
  closeModal: ({ commit }) => {
    commit("toggleModalMutation");
    commit("clearCrimeTypeMutation");
    commit("setErrorMessagesMutation", []);
  },
  setCrimeType: ({ commit }, payload) => {
    commit("setCrimeTypeMutation", payload);
  },
  setTypeCrime: ({ commit }, payload) => {
    commit("setTypeCrimeMutation", payload);
  },
  openEditModal: ({ dispatch }, payload) => {
    dispatch("setTypeCrime", payload);
    dispatch("openModal", payload);
  },
  filterList: ({ commit }, payload) => {
    commit("filterListMutation", payload);
  },
  loadCrimeType: ({ commit }, payload) => {
    getCrimesType(payload)
      .then((response) => {
        // console.log("response crimes types", response);
        commit("setCrimeTypeMutation", response.data.crime_types);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },

  save: ({ commit, dispatch }) => {
    const crimeType = state.crimeType;

    // console.log("crimeType", crimeType);
    createCrimeType(crimeType)
      .then(() => {
        Vue.$toast.success("Criado com sucesso");
        // dispatch("CrimeTypes/addCrimeType", response.data, { root: true });
        commit("toggleModalMutation");
        dispatch("CrimeTypes/loadCrimeType", null, { root: true });
      })
      .catch((e) => {
        Vue.$toast.error(
          "Não foi possivel cadastrar o tipo de crime! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
        console.log(e);
        commit("setErrorMessagesMutation", e.response.data.errors);
      });
  },
  saveCrimeType: ({ commit, dispatch }) => {
    const crimeTypeName = state.crimeTypeName;

    // console.log("crimeType", crimeTypeName.value);
    createCrimeType(crimeTypeName.value)
      .then((response) => {
        Vue.$toast.success("Criado com sucesso");
        dispatch("CrimeTypes/addCrimeType", response.data, { root: true });
        commit("toggleModalMutation");
        dispatch("CrimeTypes/loadCrimeType", null, { root: true });
      })
      .catch((e) => {
        Vue.$toast.error(
          "Não foi possivel cadastrar o tipo de crime! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
        console.log(e);
        commit("setErrorMessagesMutation", e.response.data.errors);
      });
  },
  update: ({ dispatch, state }) => {
    const crimeType = state.crimeType;
    // console.log("crimeType", crimeType);
    updateCrimeType(crimeType.id, crimeType).then((resp) => {
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Atualizado com sucesso");
        dispatch("CrimeTypes/loadCrimeType", null, { root: true });
        dispatch("closeModal");
      } else {
        Vue.$toast.error(
          "Não foi possivel cadastrar o tipo de crime! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
      }
    });
  },
  deleteCrimeType: ({ commit, dispatch, state }) => {
    const userId = state.crimeTypeId;
    // console.log("crimetype_id", prof_id);
    destroyCrimeType(userId).then((resp) => {
      // console.log("resp delete crimetype", resp);
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Tipo de crime deletado com sucesso");
        dispatch("CrimeTypes/loadCrimeType", null, { root: true });
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
