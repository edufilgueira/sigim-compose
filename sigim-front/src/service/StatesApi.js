import { getAxios, baseURL } from "./Api";

export async function getStates() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`states`);
}

export async function getStateById(state_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`states/${state_id}`);
}
