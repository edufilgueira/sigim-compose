json.paginate generate_pagination(@denunciations) if display_pagination?
json.total @denunciations.total_count if display_pagination?

json.denunciations @denunciations do |denunciation|
  json.id denunciation.id
  json.number denunciation.number
  json.crime_type do
    json.name denunciation&.crime_type&.name
  end
  json.violence_type do
    json.name denunciation&.violence_type&.name
  end
  json.violence_motivation do
    json.name denunciation&.violence_motivation&.name
  end
  json.victim do 
    json.name denunciation&.victim&.name
  end
  json.aggressor do 
    json.name denunciation&.aggressor&.name
  end
  json.source_system_name denunciation&.source_system&.name

  @denunciation_victims = denunciation&.denunciation_victims
  json.denunciation_victims @denunciation_victims do |denunciation_victim|
    json.id_denunciation_victim denunciation_victim&.id
    json.id denunciation_victim&.person.id
    json.name denunciation_victim&.person.name
    json.cpf denunciation_victim&.person.cpf
  end

  @denunciation_aggressors = denunciation&.denunciation_agressors
  json.denunciation_aggressors @denunciation_aggressors do |denunciation_aggressor|
    json.id denunciation_aggressor&.id
    json.name denunciation_aggressor&.name
  end

  @denunciation_crime_types = denunciation&.denunciation_crime_types
  json.denunciation_crime_types @denunciation_crime_types do |denunciation_crime_type|
    json.id_crime_type denunciation_crime_type&.id
    json.id denunciation_crime_type&.crime_type.id
    json.name denunciation_crime_type&.crime_type.name
  end
end
