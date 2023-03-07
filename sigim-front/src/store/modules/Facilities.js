import {
  getFacilities,
  getFacilitieById,
  createFacilitie,
  updateFacilitie,
  destroyFacilitie,
} from "../../service/FacilitiesApi";
import { getStates } from "../../service/StatesApi";
import { getCitiesByStateId } from "../../service/CityApi";
import { getNeighborhoodsByCityId } from "../../service/NeighborhoodsApi";
import { getCommunities } from "../../service/CommunitiesApi";
import { getSectorials } from "../../service/SectorialsApi";
import { getFacilitiesTypes } from "../../service/FacilitiesTypesApi";
import Vue from "vue";

const state = {
  facilitie: {
    id: null,
    community_id: 0,
    sectorial_id: 0,
    neighborhood_id: 0,
    facility_type_id: 0,
    name: "",
    street_name: "",
    street_number: "",
    address_complement: "",
    cep: "",
    telephone_01: "",
    telephone_02: "",
    whatsapp: "",
    email: "",
    business_hours: "",
  },
  filters: {
    name_facility: "",
    type_facility: "",
  },
  states: [],
  cities: [],
  neighborhoods: [],
  stateFiltered: null,
  cityFiltered: null,
  stateFilteredToShow: null,
  cityFilteredToShow: null,
  community: null,
  sectorial: null,
  neighborhood: null,
  facility_type: null,
  facilities: [],
  communities: [],
  sectorials: [],
  facilities_types: [],
  filterFacilities: [],
  facilitieId: 0,
  modalToggleFacilities: false,
  modalConfirmDeleteFacilitie: false,
  modalViewFacilitie: false,
};

