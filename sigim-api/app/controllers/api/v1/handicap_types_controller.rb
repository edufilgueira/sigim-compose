class Api::V1::HandicapTypesController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :name
  ]
  
end
