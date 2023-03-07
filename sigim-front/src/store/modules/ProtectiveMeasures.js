import {
  getProtectiveMeasures,
  getProtectiveMeasureById,
  createProtectiveMeasure,
  updateProtectiveMeasure,
  destroyProtectiveMeasure,
} from "../../service/ProtectiveMeasuresApi";
import Vue from "vue";

const state = {
  protectiveMeasure: {
    id: null,
    number: "",
    observation: "",
    description: "",
    petitioner: "",
    police_authority: "",
    incident_report_id: 0,
  },
  // params: {
  //   number: null,
  //   number_incident_report: null,
  // },
  params: {
    number: null,
    incident_report_number: null,
    order_by: "",
    limit: "",
    offset: "",
  },
  incident_report: null,
  protective_measures: [],
  filterProtectiveMeasures: [],
  protectiveMeasureId: 0,
  modalToggleProtectiveMeasures: false,
  modalConfirmDeleteProtectiveMeasure: false,
  modalViewProtectiveMeasure: false,
  // - PARA PAGINACAO
  totalFilter: 0,
  totalPerPage: 10,
  offsetFilter: 0,
  totalFilterPages: 0,
  pagesFilter: [],
  actualPageFilter: 1,
};

const mutations = {
  // --- PAGINAÇÃO >>>>>>>>>
  setTotalFilterMutation: (state, total) => {
    state.totalFilter = total;
    let nrPages = total / state.totalPerPage;
    if (total % state.totalPerPage > 0) {
      nrPages = parseInt(nrPages) + 1;
    }
    state.totalFilterPages = nrPages;
    let offset = 0;
    state.pagesFilter = [];
    for (let n = 1; n <= nrPages; n++) {
      let pagina = {
        id: n - 1,
        name: "Página " + n + " de " + nrPages,
        number: n,
        offset: offset,
      };
      state.pagesFilter.push(pagina);
      offset += state.totalPerPage;
    }
  },
  setActualPageFilterMutation: (state, page) => {
    state.actualPageFilter = page;
  },
  setOffsetFilterMutation: (state, offset) => {
    state.offsetFilter = offset;
  },
  // --- PAGINAÇÃO <<<<<<<<<
  setProtectiveMeasuresMutation: (state, protective_measures) => {
    state.protective_measures = protective_measures;
    state.filterProtectiveMeasures = protective_measures;
  },
  filterListByNumberProtectiveMeasure: (state, input) => {
    state.params.number = input.value;
  },
  filterListByNumberIncidentReport: (state, input) => {
    state.params.incident_report_number = input.value;
  },
  toggleModalProtectiveMeasures: (state) => {
    state.modalToggleProtectiveMeasures = !state.modalToggleProtectiveMeasures;
  },
  toggleModalDeleteProtectiveMeasure: (state) => {
    state.modalConfirmDeleteProtectiveMeasure = !state.modalConfirmDeleteProtectiveMeasure;
  },
  toggleModalViewProtectiveMeasure: (state) => {
    state.modalViewProtectiveMeasure = !state.modalViewProtectiveMeasure;
  },
  protectiveMeasureForDeletion: (state, payload) => {
    state.protectiveMeasureId = payload.id;
  },
  setIdMutation: (state, id) => {
    state.protectiveMeasure.id = id;
  },
  setNumberMutation: (state, number) => {
    state.protectiveMeasure.number = number;
  },
  setDescriptionMutation: (state, description) => {
    state.protectiveMeasure.description = description;
  },
  setObservationMutation: (state, observation) => {
    state.protectiveMeasure.observation = observation;
  },
  setPetitionerMutation: (state, petitioner) => {
    state.protectiveMeasure.petitioner = petitioner;
  },
  setPoliceAuthorityMutation: (state, police_authority) => {
    state.protectiveMeasure.police_authority = police_authority;
  },
  setIncidentReportMutation: (state, incident_report) => {
    state.protectiveMeasure.incident_report_id = incident_report.id;
    state.incident_report = incident_report;
  },
  clearQuery: (state) => {
    state.protective_measures = [];
    state.filterProtectiveMeasures = [];
    state.params.number = null;
    state.params.incident_report_number = null;
  },
  clearFields: (state) => {
    state.incident_report = null;
    state.protectiveMeasure.id = null;
    state.protectiveMeasure.number = "";
    state.protectiveMeasure.description = "";
    state.protectiveMeasure.observation = "";
    state.protectiveMeasure.petitioner = "";
    state.protectiveMeasure.police_authority = "";
  },
};

