class CreateForwardingProtocols < ActiveRecord::Migration[7.0]
  def change
    create_table :forwarding_protocols, if_not_exists: true do |t|
      t.references :person, null: false, foreign_key: true
      t.references :facility, null: false, foreign_key: true
      t.references :accompaniment_type, null: false, foreign_key: true
      t.string :observation, null: true
      t.timestamps
    end
  end
end