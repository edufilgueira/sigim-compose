class CreateHousingSituations < ActiveRecord::Migration[7.0]
  def change
    create_table :housing_situations do |t|
      t.string :name, null: false
      t.string :fonetical

      t.timestamps
    end
  end
end
