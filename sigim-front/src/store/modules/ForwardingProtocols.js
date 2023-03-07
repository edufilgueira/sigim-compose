import {
  getForwardingProtocols,
  getForwardingProtocolId,
  createForwardingProtocol,
  updateForwardingProtocol,
  destroyForwardingProtocol,
} from "../../service/ForwardingProtocolsApi";
import { getAccompanimentTypes } from "../../service/AccompanimentTypesApi";
import { getAccompanimentTypeFacilityByType } from "../../service/AccompanimentTypeFacilitiesApi";
import Vue from "vue";

const state = {
  accompaniment_type_facility_id: null,
  forwardingProtocol: {
    id: null,
    person_id: 0,
    accompaniment_type_facility_id: 0,
    observation: "",
  },
  params: {
    person_name: "",
    facility_name: "",
    accompaniment_type_name: "",
    order_by: "",
    limit: "",
    offset: "",
  },
  accompaniment_type: null,
  accompaniment_types: null,
  person: null,
  accompaniment_type_facility: null,
  accompaniment_types_facilities: [],
  forwarding_protocols: [],
  filterForwardingProtocols: [],
  forwardingProtocolId: 0,
  modalToggleForwardingProtocols: false,
  modalConfirmDeleteForwardingProtocol: false,
  modalViewForwardingProtocol: false,
  // - PARA PAGINACAO
  totalFilter: 0,
  totalPerPage: 10,
  offsetFilter: 0,
  totalFilterPages: 0,
  pagesFilter: [],
  actualPageFilter: 1,
};

const mutations = {
  updateFilterByIdMutation: (state, mutation) => {
    let key = state.filterForwardingProtocols.findIndex((item) => {
      return mutation.id === item.id;
    });
    state.filterForwardingProtocols.splice(key, 1);
    state.filterForwardingProtocols.splice(key, 0, mutation);
    //commit("clearFields");
  },
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
  setForwardingProtocolsMutation: (state, forwarding_protocols) => {
    state.forwarding_protocols = forwarding_protocols;
    state.filterForwardingProtocols = forwarding_protocols;
  },
  setAccompanimentTypesMutation: (state, accompaniment_types) => {
    state.accompaniment_types = accompaniment_types;
  },
  setAccompanimentTypeFacilitiesMutation: (state, accompaniment_types_facilities) => {
    state.accompaniment_types_facilities = accompaniment_types_facilities;
  },
  filterListByNamePerson: (state, input) => {
    // let forwarding_protocols = state.forwarding_protocols;
    // state.filterForwardingProtocols = forwarding_protocols.filter((obj) => {
    //   let name = obj.person.name.toLowerCase().indexOf(input.value.toLowerCase());
    //   return name > -1;
    // });
    state.params.person_name = input.value;
  },
  filterListByFacilityName: (state, input) => {
    // let forwarding_protocols = state.forwarding_protocols;
    // state.filterForwardingProtocols = forwarding_protocols.filter((obj) => {
    //   let name = obj.facility.name.toLowerCase().indexOf(input.value.toLowerCase());
    //   return name > -1;
    // });
    state.params.facility_name = input.value;
  },
  filterListByAccompanimentType: (state, input) => {
    // let forwarding_protocols = state.forwarding_protocols;
    // state.filterForwardingProtocols = forwarding_protocols.filter((obj) => {
    //   let name = obj.accompaniment_type.name.toLowerCase().indexOf(input.value.toLowerCase());
    //   return name > -1;
    // });
    state.params.accompaniment_type_name = input.value;
  },
  toggleModalToggleForwardingProtocols: (state) => {
    state.modalToggleForwardingProtocols = !state.modalToggleForwardingProtocols;
  },
  toggleModalDeleteForwardingProtocol: (state) => {
    state.modalConfirmDeleteForwardingProtocol = !state.modalConfirmDeleteForwardingProtocol;
  },
  toggleModalViewForwardingProtocol: (state) => {
    state.modalViewForwardingProtocol = !state.modalViewForwardingProtocol;
  },
  forwardingProtocoForDeletion: (state, payload) => {
    state.forwardingProtocolId = payload.id;
  },
  setIdMutation: (state, id) => {
    state.forwardingProtocol.id = id;
  },
  setObservationMutation: (state, observation) => {
    state.forwardingProtocol.observation = observation;
  },
  setAccompanimentTypeMutation: (state, accompaniment_type) => {
    state.accompaniment_type_id = accompaniment_type.id;
    state.accompaniment_type = accompaniment_type;
  },
  setPersonMutation: (state, person) => {
    state.forwardingProtocol.person_id = person.id;
    state.person = person;
  },
  setAccompanimentTypeFacilityMutation: (state, accompaniment_type_facility) => {
    state.accompaniment_type_facility = accompaniment_type_facility;
    state.forwardingProtocol.accompaniment_type_facility_id = accompaniment_type_facility.id;
  },
  clearQuery: (state) => {
    state.forwarding_protocols = [];
    state.filterForwardingProtocols = [];
    state.params.person_name = null;
    state.params.facility_name = null;
    state.params.accompaniment_type = null;
  },
  clearFields: (state) => {
    state.forwardingProtocol.id = null;
    state.forwardingProtocol.observation = "";
    state.person = null;
    state.accompaniment_type_facility = null;
    state.accompaniment_type = null;
  },
};

