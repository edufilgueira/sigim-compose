json.facility do
  json.id @facility.id
  json.community @facility.community
  json.sectorial @facility.sectorial
  json.neighborhood @facility.neighborhood
  json.city @facility.neighborhood.city
  json.state @facility.neighborhood.city.state
  json.facility_type @facility.facility_type
  json.name @facility.name
  json.street_name @facility.street_name
  json.street_number @facility.street_number
  json.address_complement @facility.address_complement
  json.cep @facility.cep
  json.telephone_01 @facility.telephone_01
  json.telephone_02 @facility.telephone_02
  json.whatsapp @facility.whatsapp
  json.email @facility.email
  json.business_hours @facility.business_hours
  json.accompaniment_type_facilities @facility.accompaniment_type_facilities

  @accompaniment_type_facilities = @facility.accompaniment_type_facilities
  json.accompaniment_types @accompaniment_type_facilities do |accompaniment_type|
    json.id accompaniment_type.accompaniment_type.id
    json.name accompaniment_type.accompaniment_type.name
  end
end