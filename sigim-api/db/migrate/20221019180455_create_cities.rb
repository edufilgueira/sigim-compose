class CreateCities < ActiveRecord::Migration[7.0]
  def change
    create_table :cities, if_not_exists: true do |t|
      t.references :state, null: false, foreign_key: true
      t.integer :city_cod_ibge
      t.string :name, null: false
      t.string :fonetical

      t.timestamps
    end
  end
end
