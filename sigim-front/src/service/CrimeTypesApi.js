import { getAxios, baseURL } from "./Api";

export async function getCrimeById(_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`crimes/${_id}`);
}

export async function getCrimes() {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `/crimes`;

  return api.get(url);
}

export async function createCrime(crime) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.post("/crimes", { crime: crime });
}

export async function destroyCrime(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`crimes/${id}`);
}

export async function updateCrime(id, crime) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`crimes/${id}`, { crime: crime });
}

export async function getCrimeTypeById(_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`crime_types/${_id}`);
}

export async function getCrimesType() {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `/crime_types`;

  return api.get(url);
}

export async function createCrimeType(crime) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.post("/crime_types", { name: crime });
}

export async function destroyCrimeType(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`crime_types/${id}`);
}

export async function updateCrimeType(id, crime) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`crime_types/${id}`, { crime: crime });
}
