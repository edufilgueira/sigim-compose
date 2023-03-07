class CreateLawsuits < ActiveRecord::Migration[7.0]
  def change
    create_table :lawsuits, if_not_exists: true do |t|
      t.references :crime_type, null: false, foreign_key: true
      t.references :violence_type, null: false, foreign_key: true
      t.references :violence_motivation, null: false, foreign_key: true
      t.bigint :victim_id, null: false
      t.bigint :aggressor_id, null: false
      t.string :number, null: false
      t.string :observation, null: true
      t.timestamps
    end
    add_foreign_key :lawsuits, :people, column: :victim_id
    add_foreign_key :lawsuits, :people, column: :aggressor_id
  end
end
