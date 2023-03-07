class Api::V1::LawsuitsController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :crime_type_id,
    :violence_type_id,
    :violence_motivation_id,
    :victim_id,
    :aggressor_id,
    :number,
    :observation,
    :source_system_id,
    :opening_date
  ]

  ASSOCIATIONS = [
    "INNER JOIN people victim ON lawsuits.victim_id = victim.id",
    "INNER JOIN people aggressor ON lawsuits.aggressor_id = aggressor.id"
  ]

  FILTERED_COLUMNS = [
    :crime_type_id,
    :violence_type_id,
    :violence_motivation_id,
    :victim_id,
    :aggressor_id,
    :source_system_id
  ]

  FILTERED_EXPRESSION = [
    number: "LOWER(lawsuits.number) LIKE LOWER('%?%')",
    victim_name: "LOWER(victim.name) LIKE LOWER('%?%')",
    aggressor_name: "LOWER(aggressor.name) LIKE LOWER('%?%')"
  ]

end
