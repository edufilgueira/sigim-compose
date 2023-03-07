class Api::V1::CitiesController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :name,
    :state_id,
    :city_cod_ibge
  ]

  FILTERED_COLUMNS = [
    :state_id
  ]

  FILTERED_EXPRESSION = [
    name: "LOWER(cities.name) LIKE LOWER('%?%')",
  ]

  def city_by_state
    if current_api_user.can?(:city_by_state)
      @cities = City.city_by_state(params[:state_id])
      render_action("index")

      return
    end
    denied_access
  end

end
