import { getAxios, baseURL } from "./Api";

export async function getNeighborhoodsByCityId(city_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`neighborhoods/neighborhood_by_city/${city_id}`);
}
