import { getAxios, baseURL } from "./Api";

export async function getContactsTypes() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`contact_types`);
}
