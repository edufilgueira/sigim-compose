class AddAbilityProfileToUsers < ActiveRecord::Migration[7.0]
  def change
    add_reference :users, :ability_profile, null: true, foreign_key: true
  end
end
