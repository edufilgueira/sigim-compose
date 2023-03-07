class Api::V1::HandicapPeopleController < Api::V1::ApiController
    before_action :authenticate_api_user!
  
    PERMITTED_PARAMS = [
        :person_id,
        :handicap_type_id
      ]
    
      FILTERED_COLUMNS = [
        :person_id,
        :handicap_type_id
      ]
    
end