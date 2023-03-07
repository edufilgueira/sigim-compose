import { getAxios, baseURL } from "./Api";

export async function getPeopleAddress() {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get("/people_addresses");
}

export async function getPeopleAddressById(id) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get(`/people_addresses/${id}`);
}

export async function getPeopleAddressByPerson(id) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get(`/people_addresses/people_address_by_person/${id}`);
}

export async function createPeopleAddress(address) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.post("people_addresses", address);
}

export async function createPeopleAddressMany(address) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.post("people_addresses?many=true", address);
}

export async function deletePeopleAddress(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`people_addresses/${id}`);
}

export async function updatePeopleAddress(id, address) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`people_addresses/${id}`, address);
}
