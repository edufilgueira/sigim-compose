class AddReferenceRiskLevelToPeople < ActiveRecord::Migration[7.0]
  def change
    add_reference :people, :risk_level, foreign_key: { to_table: :risk_levels }, null: true
  end
end
