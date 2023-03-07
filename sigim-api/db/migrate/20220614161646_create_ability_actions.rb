class CreateAbilityActions < ActiveRecord::Migration[7.0]
  def change
    create_table :ability_actions, if_not_exists: true do |t|
      t.references :ability_resource, null: false, foreign_key: true
      t.references :menu, null: true, foreign_key: true
      t.string :name, null: false
      t.integer :action_code
      t.boolean :active_menu, default: false, null: false
      t.string :router
      t.string :icon
      t.integer :order

      t.timestamps
      t.datetime :deleted_at, index: true
    end
  end
end
