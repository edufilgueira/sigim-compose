import { getAxios, baseURL } from "./Api";

export async function getLawsuits(filters) {
  // let order_by = "number DESC";
  // const api = getAxios(baseURL["sigim_api"]);
  // let url = `lawsuits?order_by=${order_by}`;

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
  let url = `lawsuits`;
  return api.get(url, { params: filters });
}

export async function getLawsuitById(_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`lawsuits/${_id}`);
}

export async function createLawsuit(lawsuit) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.post("/lawsuits", lawsuit);
}

export async function destroyLawsuit(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`lawsuits/${id}`);
}

export async function updateLawsuit(id, lawsuit) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`lawsuits/${id}`, lawsuit);
}
