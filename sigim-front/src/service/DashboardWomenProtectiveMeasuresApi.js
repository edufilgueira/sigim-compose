import { getAxios, baseURL } from "./Api";

// INCIDENT REPORT - BOLETIM DE OCORRÊNCIA

export async function getQtdTotal(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_total`;

  return api.get(url, params);
}

export async function getQtdByGender(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_gender`;

  return api.get(url, params);
}

export async function getQtdByGenderIdentity(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_gender_identity`;

  return api.get(url, params);
}

export async function getQtdByScholarity(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_scholarity`;

  return api.get(url, params);
}

export async function getQtdByCivilStatus(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_civil_status`;

  return api.get(url, params);
}

export async function getQtdByBreed(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_breed`;

  return api.get(url, params);
}

export async function getQtdBySexualOrientation(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_sexual_orientation`;

  return api.get(url, params);
}

export async function getQtdByPwd(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_pwd`;

  return api.get(url, params);
}

export async function getQtdByAge(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_age`;

  return api.get(url, params);
}

export async function getQtdByAverageIncome(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_average_income`;

  return api.get(url, params);
}

export async function getQtdByCrimeType(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_crime_type`;

  return api.get(url, params);
}

export async function getQtdByViolenceType(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_violence_type`;

  return api.get(url, params);
}

export async function getQtdByViolenceMotivation(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_violence_motivation`;

  return api.get(url, params);
}
//---
export async function getQtdBySourceSystem(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_source_system`;

  return api.get(url, params);
}
//---
export async function getQtdByOccurrenceCity(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_occurrence_city`;

  return api.get(url, params);
}

export async function getQtdByRiskLevel(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_by_risk_level`;

  return api.get(url, params);
}

export async function getQtdByAuthorizationMonth(params) {
  const api = getAxios(baseURL["sigim_api"]);

  let url = `dashboard_women/prot_measure/qtd_total_by_authorization_month`;

  return api.get(url, params);
}
