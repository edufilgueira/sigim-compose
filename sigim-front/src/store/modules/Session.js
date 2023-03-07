import { login } from "../../service/AuthenticationApi";
// import { getTeacherByUserId } from "../../service/TeacherApi";
import router from "../../router";
import VueRouter from "vue-router";
import Vue from "vue";

const { isNavigationFailure, NavigationFailureType } = VueRouter;

const state = {
  userIsAuthenticated: false,
  user: {
    login: null,
    password: null,
  },
  loggedUser: {},
  role: {},
  errorInAuthentication: null,
  redirectUrl: null,
};

const mutations = {
  setUserAuthenticate: (state, authenticated) => {
    state.userIsAuthenticated = authenticated;
  },
  setUsername: (state, username) => {
    state.user.login = username;
  },
  setPassword: (state, password) => {
    state.user.password = password;
  },
  setErrorInAuthentication: (state, error) => {
    state.errorInAuthentication = error;
  },
  setLoggedUserMutation: (state, user) => {
    state.loggedUser = user;
  },
  setRoleMutation: (state, role) => {
    state.role = role;
  },
  setRedirectUrl: (state, redirectUrl) => {
    state.redirectUrl = redirectUrl;
  },
};

const actions = {
  setUsername: ({ commit }, payload) => {
    commit("setUsername", payload);
  },
  setPassword: ({ commit }, payload) => {
    commit("setPassword", payload);
  },
  setUserAuthenticate: ({ commit }, authenticated) => {
    commit("setUserAuthenticate", authenticated);
  },
  setLoggedUser: ({ commit }, payload) => {
    commit("setLoggedUserMutation", payload);
  },
  setRole: ({ commit }, payload) => {
    const role = payload;
    //console.log("setRole", role);
    commit("setRoleMutation", role);
  },
  getRule: ({ commit }, payload) => {
    const role = payload?.filter((obj) => {
      return obj.access == "virandojogo";
    })[0];
    commit("setRoleMutation", role);
  },
  validateUser: ({ commit, dispatch, state }) => {
    // console.log("payload", payload);
    //console.log(state.user);
    login(state.user)
      .then((response) => {
        // console.log("user", response);
        if (response) {
          const role = response.data.data.user_type;
          //console.log(role);
          //console.log(response.data.data.user_type);
          //console.log(payload);
          // if (!payload.access.includes(role)) {
          //   Vue.$toast.error("Usuário não é permitido login nesta área.");
          //   return;
          // }
          // if (role == "Instrutor") {
          //   getTeacherByUserId(response.data.data.id).then((rteacher) => {
          //     let city_id = rteacher.data.teachers.city_id;
          //     dispatch("City/setCity", city_id, { root: true });
          //   });
          // }
          const userData = {
            userId: response.data.data.id,
            userName: response.data.data.name,
            userType: response.data.data.user_type,
            abilityProfileId: response.data.data.ability_profile_id,
          };
          localStorage.setItem("userData", JSON.stringify(userData));
          localStorage.setItem("user_id", response.data.data.id);
          localStorage.setItem("token", response.data.token);
          commit("setUserAuthenticate", true);
          dispatch("setLoggedUser", response.data.data);
          dispatch("setRole", role);
          dispatch("AccessControl/getProfilePermits", commit, { root: true });
          dispatch("AccessControl/getProfileInfo", commit, { root: true });
          dispatch("User/setUser", response.data, { root: true });
          router.push(state.redirectUrl).catch((e) => {
            if (!isNavigationFailure(e, NavigationFailureType.redirected)) {
              //console.log(e);
              Promise.reject(e);
            }
          });
        } else {
          Vue.$toast.error("Erro ao efetuar login, usuário ou senha incorretos!");
        }
      })
      .catch((e) => {
        console.log("Erro", e);
        Vue.$toast.error("Erro ao efetuar login, usuário ou senha incorretos!");
        commit("setErrorInAuthentication", "Usuário ou Senha incorretas");
      });
  },
  // clientLogin: () => {
  //   const user = {
  //     login: process.env.VUE_APP_CLIENT,
  //     password: process.env.VUE_APP_PASSWORD_CLIENT,
  //   };
  //   singInUser(user)
  //     .then((response) => {
  //       localStorage.setItem("token", response.data.token);
  //     })
  //     .catch((e) => {
  //       console.error(e.response);
  //       Vue.$toast.error(e.response.data.errors);
  //     });
  // },
  setRedirectUrl: ({ commit }, payload) => {
    commit("setRedirectUrl", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
