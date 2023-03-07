class CreateProtectiveMeasureTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :protective_measure_types do |t|
      t.string :name, null: false
      t.string :fonetical

      t.timestamps
    end
  end
end