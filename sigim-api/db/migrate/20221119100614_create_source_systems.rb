class CreateSourceSystems < ActiveRecord::Migration[7.0]
  def change
    create_table :source_systems, if_not_exists: true do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
