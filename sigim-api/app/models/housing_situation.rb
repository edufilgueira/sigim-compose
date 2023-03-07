class HousingSituation < ApplicationRecord

    # Associations
  
    has_many :people
  
    # Validation
      
    validates :name, presence: true
  
end