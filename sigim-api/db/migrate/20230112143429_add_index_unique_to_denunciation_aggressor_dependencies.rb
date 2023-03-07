class AddIndexUniqueToDenunciationAggressorDependencies < ActiveRecord::Migration[7.0]
  def change
    add_index :denunciation_aggressor_dependencies, [:denunciation_id, :dependency_type_id], unique: true, 
      name: :unique_denunc_aggressor_dependen
  end
end
