json.city do
  json.id @city.id
  json.name @city.name
  json.state do
    json.id @city.state.id
    json.name @city.state.name
    json.contry @city.state.contry
  end
end