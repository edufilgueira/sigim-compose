class AddIndexUniqueToProtectiveMeasureRequesteds < ActiveRecord::Migration[7.0]
  def change
    add_index :protective_measure_requesteds, [:protective_measure_id, :protective_measure_type_id], unique: true, 
      name: :unique_prot_m_type_by_prot_measure_id
  end
end
