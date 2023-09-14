class AddColumnToDenunciationAgressors < ActiveRecord::Migration[7.0]
  def change
    add_column :denunciation_agressors, :number, :string
    add_column :denunciation_agressors, :cep, :string
    add_column :denunciation_agressors, :address_complement, :string
    add_column :denunciation_agressors, :neighborhood, :string
  end
end
