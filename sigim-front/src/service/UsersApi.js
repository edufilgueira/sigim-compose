import { getAxios, baseURL } from "./Api";

export async function getUserById(_id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.get(`users/${_id}`);
}

export async function getUsers(filters) {
  let query = ``;
  const api = getAxios(baseURL["sigim_api"]);
  let url = `/users`;

  if (filters.name_user) {
    query += `&name=${filters.name_user}`;
  }
  if (filters.profile_id) {
    query += `&profile_id=${filters.profile_id}`;
  }

  return api.get(url + "?order_by=name" + query);
}

export async function createUser(user) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.post("/users", { user: user });
}

export async function destroyUser(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`users/${id}`);
}

export async function updateUser(id, user) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`users/${id}`, { user: user });
}
