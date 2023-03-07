class AddOriginIdToProtectiveMeasures < ActiveRecord::Migration[7.0]
  def change
    add_column :protective_measures, :origin_id, :bigint, null: true
  end
end
