import { getAxios, baseURL } from "./Api";

export async function getSkinColors() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`skin_colors`);
}
