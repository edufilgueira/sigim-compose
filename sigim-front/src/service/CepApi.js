import { getHttp, baseURL } from "./Api";

export async function getAdress(cep) {
  const api = getHttp({}, baseURL["cep_api"]);

  return api.get(`/${cep}/json`);
}
