import { getAxios, baseURL } from "./Api";

export async function getViolenceTypes() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`violence_types`);
}
