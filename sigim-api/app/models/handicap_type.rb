class HandicapType < ApplicationRecord
	include ::Fonetical

	# Associations

	has_many :handicap_people

	# Validation
		
	validates :name, presence: true
  
end