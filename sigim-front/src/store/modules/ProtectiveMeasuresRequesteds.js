import {
  getProtectiveMeasuresRequesteds,
  createProtectiveMeasureRequested,
  updateProtectiveMeasureRequested,
  destroyProtectiveMeasureRequested,
} from "../../service/ProtectiveMeasuresRequestedsApi";
import { getProtectiveMeasuresTypes } from "../../service/ProtectiveMeasureTypesApi";
import Vue from "vue";

const state = {
  id: null,
  protective_measure_id: 0,
  protectiveMeasureRequested: [],
  protectiveMeasureRequestedId: 0,
  protective_measure: null,
  protective_measure_type: null,
  protective_measures_types: [],
  protective_measures_requesteds: [],
  filterProtectiveMeasuresRequesteds: [],
  protectiveMeasureRequestedToUpdate: {
    id: null,
    proctetive_measure: null,
    incident_report: null,
    protective_measure_type: null,
    requested: false,
  },
  filters: {
    number_protective_measure: null,
    number_incident_report: null,
  },
  modalToggleProtectiveMeasuresRequesteds: false,
  modalToggleEditProtectiveMeasuresRequesteds: false,
  modalConfirmDeleteProtectiveMeasureRequested: false,
};

const mutations = {
  setProtectiveMeasuresRequestedsMutation: (state, protective_measures_requesteds) => {
    state.protective_measures_requesteds = protective_measures_requesteds;
    state.filterProtectiveMeasuresRequesteds = protective_measures_requesteds;
  },
  setProtectiveMeasuresTypesMutation: (state, protective_measures_types) => {
    state.protective_measures_types = protective_measures_types;
  },
  filterListByNumberProtectiveMeasure: (state, input) => {
    // let protective_measures_requesteds = state.protective_measures_requesteds;
    // state.filterProtectiveMeasuresRequesteds = protective_measures_requesteds.filter((obj) => {
    //   let number = obj.protective_measure.number.toLowerCase().indexOf(input.value.toLowerCase());
    //   return number > -1;
    // });
    state.filters.number_protective_measure = input.value;
  },
  filterListByNumberIncidentReport: (state, input) => {
    // let protective_measures_requesteds = state.protective_measures_requesteds;
    // state.filterProtectiveMeasuresRequesteds = protective_measures_requesteds.filter((obj) => {
    //   let number = obj.incident_report.number.toLowerCase().indexOf(input.value.toLowerCase());
    //   return number > -1;
    // });
    state.filters.number_incident_report = input.value;
  },
  toggleModalProtectiveMeasuresRequesteds: (state) => {
    state.modalToggleProtectiveMeasuresRequesteds = !state.modalToggleProtectiveMeasuresRequesteds;
  },
  toggleModalDeleteProtectiveMeasureRequested: (state) => {
    state.modalConfirmDeleteProtectiveMeasureRequested = !state.modalConfirmDeleteProtectiveMeasureRequested;
  },
  toggleModalEditProtectiveMeasureRequested: (state) => {
    state.modalToggleEditProtectiveMeasuresRequesteds = !state.modalToggleEditProtectiveMeasuresRequesteds;
  },
  protectiveMeasureRequestedForDeletion: (state, payload) => {
    state.protectiveMeasureRequestedId = payload.id;
  },
  setIdMutation: (state, id) => {
    state.id = id;
  },
  setProtectiveMeasureMutation: (state, protective_measure) => {
    state.protectiveMeasureRequested = [];
    state.protective_measure_id = protective_measure.id;
    state.protective_measure = protective_measure;
  },
  setProtectiveMeasureTypeMutation: (state, protective_measure_type) => {
    state.protectiveMeasureRequested.protective_measure_type_id = protective_measure_type.id;
    state.protective_measure_type = protective_measure_type;
  },
  setprotectiveMeasureRequestedMutation: (state, protectiveMeasureRequested) => {
    state.protectiveMeasureRequested = protectiveMeasureRequested;
  },
  setProtectiveMeasureRequestedArrayMutation: (state, payload) => {
    if (payload.requested) {
      state.protectiveMeasureRequested.forEach((item) => {
        if (item.protective_measure_type_id == payload.data.id) {
          item.requested = true;
        }
      });
    } else {
      state.protectiveMeasureRequested.forEach((item) => {
        if (item.protective_measure_type_id == payload.data.id) {
          item.requested = false;
        }
      });
    }
    // console.log("array resultado", state.protectiveMeasureRequested);
  },
  setIdToUpdateMutation: (state, id) => {
    state.protectiveMeasureRequestedToUpdate.id = id;
  },
  setProctetiveMeasureToUpdateMutation: (state, protective_measure) => {
    state.protectiveMeasureRequestedToUpdate.protective_measure = protective_measure;
  },
  setIncidentReportToUpdateMutation: (state, incident_report) => {
    state.protectiveMeasureRequestedToUpdate.incident_report = incident_report;
  },
  setProtectiveMeasureTypeToUpdateMutation: (state, protective_measure_type) => {
    state.protectiveMeasureRequestedToUpdate.protective_measure_type = protective_measure_type;
  },
  setRequestedToUpdateMutation: (state, requested) => {
    state.protectiveMeasureRequestedToUpdate.requested = requested;
  },
  clearQuery: (state) => {
    state.protective_measures_requesteds = [];
    state.filterProtectiveMeasuresRequesteds = [];
    state.filters.number_protective_measure = null;
    state.filters.number_incident_report = null;
  },
  clearFields: (state) => {
    state.id = null;
    state.protectiveMeasureRequested = [];
    state.protectiveMeasureRequestedId = 0;
    state.protective_measure = null;
    state.protective_measure_type = null;
  },
};

