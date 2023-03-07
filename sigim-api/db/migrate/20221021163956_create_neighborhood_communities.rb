class CreateNeighborhoodCommunities < ActiveRecord::Migration[7.0]
  def change
    create_table :neighborhood_communities, if_not_exists: true do |t|
      t.references :neighborhood, null: false, foreign_key: true
      t.references :community, null: false, foreign_key: true
      t.timestamps
    end
  end
end
