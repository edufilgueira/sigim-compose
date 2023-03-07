class CrimeType < ApplicationRecord
  include ::Fonetical

  # Associations

	has_many :protective_measures
  has_many :lawsuits
  has_many :incident_reports

  # Validation
    
  validates :name, presence: true

  ## Helpers

  def label
    "#{name}"
  end

end
