class CreateAbilityProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :ability_profiles, if_not_exists: true do |t|
      t.string :name, null: false

      t.timestamps
      t.datetime :deleted_at, index: true
    end
  end
end
