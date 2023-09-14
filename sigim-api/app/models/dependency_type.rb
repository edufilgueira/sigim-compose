class DependencyType < ApplicationRecord
	include ::Fonetical

	# Associations

	has_many :denunciation_aggressor_dependencies

	# Validation
    
	validates :name, presence: true
	
end
