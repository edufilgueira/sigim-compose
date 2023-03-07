class HandicapType < ApplicationRecord

    # Associations
  
    has_many :handicap_people
  
    # Validation
      
    validates :name, presence: true
  
end