class CreateHandicapPeople < ActiveRecord::Migration[7.0]
  def change
    create_table :handicap_people do |t|
      t.references :person, null: false, foreign_key: true
      t.references :handicap_type, null: false, foreign_key: true
      t.timestamps
    end
  end
end
