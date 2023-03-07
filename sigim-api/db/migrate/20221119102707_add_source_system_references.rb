class AddSourceSystemReferences < ActiveRecord::Migration[7.0]
  def change
    add_reference :people, :source_system, foreign_key: { to_table: :source_systems }, null: true
    add_reference :forwarding_protocols, :source_system, foreign_key: { to_table: :source_systems }, null: true
    add_reference :lawsuits, :source_system, foreign_key: { to_table: :source_systems }, null: true
    add_reference :incident_reports, :source_system, foreign_key: { to_table: :source_systems }, null: true
    add_reference :protective_measures, :source_system, foreign_key: { to_table: :source_systems }, null: true
  end
end
