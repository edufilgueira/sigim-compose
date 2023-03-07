import { getAxios, baseURL } from "./Api";

export async function getViolenceMotivations() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`violence_motivations`);
}
