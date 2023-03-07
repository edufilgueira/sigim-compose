class AddForwardingDateToForwardingProtocols < ActiveRecord::Migration[7.0]
  def change
    add_column :forwarding_protocols, :forwarding_date, :date, null: true
  end
end
