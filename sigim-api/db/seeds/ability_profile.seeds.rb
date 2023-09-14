puts "Ability Profile >>>"

puts "-- Menu"
Menu.find_or_create_by(id: 1).update(order: 1, name:"Home")
Menu.find_or_create_by(id: 2).update(order: 2, name:"Dashboard")
Menu.find_or_create_by(id: 3).update(order: 3, name:"Cadastros")
Menu.find_or_create_by(id: 4).update(order: 4, name:"Controle de acesso")

puts "-- profile"
AbilityResource.find_or_create_by(name: 'ability_profile')
AbilityAction.find_or_create_by(ability_resource_id: 1, action_code: :ability_profile_index, active_menu: true).update(name: 'Perfis', menu_id: 4)
AbilityAction.find_or_create_by(ability_resource_id: 1, action_code: :ability_profile_show).update(name: 'Visualizar perfil', order: 1, icon: 'icone1')
AbilityAction.find_or_create_by(ability_resource_id: 1, action_code: :ability_profile_create).update(name: 'Criar perfil', order: 1, icon: 'icone1')
AbilityAction.find_or_create_by(ability_resource_id: 1, action_code: :ability_profile_update).update(name: 'Editar perfil', order: 1, icon: 'icone1')
AbilityAction.find_or_create_by(ability_resource_id: 1, action_code: :ability_profile_destroy).update(name: 'Deletar perfil', order: 1, icon: 'icone1')

puts "-- permission"
AbilityResource.find_or_create_by(name: 'ability_permission')
# AbilityAction.find_or_create_by(ability_resource_id: 2, action_code: :ability_permission_index, active_menu: true, menu_id: 3).update(name: 'Permissões', order: 1, icon: 'icone2', router: 'rita02')
AbilityAction.find_or_create_by(ability_resource_id: 2, action_code: :ability_permission_show).update(name: 'Visualizar permissão')
# AbilityAction.find_or_create_by(ability_resource_id: 2, action_code: :ability_permission_create).update(name: 'Criar Permissão')
AbilityAction.find_or_create_by(ability_resource_id: 2, action_code: :ability_permission_update).update(name: 'Editar permissão')
#AbilityAction.find_or_create_by(ability_resource_id: 2, action_code: :ability_permission_destroy).update(name: 'Deletar permissão')

puts "-- user"
AbilityResource.find_or_create_by(name: 'user')
AbilityAction.find_or_create_by(ability_resource_id: 3, action_code: :user_index, active_menu: true).update(name: 'Usuários', menu_id: 4)
AbilityAction.find_or_create_by(ability_resource_id: 3, action_code: :user_show).update(name: 'Visualizar usuário')
AbilityAction.find_or_create_by(ability_resource_id: 3, action_code: :user_create).update(name: 'Criar usuário')
AbilityAction.find_or_create_by(ability_resource_id: 3, action_code: :user_update).update(name: 'Editar usuário')
AbilityAction.find_or_create_by(ability_resource_id: 3, action_code: :user_destroy).update(name: 'Deletar usuário')
AbilityAction.find_or_create_by(ability_resource_id: 3, action_code: :user_reset_password).update(name: 'Resetar Senha')

puts "-- crime_type"
AbilityResource.find_or_create_by(name: 'crime_type')
name = "Tipo de Crime"
AbilityAction.find_or_create_by(ability_resource_id: 4, action_code: :crime_type_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 4, action_code: :crime_type_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 4, action_code: :crime_type_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 4, action_code: :crime_type_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 4, action_code: :crime_type_destroy).update(name: "Deletar #{name}")

puts "-- breed"
AbilityResource.find_or_create_by(name: 'breed')
name = "Tipo de Raça"
AbilityAction.find_or_create_by(ability_resource_id: 5, action_code: :breed_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 5, action_code: :breed_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 5, action_code: :breed_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 5, action_code: :breed_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 5, action_code: :breed_destroy).update(name: "Deletar #{name}")

