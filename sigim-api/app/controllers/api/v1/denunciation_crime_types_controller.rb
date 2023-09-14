class Api::V1::DenunciationCrimeTypesController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :denunciation_id,
    :crime_type_id
  ]
end
