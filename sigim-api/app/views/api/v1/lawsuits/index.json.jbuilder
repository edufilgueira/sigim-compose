json.paginate generate_pagination(@lawsuits) if display_pagination?
json.total @lawsuits.total_count if display_pagination?

json.lawsuits @lawsuits do |lawsuit|
  json.id lawsuit.id
  json.crime_type lawsuit.crime_type
  json.violence_type lawsuit.violence_type
  json.violence_motivation lawsuit.violence_motivation
  json.victim lawsuit.victim
  json.number lawsuit.number
  json.aggressor lawsuit.aggressor
  json.opening_date lawsuit.opening_date
  json.observation lawsuit.observation
  json.source_system_name lawsuit&.source_system&.name
end
