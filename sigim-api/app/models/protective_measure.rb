class ProtectiveMeasure < ApplicationRecord

	# Associations
	
	belongs_to :incident_report
	belongs_to :source_system

	has_many :protective_measure_requesteds

	# Validation
    
	validates :number, presence: true

end
