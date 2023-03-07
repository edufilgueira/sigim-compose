import {
  createIncidentReport,
  getIncidentReports,
  getIncidentReportById,
  updateIncidentReport,
  destroyIncidentReport,
} from "../../service/IncidentReportsApi";
import { getStates } from "../../service/StatesApi";
import { getCitiesByStateId } from "../../service/CityApi";
import { getNeighborhoodsByCityId } from "../../service/NeighborhoodsApi";

import Vue from "vue";

const state = {
  incidentReport: {
    id: null,
    victim_id: 0,
    aggressor_id: 0,
    crime_type_id: 0,
    violence_type_id: 0,
    violence_motivation_id: 0,
    number: "",
    description: "",
    observation: "",
    communication_date: "",
    communication_time: "",
    occurrence_date: "",
    occurrence_time: "",
    occurrence_neighborhood_id: 0,
    occurrence_street_name: "",
    occurrence_street_number: "",
    occurrence_address_complement: "",
    occurrence_cep: "",
    serviced_by_gavv: false,
    have_access_firearm: false,
    requests_protective_measure: false,
    source_system_name: "",
  },
  // params: {
  //   number: null,
  //   victim_name: "",
  //   aggressor_name: "",
  // },
  params: {
    number: null,
    victim_name: null,
    aggressor_name: null,
    order_by: "",
    limit: "",
    offset: "",
  },
  states: [],
  cities: [],
  neighborhoods: [],
  stateFiltered: null,
  cityFiltered: null,
  cityFilteredToShow: null,
  stateFilteredToShow: null,
  victim: null,
  aggressor: null,
  crime_type: null,
  violence_type: null,
  violence_motivation: null,
  protective_measures: [],
  occurrence_neighborhood: null,
  incident_reports: [],
  filterIncidentReports: [],
  incidentReportId: 0,
  modalToggleIncidentReports: false,
  modalConfirmDeleteIncidentReport: false,
  modalViewIncidentReport: false,
  // - PARA PAGINACAO
  totalFilter: 0,
  totalPerPage: 10,
  offsetFilter: 0,
  totalFilterPages: 0,
  pagesFilter: [],
  actualPageFilter: 1,
};

