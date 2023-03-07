class AddChildrenHouseOriginToPeople < ActiveRecord::Migration[7.0]
  def change
    add_column :people, :number_children, :integer, null: true
    add_reference :people, :housing_situation, foreign_key: { to_table: :housing_situations }, null: true
    add_column :people, :origin_id, :bigint, null: true
  end
end
