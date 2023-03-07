class DependencyType < ApplicationRecord

	# Associations

	has_many :denunciation_aggressor_dependencies

	# Validation
    
	validates :name, presence: true
	
end
