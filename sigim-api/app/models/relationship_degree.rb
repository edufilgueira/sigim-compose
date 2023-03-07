class RelationshipDegree < ApplicationRecord

	# Associations
	
	has_many :relationships

	# Validation
    
	validates :name, presence: true

end
