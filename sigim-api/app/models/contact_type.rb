class ContactType < ApplicationRecord

	# Associations

	has_many :people_contacts

	# Validation
    
	validates :name, presence: true
	
end
