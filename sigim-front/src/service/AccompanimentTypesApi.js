import { getAxios, baseURL } from "./Api";

export async function getAccompanimentTypes() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`accompaniment_types`);
}
