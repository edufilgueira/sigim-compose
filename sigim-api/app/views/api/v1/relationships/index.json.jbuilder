json.relationships @relationships do |relationship|
  json.id relationship.id
  json.person relationship.person
  json.relationship_degree relationship.relationship_degree
  json.relationship relationship.relationship
  json.responsible relationship.responsible
  json.observation relationship.observation
end