const actions = {
  loadProtectiveMeasuresRequesteds: ({ commit }) => {
    const filters = {
      number_protective_measure: state.filters.number_protective_measure,
      number_incident_report: state.filters.number_incident_report,
    };
    getProtectiveMeasuresRequesteds(filters)
      .then((response) => {
        // console.log("loadProtectiveMeasuresRequesteds", response);
        commit("setProtectiveMeasuresRequestedsMutation", response.data.protective_measure_requesteds);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadProtectiveMeasuresTypes: ({ commit }) => {
    getProtectiveMeasuresTypes()
      .then((response) => {
        let arr = [];
        let types = response.data.protective_measure_types;
        types.forEach((item) => {
          let js = {
            protective_measure_id: state.protective_measure_id,
            protective_measure_type_id: item.id,
            requested: false,
          };
          arr.push(js);
        });
        commit("setProtectiveMeasuresTypesMutation", response.data.protective_measure_types);
        commit("setprotectiveMeasureRequestedMutation", arr);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadDataToUpdate: ({ commit }, payload) => {
    commit("setIdToUpdateMutation", payload.id);
    commit("setProctetiveMeasureToUpdateMutation", payload.protective_measure);
    commit("setIncidentReportToUpdateMutation", payload.incident_report);
    commit("setProtectiveMeasureTypeToUpdateMutation", payload.protective_measure_type);
    commit("setRequestedToUpdateMutation", payload.setRequestedToUpdateMutation);
  },
  filterListByNumberProtectiveMeasure: ({ commit }, payload) => {
    commit("filterListByNumberProtectiveMeasure", payload);
  },
  filterListByNumberIncidentReport: ({ commit }, payload) => {
    commit("filterListByNumberIncidentReport", payload);
  },
  toggleModalProtectiveMeasuresRequesteds: ({ commit }) => {
    commit("toggleModalProtectiveMeasuresRequesteds");
  },
  openEditModal: ({ commit, dispatch }, payload) => {
    dispatch("loadDataToUpdate", payload);
    commit("toggleModalEditProtectiveMeasureRequested");
  },
  clearQuery: ({ commit }) => {
    commit("clearQuery");
  },
  closeEditModal: ({ commit }) => {
    commit("toggleModalEditProtectiveMeasureRequested");
  },
  closeModal: ({ commit }) => {
    commit("toggleModalProtectiveMeasuresRequesteds");
    commit("clearFields");
  },
  setId: ({ commit }, payload) => {
    commit("setIdMutation", payload);
  },
  setProtectiveMeasure: ({ commit }, payload) => {
    commit("setProtectiveMeasureMutation", payload);
  },
  setProtectiveMeasureType: ({ commit }, payload) => {
    commit("setProtectiveMeasureTypeMutation", payload);
  },
  setProtectiveMeasureRequestedArray: ({ commit }, payload) => {
    commit("setProtectiveMeasureRequestedArrayMutation", payload);
  },
  setRequestedToUpdate: ({ commit }, payload) => {
    commit("setRequestedToUpdateMutation", payload.value);
  },
  toggleModalDeleteProtectiveMeasureRequested: ({ commit }, payload) => {
    commit("toggleModalDeleteProtectiveMeasureRequested");
    if (state.modalConfirmDeleteProtectiveMeasureRequested) {
      commit("protectiveMeasureRequestedForDeletion", payload);
    } else {
      commit("protectiveMeasureRequestedForDeletion", null);
    }
  },
  save: ({ commit, dispatch }) => {
    // console.log("this.enviando", state.protectiveMeasureRequested);
    createProtectiveMeasureRequested(state.protectiveMeasureRequested)
      .then(() => {
        // console.log("Create Incident Report", response);
        Vue.$toast.success("Medida Protetiva Requerida cadastrada com sucesso!");
        commit("toggleModalProtectiveMeasuresRequesteds");
        commit("clearFields");
        dispatch("ProtectiveMeasuresRequesteds/loadProtectiveMeasuresRequesteds", null, { root: true });
      })
      .catch((e) => {
        Vue.$toast.error(
          "Não foi possivel cadastrar a Medida Protetiva Requerida! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
        console.log(e);
      });
  },
  update: ({ dispatch, commit }) => {
    updateProtectiveMeasureRequested(
      state.protectiveMeasureRequestedToUpdate.id,
      state.protectiveMeasureRequestedToUpdate
    ).then((resp) => {
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Medida Protetiva Requerida atualizada com sucesso!");
        commit("toggleModalEditProtectiveMeasureRequested");
        dispatch("ProtectiveMeasuresRequesteds/loadProtectiveMeasuresRequesteds", null, { root: true });
        commit("clearFields");
      } else {
        Vue.$toast.error(
          "Não foi possivel atualizar a Medida Protetiva Requerida! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
      }
    });
  },
  delete: ({ commit, dispatch }) => {
    destroyProtectiveMeasureRequested(state.protectiveMeasureRequestedId).then((resp) => {
      console.log("resp delete user", resp);
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Medida Protetiva Requerida foi deletada com sucesso");
        commit("toggleModalDeleteProtectiveMeasureRequested");
        dispatch("ProtectiveMeasuresRequesteds/loadProtectiveMeasuresRequesteds", null, { root: true });
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
