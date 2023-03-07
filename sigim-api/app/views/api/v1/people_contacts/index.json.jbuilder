json.people_contacts @people_contacts do |people_contact|
  json.id people_contact.id
  json.person people_contact.person
  json.contact_type people_contact.contact_type
  json.contact people_contact.contact
  json.observation people_contact.observation
end