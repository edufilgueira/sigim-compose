import { getAxios, baseURL } from "./Api";

export async function getCitiesByStateId(state_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`cities/city_by_state/${state_id}`);
}
