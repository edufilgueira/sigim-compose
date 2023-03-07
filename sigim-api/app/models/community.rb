class Community < ApplicationRecord

	# Associations

	belongs_to :city

	has_many :facilities
	has_many :people_addresses
	has_many :neighborhood_communities

	# Validation
    
	validates :name, presence: true

end
