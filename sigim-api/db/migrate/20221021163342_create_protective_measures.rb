class CreateProtectiveMeasures < ActiveRecord::Migration[7.0]
  def change
    create_table :protective_measures, if_not_exists: true do |t|
      t.references :incident_report, null: false, foreign_key: true
      t.string :number, null: false
      t.string :description, null: true
      t.string :observation, null: true
      t.string :petitioner, null: true
      t.string :police_authority, null: true
      t.timestamps
    end
  end
end
