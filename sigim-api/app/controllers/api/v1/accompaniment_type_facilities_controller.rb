class Api::V1::AccompanimentTypeFacilitiesController < Api::V1::ApiController
  before_action :authenticate_api_user!

  def accompaniment_type_facility_by_type
    if current_api_user.can?(:accompaniment_type_facility_by_type)
      @accompaniment_type_facilities = AccompanimentType.find(params[:accompaniment_type_id]).accompaniment_type_facilities
      render_action("index")
      
      return
    end
    denied_access
  end

  PERMITTED_PARAMS = [
    :facility_id,
    :accompaniment_type_id
  ]

  ASSOCIATIONS = [
    :facility,
    :accompaniment_type
  ]

  FILTERED_COLUMNS = [
    :facility_id,
    :accompaniment_type_id
  ]

  FILTERED_EXPRESSION = [
    facility_name: "LOWER(facilities.name) LIKE LOWER('%?%')",
    accompaniment_type_name: "LOWER(accompaniment_types.name) LIKE LOWER('%?%')"
  ]

end
