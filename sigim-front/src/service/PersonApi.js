import { getAxios, baseURL } from "./Api";

export async function getPeople() {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get("/people");
}

export async function getPerson(id) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get(`/people/${id}`);
}

export async function createPerson(person) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.post("/auth", person);
}

export async function deletePerson(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`people/${id}`);
}

export async function updatePerson(id, person) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`people/${id}`, { person });
}
