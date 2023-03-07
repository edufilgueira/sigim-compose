import { getAxios, baseURL } from "./Api";

export async function getFacilitiesTypes() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`facility_types`);
}
