json.protective_measure do
  json.id @protective_measure.id
  json.incident_report @protective_measure.incident_report
  json.number @protective_measure.number
  json.description @protective_measure.description
  json.observation @protective_measure.observation
  json.petitioner @protective_measure.petitioner
  json.police_authority @protective_measure.police_authority
  json.authorization_date @protective_measure.authorization_date
  json.source_system @protective_measure.source_system
end