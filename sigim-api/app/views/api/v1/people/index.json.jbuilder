json.paginate generate_pagination(@people) if display_pagination?
json.total @people.total_count if display_pagination?

json.people @people do |person|
  json.id person.id
  json.name person.name
  json.social_name person.social_name
  json.place_of_birth person.place_of_birth
  json.gender_identity person.gender_identity
  json.cpf person.cpf
  json.rg person.rg
  json.voter_registration person.voter_registration
  json.work_card person.work_card
  json.nis person.nis
  json.birth_date person.birth_date
  json.risk_level person.risk_level
  json.source_system_name person.source_system&.name
end
