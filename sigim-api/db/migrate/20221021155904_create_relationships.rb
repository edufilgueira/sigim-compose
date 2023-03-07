class CreateRelationships < ActiveRecord::Migration[7.0]
  def change
    create_table :relationships, if_not_exists: true do |t|
      t.references :person, null: false, foreign_key: true
      t.references :relationship_degree, null: false, foreign_key: true
      t.bigint :relationship_id, null: false
      t.boolean :responsible, null: false
      t.string :observation, null: false
      t.timestamps
    end
    add_foreign_key :relationships, :people, column: :relationship_id
  end
end
