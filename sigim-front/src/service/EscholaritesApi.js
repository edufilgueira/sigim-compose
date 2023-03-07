import { getAxios, baseURL } from "./Api";

export async function getScholarities() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`scholarities`);
}
