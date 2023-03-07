class State < ApplicationRecord
  include ::Fonetical
    
  # Associations
  
  has_many :cities

  # Validation

  validates :name, presence: true

end