const actions = {
  // --- PAGINAÇÃO >>>>>>>>>
  getPageFilter: ({ state, commit }, payload) => {
    if (payload != null) {
      const params = {
        number: state.params.number,
        incident_report_number: state.params.incident_report_number,
        order_by: "number DESC",
        limit: state.totalPerPage,
        offset: payload.offset,
      };
      getProtectiveMeasures(params)
        .then((response) => {
          commit("setProtectiveMeasuresMutation", response.data.protective_measures);
          commit("setTotalFilterMutation", response.data.total);
          commit("setActualPageFilterMutation", payload.number);
        })
        .catch((e) => {
          console.log("error", e.response); //TODO: tratar esse error
        });
    }
  },
  setOffsetFilter: ({ commit }, payload) => {
    commit("setOffsetFilterMutation", payload);
  },
  // --- PAGINAÇÃO <<<<<<<<<
  loadProtectiveMeasures: ({ commit }) => {
    commit("setOffsetFilterMutation", 0);
    const params = {
      number: state.params.number,
      incident_report_number: state.params.incident_report_number,
      order_by: "number DESC",
      limit: state.totalPerPage,
      offset: state.offsetFilter,
    };
    getProtectiveMeasures(params)
      .then((response) => {
        commit("setProtectiveMeasuresMutation", response.data.protective_measures);
        commit("setTotalFilterMutation", response.data.total);
        commit("setActualPageFilterMutation", 1);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },

  filterListByNumberProtectiveMeasure: ({ commit }, payload) => {
    commit("filterListByNumberProtectiveMeasure", payload);
  },
  filterListByNumberIncidentReport: ({ commit }, payload) => {
    commit("filterListByNumberIncidentReport", payload);
  },
  toggleModalProtectiveMeasures: ({ commit }) => {
    commit("toggleModalProtectiveMeasures");
  },
  loadData: ({ commit }, payload) => {
    getProtectiveMeasureById(payload.id)
      .then((response) => {
        // console.log("response", response);
        commit("setIdMutation", response.data.protective_measure.id);
        commit("setNumberMutation", response.data.protective_measure.number);
        commit("setDescriptionMutation", response.data.protective_measure.description);
        commit("setObservationMutation", response.data.protective_measure.observation);
        commit("setPetitionerMutation", response.data.protective_measure.petitioner);
        commit("setPoliceAuthorityMutation", response.data.protective_measure.police_authority);
        commit("setIncidentReportMutation", response.data.protective_measure.incident_report);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  clearQuery: ({ commit }) => {
    commit("clearQuery");
  },
  openViewModal: ({ commit, dispatch }, payload) => {
    dispatch("loadData", payload);
    commit("toggleModalViewProtectiveMeasure");
  },
  closeViewModal: ({ commit }) => {
    commit("toggleModalViewProtectiveMeasure");
    commit("clearFields");
  },
  openEditModal: ({ commit, dispatch }, payload) => {
    dispatch("loadData", payload);
    commit("toggleModalProtectiveMeasures");
  },
  closeModal: ({ commit }) => {
    commit("toggleModalProtectiveMeasures");
    commit("clearFields");
  },
  toggleModalDeleteProtectiveMeasure: ({ commit }, payload) => {
    commit("toggleModalDeleteProtectiveMeasure");
    if (state.modalConfirmDeleteProtectiveMeasure) {
      commit("protectiveMeasureForDeletion", payload);
    } else {
      commit("protectiveMeasureForDeletion", null);
    }
  },
  setNumber: ({ commit }, payload) => {
    commit("setNumberMutation", payload.value);
  },
  setDescription: ({ commit }, payload) => {
    commit("setDescriptionMutation", payload.value);
  },
  setObservation: ({ commit }, payload) => {
    commit("setObservationMutation", payload.value);
  },
  setPetitioner: ({ commit }, payload) => {
    commit("setPetitionerMutation", payload.value);
  },
  setPoliceAuthority: ({ commit }, payload) => {
    commit("setPoliceAuthorityMutation", payload.value);
  },
  setIncidentReport: ({ commit }, payload) => {
    commit("setIncidentReportMutation", payload);
  },
  save: ({ commit, dispatch }) => {
    createProtectiveMeasure(state.protectiveMeasure)
      .then(() => {
        // console.log("Create Incident Report", response);
        Vue.$toast.success("Medida Protetiva cadastrada com sucesso!");
        commit("toggleModalProtectiveMeasures");
        commit("clearFields");
        dispatch("ProtectiveMeasures/loadProtectiveMeasures", null, { root: true });
      })
      .catch((e) => {
        Vue.$toast.error(
          "Não foi possivel cadastrar a Medida Protetiva! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
        console.log(e);
      });
  },
  update: ({ dispatch, commit }) => {
    updateProtectiveMeasure(state.protectiveMeasure.id, state.protectiveMeasure).then((resp) => {
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Medida Protetiva atualizada com sucesso!");
        commit("toggleModalProtectiveMeasures");
        dispatch("ProtectiveMeasures/updateFilterById", state.protectiveMeasure.id, { root: true });
        dispatch("ProtectiveMeasures/loadProtectiveMeasures", null, { root: true });
        commit("clearFields");
      } else {
        Vue.$toast.error(
          "Não foi possivel atualizar a Medida Protetiva! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
      }
    });
  },
  updateFilterById: ({ commit }, id) => {
    getProtectiveMeasureById(id)
      .then((response) => {
        // console.log("RETORNO ", response);
        let incident_report = response.data.incident_report;
        let updated = {
          aggressor: {
            name: incident_report.aggressor.name,
          },
          crime_type: {
            name: incident_report.crime_type.name,
          },
          id: incident_report.id,
          number: incident_report.number,
          protective_measure_count: incident_report.protective_measure_count,
          source_system_name: incident_report.source_system.name,
          victim: {
            name: incident_report.victim.name,
          },
          violence_motivation: {
            name: incident_report.violence_motivation.name,
          },
          violence_type: {
            name: incident_report.violence_type.name,
          },
        };
        commit("updateFilterIncidentReportsByIdMutation", updated);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  delete: ({ commit, dispatch }) => {
    destroyProtectiveMeasure(state.protectiveMeasureId).then((resp) => {
      // console.log("resp delete user", resp);
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Medida Protetiva foi deletada com sucesso");
        commit("toggleModalDeleteProtectiveMeasure");
        dispatch("ProtectiveMeasures/loadProtectiveMeasures", null, { root: true });
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
