if @user.valid?
  json.message I18n.t("user.updated_success")
  json.partial! "api/v1/users/user", user: @user
else
  json.errors @user.errors do |error|
    json.attribute error.attribute
    json.message error.full_message
    json.type error.type
  end
end
