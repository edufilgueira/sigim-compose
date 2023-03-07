import { getAxios, baseURL } from "./Api";

export async function getMenus(uId) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.post(`/users/${uId}/user_menu`);
}

export async function can(uId, action) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.post(`/users/${uId}/can`, { action_code: action });
}

export async function logOut() {
  const api = getAxios(baseURL["sigim_api_auth"]);
  return api.delete("/sign_out");
}

export async function permits(profileId) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`/ability_permissions/${profileId}`);
}

export async function profiles() {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get("/ability_profiles");
}

export async function getProfile(profileId) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`/ability_profiles/${profileId}`);
}

export async function deleteProfile(profileId) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`/ability_profiles/${profileId}`);
}

export async function createProfile(data) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.post("/ability_profiles", { name: data.value });
}

export async function sendPermits(profileId, data) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`/ability_permissions/${profileId}`, { data });
}
