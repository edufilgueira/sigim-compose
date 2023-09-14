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
    'LEFT JOIN denunciation_victims ON denunciation_victims.denunciation_id = denunciations.id',
    'INNER JOIN people victim ON victim.id = denunciation_victims.person_id',
    'LEFT JOIN denunciation_agressors aggressor ON aggressor.denunciation_id = denunciations.id',
    'LEFT JOIN denunciation_crime_types ON denunciation_crime_types.denunciation_id = denunciations.id',
    'INNER JOIN crime_types crime_types ON crime_types.id = denunciation_crime_types.crime_type_id',
  ]

  FILTERED_COLUMNS = %i[
    crime_type_id
    violence_type_id
    violence_motivation_id
    occurrence_neighborhood_id
    source_system_id
  ]

  FILTERED_EXPRESSION = [
    number: "LOWER(denunciations.number) LIKE LOWER('%?%')",
    victim_name: "LOWER(victim.name) LIKE LOWER('%?%')",
    aggressor_name: "LOWER(aggressor.name) LIKE LOWER('%?%')",
    crime_type_name: "LOWER(crime_types.name) LIKE LOWER('%?%')"
  ]


  def index
    if current_api_user.can?(ability_symbol('index'))
      instance_variable_set("@#{resources_name}", resources.distinct)
      render_action("index")
      
      return
    end
    denied_access
  end
  
end
