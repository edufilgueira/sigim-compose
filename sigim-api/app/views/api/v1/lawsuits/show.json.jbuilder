json.lawsuit do
  json.id @lawsuit.id
  json.crime_type @lawsuit.crime_type
  json.violence_type @lawsuit.violence_type
  json.violence_motivation @lawsuit.violence_motivation
  json.victim @lawsuit.victim
  json.number @lawsuit.number
  json.aggressor @lawsuit.aggressor
  json.opening_date @lawsuit.opening_date
  json.observation @lawsuit.observation
  json.source_system @lawsuit.source_system
end