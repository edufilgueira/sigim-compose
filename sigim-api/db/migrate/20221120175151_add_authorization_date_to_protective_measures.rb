class AddAuthorizationDateToProtectiveMeasures < ActiveRecord::Migration[7.0]
  def change
    add_column :protective_measures, :authorization_date, :date, null: true
  end
end
