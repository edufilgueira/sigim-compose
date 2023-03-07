import { getAxios, baseURL } from "./Api";

export async function getNeighborhoodsByCityId(city_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`neighborhoods/neighborhood_by_city/${city_id}`);
}

export async function getNeighborhoodsByCityIdWithoutArea(city_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`cidades/${city_id}/bairros/sem_areas`);
}

export async function getNeighborhoodsByAreaId(area_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`areas/${area_id}/bairros`);
}
