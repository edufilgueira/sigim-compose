import { getAxios, baseURL } from "./Api";

export async function login(userDetail) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.post("/auth/sign_in", { email: userDetail.login, password: userDetail.password });
}
