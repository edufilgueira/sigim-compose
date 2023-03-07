class CreatePeopleContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :people_contacts, if_not_exists: true do |t|
      t.references :person, null: false, foreign_key: true
      t.references :contact_type, null: false, foreign_key: true
      t.string :contact, null: false
      t.string :observation, null: true
      t.timestamps
    end
  end
end
