import { getAxios, baseURL } from "./Api";

export async function getSectorials() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`sectorials`);
}
