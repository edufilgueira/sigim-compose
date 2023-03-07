class AddNisToPeople < ActiveRecord::Migration[7.0]
  def change
    add_column :people, :nis, :string, null: true
  end
end
