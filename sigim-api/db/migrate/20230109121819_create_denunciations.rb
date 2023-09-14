class CreateDenunciations < ActiveRecord::Migration[7.0]
  def change
    create_table :denunciations do |t|
      t.references :source_system, null: false, foreign_key: true
      t.bigint :origin_id, null: true
      t.references :crime_type, null: false, foreign_key: true
      t.references :violence_type, null: true, foreign_key: true
      t.references :violence_motivation, true: true, foreign_key: true
      t.bigint :victim_id, null: false
      t.bigint :aggressor_id, null: true
      t.string :number, null: false
      t.string :description, null: true
      t.string :observation, null: true
      t.date :opening_date, null: true
      t.date :closing_date, null: true
      t.boolean :justified, null: true
      t.boolean :aggressor_have_access_firearm, null: true
      t.string :occurrence_place, null: true
      t.references :neighborhood, null: true, foreign_key: true
      t.bigint :occurrence_neighborhood_id, null: true
      t.string :occurrence_street_name, null: true
      t.string :occurrence_street_number, null: true
      t.string :occurrence_address_complement, null: true
      t.string :occurrence_cep, null: true
      t.boolean :serviced_by_gavv, null: true
      t.boolean :intends_criminally_represent, null: true
      t.timestamps
    end
    add_foreign_key :denunciations, :people, column: :victim_id
    add_foreign_key :denunciations, :people, column: :aggressor_id
  end
end
