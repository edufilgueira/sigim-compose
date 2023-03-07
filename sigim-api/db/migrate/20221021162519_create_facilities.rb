class CreateFacilities < ActiveRecord::Migration[7.0]
  def change
    create_table :facilities, if_not_exists: true do |t|
      t.references :facility_type, null: true, foreign_key: true
      t.references :community, null: true, foreign_key: true
      t.references :sectorial, null: false, foreign_key: true
      t.references :neighborhood, null: false, foreign_key: true
      t.string :name, null: false
      t.string :fonetical
      t.string :street_name, null: true
      t.string :street_number, null: true
      t.string :address_complement, null: true
      t.string :cep, null: true
      t.string :telephone_01, null: true
      t.string :telephone_02, null: true
      t.string :whatsapp, null: true
      t.string :email, null: true
      t.string :business_hours, null: true
      t.timestamps
    end
  end
end
