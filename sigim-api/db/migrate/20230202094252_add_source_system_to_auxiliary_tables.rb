class AddSourceSystemToAuxiliaryTables < ActiveRecord::Migration[7.0]
  def change
    add_reference :breeds, :source_system, foreign_key: true, null: true
    add_reference :cities, :source_system, foreign_key: true, null: true
    add_reference :civil_statuses, :source_system, foreign_key: true, null: true
    add_reference :contact_types, :source_system, foreign_key: true, null: true
    add_reference :crime_types, :source_system, foreign_key: true, null: true
    add_reference :dependency_types, :source_system, foreign_key: true, null: true
    add_reference :ethnicities, :source_system, foreign_key: true, null: true
    add_reference :facility_types, :source_system, foreign_key: true, null: true
    add_reference :gender_identities, :source_system, foreign_key: true, null: true
    add_reference :genders, :source_system, foreign_key: true, null: true
    add_reference :handicap_types, :source_system, foreign_key: true, null: true
    add_reference :housing_situations, :source_system, foreign_key: true, null: true
    add_reference :neighborhoods, :source_system, foreign_key: true, null: true
    add_reference :scholarities, :source_system, foreign_key: true, null: true
    add_reference :sectorials, :source_system, foreign_key: true, null: true
    add_reference :sexual_orientations, :source_system, foreign_key: true, null: true
    add_reference :skin_colors, :source_system, foreign_key: true, null: true
    add_reference :states, :source_system, foreign_key: true, null: true
    add_reference :violence_types, :source_system, foreign_key: true, null: true
  end
end
