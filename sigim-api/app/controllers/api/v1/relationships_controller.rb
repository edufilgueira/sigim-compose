class Api::V1::RelationshipsController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = [
    :person_id,
    :relationship_degree_id,
    :relationship_id,
    :responsible,
    :observation
  ]

  FILTERED_COLUMNS = [
    :person_id,
    :relationship_degree_id,
    :relationship_id
  ]

  def relationship_by_person
    if current_api_user.can?(:relationship_by_person)
      @relationships = Relationship.relationship_by_person(params[:person_id])
      render_action("index")
      
      return
    end
    denied_access
  end

end
