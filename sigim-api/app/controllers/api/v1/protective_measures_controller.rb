class Api::V1::ProtectiveMeasuresController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :incident_report_id,
    :number,
    :description,
    :observation,
    :petitioner,
    :police_authority,
    :source_system_id,
    :authorization_date
  ]

  ASSOCIATIONS = [
    :incident_report
  ]

  FILTERED_COLUMNS = [
    :incident_report_id,
    :source_system_id
  ]

  FILTERED_EXPRESSION = [
    number: "LOWER(protective_measures.number) LIKE LOWER('%?%')",
    incident_report_number: "LOWER(incident_reports.number) LIKE LOWER('%?%')"
  ]

end
