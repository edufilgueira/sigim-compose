class Api::V1::IncidentReportsController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :crime_type_id,
    :violence_type_id,
    :violence_motivation_id,
    :victim_id,
    :aggressor_id,
    :number,
    :description,
    :observation,
    :communication_date,
    :communication_time,
    :occurrence_date,
    :occurrence_time,
    :occurrence_neighborhood_id,
    :occurrence_street_name,
    :occurrence_street_number,
    :occurrence_address_complement,
    :occurrence_cep,
    :serviced_by_gavv,
    :have_access_firearm,
    :requests_protective_measure,
    :source_system_id
  ]

  ASSOCIATIONS = [
    "INNER JOIN people victim ON incident_reports.victim_id = victim.id",
    "INNER JOIN people aggressor ON incident_reports.aggressor_id = aggressor.id"
  ]

  FILTERED_COLUMNS = [
    :crime_type_id,
    :violence_type_id,
    :violence_motivation_id,
    :victim_id,
    :aggressor_id,
    :occurrence_neighborhood_id,
    :source_system_id
  ]

  FILTERED_EXPRESSION = [
    number: "LOWER(incident_reports.number) LIKE LOWER('%?%')",
    victim_name: "LOWER(victim.name) LIKE LOWER('%?%')",
    aggressor_name: "LOWER(aggressor.name) LIKE LOWER('%?%')"
  ]
end
