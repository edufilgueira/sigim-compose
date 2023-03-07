import { getAxios, baseURL } from "./Api";

export async function getCrimes() {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get("/crimes");
}

export async function getCrime(id) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get(`/crimes/${id}`);
}

export async function createCrime(crime) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.post("/auth", crime);
}

export async function deleteCrime(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`crimes/${id}`);
}

export async function updateCrime(id, crime) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`crimes/${id}`, { crime });
}
