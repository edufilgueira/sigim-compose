class CreateSexualOrientations < ActiveRecord::Migration[7.0]
  def change
    create_table :sexual_orientations, if_not_exists: true do |t|
      t.string :name, null: false
      t.string :fonetical
      t.timestamps
    end
  end
end
