class SourceSystem < ApplicationRecord

    # Associations

	has_many :peoples
    has_many :forwarding_protocols
    has_many :lawsuits
    has_many :incident_reports
    has_many :protective_measures

	# Validation
    
	validates :name, presence: true
end
