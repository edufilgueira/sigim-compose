import {
  getMenus,
  permits,
  profiles,
  sendPermits,
  createProfile,
  getProfile,
  deleteProfile,
} from "../../service/AccessControlApi";
import router from "../../router/index";
import Vue from "vue";

const state = {
  menus: [],
  arrPermits: [],
  arrPermTmp: [],
  arrPermProf: [],
  status: false,
  profiles: [],
  profile: null,
  profileInfo: [],
  profArray: [],
  perm: {},
  profileName: "",
  modalProfileOpen: false,
  modalPerrmissionsOpen: false,
  modalConfirmDeleteProfile: false,
  profileId: 0,
};

const mutations = {
  clearArrPermTmpMutation: (state) => {
    state.arrPermTmp = [];
  },
  toggleModalProfile: (state) => {
    state.modalProfileOpen = !state.modalProfileOpen;
  },
  toggleModalDeleteConfirmation: (state) => {
    state.modalConfirmDeleteProfile = !state.modalConfirmDeleteProfile;
  },
  setProfileNameMutation: (state, name) => {
    state.profileName = name;
  },
  profileForDeletion: (state, payload) => {
    // console.log("payload.id", payload);
    state.profileId = payload;
  },
  tooglePermissionsMutation: (state) => {
    state.modalPerrmissionsOpen = !state.modalPerrmissionsOpen;
    // console.log("state.modalPerrmissionsOpen", state.modalPerrmissionsOpen);
  },
  setSeason: (state, season) => {
    state.season = season;
  },
  setProfile: (state, profile) => {
    state.profile = profile;
    // console.log("state.profile", state.profile);
  },
  getProfileInfo: (state, profile) => {
    state.profileInfo = profile;
  },
  loadingMutation(state) {
    state.status = "Carregando...";
  },
  loadPermitsMutation: (state, permits) => {
    const perm = [];
    permits.forEach((element) => {
      // console.log("element", element);
      element.permissions.forEach((ele) => {
        // console.log("ele", ele);
        perm[ele.action_code] = ele.checked;
      });
    });

    const permitJSON = Object.entries(perm).map((arr) => ({
      permit: arr[0],
      value: arr[1],
    }));
    // console.log(typeof permitJSON);
    // console.log(permitJSON);
    // state.perm = permitJSON;
    localStorage.setItem("perms", JSON.stringify(permitJSON));
  },
  // checkPermitsMutation: (state, value) => {
  //   console.log("value", value);
  //   console.log("state.arrPermProf mutation", state.arrPermProf[value]);
  // },
  loadProfPermitsMutation: (state, payload) => {
    state.arrPermits = payload;
    // console.log("state.arrPermits mutation", state.arrPermits);
  },
  getArrPermProfMutation: (state) => {
    return state.arrPermProf;
  },
  loadProfilesMutation: (state, profiles) => {
    state.profiles = profiles;
    // console.log("teste profiles", state.profiles);
  },
  loadProfArray: (state, profArray) => {
    state.profArray = profArray;
    // console.log("teste profArray", state.profArray);
  },
  setPermMutation: (state, permits) => {
    state.arrPermTmp[permits.action_code] = !state.arrPermTmp[permits.action_code];
    // console.log("new ArrPermTmp", state.arrPermTmp[permits.action_code]);
    // console.log("state.arrPermTmp mutation", state.arrPermTmp);
  },
};

