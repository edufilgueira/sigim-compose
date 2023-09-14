class Api::V1::CustomReportsController < ApplicationController
  # before_action :authenticate_api_user!

  # --- RELATÓRIOS PERSONALIZADOS ---

  # HISTÓRICO DA PESSOA
  def person_history
    return unless params[:person_id].present? && params[:person_id].to_s.strip != ''
    return unless Person.find(params[:person_id])

    @forwarding_protocols = ForwardingProtocol
                            .joins(:source_system)
                            .joins(:accompaniment_type)
                            .joins(:facility)
                            .select("
            forwarding_protocols.person_id,
            source_systems.name AS source_system_name,
            forwarding_protocols.id,
            'forwarding_protocol' AS type,
            'PROTOCOLO DE ENCAMINHAMENTO' AS occurrence,
            CONCAT(
              'TIPO DE ACOMPANHAMENTO: ', accompaniment_types.name,
              '; EQUIPAMENTO: ', facilities.name
            ) AS description,
            forwarding_protocols.forwarding_date AS occurrence_date,
            forwarding_protocols.created_at,
            forwarding_protocols.updated_at
          ")
                            .where('person_id = ?', params[:person_id])
    
    @incident_reports = IncidentReport
                        .joins(:source_system)
                        .joins(:crime_type)
                        .joins(:violence_type)
                        .joins(:violence_motivation)
                        .select("
            victim_id AS person_id,
            source_systems.name AS source_system_name,
            incident_reports.id,
            'incident_report' AS type,
            'BOLETIM DE OCORRÊNCIA - COMO VÍTIMA' AS occurrence,
            CONCAT(
              'NÚMERO: ', incident_reports.number,
              '; TIPO DE CRIME: ', crime_types.name,
              '; TIPO DE VIOLÊNCIA: ', violence_types.name,
              '; MOTIVAÇÃO DA VIOLÊNCIA: ', violence_motivations.name,
              '; DT DA OCORÊNCIA: ', incident_reports.occurrence_date,
              '; DT DA COMUNICAÇÃO: ', incident_reports.communication_date
            ) AS description,
            incident_reports.communication_date AS occurrence_date,
            incident_reports.created_at,
            incident_reports.updated_at
          ")
                        .where('victim_id = ?', params[:person_id])

    @incident_reports_aggressor = IncidentReport
                                  .joins(:source_system)
                                  .joins(:crime_type)
                                  .joins(:violence_type)
                                  .joins(:violence_motivation)
                                  .select("
            aggressor_id AS person_id,
            source_systems.name AS source_system_name,
            incident_reports.id,
            'incident_report' AS type,
            'BOLETIM DE OCORRÊNCIA - COMO AGRESSOR' AS occurrence,
            CONCAT(
              'NÚMERO: ', incident_reports.number,
              '; TIPO DE CRIME: ', crime_types.name,
              '; TIPO DE VIOLÊNCIA: ', violence_types.name,
              '; MOTIVAÇÃO DA VIOLÊNCIA: ', violence_motivations.name,
              '; DT DA OCORÊNCIA: ', incident_reports.occurrence_date,
              '; DT DA COMUNICAÇÃO: ', incident_reports.communication_date
            ) AS description,
            incident_reports.communication_date AS occurrence_date,
            incident_reports.created_at,
            incident_reports.updated_at
          ")
                                  .where('aggressor_id = ?', params[:person_id])

    @protective_measures = ProtectiveMeasure
                           .joins(:source_system)
                           .joins(incident_report: :victim)
                           .joins(incident_report: :crime_type)
                           .joins(incident_report: :violence_type)
                           .joins(incident_report: :violence_motivation)
                           .select("
            victim_id AS person_id,
            source_systems.name AS source_system_name,
            protective_measures.id,
            'protective_measure' AS type,
            'MEDIDA PROTETIVA - COMO VÍTIMA' AS occurrence,
            CONCAT(
              'NÚMERO: ', protective_measures.number,
              '; TIPO DE CRIME: ', crime_types.name,
              '; TIPO DE VIOLÊNCIA: ', violence_types.name,
              '; MOTIVAÇÃO DA VIOLÊNCIA: ', violence_motivations.name
            ) AS description,
            protective_measures.authorization_date AS occurrence_date,
            protective_measures.created_at,
            protective_measures.updated_at
          ")
                           .where('victim_id = ?', params[:person_id])

    @protective_measures_aggressor = ProtectiveMeasure
                                     .joins(:source_system)
                                     .joins(incident_report: :victim)
                                     .joins(incident_report: :crime_type)
                                     .joins(incident_report: :violence_type)
                                     .joins(incident_report: :violence_motivation)
                                     .select("
            aggressor_id AS person_id,
            source_systems.name AS source_system_name,
            protective_measures.id,
            'protective_measure' AS type,
            'MEDIDA PROTETIVA - COMO AGRESSOR' AS occurrence,
            CONCAT(
              'NÚMERO: ', protective_measures.number,
              '; TIPO DE CRIME: ', crime_types.name,
              '; TIPO DE VIOLÊNCIA: ', violence_types.name,
              '; MOTIVAÇÃO DA VIOLÊNCIA: ', violence_motivations.name
            ) AS description,
            protective_measures.authorization_date AS occurrence_date,
            protective_measures.created_at,
            protective_measures.updated_at
          ")
                                     .where('aggressor_id = ?', params[:person_id])

    @lawsuits = Lawsuit
                .joins(:source_system)
                .joins(:crime_type)
                .joins(:violence_type)
                .joins(:violence_motivation)
                .select("
            victim_id AS person_id,
            source_systems.name AS source_system_name,
            lawsuits.id,
            'lawsuit' AS type,
            'PROCESSO JUDICIAL - COMO VÍTIMA' AS occurrence,
            CONCAT(
              'NÚMERO: ', lawsuits.number,
              '; TIPO DE CRIME: ', crime_types.name,
              '; TIPO DE VIOLÊNCIA: ', violence_types.name,
              '; MOTIVAÇÃO DA VIOLÊNCIA: ', violence_motivations.name
            ) AS description,
            lawsuits.opening_date AS occurrence_date,
            lawsuits.created_at,
            lawsuits.updated_at
          ")
                .where('victim_id = ?', params[:person_id])

    @lawsuits_aggressor = Lawsuit
                          .joins(:source_system)
                          .joins(:crime_type)
                          .joins(:violence_type)
                          .joins(:violence_motivation)
                          .select("
            aggressor_id AS person_id,
            source_systems.name AS source_system_name,
            lawsuits.id,
            'lawsuit' AS type,
            'PROCESSO JUDICIAL - COMO AGRESSOR' AS occurrence,
            CONCAT(
              'NÚMERO: ', lawsuits.number,
              '; TIPO DE CRIME: ', crime_types.name,
              '; TIPO DE VIOLÊNCIA: ', violence_types.name,
              '; MOTIVAÇÃO DA VIOLÊNCIA: ', violence_motivations.name
            ) AS description,
            lawsuits.opening_date AS occurrence_date,
            lawsuits.created_at,
            lawsuits.updated_at
          ")
                          .where('aggressor_id = ?', params[:person_id])

    @denunciations = Denunciation
                     .joins(:source_system)
                     .left_joins(:crime_type)
                     .left_joins(:violence_type)
                     .left_joins(:violence_motivation)
                     .select("
    victim_id AS person_id,
    source_systems.name AS source_system_name,
    denunciations.id,
    'denunciation' AS type,
    'BOLETIM DE OCORRÊNCIA - COMO VÍTIMA' AS occurrence,
    CONCAT(
      'NÚMERO: ', denunciations.number,
      '; TIPO DE CRIME: ', crime_types.name,
      '; TIPO DE VIOLÊNCIA: ', violence_types.name,
      '; MOTIVAÇÃO DA VIOLÊNCIA: ', violence_motivations.name,
      '; DT DA OCORÊNCIA: ', denunciations.opening_date
    ) AS description,
    denunciations.opening_date AS occurrence_date,
    denunciations.created_at,
    denunciations.updated_at
  ")
                     .where('victim_id = ?', params[:person_id])

    debugger

    @denunciations_aggressor = Denunciation.find_by_sql("
      SELECT 
        d.id,
        ss.name AS source_system_name,
        denunciations.opening_date AS occurrence_date,
        (ARRAY(SELECT pv.name FROM public.denunciation_victims v LEFT JOIN public.people pv ON pv.id = v.person_id WHERE v.denunciation_id = d.id)) AS victims,
        (ARRAY(SELECT pa.name FROM public.denunciation_victims ag LEFT JOIN public.people pa ON pa.id = ag.person_id WHERE ag.denunciation_id = d.id)) AS aggressors,
        d.created_at,
        d.created_at
      FROM 
        public.denunciations d
      INNER JOIN source_systems ss ON ss.id = d.source_system_id
      WHERE 
        d.id = #{params[:person_id]}
      ORDER BY 
        d.id
    ")

  #   @denunciations_aggressor = Denunciation
  #                              .joins(:source_system)
  #                              .left_joins(denunciation_crime_type: :crime_type)
  #                              .left_joins()
  #                              .left_joins(:violence_type)
  #                              .left_joins(:violence_motivation)
  #                              .select("
  #   aggressor_id AS person_id,
  #   source_systems.name AS source_system_name,
  #   denunciations.id,
  #   'denunciation' AS type,
  #   'BOLETIM DE OCORRÊNCIA - COMO AGRESSOR' AS occurrence,
  #   CONCAT(
  #     'NÚMERO: ', denunciations.number,
  #     '; TIPO DE CRIME: ', crime_types.name,
  #     '; TIPO DE VIOLÊNCIA: ', violence_types.name,
  #     '; MOTIVAÇÃO DA VIOLÊNCIA: ', violence_motivations.name,
  #     '; DT DA OCORÊNCIA: ', denunciations.opening_date
  #   ) AS description,
  #   denunciations.opening_date AS occurrence_date,
  #   denunciations.created_at,
  #   denunciations.updated_at
  # ")
  #                              .where('aggressor_id = ?', params[:person_id])

    sql = @forwarding_protocols.to_sql +
          ' UNION ' + @incident_reports.to_sql +
          ' UNION ' + @incident_reports_aggressor.to_sql +
          ' UNION ' + @protective_measures.to_sql +
          ' UNION ' + @protective_measures_aggressor.to_sql +
          ' UNION ' + @lawsuits.to_sql +
          ' UNION ' + @lawsuits_aggressor.to_sql +
          ' UNION ' + @denunciations.to_sql +
          ' UNION ' + @denunciations_aggressor.to_sql +
          ' ORDER BY occurrence_date '

    @result = ActiveRecord::Base.connection.execute(sql)

    render json: @result
  end
end
