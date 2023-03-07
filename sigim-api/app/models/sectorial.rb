class Sectorial < ApplicationRecord

	# Associations

	has_many :facilities

	# Validation
    
	validates :name, presence: true

end
