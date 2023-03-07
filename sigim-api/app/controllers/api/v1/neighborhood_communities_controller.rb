class Api::V1::NeighborhoodCommunitiesController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :neighborhood_id,
    :community_id
  ]

  FILTERED_COLUMNS = [
    :neighborhood_id,
    :community_id
  ]

end
