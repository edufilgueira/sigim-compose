class Api::V1::ForwardingProtocolsController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :person_id,
    :facility_id,
    :accompaniment_type_id,
    :observation,
    :source_system_id,
    :forwarding_date
  ]

  ASSOCIATIONS = [
    :person,
    "LEFT JOIN facilities ON facilities.id = forwarding_protocols.facility_id",
    "LEFT JOIN accompaniment_types ON accompaniment_types.id = forwarding_protocols.accompaniment_type_id"
  ]

  FILTERED_COLUMNS = [
    :person_id,
    :facility_id,
    :accompaniment_type_id,
    :source_system_id
  ]

  FILTERED_EXPRESSION = [
    person_name: "LOWER(people.name) LIKE LOWER('%?%')",
    facility_name: "LOWER(facilities.name) LIKE LOWER('%?%')",
    accompaniment_type_name: "LOWER(accompaniment_types.name) LIKE LOWER('%?%')"
  ]

end
