import { getAxios, baseURL } from "./Api";

export async function getForwardingProtocols(filters) {
  // let order_by = "person.name";
  // let url = `forwarding_protocols?order_by=${order_by}`;
  // if (filters.person_name) {
  //   url += `&person_name=${filters.person_name}`;
  // }
  // if (filters.facility_name) {
  //   url += `&facility_name=${filters.facility_name}`;
  // }
  // if (filters.accompaniment_type) {
  //   url += `&accompaniment_type_name=${filters.accompaniment_type}`;
  // }
  const api = getAxios(baseURL["sigim_api"]);
  let url = `forwarding_protocols`;
  return api.get(url, { params: filters });
}

export async function getForwardingProtocolId(_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`forwarding_protocols/${_id}`);
}

export async function createForwardingProtocol(forwarding_protocol) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.post("/forwarding_protocols", forwarding_protocol);
}

export async function destroyForwardingProtocol(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`forwarding_protocols/${id}`);
}

export async function updateForwardingProtocol(id, forwarding_protocol) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`forwarding_protocols/${id}`, forwarding_protocol);
}
