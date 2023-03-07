import { getAxios, baseURL } from "./Api";

export async function getProtectiveMeasuresTypes() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`protective_measure_types`);
}

export async function getProtectiveMeasureTypeById(_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`protective_measure_types/${_id}`);
}

export async function createProtectiveMeasureType(protectiveMeasureType) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.post("/protective_measure_types", protectiveMeasureType);
}

export async function destroyProtectiveMeasureType(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`protective_measure_types/${id}`);
}

export async function updateProtectiveMeasureType(id, protectiveMeasureType) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`protective_measure_types/${id}`, protectiveMeasureType);
}