const actions = {
  // PEGAR PÁGINA ESPECÍFICA
  getPageFilter: ({ state, commit }, payload) => {
    if (payload != null) {
      const params = {
        person_name: state.params.person_name,
        facility_name: state.params.facility_name,
        accompaniment_type_name: state.params.accompaniment_type_name,
        order_by: "person.name",
        limit: state.totalPerPage,
        offset: payload.offset,
      };
      getForwardingProtocols(params)
        .then((response) => {
          commit("setForwardingProtocolsMutation", response.data.forwarding_protocols);
          commit("setTotalFilterMutation", response.data.total);
          commit("setActualPageFilterMutation", payload.number);
        })
        .catch((e) => {
          console.log("error", e.response); //TODO: tratar esse error
        });
    }
  },
  loadForwardingProtocols: ({ commit }) => {
    commit("setOffsetFilterMutation", 0);
    const params = {
      person_name: state.params.person_name,
      facility_name: state.params.facility_name,
      accompaniment_type_name: state.params.accompaniment_type_name,
      order_by: "person.name",
      limit: state.totalPerPage,
      offset: state.offsetFilter,
    };
    getForwardingProtocols(params)
      .then((response) => {
        commit("setForwardingProtocolsMutation", response.data.forwarding_protocols);
        commit("setTotalFilterMutation", response.data.total);
        commit("setActualPageFilterMutation", 1);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadAccompanimentTypes: ({ commit }) => {
    getAccompanimentTypes()
      .then((response) => {
        commit("setAccompanimentTypesMutation", response.data.accompaniment_types);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  loadAccompanimentTypeFacilityByType: ({ commit }, id) => {
    getAccompanimentTypeFacilityByType(id)
      .then((response) => {
        let accompaniment_type_facilities = [];
        response.data.accompaniment_type_facilities.forEach((element) => {
          let id = element.id;
          let name = element.facility.name;
          accompaniment_type_facilities.push({ id: id, name: name });
        });
        commit("setAccompanimentTypeFacilitiesMutation", accompaniment_type_facilities);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  filterListByNamePerson: ({ commit }, payload) => {
    commit("filterListByNamePerson", payload);
  },
  filterListByFacilityName: ({ commit }, payload) => {
    commit("filterListByFacilityName", payload);
  },
  filterListByAccompanimentType: ({ commit }, payload) => {
    commit("filterListByAccompanimentType", payload);
  },
  toggleModalToggleForwardingProtocols: ({ commit }) => {
    commit("toggleModalToggleForwardingProtocols");
  },
  loadData: ({ commit }, payload) => {
    getForwardingProtocolId(payload.id)
      .then((response) => {
        commit("setIdMutation", response.data.forwarding_protocol.id);
        commit("setObservationMutation", response.data.forwarding_protocol.observation);
        commit("setPersonMutation", response.data.forwarding_protocol.person);
        commit("setAccompanimentTypeMutation", response.data.forwarding_protocol.accompaniment_type);
        commit("setAccompanimentTypeFacilityMutation", response.data.forwarding_protocol.facility);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  openViewModal: ({ commit, dispatch }, payload) => {
    dispatch("loadData", payload);
    commit("toggleModalViewForwardingProtocol");
  },
  closeViewModal: ({ commit }) => {
    commit("toggleModalViewForwardingProtocol");
    commit("clearFields");
  },
  openEditModal: ({ commit, dispatch }, payload) => {
    dispatch("loadData", payload);
    commit("toggleModalToggleForwardingProtocols");
  },
  closeModal: ({ commit }) => {
    commit("toggleModalToggleForwardingProtocols");
    commit("clearFields");
  },
  clearQuery: ({ commit }) => {
    commit("clearQuery");
  },
  toggleModalDeleteForwardingProtocol: ({ commit }, payload) => {
    commit("toggleModalDeleteForwardingProtocol");
    if (state.modalConfirmDeleteForwardingProtocol) {
      commit("forwardingProtocoForDeletion", payload);
    } else {
      commit("forwardingProtocoForDeletion", null);
    }
  },
  setId: ({ commit }, payload) => {
    commit("setIdMutation", payload);
  },
  setObservation: ({ commit }, payload) => {
    commit("setObservationMutation", payload.value);
  },
  setPerson: ({ commit }, payload) => {
    commit("setPersonMutation", payload);
  },
  setAccompanimentType: ({ commit }, payload) => {
    commit("setAccompanimentTypeMutation", payload);
  },
  setAccompanimentTypeFacility: ({ commit }, payload) => {
    commit("setAccompanimentTypeFacilityMutation", payload);
  },
  save: ({ commit, dispatch }) => {
    createForwardingProtocol(state.forwardingProtocol)
      .then(() => {
        Vue.$toast.success("Protocolo de Encaminhamento cadastrado com sucesso!");
        commit("toggleModalToggleForwardingProtocols");
        commit("clearFields");
        dispatch("ForwardingProtocols/loadForwardingProtocols", null, { root: true });
      })
      .catch((e) => {
        Vue.$toast.error(
          "Não foi possivel cadastrar o acompanhamento por tipo de equipamento" +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  update: ({ dispatch, commit }) => {
    updateForwardingProtocol(state.forwardingProtocol.id, state.forwardingProtocol).then((resp) => {
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Protocolo de Encaminhamento atualizado com sucesso!");
        commit("toggleModalToggleForwardingProtocols");
        dispatch("ForwardingProtocols/updateFilterById", state.forwardingProtocol.id, { root: true });
        //dispatch("ForwardingProtocols/loadForwardingProtocols", null, { root: true });
        commit("clearFields");
        // --
      } else {
        Vue.$toast.error(
          "Não foi possivel atualizar o Protocolo de Encaminhamento! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
      }
    });
  },
  updateFilterById: ({ commit }, id) => {
    getForwardingProtocolId(id)
      .then((response) => {
        // console.log(response);
        let forwarding_protocol = response.data.forwarding_protocol;
        let updated = {
          accompaniment_type: {
            id: forwarding_protocol.accompaniment_type.id,
            name: forwarding_protocol.accompaniment_type.name,
          },
          facility: {
            id: forwarding_protocol.facility.id,
            name: forwarding_protocol.facility.name,
          },
          forwarding_date: forwarding_protocol.forwarding_date,
          id: forwarding_protocol.id,
          person: {
            id: forwarding_protocol.person.id,
            name: forwarding_protocol.person.name,
          },
          sectorial: {
            id: forwarding_protocol.sectorial.id,
            name: forwarding_protocol.sectorial.name,
          },
          source_system_name: forwarding_protocol.source_system_name,
        };
        commit("updateFilterByIdMutation", updated);
      })
      .catch((e) => {
        console.log("error", e); //TODO: tratar esse error
      });
  },
  delete: ({ commit, dispatch }) => {
    destroyForwardingProtocol(state.forwardingProtocolId).then((resp) => {
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Protocolo de Encaminhamento deletado com sucesso");
        commit("toggleModalDeleteForwardingProtocol");
        dispatch("ForwardingProtocols/loadForwardingProtocols", null, { root: true });
      }
    });
  },
  setOffsetFilter: ({ commit }, payload) => {
    commit("setOffsetFilterMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
