class CreateNeighborhoods < ActiveRecord::Migration[7.0]
  def change
    create_table :neighborhoods, if_not_exists: true do |t|
      t.references :city, null: false, foreign_key: true
      t.string :name, null: false
      t.string :fonetical
      
      t.timestamps
    end
  end
end
