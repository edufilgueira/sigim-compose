import { getAxios, baseURL } from "./Api";

export async function getRelationshipDegrees() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`relationship_degrees`);
}
