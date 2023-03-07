class Neighborhood < ApplicationRecord
	include ::Fonetical
  include ::Normalize

	# Associations

	belongs_to :city

	has_many :sectorials
	has_many :facilities
	has_many :people_addresses
	has_many :neighborhood_communities

	# Validation
		
	validates :name, presence: true

	# Scopes
	
	def self.neighborhood_by_city(city_id)
		where(city_id: city_id)
	end

end
