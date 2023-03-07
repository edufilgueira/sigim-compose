class PeopleContact < ApplicationRecord

	# Associations

  belongs_to :person
  belongs_to :contact_type

  # Validation
    
	validates :contact, presence: true

end
