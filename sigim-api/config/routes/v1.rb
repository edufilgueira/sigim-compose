require 'api_constraints'

Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do

      $version = "v1"

      resources :ability_permissions
      resources :ability_profiles
      resources :menus
      resources :sectorials
      resources :facilities
      resources :facility_types
      resources :neighborhood_communities
      resources :people do
        collection do
          get '/list_name', to: 'people#list_name'
        end
      end
      resources :genders
      resources :gender_identities
      resources :civil_statuses
      resources :sexual_orientations
      resources :skin_colors
      resources :scholarities
      resources :people_addresses do
        collection do
          get 'people_address_by_person/:person_id', to: 'people_addresses#people_address_by_person'
        end
      end
      resources :protective_measures
      resources :violence_motivations
      resources :violence_types
      resources :lawsuits
      resources :forwarding_protocols
      resources :accompaniment_types
      resources :incident_reports
      resources :people_contacts do
        collection do
          get 'people_contact_by_person/:person_id', to: 'people_contacts#people_contact_by_person'
        end
      end
      resources :relationship_degrees
      resources :accompaniment_type_facilities do
        collection do
          get 'accompaniment_type_facility_by_type/:accompaniment_type_id', to: 'accompaniment_type_facilities#accompaniment_type_facility_by_type'
        end
      end
      resources :protective_measure_types
      resources :protective_measure_requesteds
      resources :crime_types
      resources :breeds
      resources :states
      resources :communities
      resources :contact_types
      resources :ethnicities
      resources :relationships do
        collection do
          get 'relationship_by_person/:person_id', to: 'relationships#relationship_by_person'
        end
      end
      resources :cities do
        collection do
          get 'city_by_state/:state_id', to: 'cities#city_by_state'
        end
      end
      resources :neighborhoods do
        collection do
          get 'neighborhood_by_city/:city_id', to: 'neighborhoods#neighborhood_by_city'
        end
      end
      resources :users do
        post :can
        post :permissions_all
        post :user_menu
        collection do
          post '/:id/reset_password', to: 'users#reset_password'
        end
      end
      resources :dashboard_women do
        collection do
          resources :inc_rep do 
            collection do
              get '/qtd_total', to: 'dashboard_women_inc_reps#qtd_total'
              get '/qtd_by_gender', to: 'dashboard_women_inc_reps#qtd_by_gender'
              get '/qtd_by_gender_identity', to: 'dashboard_women_inc_reps#qtd_by_gender_identity'
              get '/qtd_by_scholarity', to: 'dashboard_women_inc_reps#qtd_by_scholarity'
              get '/qtd_by_civil_status', to: 'dashboard_women_inc_reps#qtd_by_civil_status'
              get '/qtd_by_breed', to: 'dashboard_women_inc_reps#qtd_by_breed'
              get '/qtd_by_sexual_orientation', to: 'dashboard_women_inc_reps#qtd_by_sexual_orientation'
              get '/qtd_by_pwd', to: 'dashboard_women_inc_reps#qtd_by_pwd'
              get '/qtd_by_age', to: 'dashboard_women_inc_reps#qtd_by_age'
              get '/qtd_by_average_income', to: 'dashboard_women_inc_reps#qtd_by_average_income'
              get '/qtd_by_crime_type', to: 'dashboard_women_inc_reps#qtd_by_crime_type'
              get '/qtd_by_violence_type', to: 'dashboard_women_inc_reps#qtd_by_violence_type'
              get '/qtd_by_violence_motivation', to: 'dashboard_women_inc_reps#qtd_by_violence_motivation'
              get '/qtd_by_source_system', to: 'dashboard_women_inc_reps#qtd_by_source_system'
              get '/qtd_by_occurrence_city', to: 'dashboard_women_inc_reps#qtd_by_occurrence_city'
              get '/qtd_by_risk_level', to: 'dashboard_women_inc_reps#qtd_by_risk_level'
              get '/qtd_total_by_communication_month', to: 'dashboard_women_inc_reps#qtd_total_by_communication_month'
            end
          end

          resources :lawsuit do 
            collection do
              get '/qtd_total', to: 'dashboard_women_lawsuits#qtd_total'
              get '/qtd_by_gender', to: 'dashboard_women_lawsuits#qtd_by_gender'
              get '/qtd_by_gender_identity', to: 'dashboard_women_lawsuits#qtd_by_gender_identity'
              get '/qtd_by_scholarity', to: 'dashboard_women_lawsuits#qtd_by_scholarity'
              get '/qtd_by_civil_status', to: 'dashboard_women_lawsuits#qtd_by_civil_status'
              get '/qtd_by_breed', to: 'dashboard_women_lawsuits#qtd_by_breed'
              get '/qtd_by_sexual_orientation', to: 'dashboard_women_lawsuits#qtd_by_sexual_orientation'
              get '/qtd_by_pwd', to: 'dashboard_women_lawsuits#qtd_by_pwd'
              get '/qtd_by_age', to: 'dashboard_women_lawsuits#qtd_by_age'
              get '/qtd_by_average_income', to: 'dashboard_women_lawsuits#qtd_by_average_income'
              get '/qtd_by_crime_type', to: 'dashboard_women_lawsuits#qtd_by_crime_type'
              get '/qtd_by_violence_type', to: 'dashboard_women_lawsuits#qtd_by_violence_type'
              get '/qtd_by_violence_motivation', to: 'dashboard_women_lawsuits#qtd_by_violence_motivation'
              get '/qtd_by_source_system', to: 'dashboard_women_lawsuits#qtd_by_source_system'
              get '/qtd_by_risk_level', to: 'dashboard_women_lawsuits#qtd_by_risk_level'
              get '/qtd_total_by_opening_month', to: 'dashboard_women_lawsuits#qtd_total_by_opening_month'
            end
          end

          resources :prot_measure do 
            collection do
              get '/qtd_total', to: 'dashboard_women_prot_measures#qtd_total'
              get '/qtd_by_gender', to: 'dashboard_women_prot_measures#qtd_by_gender'
              get '/qtd_by_gender_identity', to: 'dashboard_women_prot_measures#qtd_by_gender_identity'
              get '/qtd_by_scholarity', to: 'dashboard_women_prot_measures#qtd_by_scholarity'
              get '/qtd_by_civil_status', to: 'dashboard_women_prot_measures#qtd_by_civil_status'
              get '/qtd_by_breed', to: 'dashboard_women_prot_measures#qtd_by_breed'
              get '/qtd_by_sexual_orientation', to: 'dashboard_women_prot_measures#qtd_by_sexual_orientation'
              get '/qtd_by_pwd', to: 'dashboard_women_prot_measures#qtd_by_pwd'
              get '/qtd_by_age', to: 'dashboard_women_prot_measures#qtd_by_age'
              get '/qtd_by_average_income', to: 'dashboard_women_prot_measures#qtd_by_average_income'
              get '/qtd_by_crime_type', to: 'dashboard_women_prot_measures#qtd_by_crime_type'
              get '/qtd_by_violence_type', to: 'dashboard_women_prot_measures#qtd_by_violence_type'
              get '/qtd_by_violence_motivation', to: 'dashboard_women_prot_measures#qtd_by_violence_motivation'
              get '/qtd_by_source_system', to: 'dashboard_women_prot_measures#qtd_by_source_system'
              get '/qtd_by_occurrence_city', to: 'dashboard_women_prot_measures#qtd_by_occurrence_city'
              get '/qtd_by_risk_level', to: 'dashboard_women_prot_measures#qtd_by_risk_level'
              get '/qtd_total_by_authorization_month', to: 'dashboard_women_prot_measures#qtd_total_by_authorization_month'
            end
          end

        end
      end
      resources :dashboard_forwarding_protocol do
        collection do
          get '/qtd_total', to: 'dashboard_forwarding_protocols#qtd_total'
          get '/qtd_by_gender', to: 'dashboard_forwarding_protocols#qtd_by_gender'
          get '/qtd_by_gender_identity', to: 'dashboard_forwarding_protocols#qtd_by_gender_identity'
          get '/qtd_by_scholarity', to: 'dashboard_forwarding_protocols#qtd_by_scholarity'
          get '/qtd_by_civil_status', to: 'dashboard_forwarding_protocols#qtd_by_civil_status'
          get '/qtd_by_breed', to: 'dashboard_forwarding_protocols#qtd_by_breed'
          get '/qtd_by_sexual_orientation', to: 'dashboard_forwarding_protocols#qtd_by_sexual_orientation'
          get '/qtd_by_pwd', to: 'dashboard_forwarding_protocols#qtd_by_pwd'
          get '/qtd_by_age', to: 'dashboard_forwarding_protocols#qtd_by_age'
          get '/qtd_by_average_income', to: 'dashboard_forwarding_protocols#qtd_by_average_income'
          get '/qtd_by_source_system', to: 'dashboard_forwarding_protocols#qtd_by_source_system'
          get '/qtd_by_risk_level', to: 'dashboard_forwarding_protocols#qtd_by_risk_level'
          get '/qtd_total_by_month', to: 'dashboard_forwarding_protocols#qtd_total_by_month'
        end
      end

      resources :custom_report do
        collection do
          get '/person_history', to: 'custom_reports#person_history'
        end
      end

      resources :source_systems
      resources :risk_levels
      resources :denunciations
      resources :dependency_types
      resources :handicap_types
      resources :handicap_people
      resources :denunciation_aggressor_dependencies
      resources :housing_situations
    end

  end

end
