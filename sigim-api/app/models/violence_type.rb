class ViolenceType < ApplicationRecord

	# Associations

	has_many :protective_measures
	has_many :lawsuits
	has_many :incident_reports

	# Validation
    
	validates :name, presence: true
	
end
