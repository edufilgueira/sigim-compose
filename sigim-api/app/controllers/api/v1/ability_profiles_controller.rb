class Api::V1::AbilityProfilesController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :name
  ]

  FILTERED_EXPRESSION = [
    name: "LOWER(ability_profiles.name) LIKE LOWER('%?%')"
  ]
end
