json.paginate generate_pagination(@protective_measures) if display_pagination?
json.total @protective_measures.total_count if display_pagination?

json.protective_measures @protective_measures do |protective_measure|
  json.id protective_measure.id
  json.incident_report do 
    json.id protective_measure&.incident_report&.id
    json.number protective_measure&.incident_report&.number
  end
  json.number protective_measure.number
  json.description protective_measure.description
  json.observation protective_measure.observation
  json.petitioner protective_measure.petitioner
  json.police_authority protective_measure.police_authority
  json.authorization_date protective_measure.authorization_date
  json.source_system_name protective_measure&.source_system&.name
end
