class Api::V1::CommunitiesController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :name,
    :city_id
  ]

  FILTERED_COLUMNS = [
    :city_id
  ]

  FILTERED_EXPRESSION = [
    name: "LOWER(communities.name) LIKE LOWER('%?%')",
  ]

end
