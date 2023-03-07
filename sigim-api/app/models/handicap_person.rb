class HandicapPerson < ApplicationRecord

  # Associations

  belongs_to :person
  belongs_to :handicap_type

  # Validation
    
  validates :person, presence: true
  validates :handicap_type, presence: true

end