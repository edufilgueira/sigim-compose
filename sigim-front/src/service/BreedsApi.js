import { getAxios, baseURL } from "./Api";

export async function getBreeds() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`breeds`);
}
