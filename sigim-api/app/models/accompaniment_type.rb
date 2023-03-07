class AccompanimentType < ApplicationRecord

	# Associations

	has_many :accompaniment_type_facilities

	# Validation
    
	validates :name, presence: true

end