const actions = {
  modalProfileOpen: ({ commit }) => {
    commit("toggleModalProfile");
  },
  openCloseDeleteProfileConfirmation: ({ commit, state }, payload) => {
    // console.log("payload profile", payload);
    commit("toggleModalDeleteConfirmation");
    if (state.modalConfirmDeleteProfile) {
      commit("profileForDeletion", payload.id);
    } else {
      commit("profileForDeletion", null);
    }
  },
  deleteProfile: ({ commit, dispatch, state }) => {
    const prof_id = state.profileId;
    // console.log("prof_id", prof_id);
    deleteProfile(prof_id).then((resp) => {
      // console.log("resp delete profile", resp);
      if (resp.status === 201 || resp.status === 200) {
        Vue.$toast.success("Perfil deletado com sucesso");
        dispatch("getProfiles");
        commit("toggleModalDeleteConfirmation");
      }
    });
  },
  setProfileName: ({ commit }, payload) => {
    commit("setProfileNameMutation", payload);
  },
  openModal: ({ commit }) => {
    commit("tooglePermissionsMutation");
  },
  openEditModalPermission: ({ commit, dispatch }, payload) => {
    commit("setProfile", payload);
    commit("tooglePermissionsMutation");
    dispatch("getPermits", payload);
  },
  openModalProfile: ({ commit, dispatch }) => {
    dispatch("Teacher/clearTeacher", null, { root: true });
    commit("toggleModalTeacher");
  },
  setPermits: ({ commit }, payload) => {
    commit("loadingMutation", true);
    // console.log(payload);
    commit("setPermMutation", payload);
  },
  showPermits: ({ commit }) => {
    commit("checkPermitsMutation");
  },
  async setUserMenus() {
    const auth = JSON.parse(localStorage.getItem("userData"));
    // const menu = [];
    // const subMenu = [];
    // console.log("Auth", auth);
    return getMenus(auth.userId);
    // .then((response) => {
    //   console.log("Menus", response);
    //   // response.data.forEach((element) => {
    //   //   menu.push(element.description);
    //   //   element.ability_actions.forEach((item) => {
    //   //     subMenu.push((element.description = item.description));
    //   //   });
    //   //   console.log("elemento", element);
    //   // });
    //   // // console.log("Menu", menu);
    //   // // console.log("SubMenu", subMenu);
    //   // localStorage.setItem("menus", JSON.stringify(menu));
    //   // localStorage.setItem("subMenus", JSON.stringify(subMenu));
    // });
  },

  logOutAction() {
    localStorage.clear();
    router.push({ path: "/admin/entrar" });
  },
  canAcces({ commit }, value) {
    commit("loadingMutation");
    // console.log("value", value);
    // console.log("perms", localStorage.perms);
    if (localStorage.perms) {
      const permJson = JSON.parse(localStorage.perms);
      const found = permJson.find((element) => element.permit === value);
      // console.log("found", found);
      if (found != undefined) {
        return found.value;
      } else {
        return false;
      }
    }
  },
  getProfilePermits: async ({ commit }) => {
    const auth = JSON.parse(localStorage.getItem("userData"));
    // console.log("payload", payload);
    if (auth) {
      // console.log("auth", auth.abilityProfileId);
      permits(auth.abilityProfileId).then((response) => {
        commit("loadPermitsMutation", response.data);
      });
    }
  },
  getProfileInfo: async ({ commit }) => {
    const auth = JSON.parse(localStorage.getItem("userData"));
    // console.log("auth", auth);
    getProfile(auth.abilityProfileId).then((response) => {
      // console.log(" response", response);
      commit("getProfileInfo", response.data);
    });
  },
  getPermits: ({ commit }, payload) => {
    // console.log("payload", payload);
    if (payload) {
      permits(payload.id)
        .then((response) => {
          // console.log(" response.data", response.data);
          commit("loadProfPermitsMutation", response.data);
          response.data.map((element) => {
            element.permissions.map((ele) => {
              // console.log("getProfilePermits ele", ele);
              state.arrPermTmp[ele.action_code] = ele.checked;
            });
          });
          // console.log("arrPermTmp", state.arrPermTmp);
        })
        .catch((e) => {
          console.log("error", e); //TODO: tratar esse error
        });
    }
  },
  getProfiles({ commit }) {
    // const auth = JSON.parse(localStorage.getItem("userData"));
    profiles().then((response) => {
      //console.log("Profiles", response);
      // console.log("response.data", response.data);
      commit("loadProfilesMutation", response.data.ability_profiles);
      const arrayProf = [];
      response.data.ability_profiles.map((ele) => {
        arrayProf.push({ id: ele.id, name: ele.name });
      });
      commit("loadProfArray", arrayProf);
      // console.log("arrayProf", this.arrayProf);
    });
  },
  // updateProfiles: ({ dispatch }, values) => {
  //   console.log("dispatch", dispatch);
  //   console.log("values", values);
  // },
  saveProfile: ({ dispatch, commit }) => {
    const prof = state.profileName;
    // console.log("prof", prof);
    createProfile(prof).then((resp) => {
      // console.log("resp", resp);
      if (resp.status === 201 || resp.status) {
        Vue.$toast.success("Perfil Criado com sucesso");
        dispatch("getProfiles");
        commit("toggleModalProfile");
      }
    });
  },
  sendPerf({ commit }, payload) {
    commit("loadingMutation");
    // console.log("payload", payload);
    const objPermissions = [];
    Object.keys(state.arrPermTmp).forEach((key) => {
      // console.log(key, state.arrPermTmp[key]);
      objPermissions.push({ action_code: key, checked: state.arrPermTmp[key] });
    });
    // const auth = JSON.parse(localStorage.getItem("userData"));
    // console.log("Obj to Send", objPermissions);
    if (payload.id) {
      sendPermits(payload.id, objPermissions).then((resp) => {
        // console.log("Resp", resp);
        if (resp.data === "updated") {
          Vue.$toast.success("Atualizado com sucesso!");
          commit("clearArrPermTmpMutation");
          // localStorage.removeItem("perms");
          commit("tooglePermissionsMutation");
          router.go();
        } else {
          Vue.$toast.error("Erro ao atualizar!");
        }
      });
    }
  },
};
const getters = {
  async createArrPerm(array) {
    const arrProfPermTmp = [];
    array.forEach(async (element) => {
      // console.log("getProfilePermits element", element);
      element.permissions.forEach(async (ele) => {
        // console.log("getProfilePermits ele", ele);
        arrProfPermTmp[ele.action_code] = ele.checked;
        // await this.$store.commit("loadProfPermitsMutation", ele);
      });
    });
    //console.log("getProfilePermits arrProfPermTmp", arrProfPermTmp);
    localStorage.setItem("profilePermits", arrProfPermTmp.toString());
    this.$store.commit("loadProfPermitsMutation", arrProfPermTmp);
    return arrProfPermTmp;
  },
  getErrorMessage: (state) => (key, field) => {
    let error = state.errorMessages.find((errorMessage) => {
      return errorMessage.attribute === key;
    });

    if (error) {
      if (error.type === "blank") {
        if (field === "" || field === " " || field === undefined || field === null) {
          return error.message;
        } else {
          return null;
        }
      } else {
        return error.message;
      }
    } else {
      return null;
    }
  },

  // getProfile: async () => {
  //   let prof = state.profile
  // },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
