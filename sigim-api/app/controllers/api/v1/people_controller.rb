class Api::V1::PeopleController < Api::V1::ApiController
  before_action :authenticate_api_user!

  PERMITTED_PARAMS = %i[
    place_of_birth_id
    gender_id
    gender_identity_id
    sexual_orientation_id
    breed_id
    skin_color_id
    ethnicity_id
    civil_status_id
    scholarity_id
    cpf
    rg
    voter_registration
    work_card
    name
    social_name
    nickname
    birth_date
    average_income
    chemical_dependent
    psychological_disorder
    pwd
    source_system_id
    risk_level_id
    nis
  ]

  FILTERED_COLUMNS = %i[
    place_of_birth_id
    gender_id
    gender_identity_id
    sexual_orientation_id
    breed_id
    skin_color_id
    ethnicity_id
    civil_status_id
    scholarity_id
    source_system_id
    risk_level_id
  ]

  FILTERED_EXPRESSION = [
    name: "LOWER(people.name) LIKE LOWER('%?%')",
    cpf: "LOWER(people.cpf) LIKE LOWER('%?%')"
  ]

  def list_name
    if current_api_user.can?(ability_symbol('list_name'))
      instance_variable_set("@#{resources_name}", resources)
      render_action('list_name')

      return
    end
    denied_access
  end
end
