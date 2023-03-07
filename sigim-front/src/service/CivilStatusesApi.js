import { getAxios, baseURL } from "./Api";

export async function getCivilStatuses() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`civil_statuses`);
}
