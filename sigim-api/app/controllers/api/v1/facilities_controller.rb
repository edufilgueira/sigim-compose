class Api::V1::FacilitiesController < Api::V1::ApiController
  before_action :authenticate_api_user!
  
  PERMITTED_PARAMS = [
    :community_id,
    :sectorial_id,
    :neighborhood_id,
    :facility_type_id,
    :name,
    :street_name,
    :street_number,
    :address_complement,
    :cep,
    :telephone_01,
    :telephone_02,
    :whatsapp,
    :email,
    :business_hours
  ]

  ASSOCIATIONS = [
    :facility_type
  ]

  FILTERED_COLUMNS = [
    :community_id,
    :sectorial_id,
    :neighborhood_id,
    :facility_type_id
  ]

  FILTERED_EXPRESSION = [
    name: "LOWER(facilities.name) LIKE LOWER('%?%')",
    facility_type_name: "LOWER(facility_types.name) LIKE LOWER('%?%')"
  ]

end
