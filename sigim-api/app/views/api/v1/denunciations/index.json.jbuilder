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
end
