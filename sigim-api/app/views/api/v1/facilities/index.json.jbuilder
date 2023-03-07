json.paginate generate_pagination(@facilities) if display_pagination?
json.total @facilities.total_count if display_pagination?

json.facilities @facilities do |facility|
  json.id facility.id
  json.name facility.name
  json.facility_type do
    json.name facility.facility_type.name
  end
  json.sectorial do
    json.name facility.sectorial&.name
  end
  json.community do
    json.name facility.community&.name
  end
end
