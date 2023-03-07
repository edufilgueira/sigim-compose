class Api::V1::DashboardWomenIncRepsController < ApplicationController
  before_action :authenticate_api_user!

  # --- BOLETINS DE OCORRÊNCIA ---

  # QUANTIDADE TOTAL
  def qtd_total
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(:victim)

      if params[:place_of_birth_id].present? && params[:place_of_birth_id].to_s.strip != ""
        @result = @result.where("people.place_of_birth_id = ?", params[:place_of_birth_id])
      end

      if params[:gender_id].present? && params[:gender_id].to_s.strip != ""
        @result = @result.where("people.gender_id = ?", params[:gender_id])
      end

      if params[:gender_identity_id].present? && params[:gender_identity_id].to_s.strip != ""
        @result = @result.where("people.gender_identity_id = ?", params[:gender_identity_id])
      end

      if params[:sexual_orientation_id].present? && params[:sexual_orientation_id].to_s.strip != ""
        @result = @result.where("people.sexual_orientation_id = ?", params[:sexual_orientation_id])
      end

      if params[:breed_id].present? && params[:breed_id].to_s.strip != ""
        @result = @result.where("people.breed_id = ?", params[:breed_id])
      end

      if params[:skin_color_id].present? && params[:skin_color_id].to_s.strip != ""
        @result = @result.where("people.skin_color_id = ?", params[:skin_color_id])
      end

      if params[:ethnicity_id].present? && params[:ethnicity_id].to_s.strip != ""
        @result = @result.where("people.ethnicity_id = ?", params[:ethnicity_id])
      end

      if params[:civil_status_id].present? && params[:civil_status_id].to_s.strip != ""
        @result = @result.where("people.civil_status_id = ?", params[:civil_status_id])
      end

      if params[:scholarity_id].present? && params[:scholarity_id].to_s.strip != ""
        @result = @result.where("people.scholarity_id = ?", params[:scholarity_id])
      end

      if params[:average_income].present? && params[:average_income].to_s.strip != ""
        @result = @result.where("people.average_income = ?", params[:average_income])
      end

      if params[:average_income_start].present? && params[:average_income_start].to_s.strip != ""
        @result = @result.where("people.average_income >= ?", params[:average_income_start])
      end

      if params[:average_income_end].present? && params[:average_income_end].to_s.strip != ""
        @result = @result.where("people.average_income <= ?", params[:average_income_end])
      end

      if params[:chemical_dependent].present? && params[:chemical_dependent].to_s.strip != ""
        @result = @result.where("people.chemical_dependent = ?", params[:chemical_dependent])
      end

      if params[:psychological_disorder].present? && params[:psychological_disorder].to_s.strip != ""
        @result = @result.where("people.psychological_disorder = ?", params[:psychological_disorder])
      end

      if params[:pwd].present? && params[:pwd].to_s.strip != ""
        @result = @result.where("people.pwd = ?", params[:pwd])
      end

      if params[:risk_level_id].present? && params[:risk_level_id].to_s.strip != ""
        @result = @result.where("people.risk_level_id = ?", params[:risk_level_id])
      end

      if params[:source_system_id].present? && params[:source_system_id].to_s.strip != ""
        @result = @result.where("incident_reports.source_system_id = ?", params[:source_system_id])
      end

      @result = @result.count.as_json(:except => [:id])
      render json: { total: @result }
      return
    end
    denied_access
  end

  # QUANTIDADE POR GÊNERO
  def qtd_by_gender
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(victim: :gender)
        .select("
          people.gender_id, 
          genders.name, 
          COUNT(people.id) AS total
        ")
        .group("
          people.gender_id, 
          genders.id
        ")

      if params[:gender_id].present? && params[:gender_id].to_s.strip != ""
        @result = @result.where("genders.id = ?", params[:gender_id])
      end

      if params[:order_by].present? && params[:order_by].to_s.strip != ""
        @result = @result.order(params[:order_by])
      end

      @result = @result.as_json(:except => [:id])
      render json: @result
      return
    end
    denied_access
  end

  # QUANTIDADE POR IDENTIDADE DE GÊNERO
  def qtd_by_gender_identity
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(victim: :gender_identity)
        .select("
          people.gender_identity_id, 
          gender_identities.name, 
          COUNT(people.id) AS total
        ")
        .group("
          people.gender_identity_id, 
          gender_identities.id
        ")

      if params[:gender_identity_id].present? && params[:gender_identity_id].to_s.strip != ""
        @result = @result.where("gender_identities.id = ?", params[:gender_identity_id])
      end

      if params[:order_by].present? && params[:order_by].to_s.strip != ""
        @result = @result.order(params[:order_by])
      end

      @result = @result.as_json(:except => [:id])
      render json: @result
      return
    end
    denied_access
  end

  # QUANTIDADE POR ESCOLARIDADE
  def qtd_by_scholarity
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(victim: :scholarity)
        .select("
          people.scholarity_id, 
          scholarities.name, 
          COUNT(people.id) AS total
        ")
        .group("
          people.scholarity_id, 
          scholarities.id
        ")

      if params[:scholarity_id].present? && params[:scholarity_id].to_s.strip != ""
        @result = @result.where("scholarities.id = ?", params[:scholarity_id])
      end

      if params[:order_by].present? && params[:order_by].to_s.strip != ""
        @result = @result.order(params[:order_by])
      end

      @result = @result.as_json(:except => [:id])
      render json: @result
      return
    end
    denied_access
  end

  # QUANTIDADE POR ESTADO CIVIL
  def qtd_by_civil_status
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(victim: :civil_status)
        .select("
          people.civil_status_id, 
          civil_statuses.name, 
          COUNT(people.id) AS total
        ")
        .group("
          people.civil_status_id, 
          civil_statuses.id
        ")

      if params[:civil_status_id].present? && params[:civil_status_id].to_s.strip != ""
        @result = @result.where("civil_statuses.id = ?", params[:civil_status_id])
      end

      if params[:order_by].present? && params[:order_by].to_s.strip != ""
        @result = @result.order(params[:order_by])
      end

      @result = @result.as_json(:except => [:id])
      render json: @result
      return
    end
    denied_access
  end

  # QUANTIDADE POR RAÇA
  def qtd_by_breed
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(victim: :breed)
        .select("
          people.breed_id, 
          breeds.name, 
          COUNT(people.id) AS total
        ")
        .group("
          people.breed_id, 
          breeds.id
        ")

      if params[:breed_id].present? && params[:breed_id].to_s.strip != ""
        @result = @result.where("breeds.id = ?", params[:breed_id])
      end

      if params[:order_by].present? && params[:order_by].to_s.strip != ""
        @result = @result.order(params[:order_by])
      end

      @result = @result.as_json(:except => [:id])
      render json: @result
      return
    end
    denied_access
  end

  # QUANTIDADE POR ORIENTAÇÃO SEXUAL
  def qtd_by_sexual_orientation
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(victim: :sexual_orientation)
        .select("
          people.sexual_orientation_id, 
          sexual_orientations.name, 
          COUNT(people.id) AS total
        ")
        .group("
          people.sexual_orientation_id, 
          sexual_orientations.id
        ")

      if params[:sexual_orientation_id].present? && params[:sexual_orientation_id].to_s.strip != ""
        @result = @result.where("sexual_orientations.id = ?", params[:sexual_orientation_id])
      end

      if params[:order_by].present? && params[:order_by].to_s.strip != ""
        @result = @result.order(params[:order_by])
      end

      @result = @result.as_json(:except => [:id])
      render json: @result
      return
    end
    denied_access
  end

  # QUANTIDADE POR DEFICIÊNCIA
  def qtd_by_pwd
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(:victim)
        .select("
          people.pwd, 
          COUNT(people.id) AS total
        ")
        .group("
          people.pwd
        ")

      if params[:pwd].present? && params[:pwd].to_s.strip != ""
        @result = @result.where("people.pwd = ?", params[:pwd])
      end

      if params[:order_by].present? && params[:order_by].to_s.strip != ""
        @result = @result.order(params[:order_by])
      end

      @result = @result.as_json(:except => [:id])
      render json: @result
      return
    end
    denied_access
  end

  # QUANTIDADE POR IDADE
  def qtd_by_age
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(:victim)

      if params[:age].present? && params[:age].to_s.strip != ""
        @result = @result.where("EXTRACT (YEAR FROM age(people.birth_date)) = ?", params[:age])
      end

      if params[:age_start].present? && params[:age_start].to_s.strip != ""
        @result = @result.where("EXTRACT (YEAR FROM age(people.birth_date)) >= ?", params[:age_start])
      end

      if params[:age_end].present? && params[:age_end].to_s.strip != ""
        @result = @result.where("EXTRACT (YEAR FROM age(people.birth_date)) <= ?", params[:age_end])
      end

      @result = @result.count.as_json(:except => [:id])
      render json: { total: @result }
      return
    end
    denied_access
  end

  # QUANTIDADE POR RENDA MÉDIA
  def qtd_by_average_income
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(:victim)

      if params[:average_income].present? && params[:average_income].to_s.strip != ""
        @result = @result.where("people.average_income = ?", params[:average_income])
      end

      if params[:average_income_start].present? && params[:average_income_start].to_s.strip != ""
        @result = @result.where("people.average_income >= ?", params[:average_income_start])
      end

      if params[:average_income_end].present? && params[:average_income_end].to_s.strip != ""
        @result = @result.where("people.average_income <= ?", params[:average_income_end])
      end

      @result = @result.count.as_json(:except => [:id])
      render json: { total: @result }
      return
    end
    denied_access
  end

  # QUANTIDADE POR TIPO DE CRIME
  def qtd_by_crime_type
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(:crime_type)
        .select(" 
          crime_types.name, 
          COUNT(incident_reports.id) AS total
        ")
        .group("
          crime_types.name
        ")

      if params[:crime_type_id].present? && params[:crime_type_id].to_s.strip != ""
        @result = @result.where("crime_types.id = ?", params[:crime_type_id])
      end

      if params[:order_by].present? && params[:order_by].to_s.strip != ""
        @result = @result.order(params[:order_by])
      end

      if params[:limit].present? && params[:limit].to_s.strip != ""
        @result = @result.limit(params[:limit])
      end

      @result = @result.as_json(:except => [:id])
      render json: @result
      return
    end
    denied_access
  end

  # QUANTIDADE POR TIPO DE VIOLÊNCIA
  def qtd_by_violence_type
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(:violence_type)
        .select(" 
          violence_types.name, 
          COUNT(incident_reports.id) AS total
        ")
        .group("
          violence_types.name
        ")

      if params[:violence_type_id].present? && params[:violence_type_id].to_s.strip != ""
        @result = @result.where("violence_types.id = ?", params[:violence_type_id])
      end

      if params[:order_by].present? && params[:order_by].to_s.strip != ""
        @result = @result.order(params[:order_by])
      end

      if params[:limit].present? && params[:limit].to_s.strip != ""
        @result = @result.limit(params[:limit])
      end

      @result = @result.as_json(:except => [:id])
      render json: @result
      return
    end
    denied_access
  end

  # QUANTIDADE POR MOTIVAÇÃO DA VIOLÊNCIA
  def qtd_by_violence_motivation
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(:violence_motivation)
        .select(" 
          violence_motivations.name, 
          COUNT(incident_reports.id) AS total
        ")
        .group("
          violence_motivations.name
        ")

      if params[:violence_motivation_id].present? && params[:violence_motivation_id].to_s.strip != ""
        @result = @result.where("violence_motivations.id = ?", params[:violence_motivation_id])
      end

      if params[:order_by].present? && params[:order_by].to_s.strip != ""
        @result = @result.order(params[:order_by])
      end

      if params[:limit].present? && params[:limit].to_s.strip != ""
        @result = @result.limit(params[:limit])
      end

      @result = @result.as_json(:except => [:id])
      render json: @result
      return
    end
    denied_access
  end

  # QUANTIDADE POR SISTEMA DE ORIGEM DOS DADOS
  def qtd_by_source_system
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(:source_system)
        .select(" 
          incident_reports.source_system_id,
          source_systems.name,
          COUNT(incident_reports.id) AS total
        ")
        .group("
          incident_reports.source_system_id,
          source_systems.name
        ")

      if params[:source_system_id].present? && params[:source_system_id].to_s.strip != ""
        @result = @result.where("source_systems.id = ?", params[:source_system_id])
      end

      if params[:order_by].present? && params[:order_by].to_s.strip != ""
        @result = @result.order(params[:order_by])
      end

      if params[:limit].present? && params[:limit].to_s.strip != ""
        @result = @result.limit(params[:limit])
      end

      @result = @result.as_json(:except => [:id])
      render json: @result
      return
    end
    denied_access
  end

  # QUANTIDADE POR CIDADE
  def qtd_by_occurrence_city
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(occurrence_neighborhood: :city)
        .joins("
          INNER JOIN states state ON 
            cities.state_id = state.id
        ")
        .select(" 
          cities.state_id,
          state.initials AS UF,
          neighborhoods.city_id, 
          cities.name, 
          COUNT(incident_reports.id) AS total
        ")
        .group("
          cities.state_id, 
          state.initials,
          neighborhoods.city_id, 
          cities.name
        ")

      if params[:state_id].present? && params[:state_id].to_s.strip != ""
        @result = @result.where("cities.state_id = ?", params[:state_id])
      end

      if params[:city_id].present? && params[:city_id].to_s.strip != ""
        @result = @result.where("cities.id = ?", params[:city_id])
      end

      if params[:order_by].present? && params[:order_by].to_s.strip != ""
        @result = @result.order(params[:order_by])
      end

      if params[:limit].present? && params[:limit].to_s.strip != ""
        @result = @result.limit(params[:limit])
      end

      @result = @result.as_json(:except => [:id])
      render json: @result
      return
    end
    denied_access
  end

  # QUANTIDADE POR NÍVEL DE RISCO
  def qtd_by_risk_level
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(victim: :risk_level)
        .select("
          people.risk_level_id, 
          risk_levels.name, 
          COUNT(people.id) AS total
        ")
        .group("
          people.risk_level_id, 
          risk_levels.id
        ")

      if params[:risk_level_id].present? && params[:risk_level_id].to_s.strip != ""
        @result = @result.where("risk_levels.id = ?", params[:risk_level_id])
      end

      if params[:order_by].present? && params[:order_by].to_s.strip != ""
        @result = @result.order(params[:order_by])
      end

      @result = @result.as_json(:except => [:id])
      render json: @result
      return
    end
    denied_access
  end

  # QUANTIDADE TOTAL - POR MÊS
  def qtd_total_by_communication_month
    if current_api_user.can?(:dashboard_women_inc_rep_index)
      @result = IncidentReport
        .joins(:victim)
        .select("
          EXTRACT (MONTH FROM (incident_reports.communication_date)) AS month, 
          COUNT(people.id) AS total
        ")
        .group("
          month
        ")

      if params[:place_of_birth_id].present? && params[:place_of_birth_id].to_s.strip != ""
        @result = @result.where("people.place_of_birth_id = ?", params[:place_of_birth_id])
      end

      if params[:gender_id].present? && params[:gender_id].to_s.strip != ""
        @result = @result.where("people.gender_id = ?", params[:gender_id])
      end

      if params[:gender_identity_id].present? && params[:gender_identity_id].to_s.strip != ""
        @result = @result.where("people.gender_identity_id = ?", params[:gender_identity_id])
      end

      if params[:sexual_orientation_id].present? && params[:sexual_orientation_id].to_s.strip != ""
        @result = @result.where("people.sexual_orientation_id = ?", params[:sexual_orientation_id])
      end

      if params[:breed_id].present? && params[:breed_id].to_s.strip != ""
        @result = @result.where("people.breed_id = ?", params[:breed_id])
      end

      if params[:skin_color_id].present? && params[:skin_color_id].to_s.strip != ""
        @result = @result.where("people.skin_color_id = ?", params[:skin_color_id])
      end

      if params[:ethnicity_id].present? && params[:ethnicity_id].to_s.strip != ""
        @result = @result.where("people.ethnicity_id = ?", params[:ethnicity_id])
      end

      if params[:civil_status_id].present? && params[:civil_status_id].to_s.strip != ""
        @result = @result.where("people.civil_status_id = ?", params[:civil_status_id])
      end

      if params[:scholarity_id].present? && params[:scholarity_id].to_s.strip != ""
        @result = @result.where("people.scholarity_id = ?", params[:scholarity_id])
      end

      if params[:average_income].present? && params[:average_income].to_s.strip != ""
        @result = @result.where("people.average_income = ?", params[:average_income])
      end

      if params[:average_income_start].present? && params[:average_income_start].to_s.strip != ""
        @result = @result.where("people.average_income >= ?", params[:average_income_start])
      end

      if params[:average_income_end].present? && params[:average_income_end].to_s.strip != ""
        @result = @result.where("people.average_income <= ?", params[:average_income_end])
      end

      if params[:chemical_dependent].present? && params[:chemical_dependent].to_s.strip != ""
        @result = @result.where("people.chemical_dependent = ?", params[:chemical_dependent])
      end

      if params[:psychological_disorder].present? && params[:psychological_disorder].to_s.strip != ""
        @result = @result.where("people.psychological_disorder = ?", params[:psychological_disorder])
      end

      if params[:pwd].present? && params[:pwd].to_s.strip != ""
        @result = @result.where("people.pwd = ?", params[:pwd])
      end

      if params[:risk_level_id].present? && params[:risk_level_id].to_s.strip != ""
        @result = @result.where("people.risk_level_id = ?", params[:risk_level_id])
      end

      if params[:source_system_id].present? && params[:source_system_id].to_s.strip != ""
        @result = @result.where("incident_reports.source_system_id = ?", params[:source_system_id])
      end

      if params[:communication_year].present? && params[:communication_year].to_s.strip != ""
        @result = @result.where("EXTRACT (YEAR FROM (incident_reports.communication_date)) = ?", params[:communication_year])
      end

      if params[:communication_month].present? && params[:communication_month].to_s.strip != ""
        @result = @result.where("EXTRACT (MONTH FROM (incident_reports.communication_date)) = ?", params[:communication_month])
      end

      if params[:order_by].present? && params[:order_by].to_s.strip != ""
        @result = @result.order(params[:order_by])
      end

      @result = @result.as_json(:except => [:id])
      render json: @result
      return
    end
    denied_access
  end
  
end
