class Api::V1::PeopleContactsController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :person_id,
    :contact_type_id,
    :contact,
    :observation
  ]

  FILTERED_COLUMNS = [
    :person_id,
    :contact_type_id
  ]

  def people_contact_by_person
    if current_api_user.can?(:people_contact_by_person)
      @people_contacts = Person.find(params[:person_id]).people_contacts
      render_action("index")
      
      return
    end
    denied_access
  end
end
