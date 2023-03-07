class CreateAbilityPermissions < ActiveRecord::Migration[7.0]
  def change
    create_table :ability_permissions, if_not_exists: true do |t|
      t.references :ability_profile, null: false, foreign_key: true
      t.references :ability_action, null: false, foreign_key: true

      t.timestamps
      t.datetime :deleted_at, index: true
    end
  end
end
