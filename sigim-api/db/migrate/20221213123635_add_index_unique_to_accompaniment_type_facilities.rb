class AddIndexUniqueToAccompanimentTypeFacilities < ActiveRecord::Migration[7.0]
  def change
    add_index :accompaniment_type_facilities, [:facility_id, :accompaniment_type_id], unique: true, 
      name: :unique_accomp_type_by_facility_id
  end
end
