json.user @users do |user|
  json.id user.id
  json.name user.name
  json.nickname user.nickname
  json.image user.image
  json.cpf user.cpf
  json.email user.email
  json.user_type user.user_type
  json.language user.language
  json.active user.active
  json.provider user.provider
  json.phone_number user.phone_number
  if !user.ability_profile.nil?
    json.ability_profile do
      json.id user&.ability_profile&.id
      json.name user&.ability_profile&.name
    end
  else
    json.ability_profile []
  end
end