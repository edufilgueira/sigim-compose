class CreateRiskLevels < ActiveRecord::Migration[7.0]
  def change
    create_table :risk_levels do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
