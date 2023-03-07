import { getAxios, baseURL } from "./Api";

export async function getGenderIdentidy() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`gender_identities`);
}
