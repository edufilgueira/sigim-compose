import { getAxios, baseURL } from "./Api";

export async function getFacilities(filters) {
  let order_by = "name";
  const api = getAxios(baseURL["sigim_api"]);
  let url = `facilities?order_by=${order_by}`;

  if (filters.name_facility) {
    // console.log("filters.name_facility", filters.name_facility);
    url += `&name=${filters.name_facility}`;
  }
  if (filters.type_facility) {
    url += `&facility_type_name=${filters.type_facility}`;
  }
  return api.get(url);
}

export async function getFacilitieById(_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`facilities/${_id}`);
}

export async function createFacilitie(facilitie) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.post("/facilities", facilitie);
}

export async function destroyFacilitie(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`facilities/${id}`);
}

export async function updateFacilitie(id, facilitie) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`facilities/${id}`, facilitie);
}
