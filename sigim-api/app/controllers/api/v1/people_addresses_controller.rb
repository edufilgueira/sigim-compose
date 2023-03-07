class Api::V1::PeopleAddressesController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :person_id,
    :neighborhood_id,
    :street_name,
    :street_number,
    :address_complement,
    :cep,
    :observation
  ]

  FILTERED_COLUMNS = [
    :person_id,
    :neighborhood_id
  ]

  def people_address_by_person
    if current_api_user.can?(:people_address_by_person)
      @people_addresses = Person.find(params[:person_id]).people_addresses
      render_action("index")
      
      return
    end
    denied_access
  end
end
