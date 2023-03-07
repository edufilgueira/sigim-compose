json.paginate generate_pagination(@accompaniment_type_facilities) if display_pagination?
json.total @accompaniment_type_facilities.total_count if display_pagination?

json.accompaniment_type_facilities @accompaniment_type_facilities do |accompaniment_type_facility|
  json.id accompaniment_type_facility.id
  json.facility do 
    json.id accompaniment_type_facility.facility.id
    json.name accompaniment_type_facility.facility.name
    json.neighborhood accompaniment_type_facility.facility.neighborhood
    json.city accompaniment_type_facility.facility.neighborhood.city
    json.state accompaniment_type_facility.facility.neighborhood.city.state
  end
  json.accompaniment_type do 
    json.id accompaniment_type_facility.accompaniment_type.id
    json.name accompaniment_type_facility.accompaniment_type.name
  end
end
  