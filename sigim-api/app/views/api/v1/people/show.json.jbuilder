json.person do
  json.id @person.id
  json.name @person.name
  json.place_of_birth @person.place_of_birth
  json.place_of_birth_state @person.place_of_birth&.state
  json.gender @person.gender
  json.gender_identity @person.gender_identity
  json.sexual_orientation @person.sexual_orientation
  json.breed @person.breed
  json.skin_color @person.skin_color
  json.ethnicity @person.ethnicity
  json.civil_status @person.civil_status
  json.scholarity @person.scholarity
  json.cpf @person.cpf
  json.rg @person.rg
  json.voter_registration @person.voter_registration
  json.work_card @person.work_card
  json.nis @person.nis
  json.name @person.name
  json.social_name @person.social_name
  json.nickname @person.nickname
  json.birth_date @person.birth_date
  json.average_income @person.average_income
  json.chemical_dependent @person.chemical_dependent
  json.psychological_disorder @person.psychological_disorder
  json.pwd @person.pwd
  json.people_addresses @person.people_addresses
  json.people_contacts @person.people_contacts
  json.relationships @person.relationships
  json.risk_level @person.risk_level
  json.source_system @person.source_system
  json.handicap_people @person.handicap_people
  json.housing_situation @person.housing_situation
  
  @handicap_people = @person.handicap_people
  json.handicap_types @handicap_people do |handicap_type|
    json.id handicap_type.handicap_type.id
    json.name handicap_type.handicap_type.name
  end
end