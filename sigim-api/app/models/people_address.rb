class PeopleAddress < ApplicationRecord
	
	# Associations

	belongs_to :person
	belongs_to :neighborhood

	# Validation
    
	validates :street_name, presence: true

end
