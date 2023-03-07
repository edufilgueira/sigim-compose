json.paginate generate_pagination(@people) if display_pagination?
json.total @people.total_count if display_pagination?

json.people @people do |person|
  json.id person.id
  json.name person.name
end
