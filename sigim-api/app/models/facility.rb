class Facility < ApplicationRecord

	# Associations

	belongs_to :community, optional: true
	belongs_to :sectorial
	belongs_to :neighborhood
	belongs_to :facility_type

	has_many :accompaniment_type_facilities

	# Validation
    
	validates :name, presence: true

end
