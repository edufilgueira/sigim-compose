class Api::V1::ProtectiveMeasureRequestedsController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :protective_measure_id,
    :protective_measure_type_id,
    :requested
  ]

  ASSOCIATIONS = [
    protective_measure: :incident_report
  ]

  FILTERED_COLUMNS = [
    :protective_measure_id,
    :protective_measure_type_id
  ]

  FILTERED_EXPRESSION = [
    protective_measure_number: "LOWER(protective_measures.number) LIKE LOWER('%?%')",
    incident_report_number: "LOWER(incident_reports.number) LIKE LOWER('%?%')"
  ]
end
