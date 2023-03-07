class City < ApplicationRecord
	include ::Fonetical
  include ::Normalize
	
	# Associations

	belongs_to :state

	has_many :communities
	has_many :sectorials
	has_many :people

	# Validation

	validates :name, presence: true

	# Scopes

	def self.city_by_state(state_id)
		where(state_id: state_id)
	end
	
end
