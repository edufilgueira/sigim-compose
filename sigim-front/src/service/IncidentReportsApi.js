import { getAxios, baseURL } from "./Api";

export async function getIncidentReports(filters) {
  // let order_by = "number DESC";
  // const api = getAxios(baseURL["sigim_api"]);
  // let url = `incident_reports?order_by=${order_by}`;

  // if (filters.number) {
  //   url += `&number=${filters.number}`;
  // }
  // if (filters.victim_name) {
  //   url += `&victim_name=${filters.victim_name}`;
  // }
  // if (filters.aggressor_name) {
  //   url += `&aggressor_name=${filters.aggressor_name}`;
  // }

  // return api.get(url);
  const api = getAxios(baseURL["sigim_api"]);
  let url = `incident_reports`;
  return api.get(url, { params: filters });
}

export async function getIncidentReportById(_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`incident_reports/${_id}`);
}

export async function createIncidentReport(incidentReport) {
  // console.log("incidentReport", incidentReport);
  const api = getAxios(baseURL["sigim_api"]);
  return api.post("/incident_reports", incidentReport);
}

export async function destroyIncidentReport(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`incident_reports/${id}`);
}

export async function updateIncidentReport(id, incidentReport) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`incident_reports/${id}`, incidentReport);
}
