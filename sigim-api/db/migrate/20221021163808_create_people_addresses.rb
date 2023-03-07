class CreatePeopleAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :people_addresses, if_not_exists: true do |t|
      t.references :person, null: false, foreign_key: true
      t.references :neighborhood, null: false, foreign_key: true
      t.string :street_name
      t.string :street_number
      t.string :address_complement
      t.string :cep
      t.string :observation

      t.timestamps
    end
  end
end
