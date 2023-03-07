class CreateIncidentReports < ActiveRecord::Migration[7.0]
  def change
    create_table :incident_reports, if_not_exists: true do |t|
      t.bigint :victim_id, null: false
      t.bigint :aggressor_id, null: false
      t.references :crime_type, null: false, foreign_key: true
      t.references :violence_type, null: false, foreign_key: true
      t.references :violence_motivation, null: false, foreign_key: true
      t.string :number, null: false
      t.string :description, null: true
      t.string :observation, null: true
      t.date :communication_date, null: true
      t.time :communication_time, null: true
      t.date :occurrence_date, null: true
      t.time :occurrence_time, null: true
      #t.references :neighborhood, null: false, foreign_key: true
      t.bigint :occurrence_neighborhood_id, null: false
      t.string :occurrence_street_name, null: true
      t.string :occurrence_street_number, null: true
      t.string :occurrence_address_complement, null: true
      t.string :occurrence_cep, null: true
      t.boolean :serviced_by_gavv, null: true
      t.boolean :have_access_firearm, null: true
      t.boolean :requests_protective_measure, null: true
      t.timestamps
    end
    add_foreign_key :incident_reports, :people, column: :victim_id
    add_foreign_key :incident_reports, :people, column: :aggressor_id
    add_foreign_key :incident_reports, :neighborhoods, column: :occurrence_neighborhood_id
  end
end
