class AlterFkAccompanimentTypeFacilities < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :accompaniment_type_facilities, :facilities
    add_foreign_key :accompaniment_type_facilities, :facilities, on_delete: :cascade
  end
end
