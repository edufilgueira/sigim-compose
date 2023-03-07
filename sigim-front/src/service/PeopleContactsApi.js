import { getAxios, baseURL } from "./Api";

export async function getPeopleContacts() {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get("/people_contacts");
}

export async function getPeopleContact(id) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get(`/people_contacts/${id}`);
}

export async function getPeopleContactByPerson(id) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.get(`/people_contacts/people_contact_by_person/${id}`);
}

export async function createPeopleContact(contact) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.post("people_contacts", contact);
}

export async function createPeopleContactMany(contact) {
  const api = getAxios(baseURL["sigim_api"]);

  return api.post("people_contacts?many=true", contact);
}

export async function deletePeopleContact(id) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.delete(`people_contacts/${id}`);
}

export async function updatePeopleContact(id, contact) {
  const api = getAxios(baseURL["sigim_api"]);
  return api.put(`people_contacts/${id}`, contact);
}
