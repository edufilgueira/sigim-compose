class AddIndexUniqueNisToPeople < ActiveRecord::Migration[7.0]
  def change
    add_index :people, :nis, unique: true, name: :unique_people_nis
  end
end
