class Api::V1::DenunciationAgressorsController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :denunciation_id,
    :name,
    :nickname,
    :rg,
    :date_of_birth,
    :mothers_name,
    :naturalness,
    :address,
    :district,
    :city,
    :gender,
    :sexual_orientation,
    :gender_identity,
    :number,
    :cep,
    :address_complement,
    :neighborhood
  ]
end
