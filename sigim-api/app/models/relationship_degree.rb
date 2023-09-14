class RelationshipDegree < ApplicationRecord
	include ::Fonetical

	# Associations
	
	has_many :relationships

	# Validation
    
	validates :name, presence: true

end
