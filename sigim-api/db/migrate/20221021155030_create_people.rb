class CreatePeople < ActiveRecord::Migration[7.0]
  def change
    create_table :people, if_not_exists: true do |t|
      t.string :cpf, :unique =>  true, null: true
      t.string :rg, :unique =>  true, null: true
      t.string :voter_registration, :unique =>  true, null: true
      t.string :work_card, :unique =>  true, null: true
      t.string :name, null: false
      t.string :fonetical
      t.string :social_name, null: true
      t.string :nickname, null: true
      t.date :birth_date, null: true
      t.bigint :place_of_birth_id, null: true
      t.references :gender, null: true, foreign_key: true
      t.references :gender_identity, null: true, foreign_key: true
      t.references :sexual_orientation, null: true, foreign_key: true
      t.references :breed, null: true, foreign_key: true
      t.references :skin_color, null: true, foreign_key: true
      t.references :ethnicity, null: true, foreign_key: true
	    t.references :civil_status, null: true, foreign_key: true
      t.references :scholarity, null: true, foreign_key: true
      t.float :average_income, null: true
      t.boolean :chemical_dependent, null: true
      t.boolean :psychological_disorder, null: true
      t.boolean :pwd, null: true
      t.timestamps
    end
    add_foreign_key :people, :cities, column: :place_of_birth_id
  end
end
