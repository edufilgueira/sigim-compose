json.denunciation do
  json.source_system @denunciation.source_system
  json.origin_id  @denunciation.origin_id
  json.id @denunciation.id
  json.crime_type @denunciation.crime_type
  json.violence_type @denunciation.violence_type
  json.violence_motivation @denunciation.violence_motivation
  json.victim @denunciation.victim
  json.aggressor @denunciation.aggressor
  json.number @denunciation.number
  json.description @denunciation.description
  json.observation @denunciation.observation
  json.opening_date @denunciation.opening_date
  json.closing_date @denunciation.closing_date
  json.justified @denunciation.justified
  json.aggressor_have_access_firearm @denunciation.aggressor_have_access_firearm
  json.occurrence_place @denunciation.occurrence_place
  json.occurrence_neighborhood @denunciation.occurrence_neighborhood
  json.occurrence_city @denunciation.occurrence_neighborhood.city
  json.occurrence_state @denunciation.occurrence_neighborhood.city.state
  json.occurrence_street_name @denunciation.occurrence_street_name
  json.occurrence_street_number @denunciation.occurrence_street_number
  json.occurrence_address_complement @denunciation.occurrence_address_complement
  json.occurrence_cep @denunciation.occurrence_cep
  json.serviced_by_gavv @denunciation.serviced_by_gavv
  json.intends_criminally_represent @denunciation.intends_criminally_represent
  json.denunciation_aggressor_dependencies @denunciation.denunciation_aggressor_dependencies
  
  @denunciation_aggressor_dependencies = @denunciation.denunciation_aggressor_dependencies
  json.dependency_types @denunciation_aggressor_dependencies do |dependency_type|
    json.id dependency_type.dependency_type.id
    json.name dependency_type.dependency_type.name
  end
end