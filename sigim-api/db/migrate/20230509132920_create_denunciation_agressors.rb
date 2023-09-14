class CreateDenunciationAgressors < ActiveRecord::Migration[7.0]
  def change
    create_table :denunciation_agressors do |t|
      t.references :denunciation, null: false, foreign_key: true
      t.string :name
      t.string :fonetical
      t.string :nickname
      t.string :rg
      t.date   :date_of_birth
      t.string :mothers_name
      t.string :naturalness
      t.string :address
      t.string :district
      t.string :city
      t.string :gender
      t.string :sexual_orientation
      t.string :gender_identity

      t.timestamps
    end
  end
end
