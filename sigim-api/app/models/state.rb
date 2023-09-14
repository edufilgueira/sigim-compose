class State < ApplicationRecord
  include ::Fonetical
  include ::Normalize
    
  # Associations
  
  has_many :cities

  # Validation

  validates :name, presence: true

end
