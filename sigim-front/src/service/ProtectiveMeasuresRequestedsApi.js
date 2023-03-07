import { getAxios, baseURL } from "./Api";

export async function getProtectiveMeasuresRequesteds(filters) {
  let order_by = "protective_measure.number DESC";
  const api = getAxios(baseURL["sigim_api"]);
  let url = `protective_measure_requesteds?order_by=${order_by}`;

  if (filters.number_protective_measure) {
    url += `&protective_measure_number=${filters.number_protective_measure}`;
  }
  if (filters.number_incident_report) {
    url += `&incident_report_number=${filters.number_incident_report}`;
  }
  return api.get(url);
}

export async function getProtectiveMeasureRequestedById(_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`protective_measure_requesteds/${_id}`);
}

export async function createProtectiveMeasureRequested(protectiveMeasureRequested) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.post("/protective_measure_requesteds?many=true", protectiveMeasureRequested);
}

export async function destroyProtectiveMeasureRequested(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`protective_measure_requesteds/${id}`);
}

export async function updateProtectiveMeasureRequested(id, protectiveMeasureRequested) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`protective_measure_requesteds/${id}`, protectiveMeasureRequested);
}
