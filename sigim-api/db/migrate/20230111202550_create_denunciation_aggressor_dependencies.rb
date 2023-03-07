class CreateDenunciationAggressorDependencies < ActiveRecord::Migration[7.0]
  def change
    create_table :denunciation_aggressor_dependencies do |t|
      t.references :denunciation, null: false, foreign_key: true
      t.references :dependency_type, null: false, foreign_key: true
      t.timestamps
    end
  end
end