const mutations = {
  setFacilitiesMutation: (state, facilities) => {
    state.facilities = facilities;
    state.filterFacilities = facilities;
  },
  filterListByNameEquipment: (state, input) => {
    // let facilities = state.facilities;
    // state.filterFacilities = facilities.filter((obj) => {
    //   let name = obj.name.toLowerCase().indexOf(input.value.toLowerCase());
    //   return name > -1;
    // });
    state.filters.name_facility = input.value;
    // console.log("state.filters.name_facility", state.filters.name_facility);
  },
  filterListByTypeNameEquipment: (state, input) => {
    // let facilities = state.facilities;
    // state.filterFacilities = facilities.filter((obj) => {
    //   let name = obj.facility_type.name.toLowerCase().indexOf(input.value.toLowerCase());
    //   return name > -1;
    // });
    state.filters.type_facility = input.value;
  },
  toggleModalFacilities: (state) => {
    state.modalToggleFacilities = !state.modalToggleFacilities;
  },
  toggleModalDeleteFacilitie: (state) => {
    state.modalConfirmDeleteFacilitie = !state.modalConfirmDeleteFacilitie;
  },
  toggleModalViewFacilitie: (state) => {
    state.modalViewFacilitie = !state.modalViewFacilitie;
  },
  facilitieForDeletion: (state, payload) => {
    state.facilitieId = payload.id;
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
  setCityFilteredToShowMutation: (state, cityFilteredToShow) => {
    state.cityFilteredToShow = cityFilteredToShow;
  },
  setStateFilteredToShowMutation: (state, stateFilteredToShow) => {
    state.stateFilteredToShow = stateFilteredToShow;
  },
  setNeighborhoodsMutation: (state, neighborhoods) => {
    state.neighborhoods = neighborhoods;
  },
  setCommunitiesMutation: (state, communities) => {
    state.communities = communities;
  },
  setSectorialsMutation: (state, sectorials) => {
    state.sectorials = sectorials;
  },
  setFacilitiesTypesMutation: (state, facilities_types) => {
    state.facilities_types = facilities_types;
  },
  setIdMutation: (state, id) => {
    state.facilitie.id = id;
  },
  setNameMutation: (state, name) => {
    state.facilitie.name = name;
  },
  setStreetNameMutation: (state, street_name) => {
    state.facilitie.street_name = street_name;
  },
  setStreetNumberMutation: (state, street_number) => {
    state.facilitie.street_number = street_number;
  },
  setAddressComplementMutation: (state, address_complement) => {
    state.facilitie.address_complement = address_complement;
  },
  setCepMutation: (state, cep) => {
    state.facilitie.cep = cep;
  },
  setTelephone01Mutation: (state, telephone_01) => {
    state.facilitie.telephone_01 = telephone_01;
  },
  setTelephone02Mutation: (state, telephone_02) => {
    state.facilitie.telephone_02 = telephone_02;
  },
  setWhatsappMutation: (state, whatsapp) => {
    state.facilitie.whatsapp = whatsapp;
  },
  setEmailMutation: (state, email) => {
    state.facilitie.email = email;
  },
  setBusinessHoursMutation: (state, business_hours) => {
    state.facilitie.business_hours = business_hours;
  },
  setCommunityMutation: (state, community) => {
    state.facilitie.community_id = community.id;
    state.community = community;
  },
  setSectorialMutation: (state, sectorial) => {
    state.facilitie.sectorial_id = sectorial.id;
    state.sectorial = sectorial;
  },
  setNeighborhoodMutation: (state, neighborhood) => {
    state.facilitie.neighborhood_id = neighborhood.id;
    state.neighborhood = neighborhood;
  },
  setFacilityTypeMutation: (state, facility_type) => {
    state.facilitie.facility_type_id = facility_type.id;
    state.facility_type = facility_type;
  },
  clearQuery: (state) => {
    state.facilities = [];
    state.filterFacilities = [];
    state.filters.name_facility = "";
    state.filters.type_facility = "";
  },
  clearFields: (state) => {
    state.facilitie.id = null;
    state.community = null;
    state.sectorial = null;
    state.neighborhood = null;
    state.facility_type = null;
    state.violence_motivation = null;
    state.facilitie.name = "";
    state.facilitie.stateFiltered = null;
    state.facilitie.cityFiltered = null;
    state.facilitie.street_name = "";
    state.facilitie.street_number = "";
    state.facilitie.address_complement = "";
    state.facilitie.cep = "";
    state.facilitie.telephone_01 = "";
    state.facilitie.telephone_02 = "";
    state.facilitie.whatsapp = "";
    state.facilitie.email = "";
    state.facilitie.business_hours = "";
  },
};

const actions = {
  loadFacilities: ({ commit }) => {
    const filters = {
      name_facility: state.filters.name_facility,
      type_facility: state.filters.type_facility,
    };
    getFacilities(filters)
      .then((response) => {
        commit("setFacilitiesMutation", response.data.facilities);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadCommunities: ({ commit }) => {
    getCommunities()
      .then((response) => {
        // console.log("lloadCommunities", response);
        commit("setCommunitiesMutation", response.data.communities);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadSectorials: ({ commit }) => {
    getSectorials()
      .then((response) => {
        // console.log("loadSectorials", response);
        commit("setSectorialsMutation", response.data.sectorials);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadFacilitiesTypes: ({ commit }) => {
    getFacilitiesTypes()
      .then((response) => {
        // console.log("loadFacilitiesTypes", response);
        commit("setFacilitiesTypesMutation", response.data.facility_types);
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
    // console.log("city_id", city_id);
    getCitiesByStateId(city_id)
      .then((response) => {
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
  loadData: ({ commit }, payload) => {
    getFacilitieById(payload.id)
      .then((response) => {
        // console.log("AQUIIIIIIIIIIII ", response);
        commit("setIdMutation", response.data.facility.id);
        commit("setNameMutation", response.data.facility.name);
        commit("setStreetNameMutation", response.data.facility.street_name);
        commit("setStreetNumberMutation", response.data.facility.street_number);
        commit("setAddressComplementMutation", response.data.facility.address_complement);
        commit("setCepMutation", response.data.facility.cep);
        commit("setCityMutation", response.data.facility.city);
        commit("setStateMutation", response.data.facility.state);
        commit("setTelephone01Mutation", response.data.facility.telephone_01);
        commit("setTelephone02Mutation", response.data.facility.telephone_02);
        commit("setWhatsappMutation", response.data.facility.whatsapp);
        commit("setEmailMutation", response.data.facility.email);
        commit("setBusinessHoursMutation", response.data.facility.business_hours);
        commit("setCommunityMutation", response.data.facility.community);
        commit("setSectorialMutation", response.data.facility.sectorial);
        commit("setNeighborhoodMutation", response.data.facility.neighborhood);
        commit("setFacilityTypeMutation", response.data.facility.facility_type);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  filterListByNameEquipment: ({ commit }, payload) => {
    commit("filterListByNameEquipment", payload);
  },
  filterListByTypeNameEquipment: ({ commit }, payload) => {
    commit("filterListByTypeNameEquipment", payload);
  },
  toggleModalFacilities: ({ commit }) => {
    commit("toggleModalFacilities");
  },
  clearQuery: ({ commit }) => {
    commit("clearQuery");
  },
  openEditModal: ({ commit, dispatch }, payload) => {
    dispatch("loadData", payload);
    commit("toggleModalFacilities");
  },
  closeEditModal: ({ commit }) => {
    commit("toggleModalFacilities");
    commit("clearFields");
  },
  openViewModal: ({ commit, dispatch }, payload) => {
    // console.log("payload ZZZZZZZZZZZZZZZZZZZ", payload);
    dispatch("loadData", payload);
    commit("toggleModalViewFacilitie");
  },
  closeViewModal: ({ commit }) => {
    commit("toggleModalViewFacilitie");
    commit("clearFields");
  },
  closeModal: ({ commit }) => {
    commit("toggleModalFacilities");
    commit("clearFields");
  },
  toggleModalDeleteFacilitie: ({ commit }, payload) => {
    commit("toggleModalDeleteFacilitie");
    if (state.modalConfirmDeleteFacilitie) {
      commit("facilitieForDeletion", payload);
    } else {
      commit("facilitieForDeletion", null);
    }
  },
  setName: ({ commit }, payload) => {
    commit("setNameMutation", payload.value);
  },
  setStreetName: ({ commit }, payload) => {
    commit("setStreetNameMutation", payload.value);
  },
  setStreetNumber: ({ commit }, payload) => {
    commit("setStreetNumberMutation", payload.value);
  },
  setAddressComplement: ({ commit }, payload) => {
    commit("setAddressComplementMutation", payload.value);
  },
  setCep: ({ commit }, payload) => {
    commit("setCepMutation", payload.value);
  },
  setTelephone01: ({ commit }, payload) => {
    commit("setTelephone01Mutation", payload.value);
  },
  setTelephone02: ({ commit }, payload) => {
    commit("setTelephone02Mutation", payload.value);
  },
  setWhatsapp: ({ commit }, payload) => {
    commit("setWhatsappMutation", payload.value);
  },
  setEmail: ({ commit }, payload) => {
    commit("setEmailMutation", payload.value);
  },
  setBusinessHours: ({ commit }, payload) => {
    commit("setBusinessHoursMutation", payload.value);
  },
  setCommunity: ({ commit }, payload) => {
    commit("setCommunityMutation", payload);
  },
  setSectorial: ({ commit }, payload) => {
    commit("setSectorialMutation", payload);
  },
  setNeighborhood: ({ commit }, payload) => {
    commit("setNeighborhoodMutation", payload);
  },
  setFacilityType: ({ commit }, payload) => {
    commit("setFacilityTypeMutation", payload);
  },
  save: ({ commit, dispatch }) => {
    createFacilitie(state.facilitie)
      .then(() => {
        // console.log("Create Incident Report", response);
        Vue.$toast.success("Equipamento cadastrado com sucesso!");
        commit("toggleModalFacilities");
        commit("clearFields");
        dispatch("Facilities/loadFacilities", null, { root: true });
      })
      .catch((e) => {
        Vue.$toast.error(
          "Não foi possivel cadastrar o equipamento! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
        console.log(e);
      });
  },
  update: ({ dispatch, commit }) => {
    updateFacilitie(state.facilitie.id, state.facilitie).then((resp) => {
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Equipamento atualizado com sucesso!");
        commit("toggleModalFacilities");
        dispatch("Facilities/loadFacilities", null, { root: true });
        commit("clearFields");
      } else {
        Vue.$toast.error(
          "Não foi possivel atualizar o equipamento! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
      }
    });
  },
  delete: ({ commit, dispatch }) => {
    destroyFacilitie(state.facilitieId).then((resp) => {
      // console.log("resp delete user", resp);
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Equipamento deletado com sucesso!");
        commit("toggleModalDeleteFacilitie");
        dispatch("Facilities/loadFacilities", null, { root: true });
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
