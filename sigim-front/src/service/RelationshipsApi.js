import { getAxios, baseURL } from "./Api";

export async function getRelationships() {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get("/relationships");
}

export async function getRelationshipByPersonId(id) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get(`/relationships/relationship_by_person/${id}`);
}

export async function getRelationship(id) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get(`/relationships/${id}`);
}

export async function createRelationship(relate) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.post("relationships", relate);
}

export async function createRelationshipMany(relate) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.post("relationships?many=true", relate);
}

export async function deleteRelationship(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`relationships/${id}`);
}

export async function updateRelationship(id, relate) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`relationships/${id}`, relate);
}
