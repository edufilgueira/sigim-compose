class CreateProtectiveMeasureRequesteds < ActiveRecord::Migration[7.0]
  def change
    create_table :protective_measure_requesteds do |t|
      t.references :protective_measure, null: false, foreign_key: true, index: { name: :prot_m_req_prot_measure_id }
      t.references :protective_measure_type, null: false, foreign_key: true, index: { name: :prot_m_req_prot_measure_type_id }
      t.boolean :requested, null: false

      t.timestamps
    end
  end
end