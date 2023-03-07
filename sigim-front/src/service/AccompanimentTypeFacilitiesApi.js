import { getAxios, baseURL } from "./Api";

export async function getAccompanimentTypeFacilities(filters) {
  let order_by = "facility.name";
  const api = getAxios(baseURL["sigim_api"]);
  let url = `accompaniment_type_facilities?order_by=${order_by}`;

  if (filters.name_facility) {
    url += `&facility_name=${filters.name_facility}`;
  }
  if (filters.accompaniment_type) {
    url += `&accompaniment_type_name=${filters.accompaniment_type}`;
  }

  return api.get(url);
}

export async function getAccompanimentTypeFacilityById(_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`accompaniment_type_facilities/${_id}`);
}

export async function getAccompanimentTypeFacilityByType(_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`accompaniment_type_facilities/accompaniment_type_facility_by_type/${_id}`);
}

export async function createAccompanimentTypeFacility(accompaniment_type_facility) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.post("/accompaniment_type_facilities", accompaniment_type_facility);
}

export async function destroyAccompanimentTypeFacility(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`accompaniment_type_facilities/${id}`);
}

export async function updateAccompanimentTypeFacility(id, accompaniment_type_facility) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`accompaniment_type_facilities/${id}`, accompaniment_type_facility);
}
