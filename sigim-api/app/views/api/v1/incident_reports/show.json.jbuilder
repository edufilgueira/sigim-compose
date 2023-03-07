json.incident_report do
  json.id @incident_report.id
  json.crime_type @incident_report.crime_type
  json.violence_type @incident_report.violence_type
  json.violence_motivation @incident_report.violence_motivation
  json.victim @incident_report.victim
  json.aggressor @incident_report.aggressor
  json.number @incident_report.number
  json.description @incident_report.description
  json.observation @incident_report.observation
  json.communication_date @incident_report.communication_date
  json.communication_time @incident_report.communication_time
  json.occurrence_date @incident_report.occurrence_date
  json.occurrence_time @incident_report.occurrence_time
  json.occurrence_neighborhood @incident_report.occurrence_neighborhood
  json.occurrence_city @incident_report.occurrence_neighborhood.city
  json.occurrence_state @incident_report.occurrence_neighborhood.city.state
  json.occurrence_street_name @incident_report.occurrence_street_name
  json.occurrence_street_number @incident_report.occurrence_street_number
  json.occurrence_address_complement @incident_report.occurrence_address_complement
  json.occurrence_cep @incident_report.occurrence_cep
  json.serviced_by_gavv @incident_report.serviced_by_gavv
  json.have_access_firearm @incident_report.have_access_firearm
  json.requests_protective_measure @incident_report.requests_protective_measure

  @protective_measure_count = @incident_report.protective_measures.count
  json.protective_measure_count @protective_measure_count
  if @protective_measure_count > 0
    @protective_measures = @incident_report.protective_measures
    json.protective_measures @incident_report.protective_measures do |protective_measure|
      json.id protective_measure.id
      json.incident_report_id protective_measure.incident_report_id
      json.number protective_measure.number
      json.description protective_measure.description
      json.observation protective_measure.observation
      json.petitioner protective_measure.petitioner
      json.police_authority protective_measure.police_authority
      
      @protective_measure_requested_count = protective_measure.protective_measure_requesteds.count
      json.protective_measure_requested_count @protective_measure_requested_count

      if @protective_measure_requested_count > 0
        json.protective_measure_requesteds protective_measure.protective_measure_requesteds do |protective_measure_requested|
          json.id protective_measure_requested.id 
          json.protective_measure_type protective_measure_requested.protective_measure_type
          json.requested protective_measure_requested.requested 
        end
      end
    end
  end

  json.source_system @incident_report.source_system
end