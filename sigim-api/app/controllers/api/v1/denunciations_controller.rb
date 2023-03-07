class Api::V1::DenunciationsController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :source_system_id,
    :origin_id,
    :crime_type_id,
    :violence_type_id,
    :violence_motivation_id,
    :victim_id,
    :aggressor_id,
    :number,
    :description,
    :observation,
    :opening_date,
    :closing_date,
    :justified,
    :aggressor_have_access_firearm,
    :occurrence_place,
    :occurrence_neighborhood_id,
    :occurrence_street_name,
    :occurrence_street_number,
    :occurrence_address_complement,
    :occurrence_cep,
    :serviced_by_gavv,
    :intends_criminally_represent,
    { aggressor_dependency_types: [] }
  ]

  ASSOCIATIONS = [
    'INNER JOIN people victim ON denunciations.victim_id = victim.id',
    'LEFT JOIN people aggressor ON denunciations.aggressor_id = aggressor.id'
  ]

  FILTERED_COLUMNS = %i[
    crime_type_id
    violence_type_id
    violence_motivation_id
    victim_id
    aggressor_id
    occurrence_neighborhood_id
    source_system_id
  ]

  FILTERED_EXPRESSION = [
    number: "LOWER(denunciations.number) LIKE LOWER('%?%')",
    victim_name: "LOWER(victim.name) LIKE LOWER('%?%')",
    aggressor_name: "LOWER(aggressor.name) LIKE LOWER('%?%')"
  ]
end
