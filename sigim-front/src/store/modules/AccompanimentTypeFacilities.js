import {
  getAccompanimentTypeFacilities,
  createAccompanimentTypeFacility,
  updateAccompanimentTypeFacility,
  destroyAccompanimentTypeFacility,
} from "../../service/AccompanimentTypeFacilitiesApi";
import { getAccompanimentTypes } from "../../service/AccompanimentTypesApi";
import Vue from "vue";

const state = {
  accompanimentTypeFacility: {
    id: null,
    facility_id: 0,
    accompaniment_type_id: 0,
  },
  filters: {
    name_facility: "",
    accompaniment_type: "",
  },
  facility: null,
  accompaniment_type_facilities: [],
  accompaniment_types: [],
  accompaniment_type: null,
  filterAccompanimentTypeFacilities: [],
  accompanimentTypeFacilityId: 0,
  modalToggleAccompanimentTypeFacilities: false,
  modalConfirmDeleteAccompanimentTypeFacility: false,
  modalViewAccompanimentTypeFacility: false,
};

const mutations = {
  setAccompanimentTypeFacilitiesMutation: (state, accompaniment_type_facilities) => {
    state.accompaniment_type_facilities = accompaniment_type_facilities;
    state.filterAccompanimentTypeFacilities = accompaniment_type_facilities;
  },
  setAccompanimentTypesMutation: (state, accompaniment_types) => {
    state.accompaniment_types = accompaniment_types;
  },
  filterListByNameFacility: (state, input) => {
    // let accompaniment_type_facilities = state.accompaniment_type_facilities;
    // state.filterAccompanimentTypeFacilities = accompaniment_type_facilities.filter((obj) => {
    //   let name = obj.facility.name.toLowerCase().indexOf(input.value.toLowerCase());
    //   return name > -1;
    // });
    state.filters.name_facility = input.value;
  },
  filterListByAccompanimentType: (state, input) => {
    // let accompaniment_type_facilities = state.accompaniment_type_facilities;
    // state.filterAccompanimentTypeFacilities = accompaniment_type_facilities.filter((obj) => {
    //   let name = obj.accompaniment_type.name.toLowerCase().indexOf(input.value.toLowerCase());
    //   return name > -1;
    // });
    state.filters.accompaniment_type = input.value;
  },
  toggleModalToggleAccompanimentTypeFacilities: (state) => {
    state.modalToggleAccompanimentTypeFacilities = !state.modalToggleAccompanimentTypeFacilities;
  },
  toggleModalDeleteAccompanimentTypeFacility: (state) => {
    state.modalConfirmDeleteAccompanimentTypeFacility = !state.modalConfirmDeleteAccompanimentTypeFacility;
  },
  toggleModalViewAccompanimentTypeFacility: (state) => {
    state.modalViewAccompanimentTypeFacility = !state.modalViewAccompanimentTypeFacility;
  },
  accompanimentTypeFacilityForDeletion: (state, payload) => {
    state.accompanimentTypeFacilityId = payload.id;
  },
  setIdMutation: (state, id) => {
    state.accompanimentTypeFacility.id = id;
  },
  setFacilityMutation: (state, facility) => {
    state.accompanimentTypeFacility.facility_id = facility.id;
    state.facility = facility;
  },
  setAccompanimentTypeMutation: (state, accompaniment_type) => {
    state.accompanimentTypeFacility.accompaniment_type_id = accompaniment_type.id;
    state.accompaniment_type = accompaniment_type;
  },
  clearQuery: (state) => {
    state.accompaniment_type_facilities = [];
    state.filterAccompanimentTypeFacilities = [];
    state.filters.name_facility = "";
    state.filters.accompaniment_type = "";
  },
  clearFields: (state) => {
    state.accompanimentTypeFacility.id = null;
    state.facility = null;
    state.accompaniment_type = null;
  },
};

