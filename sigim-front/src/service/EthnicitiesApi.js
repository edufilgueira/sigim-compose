import { getAxios, baseURL } from "./Api";

export async function getEthnicities() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`ethnicities`);
}
