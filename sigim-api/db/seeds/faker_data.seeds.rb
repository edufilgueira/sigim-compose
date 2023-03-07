require 'faker'
puts 'Dados Faker >>>'

# Pessoas
puts '-- People >>>'
400.times do
  # Pessoas
  pwd = rand(2) == 1
  p = person = Person.find_or_create_by(
    # name: Faker::Name.unique.name,
    name: Faker::Name.feminine_name + ' ' + Faker::Name.last_name,
    # social_name: Faker::Name.first_name,
    # nickname: Faker::Name.first_name,
    cpf: Faker::CPF.pretty,
    rg: Faker::Code.isbn,
    voter_registration: Faker::Code.isbn,
    work_card: Faker::Code.isbn,
    nis: Faker::Code.isbn,
    birth_date: Faker::Date.birthday(min_age: 18, max_age: 55),
    place_of_birth_id: 1,
    gender_id: rand(1..10_000) % 13 == 0 ? 2 : 1,
    gender_identity_id: 1, # rand(1..4),
    sexual_orientation_id: rand(1..5),
    breed_id: rand(1..5),
    skin_color_id: rand(1..5),
    ethnicity_id: rand(1..4),
    civil_status_id: rand(1..7),
    scholarity_id: rand(1..11),
    average_income: rand(1000..5000),
    chemical_dependent: rand(2) == 1,
    psychological_disorder: rand(2) == 1,
    pwd: pwd,
    source_system_id: rand(1..5),
    risk_level_id: rand(1..6),
    housing_situation_id: rand(1..HousingSituation.count)
  )

  if pwd
    number = rand(1..3)
    number.times do
      HandicapPerson.create(
        person_id: p.id,
        handicap_type_id: rand(1..HandicapType.count)
      )
    end
  end


  # Endereços
  puts "-- PeopleAddress >>>"
  number = rand(1..3)
  number.times do
    PeopleAddress.create(
      person_id: person.id,
      neighborhood_id: rand(1..Neighborhood.count),
      street_name: Faker::Address.street_name,
      street_number: Faker::Address.building_number,
      cep: Faker::Address.zip_code
    )
  end
  # puts "--- ----- PeopleAddress::OK"

  # Contato
  puts "-- PeopleContact >>>"
  number = rand(1..3)
  number.times do
    contact = rand(1..3)
    Faker::Config.locale = 'pt-BR'
    value = Faker::PhoneNumber.phone_number if contact == 1
    value = Faker::PhoneNumber.cell_phone if contact == 2
    value = Faker::Internet.email if contact == 3

    PeopleContact.create(
      person_id: person.id,
      contact_type_id: contact,
      contact: value,
      observation: Faker::Lorem.sentence(word_count: rand(4..6))
    )
  end
  # puts "--- ----- PeopleContact::OK"
end

# Facility
puts '-- Facility >>>'
20.times do
  accompaniment_type_id = rand(1..AccompanimentType.count)

  facility_type_id = 1 if accompaniment_type_id == 1
  facility_type_id = 2 if accompaniment_type_id == 2
  facility_type_id = 3 if accompaniment_type_id == 3
  facility_type_id = [3, 4, 5].sample if accompaniment_type_id == 4
  facility_type_id = 6 if accompaniment_type_id == 5
  facility_type_id = [7, 8].sample if accompaniment_type_id == 6

  community_id = rand(1..Community.count)
  sectorial_id = 1 if accompaniment_type_id == 1
  sectorial_id = 2 if accompaniment_type_id == 2
  sectorial_id = 3 if [3, 4].include?(accompaniment_type_id)
  sectorial_id = 4 if accompaniment_type_id == 5
  sectorial_id = 5 if accompaniment_type_id == 6

  fType = FacilityType.find(facility_type_id)

  f = Facility.find_or_create_by(
    name: fType.name + " #{rand(10..1000)}",
    community_id: community_id,
    sectorial_id: sectorial_id,
    neighborhood_id: rand(1..Neighborhood.count),
    facility_type_id: facility_type_id,
    street_name: Faker::Address.street_name,
    street_number: Faker::Address.building_number,
    cep: Faker::Address.zip_code,
    telephone_01: Faker::PhoneNumber.cell_phone,
    telephone_02: Faker::PhoneNumber.cell_phone,
    whatsapp: Faker::PhoneNumber.cell_phone,
    email: Faker::Internet.email,
    business_hours: '8 às 18h'
  )

  AccompanimentTypeFacility.find_or_create_by(
    facility_id: f.id,
    accompaniment_type_id: accompaniment_type_id
  )
end

# # accompaniment_type_facilities
# puts "--- AccompanimentTypeFacility >>>"
# 40.times do
# 	AccompanimentTypeFacility.find_or_create_by(
# 		facility_id: rand(1..Facility.count),
# 		accompaniment_type_id: rand(1..AccompanimentType.count)
# 	)
# end
# puts "----- AccompanimentTypeFacility::OK"