const actions = {
  loadAccompanimentTypeFacilities: ({ commit }) => {
    const filters = {
      name_facility: state.filters.name_facility,
      accompaniment_type: state.filters.accompaniment_type,
    };
    getAccompanimentTypeFacilities(filters)
      .then((response) => {
        commit("setAccompanimentTypeFacilitiesMutation", response.data.accompaniment_type_facilities);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadAccompanimentTypes: ({ commit }) => {
    getAccompanimentTypes()
      .then((response) => {
        // console.log("getAccompanimentTypeFacilities", response);
        commit("setAccompanimentTypesMutation", response.data.accompaniment_types);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  filterListByNameFacility: ({ commit }, payload) => {
    commit("filterListByNameFacility", payload);
  },
  filterListByAccompanimentType: ({ commit }, payload) => {
    commit("filterListByAccompanimentType", payload);
  },
  toggleModalToggleAccompanimentTypeFacilities: ({ commit }) => {
    commit("toggleModalToggleAccompanimentTypeFacilities");
  },
  loadData: ({ commit }, payload) => {
    commit("setIdMutation", payload.id);
    commit("setFacilityMutation", payload.facility);
    commit("setAccompanimentTypeMutation", payload.accompaniment_type);
  },
  openViewModal: ({ commit, dispatch }, payload) => {
    dispatch("loadData", payload);
    commit("toggleModalViewAccompanimentTypeFacility");
  },
  closeViewModal: ({ commit }) => {
    commit("toggleModalViewAccompanimentTypeFacility");
    commit("clearFields");
  },
  openEditModal: ({ commit, dispatch }, payload) => {
    dispatch("loadData", payload);
    commit("toggleModalToggleAccompanimentTypeFacilities");
  },
  closeModal: ({ commit }) => {
    commit("toggleModalToggleAccompanimentTypeFacilities");
    commit("clearFields");
  },
  clearQuery: ({ commit }) => {
    commit("clearQuery");
  },
  toggleModalDeleteAccompanimentTypeFacility: ({ commit }, payload) => {
    commit("toggleModalDeleteAccompanimentTypeFacility");
    if (state.modalConfirmDeleteAccompanimentTypeFacility) {
      commit("accompanimentTypeFacilityForDeletion", payload);
    } else {
      commit("accompanimentTypeFacilityForDeletion", null);
    }
  },
  setId: ({ commit }, payload) => {
    commit("setIdMutation", payload);
  },
  setFacility: ({ commit }, payload) => {
    commit("setFacilityMutation", payload);
  },
  setAccompanimentType: ({ commit }, payload) => {
    commit("setAccompanimentTypeMutation", payload);
  },
  save: ({ commit, dispatch }) => {
    createAccompanimentTypeFacility(state.accompanimentTypeFacility)
      .then(() => {
        // console.log("Create Incident Report", response);
        Vue.$toast.success("Acompanhamento por tipo de equipamento cadastrado com sucesso!");
        commit("toggleModalToggleAccompanimentTypeFacilities");
        commit("clearFields");
        dispatch("AccompanimentTypeFacilities/loadAccompanimentTypeFacilities", null, { root: true });
      })
      .catch((e) => {
        Vue.$toast.error(
          "Não foi possivel cadastrar o acompanhamento por tipo de equipamento" +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
        console.log(e);
      });
  },
  update: ({ dispatch, commit }) => {
    updateAccompanimentTypeFacility(state.accompanimentTypeFacility.id, state.accompanimentTypeFacility).then(
      (resp) => {
        if (resp.status === 201 || resp.status === 200) {
          Vue.$toast.success("Acompanhamento por tipo de equipamento cadastradocom sucesso!");
          commit("toggleModalToggleAccompanimentTypeFacilities");
          dispatch("AccompanimentTypeFacilities/loadAccompanimentTypeFacilities", null, { root: true });
          commit("clearFields");
        } else {
          Vue.$toast.error(
            "Não foi possivel cadastrar o acompanhamento por tipo de equipamento! " +
              "Por favor verifique se todos os campos com ( * ) foram preenchidos"
          );
        }
      }
    );
  },
  delete: ({ commit, dispatch }) => {
    destroyAccompanimentTypeFacility(state.accompanimentTypeFacilityId).then((resp) => {
      // console.log("resp delete user", resp);
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Acompanhamento por tipo de equipamento deletado com sucesso");
        commit("toggleModalDeleteAccompanimentTypeFacility");
        dispatch("AccompanimentTypeFacilities/loadAccompanimentTypeFacilities", null, { root: true });
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