puts "-- state"
AbilityResource.find_or_create_by(name: 'state')
name = "Estados"
AbilityAction.find_or_create_by(ability_resource_id: 6, action_code: :state_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 6, action_code: :state_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 6, action_code: :state_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 6, action_code: :state_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 6, action_code: :state_destroy).update(name: "Deletar #{name}")

puts "-- city"
AbilityResource.find_or_create_by(name: 'city')
name = "Cidades"
AbilityAction.find_or_create_by(ability_resource_id: 7, action_code: :city_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 7, action_code: :city_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 7, action_code: :city_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 7, action_code: :city_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 7, action_code: :city_destroy).update(name: "Deletar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 7, action_code: :city_by_state).update(name: "Carregar #{name} por Estado")

puts "-- community"
AbilityResource.find_or_create_by(name: 'community')
name = "Comunidades"
AbilityAction.find_or_create_by(ability_resource_id: 8, action_code: :community_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 8, action_code: :community_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 8, action_code: :community_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 8, action_code: :community_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 8, action_code: :community_destroy).update(name: "Deletar #{name}")

puts "-- contact_type"
AbilityResource.find_or_create_by(name: 'contact_type')
name = "Tipos de Contato"
AbilityAction.find_or_create_by(ability_resource_id: 9, action_code: :contact_type_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 9, action_code: :contact_type_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 9, action_code: :contact_type_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 9, action_code: :contact_type_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 9, action_code: :contact_type_destroy).update(name: "Deletar #{name}")

puts "-- ethnicity"
AbilityResource.find_or_create_by(name: 'ethnicity')
name = "Etnias"
AbilityAction.find_or_create_by(ability_resource_id: 10, action_code: :ethnicity_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 10, action_code: :ethnicity_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 10, action_code: :ethnicity_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 10, action_code: :ethnicity_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 10, action_code: :ethnicity_destroy).update(name: "Deletar #{name}")

puts "-- sectorial"
AbilityResource.find_or_create_by(name: 'sectorial')
name = "Setorial"
AbilityAction.find_or_create_by(ability_resource_id: 11, action_code: :sectorial_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 11, action_code: :sectorial_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 11, action_code: :sectorial_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 11, action_code: :sectorial_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 11, action_code: :sectorial_destroy).update(name: "Deletar #{name}")

puts "-- neighborhood"
AbilityResource.find_or_create_by(name: 'neighborhood')
name = "Bairros"
AbilityAction.find_or_create_by(ability_resource_id: 12, action_code: :neighborhood_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 12, action_code: :neighborhood_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 12, action_code: :neighborhood_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 12, action_code: :neighborhood_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 12, action_code: :neighborhood_destroy).update(name: "Deletar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 12, action_code: :neighborhood_by_city).update(name: "carregar #{name} por cidade")

puts "-- facility"
AbilityResource.find_or_create_by(name: 'facility')
name = "Equipamentos"
AbilityAction.find_or_create_by(ability_resource_id: 13, action_code: :facility_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 13, action_code: :facility_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 13, action_code: :facility_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 13, action_code: :facility_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 13, action_code: :facility_destroy).update(name: "Deletar #{name}")

puts "-- neighborhood_community"
AbilityResource.find_or_create_by(name: 'neighborhood_community')
name = "Bairros Comunitario"
AbilityAction.find_or_create_by(ability_resource_id: 14, action_code: :neighborhood_community_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 14, action_code: :neighborhood_community_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 14, action_code: :neighborhood_community_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 14, action_code: :neighborhood_community_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 14, action_code: :neighborhood_community_destroy).update(name: "Deletar #{name}")

puts "-- person"
AbilityResource.find_or_create_by(name: 'person')
name = "Pessoas"
AbilityAction.find_or_create_by(ability_resource_id: 15, action_code: :person_index).update(name: "Listar #{name}", menu_id: 3, active_menu: true)
AbilityAction.find_or_create_by(ability_resource_id: 15, action_code: :person_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 15, action_code: :person_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 15, action_code: :person_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 15, action_code: :person_destroy).update(name: "Deletar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 15, action_code: :person_list_name).update(name: "Listar nomes #{name}")

puts "-- gender"
AbilityResource.find_or_create_by(name: 'gender')
name = "Genero"
AbilityAction.find_or_create_by(ability_resource_id: 16, action_code: :gender_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 16, action_code: :gender_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 16, action_code: :gender_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 16, action_code: :gender_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 16, action_code: :gender_destroy).update(name: "Deletar #{name}")

puts "-- gender_identity"
AbilityResource.find_or_create_by(name: 'gender_identity')
name = "Identidade de Genero"
AbilityAction.find_or_create_by(ability_resource_id: 17, action_code: :gender_identity_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 17, action_code: :gender_identity_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 17, action_code: :gender_identity_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 17, action_code: :gender_identity_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 17, action_code: :gender_identity_destroy).update(name: "Deletar #{name}")

puts "-- sexual_orientation"
AbilityResource.find_or_create_by(name: 'sexual_orientation')
name = "Orientação Sexual"
AbilityAction.find_or_create_by(ability_resource_id: 18, action_code: :sexual_orientation_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 18, action_code: :sexual_orientation_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 18, action_code: :sexual_orientation_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 18, action_code: :sexual_orientation_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 18, action_code: :sexual_orientation_destroy).update(name: "Deletar #{name}")

puts "-- skin_color"
AbilityResource.find_or_create_by(name: 'skin_color')
name = "Cor da Pele"
AbilityAction.find_or_create_by(ability_resource_id: 19, action_code: :skin_color_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 19, action_code: :skin_color_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 19, action_code: :skin_color_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 19, action_code: :skin_color_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 19, action_code: :skin_color_destroy).update(name: "Deletar #{name}")

puts "-- civil_status"
AbilityResource.find_or_create_by(name: 'civil_status')
name = "Estado Civil"
AbilityAction.find_or_create_by(ability_resource_id: 20, action_code: :civil_status_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 20, action_code: :civil_status_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 20, action_code: :civil_status_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 20, action_code: :civil_status_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 20, action_code: :civil_status_destroy).update(name: "Deletar #{name}")

puts "-- scholarity"
AbilityResource.find_or_create_by(name: 'scholarity')
name = "Escolaridade"
AbilityAction.find_or_create_by(ability_resource_id: 21, action_code: :scholarity_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 21, action_code: :scholarity_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 21, action_code: :scholarity_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 21, action_code: :scholarity_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 21, action_code: :scholarity_destroy).update(name: "Deletar #{name}")

puts "-- people_address"
AbilityResource.find_or_create_by(name: 'people_address')
name = "Endereços"
AbilityAction.find_or_create_by(ability_resource_id: 22, action_code: :people_address_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 22, action_code: :people_address_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 22, action_code: :people_address_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 22, action_code: :people_address_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 22, action_code: :people_address_destroy).update(name: "Deletar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 22, action_code: :people_address_by_person).update(name: "Carregar #{name} por Pessoa")

puts "-- violence_motivation"
AbilityResource.find_or_create_by(name: 'violence_motivation')
name = "Motivação da Violência"
AbilityAction.find_or_create_by(ability_resource_id: 23, action_code: :violence_motivation_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 23, action_code: :violence_motivation_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 23, action_code: :violence_motivation_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 23, action_code: :violence_motivation_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 23, action_code: :violence_motivation_destroy).update(name: "Deletar #{name}")

puts "-- protective_measure"
AbilityResource.find_or_create_by(name: 'protective_measure')
name = "Medida de Proteção"
AbilityAction.find_or_create_by(ability_resource_id: 24, action_code: :protective_measure_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 24, action_code: :protective_measure_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 24, action_code: :protective_measure_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 24, action_code: :protective_measure_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 24, action_code: :protective_measure_destroy).update(name: "Deletar #{name}")

puts "-- violence_type"
AbilityResource.find_or_create_by(name: 'violence_type')
name = "Tipo de Violência"
AbilityAction.find_or_create_by(ability_resource_id: 25, action_code: :violence_type_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 25, action_code: :violence_type_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 25, action_code: :violence_type_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 25, action_code: :violence_type_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 25, action_code: :violence_type_destroy).update(name: "Deletar #{name}")

puts "-- lawsuit"
AbilityResource.find_or_create_by(name: 'lawsuit')
name = "Processo Judicial"
AbilityAction.find_or_create_by(ability_resource_id: 26, action_code: :lawsuit_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 26, action_code: :lawsuit_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 26, action_code: :lawsuit_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 26, action_code: :lawsuit_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 26, action_code: :lawsuit_destroy).update(name: "Deletar #{name}")

puts "-- forwarding_protocol"
AbilityResource.find_or_create_by(name: 'forwarding_protocol')
name = "Protocolo"
AbilityAction.find_or_create_by(ability_resource_id: 27, action_code: :forwarding_protocol_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 27, action_code: :forwarding_protocol_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 27, action_code: :forwarding_protocol_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 27, action_code: :forwarding_protocol_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 27, action_code: :forwarding_protocol_destroy).update(name: "Deletar #{name}")

puts "-- accompaniment_type"
AbilityResource.find_or_create_by(name: 'accompaniment_type')
name = "Tipo de Acompanhamento"
AbilityAction.find_or_create_by(ability_resource_id: 28, action_code: :accompaniment_type_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 28, action_code: :accompaniment_type_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 28, action_code: :accompaniment_type_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 28, action_code: :accompaniment_type_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 28, action_code: :accompaniment_type_destroy).update(name: "Deletar #{name}")

puts "-- incident_report"
AbilityResource.find_or_create_by(name: 'incident_report')
name = "Relatório de Incidente"
AbilityAction.find_or_create_by(ability_resource_id: 29, action_code: :incident_report_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 29, action_code: :incident_report_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 29, action_code: :incident_report_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 29, action_code: :incident_report_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 29, action_code: :incident_report_destroy).update(name: "Deletar #{name}")

puts "-- people_contact"
AbilityResource.find_or_create_by(name: 'people_contact')
name = "Contatos"
AbilityAction.find_or_create_by(ability_resource_id: 30, action_code: :people_contact_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 30, action_code: :people_contact_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 30, action_code: :people_contact_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 30, action_code: :people_contact_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 30, action_code: :people_contact_destroy).update(name: "Deletar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 22, action_code: :people_contact_by_person).update(name: "Carregar #{name} por Pessoa")

puts "-- relationship"
AbilityResource.find_or_create_by(name: 'relationship')
name = "Relação"
AbilityAction.find_or_create_by(ability_resource_id: 31, action_code: :relationship_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 31, action_code: :relationship_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 31, action_code: :relationship_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 31, action_code: :relationship_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 31, action_code: :relationship_destroy).update(name: "Deletar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 31, action_code: :relationship_by_person).update(name: "Carregar #{name} por Pessoa")

puts "-- relationship_degree"
AbilityResource.find_or_create_by(name: 'relationship_degree')
name = "Grau de Relação"
AbilityAction.find_or_create_by(ability_resource_id: 32, action_code: :relationship_degree_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 32, action_code: :relationship_degree_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 32, action_code: :relationship_degree_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 32, action_code: :relationship_degree_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 32, action_code: :relationship_degree_destroy).update(name: "Deletar #{name}")

puts "-- accompaniment_type_facility"
AbilityResource.find_or_create_by(name: 'accompaniment_type_facility')
name = "Tipo de Acompanhamento dos Equipamentos"
AbilityAction.find_or_create_by(ability_resource_id: 33, action_code: :accompaniment_type_facility_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 33, action_code: :accompaniment_type_facility_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 33, action_code: :accompaniment_type_facility_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 33, action_code: :accompaniment_type_facility_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 33, action_code: :accompaniment_type_facility_destroy).update(name: "Deletar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 33, action_code: :accompaniment_type_facility_by_type).update(name: "Carregar Equipamentos por Tipo")

puts "-- protective_measure_type"
AbilityResource.find_or_create_by(name: 'protective_measure_type')
name = "Tipo de Medida Protetiva"
AbilityAction.find_or_create_by(ability_resource_id: 34, action_code: :protective_measure_type_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 34, action_code: :protective_measure_type_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 34, action_code: :protective_measure_type_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 34, action_code: :protective_measure_type_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 34, action_code: :protective_measure_type_destroy).update(name: "Deletar #{name}")

puts "-- protective_measure_requested"
AbilityResource.find_or_create_by(name: 'protective_measure_requested')
name = "Medida Protetiva Solicitada"
AbilityAction.find_or_create_by(ability_resource_id: 35, action_code: :protective_measure_requested_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 35, action_code: :protective_measure_requested_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 35, action_code: :protective_measure_requested_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 35, action_code: :protective_measure_requested_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 35, action_code: :protective_measure_requested_destroy).update(name: "Deletar #{name}")

puts "-- facility_type"
AbilityResource.find_or_create_by(name: 'facility_type')
name = "Tipo de Instalação"
AbilityAction.find_or_create_by(ability_resource_id: 36, action_code: :facility_type_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 36, action_code: :facility_type_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 36, action_code: :facility_type_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 36, action_code: :facility_type_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 36, action_code: :facility_type_destroy).update(name: "Deletar #{name}")

puts "-- source_system"
AbilityResource.find_or_create_by(name: 'source_system')
name = "Sistema de Origem dos Dados"
AbilityAction.find_or_create_by(ability_resource_id: 37, action_code: :source_system_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 37, action_code: :source_system_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 37, action_code: :source_system_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 37, action_code: :source_system_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 37, action_code: :source_system_destroy).update(name: "Deletar #{name}")

puts "-- risk_level"
AbilityResource.find_or_create_by(name: 'risk_level')
name = "Nível de Risco"
AbilityAction.find_or_create_by(ability_resource_id: 38, action_code: :risk_level_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 38, action_code: :risk_level_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 38, action_code: :risk_level_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 38, action_code: :risk_level_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 38, action_code: :risk_level_destroy).update(name: "Deletar #{name}")

puts "-- dashboard"
AbilityResource.find_or_create_by(name: 'dashboard')
name = "Dashboard - Protocolos de Encaminhamentos"
AbilityAction.find_or_create_by(ability_resource_id: 39, action_code: :dashboard_forwarding_protocol_index).update(name: "Listar #{name}")
name = "Dashboard - Boletins de Ocorrências"
AbilityAction.find_or_create_by(ability_resource_id: 39, action_code: :dashboard_women_inc_rep_index).update(name: "Listar #{name}")
name = "Dashboard - Processos Judiciais"
AbilityAction.find_or_create_by(ability_resource_id: 39, action_code: :dashboard_women_lawsuit_index).update(name: "Listar #{name}")
name = "Dashboard - Medidas Protetivas"
AbilityAction.find_or_create_by(ability_resource_id: 39, action_code: :dashboard_women_prot_measure_index).update(name: "Listar #{name}")


puts "-- denunciations"
AbilityResource.find_or_create_by(name: 'denunciation')
name = "Denúncia"
AbilityAction.find_or_create_by(ability_resource_id: 40, action_code: :denunciation_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 40, action_code: :denunciation_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 40, action_code: :denunciation_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 40, action_code: :denunciation_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 40, action_code: :denunciation_destroy).update(name: "Deletar #{name}")

puts "-- dependency_types"
AbilityResource.find_or_create_by(name: 'dependency_type')
name = "Denúncia"
AbilityAction.find_or_create_by(ability_resource_id: 41, action_code: :dependency_type_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 41, action_code: :dependency_type_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 41, action_code: :dependency_type_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 41, action_code: :dependency_type_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 41, action_code: :dependency_type_destroy).update(name: "Deletar #{name}")

puts "-- handicap_types"
AbilityResource.find_or_create_by(name: 'handicap_type')
name = "Tipo de Deficiência"
AbilityAction.find_or_create_by(ability_resource_id: 42, action_code: :handicap_type_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 42, action_code: :handicap_type_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 42, action_code: :handicap_type_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 42, action_code: :handicap_type_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 42, action_code: :handicap_type_destroy).update(name: "Deletar #{name}")

puts "-- handicap_people"
AbilityResource.find_or_create_by(name: 'handicap_person')
name = "Deficiência da Pessoa"
AbilityAction.find_or_create_by(ability_resource_id: 43, action_code: :handicap_person_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 43, action_code: :handicap_person_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 43, action_code: :handicap_person_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 43, action_code: :handicap_person_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 43, action_code: :handicap_person_destroy).update(name: "Deletar #{name}")

puts "-- denunciation_aggressor_dependencies"
AbilityResource.find_or_create_by(name: 'denunciation_aggressor_dependency')
name = "Tipo de dependência do agressor por denúncia"
AbilityAction.find_or_create_by(ability_resource_id: 44, action_code: :denunciation_aggressor_dependency_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 44, action_code: :denunciation_aggressor_dependency_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 44, action_code: :denunciation_aggressor_dependency_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 44, action_code: :denunciation_aggressor_dependency_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 44, action_code: :denunciation_aggressor_dependency_destroy).update(name: "Deletar #{name}")

puts "-- housing_situations"
AbilityResource.find_or_create_by(name: 'housing_situation')
name = "Situação de Moradia"
AbilityAction.find_or_create_by(ability_resource_id: 45, action_code: :housing_situation_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 45, action_code: :housing_situation_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 45, action_code: :housing_situation_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 45, action_code: :housing_situation_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 45, action_code: :housing_situation_destroy).update(name: "Deletar #{name}")

puts "-- denunciation_agressors"
AbilityResource.find_or_create_by(name: 'denunciation_agressor')
name = "Agressor de denuncia"
AbilityAction.find_or_create_by(ability_resource_id: 46, action_code: :denunciation_agressor_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 46, action_code: :denunciation_agressor_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 46, action_code: :denunciation_agressor_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 46, action_code: :denunciation_agressor_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 46, action_code: :denunciation_agressor_destroy).update(name: "Deletar #{name}")

puts "-- denunciation_crime_types"
AbilityResource.find_or_create_by(name: 'denunciation_crime_type')
name = "Tipo de crime de denuncia"
AbilityAction.find_or_create_by(ability_resource_id: 47, action_code: :denunciation_crime_type_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 47, action_code: :denunciation_crime_type_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 47, action_code: :denunciation_crime_type_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 47, action_code: :denunciation_crime_type_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 47, action_code: :denunciation_crime_type_destroy).update(name: "Deletar #{name}")

puts "-- denunciation_victims"
AbilityResource.find_or_create_by(name: 'denunciation_victim')
name = "Vítima de denuncia"
AbilityAction.find_or_create_by(ability_resource_id: 48, action_code: :denunciation_victim_index).update(name: "Listar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 48, action_code: :denunciation_victim_show).update(name: "Visualizar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 48, action_code: :denunciation_victim_create).update(name: "Criar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 48, action_code: :denunciation_victim_update).update(name: "Editar #{name}")
AbilityAction.find_or_create_by(ability_resource_id: 48, action_code: :denunciation_victim_destroy).update(name: "Deletar #{name}")

puts "-- Profile Admin >>>"
# Perfil Admin
AbilityProfile.find_or_create_by(name: 'Admin')
id = AbilityProfile.find_by(name: "Admin").id
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :ability_profile_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :ability_profile_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :ability_profile_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :ability_profile_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :ability_profile_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :ability_permission_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :user_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :user_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :user_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :user_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :user_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :user_reset_password))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :crime_type_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :crime_type_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :crime_type_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :crime_type_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :crime_type_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :breed_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :breed_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :breed_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :breed_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :breed_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :state_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :state_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :state_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :state_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :state_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :city_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :city_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :city_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :city_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :city_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :city_by_state))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :community_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :community_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :community_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :community_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :community_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :contact_type_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :contact_type_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :contact_type_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :contact_type_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :contact_type_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :ethnicity_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :ethnicity_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :ethnicity_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :ethnicity_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :ethnicity_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :sectorial_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :sectorial_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :sectorial_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :sectorial_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :sectorial_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :neighborhood_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :neighborhood_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :neighborhood_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :neighborhood_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :neighborhood_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :neighborhood_by_city))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :facility_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :facility_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :facility_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :facility_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :facility_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :neighborhood_community_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :neighborhood_community_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :neighborhood_community_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :neighborhood_community_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :neighborhood_community_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :person_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :person_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :person_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :person_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :person_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :person_list_name))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :gender_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :gender_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :gender_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :gender_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :gender_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :gender_identity_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :gender_identity_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :gender_identity_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :gender_identity_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :gender_identity_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :sexual_orientation_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :sexual_orientation_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :sexual_orientation_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :sexual_orientation_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :sexual_orientation_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :skin_color_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :skin_color_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :skin_color_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :skin_color_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :skin_color_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :civil_status_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :civil_status_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :civil_status_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :civil_status_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :civil_status_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :scholarity_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :scholarity_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :scholarity_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :scholarity_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :scholarity_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :people_address_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :people_address_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :people_address_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :people_address_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :people_address_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :people_address_by_person))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :violence_motivation_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :violence_motivation_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :violence_motivation_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :violence_motivation_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :violence_motivation_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :violence_type_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :violence_type_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :violence_type_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :violence_type_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :violence_type_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :lawsuit_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :lawsuit_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :lawsuit_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :lawsuit_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :lawsuit_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :forwarding_protocol_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :forwarding_protocol_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :forwarding_protocol_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :forwarding_protocol_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :forwarding_protocol_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :accompaniment_type_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :accompaniment_type_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :accompaniment_type_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :accompaniment_type_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :accompaniment_type_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :incident_report_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :incident_report_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :incident_report_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :incident_report_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :incident_report_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :people_contact_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :people_contact_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :people_contact_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :people_contact_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :people_contact_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :people_contact_by_person))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :relationship_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :relationship_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :relationship_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :relationship_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :relationship_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :relationship_by_person))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :relationship_degree_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :relationship_degree_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :relationship_degree_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :relationship_degree_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :relationship_degree_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :accompaniment_type_facility_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :accompaniment_type_facility_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :accompaniment_type_facility_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :accompaniment_type_facility_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :accompaniment_type_facility_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :accompaniment_type_facility_by_type))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_type_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_type_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_type_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_type_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_type_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_requested_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_requested_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_requested_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_requested_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :protective_measure_requested_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :facility_type_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :facility_type_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :facility_type_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :facility_type_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :facility_type_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :source_system_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :source_system_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :source_system_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :source_system_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :source_system_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :risk_level_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :risk_level_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :risk_level_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :risk_level_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :risk_level_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :dashboard_forwarding_protocol_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :dashboard_women_inc_rep_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :dashboard_women_lawsuit_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :dashboard_women_prot_measure_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :dependency_type_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :dependency_type_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :dependency_type_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :dependency_type_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :dependency_type_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :handicap_type_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :handicap_type_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :handicap_type_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :handicap_type_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :handicap_type_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :handicap_person_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :handicap_person_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :handicap_person_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :handicap_person_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :handicap_person_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_aggressor_dependency_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_aggressor_dependency_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_aggressor_dependency_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_aggressor_dependency_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_aggressor_dependency_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :housing_situation_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :housing_situation_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :housing_situation_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :housing_situation_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :housing_situation_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_agressor_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_agressor_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_agressor_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_agressor_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_agressor_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_crime_type_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_crime_type_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_crime_type_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_crime_type_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_crime_type_destroy))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_victim_index))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_victim_show))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_victim_create))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_victim_update))
AbilityPermission.find_or_create_by(ability_profile_id: id, ability_action: AbilityAction.find_by(action_code: :denunciation_victim_destroy))
