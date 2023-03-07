class CreateAccompanimentTypeFacilities < ActiveRecord::Migration[7.0]
  def change
    create_table :accompaniment_type_facilities do |t|
      t.references :facility, null: false, foreign_key: true
      t.references :accompaniment_type, null: false, foreign_key: true
      t.timestamps
    end
  end
end
