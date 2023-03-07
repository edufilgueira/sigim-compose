import { getAxios, baseURL } from "./Api";

export async function getProtectiveMeasures(filters) {
  // let order_by = "number DESC";
  // const api = getAxios(baseURL["sigim_api"]);
  // let url = `protective_measures?order_by=${order_by}`;

  // if (filters.number_protective_measure) {
  //   url += `&number=${filters.number_protective_measure}`;
  // }
  // if (filters.number_incident_report) {
  //   url += `&incident_report_number=${filters.number_incident_report}`;
  // }
  // return api.get(url);
  const api = getAxios(baseURL["sigim_api"]);
  let url = `protective_measures`;
  return api.get(url, { params: filters });
}

export async function getProtectiveMeasureById(_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`protective_measures/${_id}`);
}

export async function createProtectiveMeasure(protectiveMeasure) {
  // console.log("protectiveMeasure dentro create", protectiveMeasure);
  const api = getAxios(baseURL["sigim_api"]);
  return api.post("/protective_measures", protectiveMeasure);
}

export async function destroyProtectiveMeasure(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`protective_measures/${id}`);
}

export async function updateProtectiveMeasure(id, protectiveMeasure) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`protective_measures/${id}`, protectiveMeasure);
}
