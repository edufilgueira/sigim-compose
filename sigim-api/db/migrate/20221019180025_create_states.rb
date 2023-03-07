class CreateStates < ActiveRecord::Migration[7.0]
  def change
    create_table :states, if_not_exists: true do |t|
      t.string :name, null: false
      t.string :fonetical
      t.string :contry
      t.string :initials
      t.timestamps
    end
  end
end
