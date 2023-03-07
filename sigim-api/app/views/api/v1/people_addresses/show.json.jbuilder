json.people_address do
  json.id @people_address.id
  json.person @people_address.person
  json.neighborhood @people_address.neighborhood
  json.city @people_address.neighborhood.city
  json.state @people_address.neighborhood.city.state
  json.street_name @people_address.street_name
  json.street_number @people_address.street_number
  json.address_complement @people_address.address_complement
  json.cep @people_address.cep
  json.observation @people_address.observation
end