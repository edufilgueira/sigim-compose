json.paginate generate_pagination(@incident_reports) if display_pagination?
json.total @incident_reports.total_count if display_pagination?

json.incident_reports @incident_reports do |incident_report|
  json.id incident_report.id
  json.number incident_report.number
  json.crime_type do
    json.name incident_report&.crime_type&.name
  end
  json.violence_type do
    json.name incident_report&.violence_type&.name
  end
  json.violence_motivation do
    json.name incident_report&.violence_motivation&.name
  end
  json.victim do 
    json.name incident_report&.victim&.name
  end
  json.aggressor do 
    json.name incident_report&.aggressor&.name
  end
  json.protective_measure_count incident_report.protective_measures.count
  json.source_system_name incident_report&.source_system&.name
end
