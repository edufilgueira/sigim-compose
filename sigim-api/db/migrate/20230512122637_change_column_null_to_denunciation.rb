class ChangeColumnNullToDenunciation < ActiveRecord::Migration[7.0]
  def change
    change_column_null :denunciations, :crime_type_id, true
    change_column_null :denunciations, :victim_id, true
  end
end
