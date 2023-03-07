class Api::V1::DenunciationAggressorDependenciesController < Api::V1::ApiController
    before_action :authenticate_api_user!
  
    PERMITTED_PARAMS = [
        :denunciation_id,
        :dependency_type_id
      ]
    
      FILTERED_COLUMNS = [
        :denunciation_id,
        :dependency_type_id
      ]
    
end