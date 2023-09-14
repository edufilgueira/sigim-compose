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
  json.occurrence_neighborhood @denunciation&.neighborhood
  json.occurrence_city @denunciation&.neighborhood&.city
  json.occurrence_state @denunciation&.neighborhood&.city&.state
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

  @denunciation_victims = @denunciation.denunciation_victims
  json.denunciation_victims @denunciation_victims do |denunciation_victim|
    json.id_denunciation_victim denunciation_victim.id
    json.id denunciation_victim.person.id
    json.name denunciation_victim.person.name
    json.cpf denunciation_victim.person.cpf
  end

  @denunciation_aggressors = @denunciation.denunciation_agressors
  json.denunciation_aggressors @denunciation_aggressors do |denunciation_aggressor|
    json.id denunciation_aggressor.id
    json.name denunciation_aggressor.name
    json.fonetical denunciation_aggressor.fonetical
    json.nickname denunciation_aggressor.nickname
    json.rg denunciation_aggressor.rg
    json.date_of_birth denunciation_aggressor.date_of_birth
    json.mothers_name denunciation_aggressor.mothers_name
    json.naturalness denunciation_aggressor.naturalness
    json.address denunciation_aggressor.address
    json.district denunciation_aggressor.district
    json.city denunciation_aggressor.city
    json.gender denunciation_aggressor.gender
    json.sexual_orientation denunciation_aggressor.sexual_orientation
    json.gender_identity denunciation_aggressor.gender_identity
    json.number denunciation_aggressor.number
    json.cep denunciation_aggressor.cep
    json.address_complement denunciation_aggressor.address_complement
    json.neighborhood denunciation_aggressor.neighborhood
  end

  @denunciation_crime_types = @denunciation.denunciation_crime_types
  json.denunciation_crime_types @denunciation_crime_types do |denunciation_crime_type|
    json.id_crime_type denunciation_crime_type.id
    json.id denunciation_crime_type.crime_type.id
    json.name denunciation_crime_type.crime_type.name
  end
end