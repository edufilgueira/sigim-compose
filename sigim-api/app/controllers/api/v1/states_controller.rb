class Api::V1::StatesController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :name,
    :contry
  ]

  FILTERED_EXPRESSION = [
    name: "LOWER(states.name) LIKE LOWER('%?%')",
  ]

end
