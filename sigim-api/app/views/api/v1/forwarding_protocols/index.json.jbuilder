json.paginate generate_pagination(@forwarding_protocols) if display_pagination?
json.total @forwarding_protocols.total_count if display_pagination?

json.forwarding_protocols @forwarding_protocols do |forwarding_protocol|
  json.id forwarding_protocol.id
  json.person forwarding_protocol.person
  json.facility forwarding_protocol.facility
  json.accompaniment_type forwarding_protocol.accompaniment_type
  json.sectorial forwarding_protocol.facility&.sectorial
  json.observation forwarding_protocol.observation
  json.forwarding_date forwarding_protocol.forwarding_date
  json.source_system_name forwarding_protocol.source_system&.name
end