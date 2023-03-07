import { getAxios, baseURL } from "./Api";

export async function getCommunities() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`communities`);
}
