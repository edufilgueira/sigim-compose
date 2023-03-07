import { getAxios, baseURL } from "./Api";

export async function getPersonById(_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`people/${_id}`);
}

export async function getPeople(filters) {
  let query = `?limit=50&order_by=name`;
  const api = getAxios(baseURL["sigim_api"]);

  let url = `/people`;

  if (filters.name) {
    query += `&name=${filters.name}`;
  }
  if (filters.gender_identity_id) {
    query += `&gender_identity_id=${filters.gender_identity_id}`;
  }
  if (filters.risk_level_id) {
    query += `&risk_level_id=${filters.risk_level_id}`;
  }

  return api.get(url + query);
}

export async function getPeopleAll() {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `/people`;

  return api.get(url);
}

export async function createPerson(person) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.post("/people", { person: person });
}

export async function deletePerson(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`people/${id}`);
}

export async function updatePerson(person) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`people/${person.id}`, person);
}
