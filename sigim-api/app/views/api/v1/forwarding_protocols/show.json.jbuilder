json.forwarding_protocol do
  json.id @forwarding_protocol.id
  json.person @forwarding_protocol.person
  json.facility @forwarding_protocol.facility
  json.accompaniment_type @forwarding_protocol.accompaniment_type
  json.sectorial @forwarding_protocol.facility&.sectorial
  json.observation @forwarding_protocol.observation
  json.forwarding_date @forwarding_protocol.forwarding_date
  json.source_system @forwarding_protocol.source_system
  json.occurrence_neighborhood @forwarding_protocol.facility.neighborhood
  json.occurrence_city @forwarding_protocol.facility.neighborhood.city
  json.occurrence_state @forwarding_protocol.facility.neighborhood.city.state
end