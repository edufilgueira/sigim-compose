class CreateMenus < ActiveRecord::Migration[7.0]
  def change
    create_table :menus, if_not_exists: true do |t|
      t.string :name
      t.string :icon
      t.integer :order

      t.timestamps
      t.datetime :deleted_at, index: true
    end
  end
end