# forwarding_protocols
puts '-- ForwardingProtocol >>>'
200.times do
  offset = rand(AccompanimentTypeFacility.count)
  rand_record = AccompanimentTypeFacility.offset(offset).first
  facility_id = rand_record.facility_id
  accompaniment_type_id = rand_record.accompaniment_type_id
  ForwardingProtocol.find_or_create_by(
    person_id: rand(1..Person.count),
    facility_id: facility_id,
    accompaniment_type_id: accompaniment_type_id,
    observation: Faker::Lorem.sentence(word_count: rand(50..100)),
    source_system_id: rand(1..5),
    forwarding_date: Faker::Date.between(from: 800.days.ago, to: Date.today)
  )
end

# lawsuits
puts '-- Lawsuit >>>'
100.times do
  Lawsuit.find_or_create_by(
    crime_type_id: rand(1..CrimeType.count),
    violence_type_id: rand(1..ViolenceType.count),
    violence_motivation_id: rand(1..ViolenceMotivation.count),
    victim_id: rand(1..Person.count),
    aggressor_id: rand(1..Person.count),
    number: Faker::Number.between(from: 8_000_000, to: 8_999_999),
    observation: Faker::Lorem.sentence(word_count: rand(20..30)),
    source_system_id: rand(1..5),
    opening_date: Faker::Date.between(from: 800.days.ago, to: Date.today)
  )
end

# IncidentReport
puts '-- IncidentReport >>>'
150.times do
  IncidentReport.find_or_create_by(
    victim_id: rand(1..Person.count),
    aggressor_id: rand(1..Person.count),
    crime_type_id: rand(1..CrimeType.count),
    violence_type_id: rand(1..ViolenceType.count),
    violence_motivation_id: rand(1..ViolenceMotivation.count),
    number: Faker::Number.between(from: 1000, to: 99_999),
    description: Faker::Lorem.sentence(word_count: rand(20..30)),
    observation: Faker::Lorem.sentence(word_count: rand(20..30)),
    communication_date: Faker::Date.between(from: 800.days.ago, to: Date.today),
    communication_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
    occurrence_date: Faker::Date.between(from: 800.days.ago, to: Date.today),
    occurrence_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
    occurrence_neighborhood_id: rand(1..Neighborhood.count),
    occurrence_street_name: Faker::Address.street_name,
    occurrence_street_number: Faker::Address.building_number,
    occurrence_cep: Faker::Address.zip_code,
    serviced_by_gavv: rand(2) == 1,
    have_access_firearm: rand(2) == 1,
    requests_protective_measure: rand(2) == 1,
    source_system_id: rand(1..5)
  )
end

# protective_measures
puts '-- ProtectiveMeasure >>>'
75.times do
  ProtectiveMeasure.find_or_create_by(
    incident_report_id: rand(1..IncidentReport.count),
    number: rand(100..1000),
    description: Faker::Lorem.sentence(word_count: rand(20..30)),
    observation: Faker::Lorem.sentence(word_count: rand(20..30)),
    petitioner: Faker::Name.unique.name,
    police_authority: Faker::Name.unique.name,
    source_system_id: rand(1..5),
    authorization_date: Faker::Date.between(from: 800.days.ago, to: Date.today)
  )
end

# protective_easure_requesteds
puts '-- ProtectiveMeasureRequested >>>'
120.times do
  ProtectiveMeasureRequested.find_or_create_by(
    protective_measure_id: rand(1..ProtectiveMeasure.count),
    protective_measure_type_id: rand(1..ProtectiveMeasureType.count),
    requested: true # rand(2) == 1 ? true : false
  )
end

# denunciations
puts '-- Denunciation >>>'
240.times do
  d = Denunciation.find_or_create_by(
    source_system_id: rand(1..5),
    origin_id: rand(1..3000),
    crime_type_id: rand(1..CrimeType.count),
    violence_type_id: rand(1..ViolenceType.count),
    violence_motivation_id: rand(1..ViolenceMotivation.count),
    victim_id: rand(1..Person.count),
    aggressor_id: rand(1..Person.count),
    number: Faker::Number.between(from: 1000, to: 99_999),
    description: Faker::Lorem.sentence(word_count: rand(20..30)),
    observation: Faker::Lorem.sentence(word_count: rand(20..30)),
    opening_date: Faker::Date.between(from: 800.days.ago, to: Date.today),
    closing_date: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
    justified: rand(2) == 1,
    aggressor_have_access_firearm: rand(2) == 1,
    occurrence_place: ['CASA', 'RUA', 'TRABALHO'].sample,
    occurrence_neighborhood_id: rand(1..Neighborhood.count),
    occurrence_street_name: Faker::Address.street_name,
    occurrence_street_number: Faker::Address.building_number,
    occurrence_cep: Faker::Address.zip_code,
    serviced_by_gavv: rand(2) == 1,
    intends_criminally_represent: rand(2) == 1
  )
  DenunciationAggressorDependency.find_or_create_by(
    denunciation_id: d.id,
    dependency_type_id: rand(1..DependencyType.count)
  )
end