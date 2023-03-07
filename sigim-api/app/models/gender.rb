class Gender < ApplicationRecord
  include ::Fonetical

  # Associations

	has_many :people

  # Validation
    
  validates :name, presence: true

end