const mutations = {
  // - PARA PAGINACAO --->
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
  // <--- PARA PAGINACAO - FIM

  updateFilterByIdMutation: (state, incident_report) => {
    let key = state.filterIncidentReports.findIndex((item) => {
      return incident_report.id === item.id;
    });
    state.filterIncidentReports.splice(key, 1);
    state.filterIncidentReports.splice(key, 0, incident_report);
    //commit("clearFields");
  },
  setIncidentReportsMutation: (state, incident_reports) => {
    state.incident_reports = incident_reports;
    state.filterIncidentReports = incident_reports;
  },
  filterListByNumber: (state, input) => {
    // let incidentReports = state.incident_reports;
    // state.filterIncidentReports = incidentReports.filter((obj) => {
    //   let number = obj.number.toLowerCase().indexOf(input.value.toLowerCase());
    //   return number > -1;
    // });
    state.params.number = input.value;
  },
  filterListByNameVictim: (state, input) => {
    // let incidentReports = state.incident_reports;
    // state.filterIncidentReports = incidentReports.filter((obj) => {
    //   let name = obj.victim.name.toLowerCase().indexOf(input.value.toLowerCase());
    //   return name > -1;
    // });
    state.params.victim_name = input.value;
  },
  filterListByNameAggressor: (state, input) => {
    // let incidentReports = state.incident_reports;
    // state.filterIncidentReports = incidentReports.filter((obj) => {
    //   let name = obj.aggressor.name.toLowerCase().indexOf(input.value.toLowerCase());
    //   return name > -1;
    // });
    state.params.aggressor_name = input.value;
  },
  setIncidentReportMutation: (state, incidentReport) => {
    state.incidentReport = incidentReport;
  },
  toggleModalIncidentReports: (state) => {
    state.modalToggleIncidentReports = !state.modalToggleIncidentReports;
  },
  toggleModalViewIncidentReport: (state) => {
    state.modalViewIncidentReport = !state.modalViewIncidentReport;
  },
  toggleModalDeleteIncidentReport: (state) => {
    state.modalConfirmDeleteIncidentReport = !state.modalConfirmDeleteIncidentReport;
  },
  incidentReportForDeletion: (state, payload) => {
    state.incidentReportId = payload.id;
  },
  setStatesMutation: (state, states) => {
    state.states = states;
  },
  setStateMutation: (state, stateFiltered) => {
    state.stateFiltered = stateFiltered;
  },
  setCitiesMutation: (state, cities) => {
    state.cities = cities;
  },
  setCityMutation: (state, cityFiltered) => {
    state.cityFiltered = cityFiltered;
  },
  setNeighborhoodsMutation: (state, neighborhoods) => {
    state.neighborhoods = neighborhoods;
  },
  setIdMutation: (state, id) => {
    state.incidentReport.id = id;
  },
  setNumberMutation: (state, number) => {
    state.incidentReport.number = number;
  },
  setDescriptionMutation: (state, description) => {
    state.incidentReport.description = description;
  },
  setObservationMutation: (state, observation) => {
    state.incidentReport.observation = observation;
  },
  setCommunicationDateMutation: (state, communication_date) => {
    state.incidentReport.communication_date = communication_date;
  },
  setCommunicationTimeMutation: (state, communication_time) => {
    state.incidentReport.communication_time = communication_time;
  },
  setOccurrenceDateMutation: (state, occurrence_date) => {
    state.incidentReport.occurrence_date = occurrence_date;
  },
  setOccurrenceTimeMutation: (state, occurrence_time) => {
    state.incidentReport.occurrence_time = occurrence_time;
  },
  setOccurrenceStreetNameMutation: (state, occurrence_street_name) => {
    state.incidentReport.occurrence_street_name = occurrence_street_name;
  },
  setOccurrenceStreetNumberMutation: (state, occurrence_street_number) => {
    state.incidentReport.occurrence_street_number = occurrence_street_number;
  },
  setOccurrenceAddressComplementMutation: (state, occurrence_address_complement) => {
    state.incidentReport.occurrence_address_complement = occurrence_address_complement;
  },
  setOccurrenceCepMutation: (state, occurrence_cep) => {
    state.incidentReport.occurrence_cep = occurrence_cep;
  },
  setServicedByGavvMutation: (state, serviced_by_gavv) => {
    state.incidentReport.serviced_by_gavv = serviced_by_gavv;
  },
  setHaveAccessFirearmMutation: (state, have_access_firearm) => {
    state.incidentReport.have_access_firearm = have_access_firearm;
  },
  setRequestsProtectiveMeasureMutation: (state, requests_protective_measure) => {
    state.incidentReport.requests_protective_measure = requests_protective_measure;
  },
  setSourceSystemMutation: (state, source_system_name) => {
    state.incidentReport.source_system_name = source_system_name;
  },
  setCityFilteredToShowMutation: (state, cityFilteredToShow) => {
    state.cityFilteredToShow = cityFilteredToShow;
  },
  setStateFilteredToShowMutation: (state, stateFilteredToShow) => {
    state.stateFilteredToShow = stateFilteredToShow;
  },
  setVictimMutation: (state, victim) => {
    state.incidentReport.victim_id = victim.id;
    state.victim = victim;
  },
  setAggressorMutation: (state, aggressor) => {
    state.incidentReport.aggressor_id = aggressor.id;
    state.aggressor = aggressor;
  },
  setNeighborhoodMutation: (state, neighborhood) => {
    // console.log("neighborhood", neighborhood);
    state.incidentReport.occurrence_neighborhood_id = neighborhood.id;
    state.occurrence_neighborhood = neighborhood;
  },
  setCrimeTypeMutation: (state, crime_type) => {
    state.incidentReport.crime_type_id = crime_type.id;
    state.crime_type = crime_type;
  },
  setViolenceTypeMutation: (state, violence_type) => {
    state.incidentReport.violence_type_id = violence_type.id;
    state.violence_type = violence_type;
  },
  setViolenceMotivationMutation: (state, violence_motivation) => {
    state.incidentReport.violence_motivation_id = violence_motivation.id;
    state.violence_motivation = violence_motivation;
  },
  setProtectiveMeasureMutaton: (state, protective_measures) => {
    state.protective_measures = protective_measures;
  },
  clearQuery: (state) => {
    state.incident_reports = [];
    state.filterIncidentReports = [];
    state.params.number = null;
    state.params.victim_name = "";
    state.params.aggressor_name = "";
  },
  clearFields: (state) => {
    state.victim = null;
    state.aggressor = null;
    state.crime_type = null;
    state.violence_type = null;
    state.violence_motivation = null;
    state.occurrence_neighborhood = null;
    state.cityFiltered = null;
    state.stateFiltered = null;
    state.protective_measures = [];
    state.incidentReport.id = null;
    state.incidentReport.number = "";
    state.incidentReport.description = "";
    state.incidentReport.observation = "";
    state.incidentReport.communication_date = "";
    state.incidentReport.communication_time = "";
    state.incidentReport.occurrence_date = "";
    state.incidentReport.occurrence_time = "";
    state.incidentReport.occurrence_street_name = "";
    state.incidentReport.occurrence_street_number = "";
    state.incidentReport.occurrence_address_complement = "";
    state.incidentReport.occurrence_cep = "";
    state.incidentReport.serviced_by_gavv = false;
    state.incidentReport.have_access_firearm = false;
    state.incidentReport.requests_protective_measure = false;
  },
};

