import { getAxios, baseURL } from "./Api";

export async function getGenders() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`genders`);
}
