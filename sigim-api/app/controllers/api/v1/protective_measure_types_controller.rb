class Api::V1::ProtectiveMeasureTypesController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :name
  ]
end
