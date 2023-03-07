import { getAxios, baseURL } from "./Api";

export async function getUsers() {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get("/users");
}

export async function getUser(id) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get(`/users/${id}`);
}

export async function createUser(user) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.post("/auth", user);
}

export async function deleteUSer(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`users/${id}`);
}

export async function updateUser(id, user) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`users/${id}`, { user });
}

export async function resetPassword(id, password, password_confirmation) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.post(`users/${id}/reset_password`, {
    password: password,
    password_confirmation: password_confirmation,
  });
}
