json.paginate generate_pagination(@protective_measure_requesteds) if display_pagination?
json.total @protective_measure_requesteds.total_count if display_pagination?

json.protective_measure_requesteds @protective_measure_requesteds do |protective_measure_requested|
    json.id protective_measure_requested.id
    json.protective_measure do 
        json.number protective_measure_requested.protective_measure.number
    end
    json.protective_measure_type do 
        json.name protective_measure_requested.protective_measure_type.name
    end
    json.requested protective_measure_requested.requested
    json.incident_report do 
        json.number protective_measure_requested.protective_measure.incident_report.number
    end
    json.victim do
        json.name protective_measure_requested.protective_measure.incident_report.victim.name
    end
    json.aggressor do 
        json.name protective_measure_requested.protective_measure.incident_report.aggressor.name
    end
end