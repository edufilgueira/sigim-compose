class CreateDenunciationCrimeTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :denunciation_crime_types do |t|
      t.references :denunciation, null: false, foreign_key: true
      t.references :crime_type, null: false, foreign_key: true
      t.timestamps
    end
  end
end
