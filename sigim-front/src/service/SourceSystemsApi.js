import { getAxios, baseURL } from "./Api";

export async function getSourceSystems() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`source_systems`);
}
