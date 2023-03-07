class Api::V1::NeighborhoodsController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :city_id,
    :name
  ]

  FILTERED_COLUMNS = [
    :city_id
  ]

  FILTERED_EXPRESSION = [
    name: "LOWER(neighborhoods.name) LIKE LOWER('%?%')",
  ]

  def neighborhood_by_city
    if current_api_user.can?(:neighborhood_by_city)
      @neighborhoods = Neighborhood.neighborhood_by_city(params[:city_id])
      render_action("index")
      
      return
    end
    denied_access
  end

end
