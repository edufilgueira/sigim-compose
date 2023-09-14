class CreateDenunciationVictims < ActiveRecord::Migration[7.0]
  def change
    create_table :denunciation_victims do |t|
      t.references :denunciation, null: false, foreign_key: true
      t.references :person, null: false, foreign_key: true
      t.timestamps
    end
  end
end
