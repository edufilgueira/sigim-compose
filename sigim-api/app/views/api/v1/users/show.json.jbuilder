# json.partial! "api/v1/users/user", user: @user
json.user do
  json.partial! "api/v1/users/user", user: @user
end