const actions = {
  // --- PAGINAÇÃO >>>>>>>>>
  getPageFilter: ({ state, commit }, payload) => {
    if (payload != null) {
      const params = {
        number: state.params.number,
        victim_name: state.params.victim_name,
        aggressor_name: state.params.aggressor_name,
        order_by: "number DESC",
        limit: state.totalPerPage,
        offset: payload.offset,
      };
      getIncidentReports(params)
        .then((response) => {
          commit("setIncidentReportsMutation", response.data.incident_reports);
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
  loadIncidentReports: ({ commit }) => {
    commit("setOffsetFilterMutation", 0);
    const params = {
      number: state.params.number,
      victim_name: state.params.victim_name,
      aggressor_name: state.params.aggressor_name,
      order_by: "number DESC",
      limit: state.totalPerPage,
      offset: state.offsetFilter,
    };
    getIncidentReports(params)
      .then((response) => {
        // console.log("response load incident repor", response);
        commit("setIncidentReportsMutation", response.data.incident_reports);
        commit("setTotalFilterMutation", response.data.total);
        commit("setActualPageFilterMutation", 1);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  updateFilterById: ({ commit }, id) => {
    getIncidentReportById(id)
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
        commit("updateFilterByIdMutation", updated);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadStates: ({ commit }) => {
    getStates()
      .then((resp) => {
        // console.log("Stados", resp);
        commit("setStatesMutation", resp.data.states);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadCities: ({ commit }, city_id) => {
    console.log("city_id", city_id);
    getCitiesByStateId(city_id)
      .then((response) => {
        // console.log("response city", response);
        // console.log("cities", response);
        commit("setCitiesMutation", response.data.cities);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadNeighborhoods: ({ commit }, payload) => {
    let id = payload;
    getNeighborhoodsByCityId(id)
      .then((response) => {
        // console.log("neghborhoods", response);
        commit("setNeighborhoodsMutation", response.data.neighborhoods);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  setCity: ({ commit, dispatch }, payload) => {
    commit("setCityMutation", payload);
    dispatch("loadNeighborhoods", payload.id);
  },
  setState: ({ commit, dispatch }, payload) => {
    commit("setStateMutation", payload);
    dispatch("loadCities", payload.id);
  },
  setIncidentReport: ({ commit }, payload) => {
    commit("setIncidentReportMutation", payload);
  },
  loadData: ({ commit }, payload) => {
    getIncidentReportById(payload.id)
      .then((response) => {
        // console.log("view bo", response);
        commit("setIdMutation", response.data.incident_report.id);
        commit("setNumberMutation", response.data.incident_report.number);
        commit("setDescriptionMutation", response.data.incident_report.description);
        commit("setObservationMutation", response.data.incident_report.observation);
        commit("setVictimMutation", response.data.incident_report.victim);
        commit("setAggressorMutation", response.data.incident_report.aggressor);
        commit("setCrimeTypeMutation", response.data.incident_report.crime_type);
        commit("setViolenceTypeMutation", response.data.incident_report.violence_type);
        commit("setViolenceMotivationMutation", response.data.incident_report.violence_motivation);
        commit("setCommunicationDateMutation", response.data.incident_report.communication_date);
        commit(
          "setCommunicationTimeMutation",
          new Date(response.data.incident_report.communication_time).toLocaleTimeString("pt-br")
        );
        // console.log("state.occurrence_time", state.occurrence_time);
        commit("setOccurrenceDateMutation", response.data.incident_report.occurrence_date);
        commit(
          "setOccurrenceTimeMutation",
          new Date(response.data.incident_report.occurrence_time).toLocaleTimeString("pt-br")
        );
        commit("setNeighborhoodMutation", response.data.incident_report.occurrence_neighborhood);
        commit("setCityMutation", response.data.incident_report.occurrence_city);
        commit("setStateMutation", response.data.incident_report.occurrence_state);
        commit("setOccurrenceStreetNameMutation", response.data.incident_report.occurrence_street_name);
        commit("setOccurrenceStreetNumberMutation", response.data.incident_report.occurrence_street_number);
        commit(
          "setOccurrenceAddressComplementMutation",
          response.data.incident_report.occurrence_address_complement
        );
        commit("setOccurrenceCepMutation", response.data.incident_report.occurrence_cep);
        commit("setServicedByGavvMutation", response.data.incident_report.serviced_by_gavv);
        commit("setHaveAccessFirearmMutation", response.data.incident_report.have_access_firearm);
        commit(
          "setRequestsProtectiveMeasureMutation",
          response.data.incident_report.requests_protective_measure
        );
        commit("setSourceSystemMutation", response.data.incident_report.source_system.name);
        if (response.data.incident_report.protective_measure_count > 0) {
          commit("setProtectiveMeasureMutaton", response.data.incident_report.protective_measures);
        }
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  clearQuery: ({ commit }) => {
    commit("clearQuery");
  },
  filterListByNumber: ({ commit }, payload) => {
    commit("filterListByNumber", payload);
  },
  filterListByNameVictim: ({ commit }, payload) => {
    commit("filterListByNameVictim", payload);
  },
  filterListByNameAggressor: ({ commit }, payload) => {
    commit("filterListByNameAggressor", payload);
  },
  toggleModalIncidentReports: ({ commit }) => {
    commit("toggleModalIncidentReports");
  },
  openViewModal: ({ commit, dispatch }, payload) => {
    // console.log("openViewModal", payload);
    dispatch("loadData", payload);
    commit("toggleModalViewIncidentReport");
  },
  closeViewModal: ({ commit }) => {
    commit("toggleModalViewIncidentReport");
    commit("clearFields");
  },
  openEditModal: ({ commit, dispatch }, payload) => {
    // console.log("chamando open edit modal", payload);
    dispatch("loadData", payload);
    commit("toggleModalIncidentReports");
  },
  closeModal: ({ commit }) => {
    commit("toggleModalIncidentReports");
    commit("clearFields");
  },
  toggleModalDeleteIncidentReport: ({ commit }, payload) => {
    commit("toggleModalDeleteIncidentReport");
    if (state.modalConfirmDeleteIncidentReport) {
      commit("incidentReportForDeletion", payload);
    } else {
      commit("incidentReportForDeletion", null);
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
  setVictim: ({ commit }, payload) => {
    commit("setVictimMutation", payload);
  },
  setAggressor: ({ commit }, payload) => {
    commit("setAggressorMutation", payload);
  },
  setCrimeType: ({ commit }, payload) => {
    commit("setCrimeTypeMutation", payload);
  },
  setViolenceType: ({ commit }, payload) => {
    commit("setViolenceTypeMutation", payload);
  },
  setViolenceMotivation: ({ commit }, payload) => {
    commit("setViolenceMotivationMutation", payload);
  },
  setCommunicationDate: ({ commit }, payload) => {
    // console.log("payload data", payload);
    commit("setCommunicationDateMutation", payload.value);
  },
  setCommunicationTime: ({ commit }, payload) => {
    // console.log("payload time", payload);
    commit("setCommunicationTimeMutation", payload.value);
  },
  setOccurrenceDate: ({ commit }, payload) => {
    commit("setOccurrenceDateMutation", payload.value);
  },
  setOccurrenceTime: ({ commit }, payload) => {
    commit("setOccurrenceTimeMutation", payload.value);
  },
  setOccurrenceStreetName: ({ commit }, payload) => {
    commit("setOccurrenceStreetNameMutation", payload.value);
  },
  setOccurrenceStreetNumber: ({ commit }, payload) => {
    commit("setOccurrenceStreetNumberMutation", payload.value);
  },
  setOccurrenceAddressComplement: ({ commit }, payload) => {
    commit("setOccurrenceAddressComplementMutation", payload.value);
  },
  setOccurrenceCep: ({ commit }, payload) => {
    commit("setOccurrenceCepMutation", payload.value);
  },
  setServicedByGavv: ({ commit }, payload) => {
    // console.log("payload service", payload.value);
    commit("setServicedByGavvMutation", payload.value);
  },
  setHaveAccessFirearm: ({ commit }, payload) => {
    commit("setHaveAccessFirearmMutation", payload.value);
  },
  setRequestsProtectiveMeasure: ({ commit }, payload) => {
    commit("setRequestsProtectiveMeasureMutation", payload.value);
  },
  setSourceSystem: ({ commit }, payload) => {
    commit("setSourceSystemMutation", payload.value);
  },
  setNeighborhood: ({ commit }, payload) => {
    // console.log("payload neighboord", payload);
    commit("setNeighborhoodMutation", payload);
  },
  save: ({ commit, dispatch }) => {
    createIncidentReport(state.incidentReport)
      .then(() => {
        // console.log("Create Incident Report", response);
        Vue.$toast.success("Boletim de Ocorrência cadastrado com sucesso!");
        commit("toggleModalIncidentReports");
        dispatch("IncidentReports/loadIncidentReports", null, { root: true });
        commit("clearFields");
      })
      .catch((e) => {
        Vue.$toast.error(
          "Não foi possivel cadastrar o boletim de ocorrência! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
        console.log(e);
      });
  },
  update: ({ dispatch, commit }) => {
    updateIncidentReport(state.incidentReport.id, state.incidentReport).then((resp) => {
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Boletim de Ocorrência atualizado com sucesso!");
        commit("toggleModalIncidentReports");
        dispatch("IncidentReports/updateFilterById", state.incidentReport.id, { root: true });
        dispatch("IncidentReports/loadIncidentReports", null, { root: true });
        commit("clearFields");
      } else {
        Vue.$toast.error(
          "Não foi possivel atualizar o boletim de ocorrência! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
      }
    });
  },
  delete: ({ commit, dispatch }) => {
    destroyIncidentReport(state.incidentReportId)
      .then(() => {
        // console.log(response);
        Vue.$toast.success("Boletim de Ocorrência deletado com sucesso!");
        dispatch("IncidentReports/loadIncidentReports", null, { root: true });
        commit("toggleModalDeleteIncidentReport");
      })
      .catch((e) => {
        console.log(e);
      });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
