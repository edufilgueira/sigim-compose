import Vue from "vue";
import {
  getQtdTotal,
  getQtdByGender,
  getQtdByGenderIdentity,
  getQtdByScholarity,
  getQtdByCivilStatus,
  getQtdByBreed,
  getQtdBySexualOrientation,
  getQtdByPwd,
  //---
  getQtdByAge,
  //---
  getQtdByAverageIncome,
  //---
  getQtdByCrimeType,
  getQtdByViolenceType,
  getQtdByViolenceMotivation,
  //---
  getQtdBySourceSystem,
  //---
  getQtdByOccurrenceCity,
  getQtdByRiskLevel,
  getQtdByCommunicationMonth,
} from "../../service/DashboardWomenIncidentReportsApi";

const state = {
  qtdTotal: 0,
  //---
  qtdByGender: {},
  qtdByGenderIdentity: {},
  qtdByScholarity: {},
  qtdByCivilStatus: {},
  qtdByBreed: {},
  qtdBySexualOrientation: {},
  qtdByPwd: {},
  //---
  qtdByAge: {},
  //---
  qtdByAge18a24: 0,
  qtdByAge25a34: 0,
  qtdByAge35a44: 0,
  qtdByAge45a54: 0,
  qtdByAge55orMore: 0,
  qtdByAgeUninformed: 0,
  //---
  qtdByAverageIncome: {},
  //---
  qtdByCrimeType: {},
  qtdByViolenceType: {},
  qtdByViolenceMotivation: {},
  //---
  qtdBySourceSystem: {},
  //---
  qtdByOccurrenceCity: {},
  qtdByRiskLevel: {},
  qtdByCommunicationMonth: {},
};

const mutations = {
  setQtdTotalMutation: (state, value) => {
    state.qtdTotal = value;
  },
  setQtdByGenderMutation: (state, value) => {
    state.qtdByGender = value;
  },
  setQtdByGenderIdentityMutation: (state, value) => {
    state.qtdByGenderIdentity = value;
  },
  setQtdByScholarityMutation: (state, value) => {
    state.qtdByScholarity = value;
  },
  setQtdByCivilStatusMutation: (state, value) => {
    state.qtdByCivilStatus = value;
  },
  setQtdByBreedMutation: (state, value) => {
    state.qtdByBreed = value;
  },
  setQtdBySexualOrientationMutation: (state, value) => {
    state.qtdBySexualOrientation = value;
  },
  setQtdByPwdMutation: (state, value) => {
    state.qtdByPwd = value;
  },
  setQtdByAgeMutation: (state, value) => {
    state.qtdByAge = value;
  },
  setQtdByAge18a24Mutation: (state, value) => {
    state.qtdByAge18a24 = value;
  },
  setQtdByAge25a34Mutation: (state, value) => {
    state.qtdByAge25a34 = value;
  },
  setQtdByAge35a44Mutation: (state, value) => {
    state.qtdByAge35a44 = value;
  },
  setQtdByAge45a54Mutation: (state, value) => {
    state.qtdByAge45a54 = value;
  },
  setQtdByAge55orMoreMutation: (state, value) => {
    state.qtdByAge55orMore = value;
  },
  setQtdByAgeUninformedMutation: (state, value) => {
    state.qtdByAgeUninformed = value;
  },
  setQtdByAverageIncomeMutation: (state, value) => {
    state.qtdByAverageIncome = value;
  },
  setQtdByCrimeTypeMutation: (state, value) => {
    state.qtdByCrimeType = value;
  },
  setQtdByViolenceTypeMutation: (state, value) => {
    state.qtdByViolenceType = value;
  },
  setQtdByViolenceMotivationMutation: (state, value) => {
    state.qtdByViolenceMotivation = value;
  },
  setQtdBySourceSystemMutation: (state, value) => {
    state.qtdBySourceSystem = value;
  },
  setQtdByOccurrenceCityMutation: (state, value) => {
    state.qtdByOccurrenceCity = value;
  },
  setQtdByRiskLevelMutation: (state, value) => {
    state.qtdByRiskLevel = value;
  },
  setQtdByCommunicationMonthMutation: (state, value) => {
    state.qtdByCommunicationMonth = value;
  },
};

