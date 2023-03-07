class AddOpeningDateToLawsuits < ActiveRecord::Migration[7.0]
  def change
    add_column :lawsuits, :opening_date, :date, null: true
  end
end
