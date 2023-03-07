import { getAxios, baseURL } from "./Api";

export async function getSexualOrientations() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`sexual_orientations`);
}
