class Api::V1::RelationshipDegreesController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :name
  ]

end
