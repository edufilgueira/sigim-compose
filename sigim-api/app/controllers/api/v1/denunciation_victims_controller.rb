class Api::V1::DenunciationVictimsController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :denunciation_id,
    :person_id
  ]
end
