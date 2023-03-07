import {
  getLawsuits,
  getLawsuitById,
  createLawsuit,
  updateLawsuit,
  destroyLawsuit,
} from "../../service/LawsuitsApi";
import Vue from "vue";

const state = {
  lawsuit: {
    id: null,
    number: "",
    observation: "",
    victim_id: 0,
    aggressor_id: 0,
    crime_type_id: 0,
    violence_type_id: 0,
    violence_motivation_id: 0,
  },
  // filters: {
  //   number: null,
  //   victim_name: "",
  //   aggressor_name: "",
  // },
  params: {
    number: null,
    victim_name: "",
    aggressor_name: "",
    order_by: "",
    limit: "",
    offset: "",
  },
  victim: null,
  aggressor: null,
  crime_type: null,
  violence_type: null,
  violence_motivation: null,
  lawsuits: [],
  filterLawsuits: [],
  lawsuitId: 0,
  modalToggleLawsuits: false,
  modalConfirmDeleteLawsuit: false,
  modalViewLawsuit: false,
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
  updateFilterByIdMutation: (state, lawsuit) => {
    let key = state.filterLawsuits.findIndex((item) => {
      return lawsuit.id === item.id;
    });
    state.filterLawsuits.splice(key, 1);
    state.filterLawsuits.splice(key, 0, lawsuit);
    //commit("clearFields");
  },

  setLawsuitsMutation: (state, lawsuits) => {
    state.lawsuits = lawsuits;
    state.filterLawsuits = lawsuits;
  },
  filterListByNumber: (state, input) => {
    // let lawsuits = state.lawsuits;
    // state.filterLawsuits = lawsuits.filter((obj) => {
    //   let number = obj.number.toLowerCase().indexOf(input.value.toLowerCase());
    //   return number > -1;
    // });
    state.params.number = input.value;
  },
  filterListByNameVictim: (state, input) => {
    // let lawsuits = state.lawsuits;
    // state.filterLawsuits = lawsuits.filter((obj) => {
    //   let name = obj.victim.name.toLowerCase().indexOf(input.value.toLowerCase());
    //   return name > -1;
    // });
    state.params.victim_name = input.value;
  },
  filterListByNameAggressor: (state, input) => {
    // let lawsuits = state.lawsuits;
    // state.filterLawsuits = lawsuits.filter((obj) => {
    //   let name = obj.aggressor.name.toLowerCase().indexOf(input.value.toLowerCase());
    //   return name > -1;
    // });
    state.params.aggressor_name = input.value;
  },
  toggleModalLawsuits: (state) => {
    state.modalToggleLawsuits = !state.modalToggleLawsuits;
  },
  toggleModalDeleteLawsuit: (state) => {
    state.modalConfirmDeleteLawsuit = !state.modalConfirmDeleteLawsuit;
  },
  toggleModalViewLasuit: (state) => {
    state.modalViewLawsuit = !state.modalViewLawsuit;
  },
  lawsuitForDeletion: (state, payload) => {
    state.lawsuitId = payload.id;
  },
  setIdMutation: (state, id) => {
    state.lawsuit.id = id;
  },
  setNumberMutation: (state, number) => {
    state.lawsuit.number = number;
  },
  setObservationMutation: (state, observation) => {
    state.lawsuit.observation = observation;
  },
  setVictimMutation: (state, victim) => {
    state.lawsuit.victim_id = victim.id;
    state.victim = victim;
  },
  setAggressorMutation: (state, aggressor) => {
    state.lawsuit.aggressor_id = aggressor.id;
    state.aggressor = aggressor;
  },
  setCrimeTypeMutation: (state, crime_type) => {
    // console.log("crime_type_id", crime_type);
    state.lawsuit.crime_type_id = crime_type.id;
    state.crime_type = crime_type;
  },
  setViolenceTypeMutation: (state, violence_type) => {
    state.lawsuit.violence_type_id = violence_type.id;
    state.violence_type = violence_type;
  },
  setViolenceMotivationMutation: (state, violence_motivation) => {
    state.lawsuit.violence_motivation_id = violence_motivation.id;
    state.violence_motivation = violence_motivation;
  },
  clearQuery: (state) => {
    state.lawsuits = [];
    state.filterLawsuits = [];
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
    state.lawsuit.id = null;
    state.lawsuit.number = "";
    state.lawsuit.observation = "";
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
      getLawsuits(params)
        .then((response) => {
          commit("setLawsuitsMutation", response.data.lawsuits);
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
  loadLawsuits: ({ commit }) => {
    commit("setOffsetFilterMutation", 0);
    const params = {
      number: state.params.number,
      victim_name: state.params.victim_name,
      aggressor_name: state.params.aggressor_name,
      order_by: "number DESC",
      limit: state.totalPerPage,
      offset: state.offsetFilter,
    };
    getLawsuits(params)
      .then((response) => {
        commit("setLawsuitsMutation", response.data.lawsuits);
        commit("setTotalFilterMutation", response.data.total);
        commit("setActualPageFilterMutation", 1);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
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
  toggleModalLawsuits: ({ commit }) => {
    commit("toggleModalLawsuits");
  },
  loadData: ({ commit }, payload) => {
    getLawsuitById(payload.id)
      .then((response) => {
        commit("setIdMutation", response.data.lawsuit.id);
        commit("setNumberMutation", response.data.lawsuit.number);
        commit("setObservationMutation", response.data.lawsuit.observation);
        commit("setVictimMutation", response.data.lawsuit.victim);
        commit("setAggressorMutation", response.data.lawsuit.aggressor);
        commit("setCrimeTypeMutation", response.data.lawsuit.crime_type);
        commit("setViolenceTypeMutation", response.data.lawsuit.violence_type);
        commit("setViolenceMotivationMutation", response.data.lawsuit.violence_motivation);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  clearQuery: ({ commit }) => {
    commit("clearQuery");
  },
  openEditModal: ({ commit, dispatch }, payload) => {
    dispatch("loadData", payload);
    commit("toggleModalLawsuits");
  },
  openViewModal: ({ commit, dispatch }, payload) => {
    dispatch("loadData", payload);
    commit("toggleModalViewLasuit");
  },
  closeViewModal: ({ commit }) => {
    commit("toggleModalViewLasuit");
    commit("clearFields");
  },
  closeModal: ({ commit }) => {
    commit("toggleModalLawsuits");
    commit("clearFields");
  },
  toggleModalDeleteLawsuit: ({ commit }, payload) => {
    commit("toggleModalDeleteLawsuit");
    if (state.modalConfirmDeleteLawsuit) {
      commit("lawsuitForDeletion", payload);
    } else {
      commit("lawsuitForDeletion", null);
    }
  },
  setNumber: ({ commit }, payload) => {
    commit("setNumberMutation", payload.value);
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
  save: ({ commit, dispatch }) => {
    createLawsuit(state.lawsuit)
      .then(() => {
        // console.log("Create Incident Report", response);
        Vue.$toast.success("Processo Judicial cadastrado com sucesso!");
        commit("toggleModalLawsuits");
        commit("clearFields");
        dispatch("Lawsuits/loadLawsuits", null, { root: true });
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
    updateLawsuit(state.lawsuit.id, state.lawsuit).then((resp) => {
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Processo Judicial atualizado com sucesso!");
        commit("toggleModalLawsuits");
        dispatch("Lawsuits/updateFilterById", state.lawsuit.id, { root: true });
        dispatch("Lawsuits/loadLawsuits", null, { root: true });
        commit("clearFields");
      } else {
        Vue.$toast.error(
          "Não foi possivel atualizar o boletim de ocorrência! " +
            "Por favor verifique se todos os campos com ( * ) foram preenchidos"
        );
      }
    });
  },
  updateFilterById: ({ commit }, id) => {
    getLawsuitById(id)
      .then((response) => {
        let lawsuit = response.data.lawsuit;
        let updated = {
          aggressor: {
            name: lawsuit.aggressor.name,
          },
          crime_type: {
            name: lawsuit.crime_type.name,
          },
          id: lawsuit.id,
          number: lawsuit.number,
          observation: lawsuit.observation,
          source_system_name: lawsuit.source_system.name,
          victim: {
            name: lawsuit.victim.name,
          },
          violence_motivation: {
            name: lawsuit.violence_motivation.name,
          },
          violence_type: {
            name: lawsuit.violence_type.name,
          },
        };
        commit("updateFilterByIdMutation", updated);
      })
      .catch((e) => {
        console.log("error", e.response); //TODO: tratar esse error
      });
  },
  delete: ({ commit, dispatch }) => {
    destroyLawsuit(state.lawsuitId).then((resp) => {
      // console.log("resp delete user", resp);
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Processo Judicial deletado com sucesso!");
        commit("toggleModalDeleteLawsuit");
        dispatch("Lawsuits/loadLawsuits", null, { root: true });
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