const actions = {
  loadQtdTotal: ({ commit }, params) => {
    getQtdTotal(params)
      .then((response) => {
        commit("setQtdTotalMutation", response.data.total);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByGender: ({ commit }, params) => {
    getQtdByGender(params)
      .then((response) => {
        commit("setQtdByGenderMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByGenderIdentity: ({ commit }, params) => {
    getQtdByGenderIdentity(params)
      .then((response) => {
        commit("setQtdByGenderIdentityMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByScholarity: ({ commit }, params) => {
    getQtdByScholarity(params)
      .then((response) => {
        commit("setQtdByScholarityMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByCivilStatus: ({ commit }, params) => {
    getQtdByCivilStatus(params)
      .then((response) => {
        commit("setQtdByCivilStatusMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByBreed: ({ commit }, params) => {
    getQtdByBreed(params)
      .then((response) => {
        commit("setQtdByBreedMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdBySexualOrientation: ({ commit }, params) => {
    getQtdBySexualOrientation(params)
      .then((response) => {
        commit("setQtdBySexualOrientationMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByPwd: ({ commit }, params) => {
    getQtdByPwd(params)
      .then((response) => {
        commit("setQtdByPwdMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByAge18a24: ({ commit }) => {
    let paramsDashboard = {
      params: {
        age: "",
        age_start: "18",
        age_end: "24",
      },
    };
    getQtdByAge(paramsDashboard)
      .then((response) => {
        commit("setQtdByAge18a24Mutation", response.data.total);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByAge25a34: ({ commit }) => {
    let paramsDashboard = {
      params: {
        age: "",
        age_start: "25",
        age_end: "34",
      },
    };
    getQtdByAge(paramsDashboard)
      .then((response) => {
        commit("setQtdByAge25a34Mutation", response.data.total);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByAge35a44: ({ commit }) => {
    let paramsDashboard = {
      params: {
        age: "",
        age_start: "35",
        age_end: "44",
      },
    };
    getQtdByAge(paramsDashboard)
      .then((response) => {
        commit("setQtdByAge35a44Mutation", response.data.total);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByAge45a54: ({ commit }) => {
    let paramsDashboard = {
      params: {
        age: "",
        age_start: "45",
        age_end: "54",
      },
    };
    getQtdByAge(paramsDashboard)
      .then((response) => {
        commit("setQtdByAge45a54Mutation", response.data.total);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByAge55orMore: ({ commit }) => {
    let paramsDashboard = {
      params: {
        age: "",
        age_start: "55",
        age_end: "",
      },
    };
    getQtdByAge(paramsDashboard)
      .then((response) => {
        commit("setQtdByAge55orMoreMutation", response.data.total);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByAverageIncome: ({ commit }, params) => {
    getQtdByAverageIncome(params)
      .then((response) => {
        commit("setQtdByAverageIncomeMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByCrimeType: ({ commit }, params) => {
    getQtdByCrimeType(params)
      .then((response) => {
        commit("setQtdByCrimeTypeMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByViolenceType: ({ commit }, params) => {
    getQtdByViolenceType(params)
      .then((response) => {
        commit("setQtdByViolenceTypeMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByViolenceMotivation: ({ commit }, params) => {
    getQtdByViolenceMotivation(params)
      .then((response) => {
        commit("setQtdByViolenceMotivationMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  //---
  loadQtdBySourceSystem: ({ commit }, params) => {
    getQtdBySourceSystem(params)
      .then((response) => {
        commit("setQtdBySourceSystemMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  //---
  loadQtdByOccurrenceCity: ({ commit }, params) => {
    getQtdByOccurrenceCity(params)
      .then((response) => {
        commit("setQtdByOccurrenceCityMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByRiskLevel: ({ commit }, params) => {
    getQtdByRiskLevel(params)
      .then((response) => {
        commit("setQtdByRiskLevelMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
  loadQtdByCommunicationMonth: ({ commit }, params) => {
    getQtdByCommunicationMonth(params)
      .then((response) => {
        commit("setQtdByCommunicationMonthMutation", response.data);
      })
      .catch((e) => {
        Vue.$toast.error(e.response.data.error);
      });
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
