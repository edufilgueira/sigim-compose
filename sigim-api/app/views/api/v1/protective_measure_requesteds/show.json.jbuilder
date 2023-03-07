json.protective_measure_requested do
    json.id @protective_measure_requested.id
    json.protective_measure @protective_measure_requested.protective_measure
    json.protective_measure_type @protective_measure_requested.protective_measure_type
    json.requested @protective_measure_requested.requested
    json.incident_report @protective_measure_requested.protective_measure.incident_report
    json.victim @protective_measure_requested.protective_measure.incident_report.victim
    json.aggressor @protective_measure_requested.protective_measure.incident_report.aggressor
end