class CreateScholarities < ActiveRecord::Migration[7.0]
  def change
    create_table :scholarities, if_not_exists: true do |t|
      t.string :name, null: false
      t.string :fonetical
      t.timestamps
    end
  end
end
