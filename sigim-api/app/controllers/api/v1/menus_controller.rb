class Api::V1::MenusController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :name
  ]

  def index
    render json: Menu.all
  end
end
