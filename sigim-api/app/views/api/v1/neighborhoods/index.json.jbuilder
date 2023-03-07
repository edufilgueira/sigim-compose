json.neighborhoods @neighborhoods do |neighborhood|
  json.id neighborhood.id
  json.name neighborhood.name
  json.city_id neighborhood.city_id
end
