import axios from "axios";

export const baseURL = {
  sigim_api: process.env.VUE_APP_SIGIM_API,
  cep_api: process.env.VUE_APP_CEP_API,
};

export const getAxios = (urlApi) => {
  const api_axios = axios.create({ baseURL: urlApi });
  api_axios.defaults.headers.common["Content-Type"] = "application/json";
  api_axios.interceptors.response.use(
    function (response) {
      if (response.headers["access-token"]) {
        // console.log("entrou");
        // console.log("response api", response);
        const authHeaders = {
          // userId: response.data.data.id,
          "access-token": response.headers["access-token"],
          client: response.headers["client"],
          uid: response.headers["uid"],
          expiry: response.headers["expiry"],
          "token-type": response.headers["token-type"],
        };

        // console.log("headers", authHeaders);
        localStorage.setItem("authHeaders", JSON.stringify(authHeaders));
      } else {
        // localStorage.removeItem("authHeaders");
      }
      return response;
    },
    function (error) {
      console.log("error", error);
      // return Promise.reject(error);
      // router.push({ path: '/' });
    }
  );
  api_axios.interceptors.request.use(
    function (config) {
      // console.log("config", config);
      const authHeaders = JSON.parse(localStorage.getItem("authHeaders"));
      // console.log("Response headers1", authHeaders);
      if (authHeaders) {
        config.headers[config.method] = {
          "access-token": authHeaders["access-token"],
          client: authHeaders["client"],
          uid: authHeaders["uid"],
        };
      }
      // console.log('headers', authHeaders)
      return config;
    },
    function (error) {
      console.log("error", error);
      return Promise.reject(error);
    }
  );
  return api_axios;
};
