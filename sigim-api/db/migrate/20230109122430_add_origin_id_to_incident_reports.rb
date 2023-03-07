class AddOriginIdToIncidentReports < ActiveRecord::Migration[7.0]
  def change
    add_column :incident_reports, :origin_id, :bigint, null: true
  end
end
